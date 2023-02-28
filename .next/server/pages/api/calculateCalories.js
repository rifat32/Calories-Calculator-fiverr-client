"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/calculateCalories";
exports.ids = ["pages/api/calculateCalories"];
exports.modules = {

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/calculateCalories.js":
/*!****************************************!*\
  !*** ./pages/api/calculateCalories.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    var { age , sex , activityLevel , weight , goalWeight , height , timeToReachGoal  } = req.body;\n    console.log(age);\n    try {\n        const prompt = `User: I'm a ${age} year old ${sex}, my activity level is ${activityLevel} (considering 1 being not active at all, 5 being very active), I weigh ${weight} & I'm ${height} tall. I would like to get to a weight of ${goalWeight} in ${timeToReachGoal} days. Please give me summaraized but effective response ?\\nBot : `;\n        let { data  } = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            url: \"https://api.openai.com/v1/completions\",\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer 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\"\n            },\n            data: {\n                model: \"text-davinci-002\",\n                prompt: prompt,\n                max_tokens: 750,\n                temperature: 0.7\n            }\n        });\n        let response = data.choices[0].text.trim();\n        const filename = \"conversations.json\";\n        const timestamp = new Date().toISOString();\n        const conversation = {\n            timestamp: timestamp,\n            prompt: prompt,\n            response: response\n        };\n        let conversations = [];\n        if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filename)) {\n            const conversationsJson = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filename);\n            conversations = JSON.parse(conversationsJson);\n        }\n        // Add the new conversation to the array\n        conversations.push(conversation);\n        // Save the updated conversations array to the JSON file\n        const conversationsJson = JSON.stringify(conversations);\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filename, conversationsJson);\n        // Save the prompt and response to a text file\n        // const filename = \"conversation.txt\";\n        // const content = `${prompt}\\n${response}\\n\\n`;\n        // fs.appendFileSync(filename, content);\n        res.status(200).json({\n            response\n        });\n    } catch (e) {\n        console.log(e.response);\n        res.status(400).send(e);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsY3VsYXRlQ2Fsb3JpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ047QUFDUTtBQUNiLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUksRUFBRUMsSUFBRyxFQUFFQyxJQUFHLEVBQUVDLGNBQWEsRUFBRUMsT0FBTSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHUixJQUFJUyxJQUFJO0lBQ3ZGQyxRQUFRQyxHQUFHLENBQUNUO0lBRVosSUFBSTtRQUNGLE1BQU1VLFNBQVMsQ0FBQyxZQUFZLEVBQUVWLElBQUksVUFBVSxFQUFFQyxJQUFJLHVCQUF1QixFQUFFQyxjQUFjLHVFQUF1RSxFQUFFQyxPQUFPLE9BQU8sRUFBRUUsT0FBTywwQ0FBMEMsRUFBRUQsV0FBVyxJQUFJLEVBQUVFLGdCQUFnQixrRUFBa0UsQ0FBQztRQUV6VSxJQUFJLEVBQUVLLEtBQUksRUFBRSxHQUFHLE1BQU1qQixpREFBS0EsQ0FBQztZQUN6QmtCLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJDLGVBQWU7WUFDakI7WUFDQUosTUFBTTtnQkFDSkssT0FBTztnQkFDUE4sUUFBUUE7Z0JBQ1JPLFlBQVk7Z0JBQ1pDLGFBQWE7WUFDZjtRQUNGO1FBRUEsSUFBSUMsV0FBV1IsS0FBS1MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJO1FBR3hDLE1BQU1DLFdBQVc7UUFDakIsTUFBTUMsWUFBWSxJQUFJQyxPQUFPQyxXQUFXO1FBQ3hDLE1BQU1DLGVBQWU7WUFDbkJILFdBQVVBO1lBQ1ZkLFFBQVFBO1lBQ1JTLFVBQVVBO1FBQ1o7UUFDQSxJQUFJUyxnQkFBZ0IsRUFBRTtRQUN0QixJQUFJakMsb0RBQWEsQ0FBQzRCLFdBQVc7WUFDM0IsTUFBTU8sb0JBQW9CbkMsc0RBQWUsQ0FBQzRCO1lBQzFDSyxnQkFBZ0JJLEtBQUtDLEtBQUssQ0FBQ0g7UUFDN0IsQ0FBQztRQUVELHdDQUF3QztRQUN4Q0YsY0FBY00sSUFBSSxDQUFDUDtRQUVuQix3REFBd0Q7UUFDeEQsTUFBTUcsb0JBQW9CRSxLQUFLRyxTQUFTLENBQUNQO1FBQ3pDakMsdURBQWdCLENBQUM0QixVQUFVTztRQU0zQiw4Q0FBOEM7UUFDOUMsdUNBQXVDO1FBQ3ZDLGdEQUFnRDtRQUNoRCx3Q0FBd0M7UUFFeEMvQixJQUFJc0MsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFbkI7UUFBUztJQUNsQyxFQUFFLE9BQU9vQixHQUFHO1FBQ1YvQixRQUFRQyxHQUFHLENBQUM4QixFQUFFcEIsUUFBUTtRQUN0QnBCLElBQUlzQyxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDRDtJQUN2QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxvcmllLXdpZGdldC8uL3BhZ2VzL2FwaS9jYWxjdWxhdGVDYWxvcmllcy5qcz9mMzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICB2YXIgeyBhZ2UsIHNleCwgYWN0aXZpdHlMZXZlbCwgd2VpZ2h0LCBnb2FsV2VpZ2h0LCBoZWlnaHQsIHRpbWVUb1JlYWNoR29hbCB9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKGFnZSlcblxuICB0cnkge1xuICAgIGNvbnN0IHByb21wdCA9IGBVc2VyOiBJJ20gYSAke2FnZX0geWVhciBvbGQgJHtzZXh9LCBteSBhY3Rpdml0eSBsZXZlbCBpcyAke2FjdGl2aXR5TGV2ZWx9IChjb25zaWRlcmluZyAxIGJlaW5nIG5vdCBhY3RpdmUgYXQgYWxsLCA1IGJlaW5nIHZlcnkgYWN0aXZlKSwgSSB3ZWlnaCAke3dlaWdodH0gJiBJJ20gJHtoZWlnaHR9IHRhbGwuIEkgd291bGQgbGlrZSB0byBnZXQgdG8gYSB3ZWlnaHQgb2YgJHtnb2FsV2VpZ2h0fSBpbiAke3RpbWVUb1JlYWNoR29hbH0gZGF5cy4gUGxlYXNlIGdpdmUgbWUgc3VtbWFyYWl6ZWQgYnV0IGVmZmVjdGl2ZSByZXNwb25zZSA/XFxuQm90IDogYDtcbiAgICBcbiAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jb21wbGV0aW9uc1wiLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIHNrLUZYdHNTbW5XbmhDSXJMVUNDTURBVDNCbGJrRkoxbFlwUUlWeGtnN1NUbUM0RnB4cVwiLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwMlwiLFxuICAgICAgICBwcm9tcHQ6IHByb21wdCxcbiAgICAgICAgbWF4X3Rva2VuczogNzUwLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxldCByZXNwb25zZSA9IGRhdGEuY2hvaWNlc1swXS50ZXh0LnRyaW0oKTtcbiAgXG4gICAgXG4gICAgY29uc3QgZmlsZW5hbWUgPSBcImNvbnZlcnNhdGlvbnMuanNvblwiO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSB7XG4gICAgICB0aW1lc3RhbXA6dGltZXN0YW1wLFxuICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICB9O1xuICAgIGxldCBjb252ZXJzYXRpb25zID0gW107XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZW5hbWUpKSB7XG4gICAgICBjb25zdCBjb252ZXJzYXRpb25zSnNvbiA9IGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSk7XG4gICAgICBjb252ZXJzYXRpb25zID0gSlNPTi5wYXJzZShjb252ZXJzYXRpb25zSnNvbik7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCB0aGUgbmV3IGNvbnZlcnNhdGlvbiB0byB0aGUgYXJyYXlcbiAgICBjb252ZXJzYXRpb25zLnB1c2goY29udmVyc2F0aW9uKTtcbiAgICBcbiAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIGNvbnZlcnNhdGlvbnMgYXJyYXkgdG8gdGhlIEpTT04gZmlsZVxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnNKc29uID0gSlNPTi5zdHJpbmdpZnkoY29udmVyc2F0aW9ucyk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlbmFtZSwgY29udmVyc2F0aW9uc0pzb24pO1xuXG5cblxuXG5cbiAgICAvLyBTYXZlIHRoZSBwcm9tcHQgYW5kIHJlc3BvbnNlIHRvIGEgdGV4dCBmaWxlXG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBcImNvbnZlcnNhdGlvbi50eHRcIjtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gYCR7cHJvbXB0fVxcbiR7cmVzcG9uc2V9XFxuXFxuYDtcbiAgICAvLyBmcy5hcHBlbmRGaWxlU3luYyhmaWxlbmFtZSwgY29udGVudCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3BvbnNlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZS5yZXNwb25zZSk7XG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImZzIiwiam9pbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhZ2UiLCJzZXgiLCJhY3Rpdml0eUxldmVsIiwid2VpZ2h0IiwiZ29hbFdlaWdodCIsImhlaWdodCIsInRpbWVUb1JlYWNoR29hbCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicHJvbXB0IiwiZGF0YSIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibW9kZWwiLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJyZXNwb25zZSIsImNob2ljZXMiLCJ0ZXh0IiwidHJpbSIsImZpbGVuYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29udmVyc2F0aW9uIiwiY29udmVyc2F0aW9ucyIsImV4aXN0c1N5bmMiLCJjb252ZXJzYXRpb25zSnNvbiIsInJlYWRGaWxlU3luYyIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJzdHJpbmdpZnkiLCJ3cml0ZUZpbGVTeW5jIiwic3RhdHVzIiwianNvbiIsImUiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/calculateCalories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/calculateCalories.js"));
module.exports = __webpack_exports__;

})();