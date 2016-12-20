/**
 * @author Troy Nguyen
 * 12/20/16
 * Advent of Code 2016, Day 6 problem 1
 */

var input = [
'uflevqwk',
'rrddgrgk',
'jownyelh',
'sskcoaaq',
'cfngremt',
'jntgxujt',
'wiatbvvv',
'ilspdbkl',
'cwgqwrrq',
'acusllxy',
'kidxuluo',
'gxunfaxm',
'rfuifzfd',
'qidkyaow',
'tjqlatwp',
'nhxmfxyx',
'tanronrx',
'qzjpwgvl',
'junnfzts',
'eumwzjzv',
'eonigpng',
'dufrqxjd',
'isqxdaej',
'hpqakcge',
'sywhphbi',
'fjskaqwd',
'hmyvgeqj',
'tpegglex',
'vpbzqqfp',
'jznqymjw',
'ngnyjegm',
'qgpocbnr',
'oaqwlpkp',
'jiowhrte',
'qamdygfg',
'ylvnybbb',
'makvhqsf',
'gjjnnbsg',
'xghnzlkw',
'sfkcmopw',
'wiyvydqu',
'bxczqgba',
'pcrlchbn',
'vvhewabm',
'nnftdojn',
'icywzuwc',
'wiokylcn',
'qmxppodk',
'yzedohag',
'fvjrfyrj',
'tfkaufmo',
'xkemipkv',
'iyatsikk',
'eafrhudq',
'nfyghtau',
'wttrrdvo',
'wauvzvhd',
'bzzblbam',
'sswyuaow',
'mvufeors',
'iumazrzo',
'clhrmzdc',
'czvoaqyr',
'plrvvzjb',
'yjxrypwt',
'rinqjksp',
'mmigjtpp',
'abrmadmr',
'fvmijrpg',
'jxwuzsdq',
'gqahdshs',
'lumftsyb',
'fkecsohh',
'bpsxszgv',
'qqepgxkb',
'iacloyjn',
'xtrurnvi',
'owrjjche',
'ittraljs',
'ekdxrdsu',
'kxmzdpol',
'uekohjhp',
'rlxydeli',
'gzqnbjzd',
'zwywoena',
'hgrhtngu',
'cyderbzp',
'mqwbnimx',
'ygxhrzpc',
'viqvwmir',
'ajwdsqnv',
'vycvuquh',
'rlqburdz',
'nrjikkqz',
'byiuygpb',
'qcwlrnvs',
'iqucoawp',
'utoaavak',
'ggjbwqvk',
'issedmzt',
'mmapzgrn',
'iwdadrtc',
'dpeszvwm',
'zgggkijl',
'gdneqfqi',
'wyaqgjis',
'jvowmavy',
'vxvesfbr',
'jsqmzcxq',
'fdtbsrpl',
'avmjobsz',
'nelqcrir',
'bohozvfw',
'pgnbpxve',
'zhzhlbox',
'hgmkxgqq',
'lcgcoyic',
'dxgjxzvr',
'sssgrtay',
'dhtzcyfj',
'qcovunah',
'lekkbwfw',
'uwdrgkrm',
'brlyetlg',
'dputvtfm',
'xkbgowvo',
'wdqnyjyj',
'lpkuxlqb',
'kejpkgbf',
'urfwmenq',
'tzugmuca',
'zmtfxlpn',
'bmuzgzco',
'swainwsv',
'cfmiaylt',
'vrzplmiu',
'ekoixwzr',
'sqbthhmj',
'kssmukqk',
'kgscswjx',
'owpvilla',
'wtzxjouf',
'cauhexcn',
'dprkkeah',
'pxptpwlv',
'btfmykon',
'lyvhwdcf',
'uojsofzg',
'ubqslzwj',
'pfvuloqf',
'hrucrkyt',
'urtjueoq',
'vqiibvdk',
'hvdtsupq',
'mryedbuz',
'yplctgby',
'ftqrhyal',
'oqeuxwsh',
'rclpgvjw',
'mhcrzrcg',
'covwlwho',
'gjhxzapi',
'egzhpzza',
'inbmkkbh',
'ezjvqrkb',
'szrmrsxh',
'ajyakvvs',
'hlmfstfp',
'wghyzvuf',
'ydidinar',
'oirwjiqo',
'udtjksso',
'jwnaosru',
'lhdyuucj',
'ekeifpwp',
'djefaqtt',
'rbwqvkax',
'lcaupsdz',
'ovjjidmx',
'hvpdenve',
'qdlqusku',
'enlupxlr',
'adtrmoyy',
'nnlluigo',
'gbyotoqo',
'ajavmaun',
'xtanzcix',
'fcqgsiuw',
'jbyyhitl',
'ctqkoeic',
'vusvexhj',
'dywmkciv',
'uegfjdip',
'sgksturi',
'fnppgtvo',
'epzgllth',
'zpkurdxk',
'kkesnnqe',
'tkepiakd',
'gukbfvsw',
'evgdijdz',
'rbildand',
'fxmpwuvs',
'fmnzyqea',
'vfktdoao',
'whgkcomu',
'umfodiid',
'afvjmwrf',
'lonuybho',
'lhopnkwv',
'bxekeeki',
'lzdgfhyo',
'hobjehhm',
'bjsyzipy',
'bgizykuf',
'uktmpbnb',
'qxxdsxro',
'dqxmncoz',
'abqqwmei',
'kyvcmjfb',
'fngzcrzk',
'dythedbo',
'oejkgzke',
'hocnhppm',
'ogugyxhi',
'ncikbndl',
'amwuhiuf',
'psrllnmr',
'xdhbvbcc',
'hobbvqhw',
'phiwblgs',
'wrixgmhb',
'vvmrbduw',
'nhakqryr',
'vsbbxaur',
'yfdsecin',
'kacwteta',
'efvhzgyg',
'lrjzpefq',
'zrjvuqrv',
'jcwnbmvh',
'wjuvxmou',
'nqcvtdcg',
'ucpnrgxc',
'uswrjjdi',
'mmyjmojk',
'wvcagtyn',
'recxcumh',
'qvrxogte',
'ljfyiyme',
'olmihwjb',
'plzycdty',
'qnyoxrfx',
'onsuhsdi',
'asbocmtb',
'jvndrjvs',
'mgzoinlt',
'rjfpztzt',
'fmdjpiqu',
'goofefiz',
'iqhvllgl',
'culamtyk',
'myxvmukc',
'cwvftlqc',
'lluqawec',
'mlmvmwfm',
'utrfawmz',
'olzrgvmv',
'zisabtap',
'fcuxuvnj',
'qyimlura',
'tlaltbsi',
'uyiyareq',
'hpztunnb',
'drfdwtfz',
'rosbuudb',
'tioknlid',
'gddxjxwj',
'aziakvby',
'hhttoluv',
'kkarvjkn',
'puprxohy',
'xjcxgzcv',
'dxuyhpkq',
'vclyijgd',
'redbicst',
'gqbttgxu',
'bffdncnd',
'xskpmkio',
'skclmsum',
'tznntmoj',
'gzhhsfwc',
'ywbppcgx',
'byrbeaxe',
'hwrlakpf',
'crlwqcgj',
'vhkaxgcz',
'wftehney',
'tbtmrkxb',
'fusuyqka',
'rwpnxmhx',
'rzqonvaz',
'ybpwtppo',
'cnverhwt',
'vdtfgbux',
'palvhikl',
'kzhqkdll',
'qqklvdyg',
'jmladlee',
'nepjydti',
'aedwmblx',
'ramkmzgr',
'wsolkgti',
'wwfrciju',
'roocdhyw',
'osstwykz',
'jkpkhqew',
'aqmgjjjd',
'tajwlxnv',
'plhodkvv',
'xcahqxwi',
'zylepnec',
'pmlywqoo',
'ospgrrdu',
'wblhxxir',
'iqfzvlpt',
'bsofcsig',
'iepxcvwy',
'guugpghl',
'ikwdlzfs',
'yomdcwxz',
'urbpcbrh',
'wtrzcfiv',
'kaapqrqk',
'ienueukt',
'digyopeb',
'kfgclsod',
'henjotok',
'nkzjuoxm',
'xohkdunh',
'gubuvylj',
'lugeqspf',
'xdkcfccg',
'sjnkiffo',
'xbviiody',
'juwtshlv',
'hdjfddmc',
'ipftsslh',
'zggnepcm',
'rvccowqn',
'swmcofau',
'oksngpvy',
'bjcthagw',
'tmzxsyqs',
'rebascnq',
'yxfixusy',
'iwewlkxk',
'nndfkckq',
'uhvaxjal',
'fcgqdlru',
'tkhlguoa',
'wsoefgmr',
'eebcbzeh',
'asmepwma',
'dqbujtpa',
'xjvmupwe',
'rrufqppv',
'yiaqkmsf',
'cvivqgtm',
'yrxfrfdi',
'bjkmyhdp',
'kwdvoyvn',
'nykyqaxg',
'zqioepkg',
'dwxantqi',
'bklxeoqh',
'rlxawoax',
'bdpfhqkn',
'fyzpjymf',
'meoqawzz',
'zowwxenu',
'zhqpnbtv',
'cubwtngh',
'srkxkkbi',
'kxcdvznw',
'ipsllqbn',
'imecbjsm',
'sehlcine',
'iogdiznk',
'gfovshxc',
'zkofnscb',
'zqiffwrz',
'zizfepxw',
'abknfcxu',
'hmqtwdqf',
'kehagtsw',
'xsemphlf',
'qwkuvbea',
'febqsrpl',
'cwpiafgk',
'adqsvihd',
'meclknwc',
'rpchvmja',
'mpqsuevs',
'yoebikcy',
'siyqnsga',
'dhoonzsx',
'zwydsejp',
'naytcuwv',
'ftbcjdte',
'kqckamex',
'nirapuiw',
'fayqugxd',
'whdbfmwl',
'pocevsjf',
'pxoxjycs',
'lpfwtpox',
'yaqigvsj',
'okiszxlp',
'mlxwdfoq',
'vjyckcjt',
'mvsefvcb',
'yrimofcf',
'qbxahhop',
'uarjvpep',
'gdtednol',
'damojpod',
'vtrmgubl',
'ndyuwayp',
'jhwjhbwx',
'cgjenmep',
'hawhcszs',
'ddaxxpec',
'qpruxjsi',
'nczelirl',
'ukesixzr',
'yfoqzfbk',
'kdgbriyq',
'dbjinxzc',
'tqjuhice',
'ntbgchkh',
'tlfxuvfj',
'ynwfakyu',
'xivxijyl',
'hsemlrom',
'oaaebmru',
'fskqiiiu',
'dbxrjzqd',
'fuelfktt',
'rknawwlh',
'pdyuhufu',
'pmvsoiwp',
'qcygmygy',
'lhovvslf',
'vrxdvmfq',
'crgndvzy',
'gyzzesbl',
'ankdtxyy',
'wfrurbrd',
'wrmpakxf',
'ubczqfpb',
'sohcpnnk',
'lrjfiylr',
'vdwmlkne',
'tlekcnym',
'jadicszq',
'kztcxzwn',
'qptbjfuf',
'gjhhzhuh',
'myjjzyzf',
'akxabrde',
'lgnystrm',
'zxtuokjq',
'bffdkzun',
'modssgbc',
'xvedbysj',
'czpdqkdn',
'qlzprpuj',
'abuoeoex',
'ymxzkccu',
'jbslwqku',
'wgehntzj',
'zivljhpa',
'jsustyir',
'xglfyyun',
'emitjtfp',
'jyltuhtp',
'vbqgtwni',
'iojlycew',
'bhrrxbcg',
'vhswcbaz',
'tzsobxfz',
'hpcbvvnt',
'cuilflxq',
'ohklemxz',
'aklsjxas',
'qczwvhdv',
'kecxvvua',
'nnlcshhz',
'gtxeqhed',
'ebxirqft',
'xawqimpq',
'ehizwpau',
'gjgobwcc',
'wuojmfgr',
'bubtyubk',
'mfnjqxsd',
'bzuobqeg',
'cnwsyfqt',
'difjbhys',
'awvnvqxb',
'eblmxhlf',
'enoeneis',
'ispzlatd',
'pvtyulpk',
'lrjnrogd',
'dfxsbdhb',
'hivbahmg',
'azpiqnci',
'ktcmajzb',
'mfngiemn',
'xtktrzne',
'xydgmtrj',
'ittdjyqt',
'pvrapfhj',
'pfpqmubd',
'eemyoxye',
'eyorfilw',
'jmztxeql',
'oybsnyus',
'nihbjowm',
'gknzlcem',
'chcslofr',
'zbpsfdsg',
'dxbzaqos',
'cqzhujhq',
'qlvbwfsn',
'ydgipmtr',
'fhbcfors',
'enxopgsy',
'sbtdtgjn',
'klapbmbk',
'qxuqemnb',
'pspxwtlz',
'vnorcada',
'qcmhrdcg',
'lxwmeejb',
'mxgueeih',
'rggqkdvj',
'kwyrmqms',
'nzfhpzmc',
'ohrlyols',
'vrzgflzw',
'zujmieye',
'smzjujaa',
'mwfontrh',
'suhnkihy',
'tpavgxze',
'tjzbnyvy',
'leakgvti',
'cptoaqgx',
'pegikbtg',
'ocggetmv',
'xxiytrxf',
'yqpipjfa',
'tihrfpez',
'ukxiajhk',
'xighnfgf',
'sgcitckm',
'tbvhtnmr',
'jwbooowx',
'ldnjtipa',
'xpehmloo',
'stxkplmo',
'lgqddrhb',
'hdhsqxdt',
'daxztiim',
'pcafwglc',
'ynhyvsjt',
'lujyvuug',
'pnicccbq',
'stmwwjec',
'zzsysevl',
'ypvbqpfo',
'tljegcgq',
'bqanmeji',
'ejqeknda',
'jndzdwde',
'pneveaiv',
'gjwpfrjz',
'zzwsmfss',
'ylakaful',
'gmyzwvot',
'toiqhrrh',
'htszfvzt',
'hagybnpz',
'ocliwiav',
'evzlyabp',
'txppqmkk',
'xovsnwyn',
'smsbqsax',
'anysxgxd',
'ztqoskny',
'uuvozsty',
'nynkbdot',
'nxpgfyyw',
'vxftiuty',
'svijqamw',
'rqdjnwdm',
'vqhcjbqp',
'mibabxxi',
'bffhbltc',
'zotfzcbx',
'ozsxkzzh',
'mluqlfrm',
'wvrnhdvg',
'fmyniyor',
'kcdxacgg',
'oxfzqjba',
'fdhedghj',
'otytinze',
'uufwzhll',
'jnlztauj',
'ktujpjae'
];

var codeLength = input[0].length;
var codeString = '';
for(let i = 0; i < codeLength; i++) {
	var currentColLetters = [];
	RowLoop:
	for(let j = 0; j < input.length; j++) {
		let currentLetter = input[j].charAt(i);
		
		for(let k = 0; k < currentColLetters.length; k++) {
			if(currentColLetters[k].letter === currentLetter) {
				currentColLetters[k].count++;
				continue RowLoop;
			}
		}
		
		var letterSpecs = {
			letter: currentLetter,
			count: 1
		};
		
		currentColLetters.push(letterSpecs);
	}
	
	//TODO use a get max function instead?
	currentColLetters.sort(function(a,b) {
		return b.count - a.count;
	});
	
	codeString = codeString + currentColLetters[0].letter;
}

console.log(codeString);