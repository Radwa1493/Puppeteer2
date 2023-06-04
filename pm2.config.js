module.exports = {
    apps: [
      {
        name: 'jest',
        script: 'node_modules/.bin/jest',
        args: '--runInBand',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {},
      },
    ],
  };
  