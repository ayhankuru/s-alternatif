[![Build Status](http://img.shields.io/travis/cobaimelan/s-alternatif.svg?style=flat)](https://travis-ci.org/cobaimelan/s-alternatif)


sarki.alternatifim.com simple api




## Install

```
npm install s-alternatif
```

## Usage


```js
var salternatif = require('s-alternatif')();
//or
var salternatif = require('s-alternatif');
var sa = salternatif();
```

## Search

#### params
  * **artist:** Artist Name

```js
salternatif.search({artist:"Emre Aydın"},function(err,data){
    if(err) throw err
    else console.log(data);
    //{ artist: 'Emre Aydın',
     //lyrics: 
      //[ { id: '21805', title: 'Afili Yalnızlık' },
      //  { id: '248902', title: 'Akşamlarda Parmak İzlerin' },
      //  { id: '112523', title: 'Alıştım Susmaya' },
      //  { id: '248906', title: 'Artık Özlemek İstemiyorum' },
      //  { id: '26177', title: 'Asil Yaşlar' },
      //  { id: '112525', title: 'Ayrı Ayrı' },
      //  { id: '248907', title: 'Belalım' },
      //  { id: '12572', title: 'Belki Bir Gün Özlersin' },
      //  { id: '164996', title: 'Beni Biraz Böyle Hatırla' },
      //  { id: '109561', title: 'Beni Unutma' },
      //  { id: '181858', title: 'Bir Teselli Ver' },
      //  { id: '248911', title: 'Bitti Tebrikler' },
      //  { id: '22641', title: 'Bu Kez Anladım' },
      //  { id: '109775', title: 'Bu Yağmurlar' },
      //  { id: '248915', title: 'Buralar Yalan' },
      //  { id: '43524', title: 'Çalma Açmam Kapıyı' },

});

```

## Show


#### params
  * **id:** Song id

```js
salternatif.show(21805,function(err,data){
    if(err) throw err
    else console.log(data);
    //{ title: 'Emre Aydın - Afili Yalnızlık',
    // body: '\r\nÖlsem (ölsem), ölsem (ölsem), ölsem... hemen şimdi \r\nKaçsam (kaçsam), gitsem (gitsem), kaçsam... tam da şimdi //\r\n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek //bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman \r\nTuzaklar kurmuş üstelik \r\nBırakmıyor acıtmadan \r\n\r\nBitiyorum her //nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2\r\n\r\n\r\nSövdüm (sövdüm), sövdüm (//sövdüm), sövdüm ben dünyaya \r\nAcılara, sokaklara, ait olmaya, insanlara \r \n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir //kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman //\r\nTuzaklar kurmuş üstelik \

});

```
