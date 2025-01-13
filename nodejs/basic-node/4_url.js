const url = require('url');
const {URL} = url; // 구조분해 할당 
const myUrl = new URL('https://nodejs.org/en');

// console.log('url -->' ,url);
console.log('URL -->' ,URL);
console.log('myUrl', myUrl);
console.log(url.format(myUrl));
