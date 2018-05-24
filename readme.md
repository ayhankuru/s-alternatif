[![Travis Build Status](http://img.shields.io/travis/c0b41/s-alternatif.svg?style=flat-square)](https://travis-ci.org/c0b41/s-alternatif) [![Circle Build Status](https://img.shields.io/circleci/project/c0b41/s-alternatif.svg?style=flat-square)](https://circleci.com/gh/c0b41/s-alternatif) 
[![AppVeyor](https://img.shields.io/appveyor/ci/c0b41/s-alternatif.svg?style=flat-square)](https://ci.appveyor.com/project/c0b41/s-alternatif)
 [![Build Status](https://img.shields.io/david/c0b41/s-alternatif.svg?style=flat-square)](https://david-dm.org/c0b41/s-alternatif) 
 ![download-count](https://img.shields.io/npm/dm/s-alternatif.svg?style=flat-square)



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
salternatif.show('xxxx')
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})

```
