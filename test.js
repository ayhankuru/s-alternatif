var salternatif =require('./index.js')
var expect = require('expect.js');


describe('Test!!!...', function(){
	
	it(' Search Test  : ', function () {

	return salternatif.search({artist:"Emre Aydın",track:"Afili Yalnızlık"})
			.then(function(data){
					
			expect(data).to.be.an('object');
			expect(data.lyrics).to.have.length(1);
			expect(data.lyrics[0].id).to.eql(12572);
			expect(data.lyrics[0].name).to.eql('Belki Bir Gün Özlersin');

			})


	});	

	it(' Show Test :', function () {
		
		return salternatif.show(21805)
			.then(function(data){
				
			expect(data).to.be.an('object');
			expect(data.title).to.eql('Emre Aydın - Afili Yalnızlık');
			expect(data.body).to.eql('\r\nÖlsem (ölsem), ölsem (ölsem), ölsem... hemen şimdi \r\nKaçsam (kaçsam), gitsem (gitsem), kaçsam... tam da şimdi \r\n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman \r\nTuzaklar kurmuş üstelik \r\nBırakmıyor acıtmadan \r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2\r\n\r\n\r\nSövdüm (sövdüm), sövdüm (sövdüm), sövdüm ben dünyaya \r\nAcılara, sokaklara, ait olmaya, insanlara \r \n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman \r\nTuzaklar kurmuş üstelik \r\nBırakmıyor acıtmadan \r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2\r\n\r\nDeğmezmiş hiç uğraşmaya\r\nBu kez mecalim yok hiç dayanmaya.. dayanmaya..\r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2 \r\n\n\r\n\r\n \r\n\r\n\r\n \r\n\r\n\r\n');

			})
	});

});


		