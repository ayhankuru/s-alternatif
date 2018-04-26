var salternatif =require('./index.js');

salternatif.search({artist:"Emre Aydın"})
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})

console.log('----------');

salternatif.show('sarkici/emre-aydin/afili-yalnizlik')
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})
