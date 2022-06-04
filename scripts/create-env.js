const fs = require('fs');

fs.writeFileSync(
  './.env',
  `NODE_ENV=production\nAPP_URL=${process.env.APP_URL}\nSTACKOVERFLOW_API_URL=${process.env.STACKOVERFLOW_API_URL}\nSTACKOVERFLOW_USER=${process.env.STACKOVERFLOW_USER}\nGITHUB_USER=${process.env.GITHUB_USER}\nGITHUB_KEY=${process.env.GITHUB_KEY}\nSENTRY_DNS=${process.env.SENTRY_DNS}\n`
);
