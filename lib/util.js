const cheerio = require('cheerio')
const  got = require('got')
const url = "http://sarki.alternatifim.com"

const decode = async function(url) {
  let { body } = await got(url, { encoding: null })
  return body
}

const getPages = async function(body) {

  const regex = /max_page : ([^']+),/g;

  let text = regex.exec(body);

  if (text != null) {
    let max_page = parseInt(text[1]);
    return max_page;
  } else {
    return null

  }

}

const getList = async function(body) {

  var $ = cheerio.load(body, { decodeEntities: false });
  var block = $('.sarkisozu').html();
  var $$ = cheerio.load(block, { decodeEntities: false });

  var list = $$('ul li').map(function (i) {

    let path = $$(this).find('a').attr('href');
    let name = $$(this).find('a').text().replace('&nbsp;', '').replace('&nbsp;', '');
    return {
      name,
      path
    }

  }).get();


  return list
}

const search = async function(options = {}){

  var uri = `${url}/listele.asp?`;
  let path = null
  let list = []
  let params = Object.assign({ artist: null, song: null }, options);

  if (params.artist && params.song) {
    path = `fsarkici=${escape(params.artist)}&fsarki=${escape(params.song)}`;
  } else if (!params.song) {
    path = `fsarkici=${escape(params.artist)}`;
  }

  let response  = await decode(`${uri}${path}`)
  let pages = await getPages(response)

  if(pages != null) {

    for (let page = 1; page < pages + 1; page++) {
      let body = await decode(`${uri}${path}&page=${page}`)
      let data = await getList(body)
      list = [...list, ...data];
    }

  } else {
    let data = await getList(response)
    list = [...list, ...data];
  }

  return list

}

const show = async function(path){
  let response = await decode(`${url}${path}`)
  const lyric = {}
  const $ = cheerio.load(response, { decodeEntities: false });
  lyric.title = $('h3.baslik').text();
  lyric.content = $('.sarkisozu').text().replace('[ reklamı gizle / hide ads ]', '').replace('report this ad', '')

  return lyric
}

export {
  search,
  show
}
