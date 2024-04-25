Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		  
	  console.log("BABELE LOADED !!!");
	  Babele.get().register({
		  module: 'bitd-ko',
		  lang: 'ko',
		  dir: 'compendiums'
	  });
	} else {
		console.log("****** BABELE 모듈이 작동하지 않음 !!! **********");
	}
  });
