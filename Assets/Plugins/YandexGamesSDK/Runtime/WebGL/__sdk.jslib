/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

mergeInto(LibraryManager.library, {
    AuthenticateUser: function () {
        if (typeof window.AuthenticateUser === 'function') {
            window.AuthenticateUser();
        }
        else {
            console.error('AuthenticateUser is not defined on window.');
        }
    },
    SavePlayerData: function (keyPtr, dataPtr) {
        if (typeof window.SavePlayerData === 'function') {
            var key = UTF8ToString(keyPtr);
            var data = UTF8ToString(dataPtr);
            window.SavePlayerData(key, data);
        }
        else {
            console.error('SavePlayerData is not defined on window.');
        }
    },
    LoadPlayerData: function (keyPtr) {
        if (typeof window.LoadPlayerData === 'function') {
            var key = UTF8ToString(keyPtr);
            window.LoadPlayerData(key);
        }
        else {
            console.error('SavePlayerData is not defined on window.');
        }
    },
});

})();

var __webpack_export_target__ = (LibraryManager.library = typeof LibraryManager.library === "undefined" ? {} : LibraryManager.library);
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
