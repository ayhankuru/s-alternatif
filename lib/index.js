/* @Name s-alternatif
*  @Version 0.0.1
*  @author cobaimelan
*/

var iconv = require('iconv-lite'),
    cheerio = require('cheerio'),
    request = require('request');



/*
* constructor method
* @param {x} string 
*/


function salternatif() {
    if (!(this instanceof salternatif)) return new salternatif();

}

        
/*
* search
* @param {obj} object exam: {fsarkici:"emre aydın", fsarki:"Belki bir gün"}
* @param {next} function exam: err,data
*/

salternatif.prototype.search = function(obj,next) {
 
  var objs ={};
  var url ="http://sarki.alternatifim.com/listele.asp?fsarkici=";
  objs.fsarkici = obj.artist ? obj.artist  : " ";

  url =url+escape(objs.fsarkici);

  requ(url,function(err,buf) {
    if(err){
        next(err,null);
    }else{
        var $ = cheerio.load(buf,{decodeEntities: false});
        var block =$('blockquote').html();
        var $$ =cheerio.load(block,{decodeEntities: false});
        var dump = {artist:objs.fsarkici,lyrics:[]};
        $$('font a').each(function(i, elem) {
        if( $$(this).attr('href') !=='#ReklamiGizle'){

            if($$(this).text() !=="Arama İpuçları"){
                var id =$$(this).attr('href').match(/=(.*?)&/)[1];
                var title = $$(this).html();
                dump.lyrics.push({id:id,title:title});
            }else{
                next(null,null);
            }
            
        }

        })

        next(null,dump);
    }

  })



};


        
/*
* id
* @param {id} number exam: 1243
* @param {next} function exam: err,data
*/

salternatif.prototype.show = function(id,next) {

    var objs ={};
  var url ="http://sarki.alternatifim.com/data.asp?ID=";
  objs.id = id ? id  : " ";

  url =url+escape(objs.id);

  requ(url,function(err,buf) {
    if(err){
        next(err,null);
    }else{
        var $ = cheerio.load(buf,{decodeEntities: false});
        var title =$('h1').html();
        var dump = {title:title,body:""};
        var bodys =$('blockquote').html();
        var $$ =cheerio.load(bodys,{decodeEntities: false});

        $$('script').remove()
        $$('#disqus_thread').remove()
        $$('.flash').remove()
        $$('span').remove()
        $$('#reklamgizle').remove()

        dump.body=$$.html().replace(/<!--[\s\S]*?-->/g,' ').replace(/<\s*div.*?>|<\/div>/g, ' ').replace(/\<br\\?>/g, "\n");

        next(null,dump);
    }

  })
  
};








function requ(url,next){
    var requestOptions  = { encoding: null, method: "GET", uri:url };
    request(requestOptions, function(error, response, body) {
        if(error){
            next(error,null);
        }else{
            next(null,iconv.decode(new Buffer(body), "windows-1254").toString('utf-8'));
        }
     
    });
}



module.exports = exports = salternatif