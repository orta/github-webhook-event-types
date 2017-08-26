"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var html_to_text_1 = require("html-to-text");
var json2ts_1 = require("json2ts");
var HeadlessChrome = require("simple-headless-chrome");
var browser = new HeadlessChrome({
    headless: true,
});
function navigateWebsite() {
    return __awaiter(this, void 0, void 0, function () {
        var mainTab, contentRequest, content, eventTypesRequest, events, examples, _loop_1, index, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 9]);
                    return [4 /*yield*/, browser.init()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, browser.newTab({ privateTab: false })];
                case 2:
                    mainTab = _a.sent();
                    return [4 /*yield*/, mainTab.goTo("https://developer.github.com/v3/activity/events/types/")
                        // Get all content
                    ];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, mainTab.evaluate(function () { return document.querySelector(".main").innerHTML; })];
                case 4:
                    contentRequest = _a.sent();
                    content = contentRequest.result.value;
                    return [4 /*yield*/, mainTab.evaluate(function (selector) {
                            return Array.prototype.slice.call(document.querySelectorAll(selector)).map(function (m) { return ({
                                name: m.innerHTML.replace("Event", ""),
                                id: m.getAttribute("href"),
                            }); });
                        }, "#markdown-toc li a")];
                case 5:
                    eventTypesRequest = _a.sent();
                    events = eventTypesRequest.result.value;
                    examples = content.split("</ul>")[1];
                    _loop_1 = function (index) {
                        var element = events[index];
                        // Split at the top
                        var thisArea = examples.split('<a id="' + element.id.substr(1))[1].split("</h2>")[1];
                        // Crop it at the bottom
                        if (index + 1 < events.length) {
                            var next = events[index + 1];
                            thisArea = thisArea.split('<a id="' + next.id.substr(1))[0];
                        }
                        else {
                            thisArea = thisArea.split("</div")[0];
                        }
                        // Split into just the pre section, then parse is as XML
                        var pre = thisArea.split("Webhook payload example</h3>")[1];
                        if (pre) {
                            var code = "<pre" + pre.split("<pre")[1];
                            var htmlJSON = html_to_text_1.fromString(code);
                            if (htmlJSON) {
                                var interfaceContent = json2ts_1.convert(htmlJSON);
                                var objects = interfaceContent.match(/export interface (.*) /g);
                                var prefixedInterfaces_1 = interfaceContent;
                                // Convert all objects like "Comment" into EventComment
                                if (objects) {
                                    objects.forEach(function (match) {
                                        var object = match.toString().split("export interface ")[1].trim();
                                        prefixedInterfaces_1 = prefixedInterfaces_1
                                            .replace(new RegExp(object + " ", "g"), element.name + object + " ")
                                            .replace(new RegExp(object + ";", "g"), element.name + object + ";");
                                    });
                                }
                                // Apply some more transforms
                                prefixedInterfaces_1 = prefixedInterfaces_1
                                    .replace(/RootObject/g, "")
                                    .replace(/\t/g, "  ");
                                // Write to file
                                fs.writeFileSync("source/" + element.name + ".d.ts", prefixedInterfaces_1 + "\n", {
                                    encoding: "utf8",
                                });
                            }
                        }
                    };
                    for (index = 0; index < events.length; index++) {
                        _loop_1(index);
                    }
                    createIndex(events);
                    return [4 /*yield*/, browser.close()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7:
                    error_1 = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 8:
                    _a.sent();
                    console.error(error_1); // tslint:disable-line
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
var createIndex = function (events) {
    var indexContent = "// This is an auto-generated file from github-webhook-event-types\n\n";
    var exists = [];
    events.forEach(function (event) {
        if (fs.existsSync("source/" + event.name + ".d.ts")) {
            indexContent += "import {" + event.name + "} from \"./" + event.name + "\"\n";
            exists.push(event.name);
        }
        else {
            indexContent += "// import {" + event.name + "} from \"./" + event.name + "\"\n";
        }
    });
    indexContent += "\nexport {\n  " + exists.join(",\n  ") + " }\n";
    fs.writeFileSync("source/index.d.ts", indexContent, { encoding: "utf8" });
};
navigateWebsite();
