module.exports = {
  apps : [{
    name   : "EZE-PAYMENTS",
    script : "./dist/index.js",
    watch: false, // any changes to app folder will get pm2 to restart app
    exec_mode: 'cluster', // Set the execution mode to 'cluster'
  }]
}
