const dns = require('dns');
const prompt = require('prompt-sync')();


const name = prompt('What is your domain?');

dns.lookup(name, (err, ip, family) => {
    if(err) throw err;
    // do something
  console.log(`IP is ${ip}`);
  });

  