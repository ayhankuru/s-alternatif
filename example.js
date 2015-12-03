var salternatif =require('./index.js');

salternatif.search({artist:'Emre Aydın',song:'Eylül'})
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})

console.log('----------');

salternatif.show(21805)
.then(function(data){
     console.log(data);
}).catch(function(err){
  console.log(err);
})
