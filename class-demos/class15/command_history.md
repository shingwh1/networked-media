way we opened terminal:

1. navigate to file explorer
   - Windows: right click -> more options -> Open GitBash here
2. `pwd`
3. `npm init -y`
4. `npm install express nunjucks`

ways we ran server.js files:

1. `node server.js` -> requires a restart every time we make changes to the file ( we don't use it)
2. `node --watch server.js` -> this watches our server.js file for changes, and automatically restart server
3. `node --watch --watch-path=views server.js` -> watches both our `server.js` file and all of our .njk files in our views folder
