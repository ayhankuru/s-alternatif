[![Travis Build Status](http://img.shields.io/travis/c0b41/s-alternatif.svg?style=flat-square)](https://travis-ci.org/c0b41/s-alternatif) [![Circle Build Status](https://img.shields.io/circleci/project/c0b41/s-alternatif.svg?style=flat-square)](https://circleci.com/gh/c0b41/s-alternatif) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/c0b41/s-alternatif.svg?style=flat-square)](https://ci.appveyor.com/project/c0b41/s-alternatif) [![Build Status](https://img.shields.io/david/ayhankuru/s-alternatif.svg?style=flat-square)](https://david-dm.org/ayhankuru/s-alternatif)



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
