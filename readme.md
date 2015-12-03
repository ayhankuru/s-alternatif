[![Travis Build Status](http://img.shields.io/travis/ayhankuru/s-alternatif.svg?style=flat-square)](https://travis-ci.org/ayhankuru/s-alternatif) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/s-alternatif.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/s-alternatif) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/s-alternatif.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/s-alternatif) [![Build Status](https://img.shields.io/david/ayhankuru/s-alternatif.svg?style=flat-square)](https://david-dm.org/ayhankuru/s-alternatif) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)



sarki.alternatifim.com simple api

## Install

```
npm install s-alternatif
```

## Usage


```js
var salternatif = require('s-alternatif');
```


#### Search

```js
salternatif.search({artist:"Emre Aydın",song:"Afili Yalnızlık"})
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})

```
#### Show

```js
salternatif.show(21805)
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})

```
