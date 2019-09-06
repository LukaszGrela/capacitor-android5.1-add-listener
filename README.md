
The `native-bridge.js` may also require manual change to make it work on an Android 5.1.1 emulator
> (...\android\app\src\main\assets\public\native-bridge.js)
Line 70 to be replaced with:

```
  const consoleKeys = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "countReset", "assert", "profile", "profileEnd", "time", "timeLog", "timeEnd", "timeStamp", "context", "memory", "reactStack", "reactStackEnd"];
    // Object.keys(win.console)
    consoleKeys.forEach(function (level) {
```

--------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
