import * as fs from "fs"
import { fromString as htmlContentToString } from "html-to-text"
import { convert as convertJSONtoTS } from "json2ts"
import * as HeadlessChrome from "simple-headless-chrome"

declare const document: any

const browser = new HeadlessChrome({
  headless: true,
})

async function navigateWebsite() {
  try {
    await browser.init()
    const mainTab = await browser.newTab({ privateTab: false })
    await mainTab.goTo("https://developer.github.com/v3/activity/events/types/")

    // Get all content
    const contentRequest = await mainTab.evaluate(() => document.querySelector(".main").innerHTML)
    const content = contentRequest.result.value as string

    // Get the number of events
    const eventTypesRequest = await mainTab.evaluate((selector: string) => {
      return Array.prototype.slice.call(document.querySelectorAll(selector)).map((m: any) => ({
        name: m.innerHTML.replace("Event", ""),
        id: m.getAttribute("href"),
      }))
    }, "#markdown-toc li a")

    const events = eventTypesRequest.result.value as Array<{ id: string; name: string }>

    const examples = content.split("</ul>")[1]

    for (let index = 0; index < events.length; index++) {
      const element = events[index]

      // Split at the top
      let thisArea = examples.split('<a id="' + element.id.substr(1))[1].split("</h2>")[1]

      // Crop it at the bottom
      if (index + 1 < events.length) {
        const next = events[index + 1]
        thisArea = thisArea.split('<a id="' + next.id.substr(1))[0]
      } else {
        thisArea = thisArea.split("</div")[0]
      }

      // Split into just the pre section, then parse is as XML
      const pre = thisArea.split("Webhook payload example</h3>")[1]
      if (pre) {
        const code = "<pre" + pre.split("<pre")[1]
        const htmlJSON = htmlContentToString(code)

        if (htmlJSON) {
          const interfaceContent = convertJSONtoTS(htmlJSON) as string

          const objects = interfaceContent.match(/export interface (.*) /g)
          let prefixedInterfaces = interfaceContent

          // Convert all objects like "Comment" into EventComment
          if (objects) {
            objects.forEach(match => {
              const object = match.toString().split("export interface ")[1].trim()
              prefixedInterfaces = prefixedInterfaces
                // Avoid making "CommentComment" kind of names
                .replace(new RegExp(object + " ", "g"), element.name + object + " ")
                .replace(new RegExp(object + ";", "g"), element.name + object + ";")
            })
          }

          // Apply some more transforms
          prefixedInterfaces = prefixedInterfaces
            // export interface Thing ->  export interface EventThing
            .replace(/RootObject/g, "")
            // tabs to spaces
            .replace(/\t/g, "  ")

          // Write to file
          fs.writeFileSync("source/" + element.name + ".d.ts", prefixedInterfaces + "\n", {
            encoding: "utf8",
          })
        }
      }
    }

    createIndex(events)
    runFixes()
    await browser.close()
  } catch (error) {
    await browser.close()
    console.error(error) // tslint:disable-line
  }
}

const createIndex = (events: any[]) => {
  let indexContent = "// This is an auto-generated file from github-webhook-event-types\n\n"
  const exists = [] as string[]
  events.forEach(event => {
    if (fs.existsSync(`source/${event.name}.d.ts`)) {
      indexContent += `export { ${event.name} } from "./${event.name}"\n`
      exists.push(event.name)
    } else {
      indexContent += `// export { ${event.name} } from "./${event.name}"\n`
    }
  })
  fs.writeFileSync("source/index.d.ts", indexContent, { encoding: "utf8" })
}

const replaceTextInFile = (file: string, before: string, after: string) => {
  const content = fs.readFileSync(file, "utf8")
  fs.writeFileSync(file, content.replace(before, after), { encoding: "utf8" })
}

const runFixes = () => {
  replaceTextInFile("source/Gollum.d.ts", "pages: Page[]", "pages: GollumPage[]")
  replaceTextInFile("source/InstallationRepositories.d.ts",
    "repositories_removed: Repositories_removed",
    "repositories_removed: InstallationRepositoriesRepositories_removed")
  replaceTextInFile("source/IssueComment.d.ts", "labels: Label[]", "labels: IssueCommentLabel[]")
  replaceTextInFile("source/Issues.d.ts", "labels: Label[]", "labels: IssuesLabel[]")
  replaceTextInFile("source/PullRequestReview.d.ts", "description?: any", "description: string")
  replaceTextInFile("source/Push.d.ts", "commits: Commit", "commits: PushCommit")
  replaceTextInFile("source/Status.d.ts", "branches: Branche", "branches: StatusBranche")
}

navigateWebsite()
