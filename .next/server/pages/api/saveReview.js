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
exports.id = "pages/api/saveReview";
exports.ids = ["pages/api/saveReview"];
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

/***/ "(api)/./pages/api/saveReview.js":
/*!*********************************!*\
  !*** ./pages/api/saveReview.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { review , rating  } = req.body;\n    console.log(\"tttttt\");\n    if (!review || !rating) {\n        res.status(400).json({\n            error: \"Missing parameters: review and rating are required\"\n        });\n        return;\n    }\n    const timestamp = new Date().toISOString();\n    // Create an object containing the review data\n    const reviewData = {\n        timestamp: timestamp,\n        rating: rating,\n        review: review\n    };\n    // Read the existing reviews from the JSON file\n    // const filePath = join(process.cwd(), \"widgetfinal2\", \"UserReviews.json\");\n    const filePath = \"UserReviews.json\";\n    let reviews = [];\n    if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePath)) {\n        const reviewsJson = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n        if (reviewsJson) {\n            reviews = JSON.parse(reviewsJson);\n        }\n    }\n    // Add the new review data to the array\n    reviews.push(reviewData);\n    // Save the updated reviews array to the JSON file\n    const reviewsJson = JSON.stringify(reviews);\n    fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, reviewsJson);\n    // const timestamp = new Date().toISOString();\n    // const data = `${timestamp} | Rating: ${rating}/5 | Review: ${review}\\n`;\n    // const filePath = join(process.cwd(), \"widgetfinal2\", \"UserReviews.txt\");\n    // fs.appendFile(filePath, data, (err) => {\n    //   if (err) {\n    //     console.error(err);\n    //     res.status(500).json({ error: \"Error appending review to file\" });\n    //     return;\n    //   }\n    //   res.status(200).json({ message: \"Review added successfully\" });\n    // });\n    res.status(200).json({\n        message: \"Review added successfully\"\n    });\n//  res.send(\"ok\");\n//  res.status(200).json({ response });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZVJldmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTjtBQUNRO0FBRWIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHSCxJQUFJSSxJQUFJO0lBQ25DQyxRQUFRQyxHQUFHLENBQUM7SUFFWixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsUUFBUTtRQUN0QkYsSUFDR00sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFEO1FBQ3RFO0lBQ0YsQ0FBQztJQUdELE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUUxQyw4Q0FBOEM7SUFDOUMsTUFBTUMsYUFBYTtRQUNqQkgsV0FBV0E7UUFDWFAsUUFBUUE7UUFDUkQsUUFBUUE7SUFDVjtJQUVBLCtDQUErQztJQUMvQyw0RUFBNEU7SUFDNUUsTUFBTVksV0FBVztJQUNqQixJQUFJQyxVQUFVLEVBQUU7SUFDaEIsSUFBSWxCLG9EQUFhLENBQUNpQixXQUFXO1FBQzNCLE1BQU1HLGNBQWNwQixzREFBZSxDQUFDaUI7UUFDcEMsSUFBSUcsYUFBYTtZQUNmRixVQUFVSSxLQUFLQyxLQUFLLENBQUNIO1FBQ3ZCLENBQUM7SUFFSCxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDRixRQUFRTSxJQUFJLENBQUNSO0lBRWIsa0RBQWtEO0lBQ2xELE1BQU1JLGNBQWNFLEtBQUtHLFNBQVMsQ0FBQ1A7SUFDbkNsQix1REFBZ0IsQ0FBQ2lCLFVBQVVHO0lBR3pCLDhDQUE4QztJQUU5QywyRUFBMkU7SUFFM0UsMkVBQTJFO0lBRTNFLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHlFQUF5RTtJQUN6RSxjQUFjO0lBQ2QsTUFBTTtJQUVOLG9FQUFvRTtJQUNwRSxNQUFNO0lBRU5oQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVnQixTQUFTO0lBQTRCO0FBQzVELG1CQUFtQjtBQUVuQix1Q0FBdUM7QUFDekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbG9yaWUtd2lkZ2V0Ly4vcGFnZXMvYXBpL3NhdmVSZXZpZXcuanM/ZDhhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHJldmlldywgcmF0aW5nIH0gPSByZXEuYm9keTtcbiAgY29uc29sZS5sb2coXCJ0dHR0dHRcIik7XG5cbiAgaWYgKCFyZXZpZXcgfHwgIXJhdGluZykge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgcGFyYW1ldGVyczogcmV2aWV3IGFuZCByYXRpbmcgYXJlIHJlcXVpcmVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmV2aWV3IGRhdGFcbmNvbnN0IHJldmlld0RhdGEgPSB7XG4gIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICByYXRpbmc6IHJhdGluZyxcbiAgcmV2aWV3OiByZXZpZXdcbn07XG5cbi8vIFJlYWQgdGhlIGV4aXN0aW5nIHJldmlld3MgZnJvbSB0aGUgSlNPTiBmaWxlXG4vLyBjb25zdCBmaWxlUGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJ3aWRnZXRmaW5hbDJcIiwgXCJVc2VyUmV2aWV3cy5qc29uXCIpO1xuY29uc3QgZmlsZVBhdGggPSBcIlVzZXJSZXZpZXdzLmpzb25cIjtcbmxldCByZXZpZXdzID0gW107XG5pZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgY29uc3QgcmV2aWV3c0pzb24gPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBpZiAocmV2aWV3c0pzb24pIHtcbiAgICByZXZpZXdzID0gSlNPTi5wYXJzZShyZXZpZXdzSnNvbik7XG4gIH1cbiBcbn1cblxuLy8gQWRkIHRoZSBuZXcgcmV2aWV3IGRhdGEgdG8gdGhlIGFycmF5XG5yZXZpZXdzLnB1c2gocmV2aWV3RGF0YSk7XG5cbi8vIFNhdmUgdGhlIHVwZGF0ZWQgcmV2aWV3cyBhcnJheSB0byB0aGUgSlNPTiBmaWxlXG5jb25zdCByZXZpZXdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHJldmlld3MpO1xuZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgcmV2aWV3c0pzb24pO1xuXG5cbiAgLy8gY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIC8vIGNvbnN0IGRhdGEgPSBgJHt0aW1lc3RhbXB9IHwgUmF0aW5nOiAke3JhdGluZ30vNSB8IFJldmlldzogJHtyZXZpZXd9XFxuYDtcblxuICAvLyBjb25zdCBmaWxlUGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJ3aWRnZXRmaW5hbDJcIiwgXCJVc2VyUmV2aWV3cy50eHRcIik7XG5cbiAgLy8gZnMuYXBwZW5kRmlsZShmaWxlUGF0aCwgZGF0YSwgKGVycikgPT4ge1xuICAvLyAgIGlmIChlcnIpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgLy8gICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgYXBwZW5kaW5nIHJldmlldyB0byBmaWxlXCIgfSk7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuXG4gIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlJldmlldyBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcbiAgLy8gfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlJldmlldyBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcbiAgLy8gIHJlcy5zZW5kKFwib2tcIik7XG5cbiAgLy8gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzcG9uc2UgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmcyIsImpvaW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmV2aWV3IiwicmF0aW5nIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZXZpZXdEYXRhIiwiZmlsZVBhdGgiLCJyZXZpZXdzIiwiZXhpc3RzU3luYyIsInJldmlld3NKc29uIiwicmVhZEZpbGVTeW5jIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsInN0cmluZ2lmeSIsIndyaXRlRmlsZVN5bmMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveReview.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveReview.js"));
module.exports = __webpack_exports__;

})();