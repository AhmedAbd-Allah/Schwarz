const env = process.env.NODE_ENV;

const devOptions = {
  watch: [
    'Controllers',
    'Services',
    'Models',
    'index.js',
    'config.json'
  ],
  ignore_watch: ['node_modules']
};

const prodOptions = {
  instances: "max",
  autorestart: true
};

module.exports = {
  apps: [
    {
      name: "App",
      script: "./index.js",
      ...(env === 'production' ? prodOptions : devOptions)
    }
  ]
}