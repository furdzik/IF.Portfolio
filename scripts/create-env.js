const fs = require('fs');

fs.writeFileSync(
  './.env',
  `NODE_ENV=production\nAPP_URL=${process.env.APP_URL}\nSTACKOVERFLOW_API=${process.env.STACKOVERFLOW_API}\nGITHUB_KEY=${process.env.GITHUB_KEY}\n`
);
