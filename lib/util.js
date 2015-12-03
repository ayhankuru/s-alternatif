
var iconv = require('iconv-lite'),
  cheerio = require('cheerio'),
  got = require('got');


 module.exports.decode = function(uri){
   return got(uri,{ encoding: null}).then(function(data){
       return iconv.decode(new Buffer(data.body), "windows-1254").toString('utf-8');
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
  var block =$('.sarkisozu').html();
  var $$ = cheerio.load(block,{decodeEntities: false});

  var lyrics = $$('a').map(function(i) {


    var id =$$(this).attr('href').split('&amp;')[0].split('=')[1];
    var name= $$(this).text().replace('&nbsp;','').replace('&nbsp;','');
    if(name !=='[ reklamı gizle ]')return { id: id,name:name };
    return null;

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
 };

 module.exports.lyric = function(body){
   var $ = cheerio.load(body,{decodeEntities: false});
   var title =$('h3.baslik').html();
   var dump = {title:title,body:""};
   var bodys =$('.sarkisozu').html();
   var $$ =cheerio.load(bodys,{decodeEntities: false});

   $$('script').remove()
   $$('#disqus_thread').remove()
   $$('.flash').remove()
   $$('span').remove()
   $$('a').remove()

   return dump.body=$$.html().replace(/\<br\\?>/g, "\n")
             .replace(/<!--[\s\S]*?-->/g,'')
             .replace(/<\s*div.*?>|<\/div>/g, '')
             .replace(/^\s+|\s+$/g, '');

 };
