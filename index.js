'use strict'

let iconv = require('iconv-lite'),
  cheerio = require('cheerio'),
      got = require('got-promise'),
  Promise = require('native-or-bluebird'),
      url = "http://sarki.alternatifim.com/";

var search = function Search(obj){

  return new Promise(function (resolve, reject) {

  		  var uri =url;
		  if(obj.artist){
		   uri += "listele.asp?fsarkici="+escape(obj.artist);
		  }else if(obj.track){
		   uri  +="&fsarki="+escape(obj.track);
		  }else{
		    reject(new Error("Parametre eksik"));
		  }


		  got(uri,{ encoding: null})
		  .then(function(data){
		  		return iconv.decode(new Buffer(data.body), "windows-1254").toString('utf-8');
		  }).then(function(data){

		  	var $ = cheerio.load(data,{decodeEntities: false});
	        var block =$('.sarkisozu').html();

	      	 var lyrics=[];


	      	 var $$ =cheerio.load(block,{decodeEntities: false});
		       
		        $$('a').each(function(i, elem) {

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
	      	
	      	delete lyrics[lyrics.length-1]; // remove adds text
	      	


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

		 got(uri,{ encoding: null})
		  .then(function(data){
		  		return iconv.decode(new Buffer(data.body), "windows-1254").toString('utf-8');
		  }).then(function(data){
		  	  var $ = cheerio.load(data,{decodeEntities: false});
		      var title =$('h3.baslik').html();
		      var dump = {title:title,body:""};
		      var bodys =$('.sarkisozu').html();
		      var $$ =cheerio.load(bodys,{decodeEntities: false});

		      $$('script').remove()
		      $$('#disqus_thread').remove()
		      $$('.flash').remove()
		      $$('span').remove()
		      $$('a').remove()

		      dump.body=$$.html().replace(/\<br\\?>/g, "\n")
		      					.replace(/<!--[\s\S]*?-->/g,'')
		      					.replace(/<\s*div.*?>|<\/div>/g, '')
		      					.replace(/^\s+|\s+$/g, '')
			  
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
