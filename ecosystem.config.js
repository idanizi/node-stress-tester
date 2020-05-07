module.exports = {
  apps : [{
    script: 'server/index.js',
    watch: './server',
    name: 'server',
  }, {
    script: 'client/index.js',
    watch: './client',
    name: 'client',
    instances: 1
  }],
};
