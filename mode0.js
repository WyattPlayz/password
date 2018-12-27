// ID: 0
// TYPE: DICTIONARY
// HASH: MD5

const fs = require('fs')
const dictionary = "./dictionary.txt"
var passwordfile = "./passwordfile.txt"
var debug = true

function debug(msg) {
  console.log('[DEBUG] ' + msg)
}

var hashes = fs.readFileSync(passwordfile).toString().split("\n");
var passwords = fs.readFileSync(dictionary).toString().split("\n");

console.log('[START] Starting for file: ' + passwordfile)

var i;
for (i = 0; i < password.length; i++) { 
  var crypto = require('crypto');
  var name = passwords[i]
  var pass = passwords[i]
  var hash = crypto.createHash('md5').update(name).digest('hex');
  debug(hash);
  if (hash == pass) {
    console.log('[SUCCESS] Cracked password. Hash: ' + pass + ' Pass: ' + passwords[i])
    success(hash, passwords[i])
  }
}

console.log('[COMPLETE] Completed for file: ' + passwordfile)
