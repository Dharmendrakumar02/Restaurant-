const fs = require('fs');
const path = require('path');
const https = require('https');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') {
        if (dirFile.endsWith('.tsx')) {
            filelist.push(dirFile);
        }
      } else {
        throw err;
      }
    }
  });
  return filelist;
};

const checkUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({url, status: res.statusCode});
        }).on('error', (e) => {
            resolve({url, status: 'error', message: e.message});
        });
    });
};

async function main() {
    const files = walkSync('./src');
    const urls = new Set();
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(/https?:\/\/[^"'\s]+/g);
        if (matches) {
            matches.forEach(m => urls.add(m));
        }
    });

    for (let url of urls) {
        const res = await checkUrl(url);
        if (res.status !== 200) {
            console.log(`Failed: ${url} (Status: ${res.status})`);
        }
    }
}
main();
