'use strict'

let iconv = require('iconv-lite'),
  cheerio = require('cheerio'),
       rp = require('request-promise'),
  Promise = require('bluebird'),
      url = "http://sarki.alternatifim.com/";

var search = function Search(obj){

  return new Promise(function (resolve, reject) {

		  if(obj.artist && obj.track){
		    var uri =url+"listele.asp?fsarkici="+escape(obj.artist)+"&fsarki="+escape(obj.track);
		  }else{
		    reject(new Error("Parametre eksik"));
		  }


		  rp({ encoding: null, method: "GET", uri:uri})
		  .then(function(body){
		  		return iconv.decode(new Buffer(body), "windows-1254").toString('utf-8');
		  }).then(function(data){

		  	var $ = cheerio.load(data,{decodeEntities: false});
	        var block =$('blockquote').html();
	        var $$ =cheerio.load(block,{decodeEntities: false});
	        var lyrics=[];
	        $$('.menu a').each(function(i, elem) {

	            if($$(this).text() !=="Arama İpuçları"){
	                if(obj.fsarki){
	                  var id =$$(this).attr('href').split('=')[1];
	                }else{
	                var id =$$(this).attr('href').split('&amp;')[0].split('=')[1];
	                }
	                $$('.sarkici').empty().remove();
	                var name=$$(this).text().replace('&nbsp;','').replace('&nbsp;','');
	                lyrics.push({name:name,id:id});
	            }
	            
	          });
		  	
	        return lyrics;
		  		
		  }).then(function(lyrics){
		  		resolve(lyrics);
		  }).catch(function(err){
		  		reject(err);
		  })
  });

}

var show = function Show(id){

	return new Promise(function (resolve, reject) {
		if(id){
			var uri = url+"data.asp?ID="+escape(id);
		}else{
			reject(new Error('Parametre Eksik'))
		}

		 rp({ encoding: null, method: "GET", uri:uri})
		  .then(function(body){
		  		return iconv.decode(new Buffer(body), "windows-1254").toString('utf-8');
		  }).then(function(data){
		  	  var $ = cheerio.load(data,{decodeEntities: false});
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
			  
			  return dump;
		  }).then(function(content){
		  		resolve(content ||null);
		  }).catch(function(err){
		  		reject(err);
		  })

	});
}




module.exports.search=search;
module.exports.show=show;
