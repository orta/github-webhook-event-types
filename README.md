This is now fully deprecated by [`@octokit/webhooks`](https://github.com/octokit/webhooks) which has more
folks keeping it up to date, and the same webhook types. Use that instead.

# github-webhook-event-types

Converts the GitHub events on this page: https://developer.github.com/v3/activity/events/types/

Into TypeScript type interfaces, so you can use them anywhere.

## Why would I use this?

If you're writing Dangerfiles for Peril, you'll want some safety in the types for event JSON metadata
coming from GitHub. This gives you that.

## How do I use this?

```sh
yarn add github-webhook-event-types 
```

Then in your app:

```ts
import {danger} from "danger"
import {Issues} from "github-webhook-event-types"

const issue = danger.github as any as Issues
const issueBody = issue.bdy
//                       ^---- tsc compiler err 
```

### `as any as Issues`?

Yeah, weird code right? Well in the case above we're taking a known type and saying "be something else". First you tell
the compiler "you can be `any`thing", then you tell it "you are an `Issue`". 

Otherwise you will probably be able to say `as Issue` from your typical JSON request.

## How do I work on this?

You need [Google Chrome Canary](https://github.com/LucianoGanga/simple-headless-chrome#1-install-google-chrome-headless) installed first.

```sh
git clone https://github.com/orta/github-webhook-event-types.git
cd github-webhook-event-types
yarn install

# Open VS Code with `code .`

# Run the script to generate them
yarn ts-node scripts/generate_types.ts

# Run this to validate your changes
yarn tsc
```

## What is this?

It uses a headless google chrome to download the events page and pull out each example JSON and 
their name. It's a bit messy, but it's a messy job. It's really just one script, so you can 
[read that instead](scripts/generate_types.ts). It's about 100 LOC.
