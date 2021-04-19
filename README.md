# leveldb-browserify-demo
A simple counter application using with LevelDB with IndexedDB backend.
* Browserify lets us use npm packages in the browser.
* In this demo we're using levelup and level-js to bring leveldb functionality to the browser by using IndexedDB as the backend.
* The main javascript code is in the `main.js` file.
* After making any changes to the `main.js` file, you'll have to run `browserify main.js -o bundle.js` to bundle the module.
