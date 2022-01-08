const fs = require('fs');

fs.writeFileSync(
  './.env',
  `NODE_ENV=production\nAPP_URL=${process.env.APP_URL}\n`
);
