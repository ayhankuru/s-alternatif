var   objectAssign = require('object-assign'),
      util  = require('./lib/util'),
      flatten = require('array-flatten'),
      url = "http://sarki.alternatifim.com/";


module.exports.search = function Search(params){

 return new Promise(function(resolve, reject) {
     var uri = `${url}listele.asp?`;
     let path = ''
     var nParams = objectAssign({artist: null,song:null}, params);

     if(nParams.artist && nParams.song){
      path =`fsarkici=${escape(nParams.artist)}&fsarki=${escape(nParams.song)}`;
     }else if(!nParams.song){
      path =`fsarkici=${escape(nParams.artist)}`;
     }

     uri =`${uri}${path}`
     
     util.decode(uri).then(function(body){
       var songcheck = util.check(body);

       if(songcheck){

          var pages = util.page(body);

          if(pages.length > 0){
            pages = pages.concat(pages[0].substring(0, pages[0].length - 1) + 1);
            var que = pages.map(function(item){
              return  util.decode(`${url}${item}`);
            })

            resolve(Promise.all(que).then(bla => {
                return flatten(bla.map(function(chunk){
                  return util.list(chunk);
                }))
              }));



          }else{
            resolve(util.list(body));
          }


       }



     });

  });

}

 module.exports.show = function Show(path){

   return new Promise(function (resolve, reject) {
      if(path){
        var uri =`${url}${path}`;
        resolve(util.decode(uri).then(body => {
          return util.lyric(body);
        }));
      }else{
        reject(new Error('Path eksik'));
      }
   });

 };
