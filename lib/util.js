const cheerio = require('cheerio'),
  got = require('got');

 module.exports.decode = function(uri){
   return got(uri,{ encoding: null}).then(function(data){
      return data.body 
   });
 };

 module.exports.check = function(body){
   var $ = cheerio.load(body,{decodeEntities: false});
   var block = $('.sarkisozu').html();

   var $$ =cheerio.load(block,{decodeEntities: false});

    var status = true;
    $$('a').each(function(i, elem) {

        if($$(this).text() == "Arama İpuçları"){
          status = false;
          return
        }
    });

    return status;

 }

module.exports.list = function(body) {

  var $ = cheerio.load(body,{decodeEntities: false});
  var block = $('.sarkisozu').html();
  var $$ = cheerio.load(block,{decodeEntities: false});

  var lyrics = $$('ul li').map(function(i) {
    
    let path = $$(this).find('a').attr('href');
    let name = $$(this).find('a').text().replace('&nbsp;','').replace('&nbsp;','');
    return {
      name,
      path
    }

  }).get();

  return lyrics;
}
 module.exports.page = function(body) {
   var $ = cheerio.load(body,{decodeEntities: false});

   var $$ =cheerio.load($('.cen').eq(2).html(),{decodeEntities: false});
   var dump = [];
    $$('a').each(function(i, elem) {

      if($$(this).attr('href') !== '#' && $$(this).attr('href') !== '/') dump.push($$(this).attr('href'));


     });
   return dump;

  }

 module.exports.lyric = function(content){
   const lyric = {}
   const $ = cheerio.load(content,{decodeEntities: false});
   lyric.title  = $('h3.baslik').text();
   lyric.content  = $('.sarkisozu').text()

   return lyric

 }