var salternatif = require('./dist/index.js');

salternatif.search({artist:"Emre Aydın"})
.then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err);
})


salternatif
  .show("/sarkici/emre-aydin/afili-yalnizlik")
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    console.log(err);
  });
