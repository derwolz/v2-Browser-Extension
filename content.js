	const titleID = "product-title"
const v2Link = "href"
const seller = "seller-name"
const detaildiv = "detail-box"
var TitleMatches = ""
var Client = ""
var DateStart = 0;
var DateEnd = 0;
var CaseNr = 0;
var SaleAmt = 0;
var d = new Date();
const urlpos = 7 // this is the final position after / indexed at 0 ie https:[0]/[1]/www.web.com[2]/cat1[3]/cat2[4]

chrome.runtime.onMessage.addListener(function(request){
	var caseInfo = request.split(",")
	CaseNr = caseInfo[0]
	DateStart = caseInfo[1];
	DateEnd = caseInfo[2];
	SaleAmt = caseInfo[3];

	
	TitleMatches = document.getElementsByClassName(titleID);
	Client = document.getElementsByClassName(seller)[0].innerHTML.split('>')[1].split('<')[0]; // removes <stuff> from seller name
	
	var node = document.getElementsByClassName("pagination")[0].getElementsByTagName("a");
	var result = []
	//for (i = 1; i < node.length;i++){ 
	//node[i].trigger("click",
	//		document.addEventListener('DOMContentLoaded', function() {
			result += GetInfo()
			
	//	}));
		
	//}
	console.log(result)
	
	
	var val =""
	for (let i = 0; i < result.length; i++){
	val += result[i]
	}
	const el = document.createElement('textarea');
	console.log
	el.value=val;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	
})

function GetInfo() {
	var v2Links = document.getElementsByClassName(detaildiv);
	//console.log(v2Links);
	var v2Title = []
	for (let i = 1; i < TitleMatches.length; i++){
		v2Title.push(TitleMatches[i].innerHTML);
	}
	var v2IDs = []
	for (let i = 0; i < v2Links.length; i++){
		var temp_arr = v2Links[i].getElementsByTagName('a')[0].href.split('/');
		v2IDs.push(temp_arr[temp_arr.length-1]);
	}
	var v2Links = document.getElementsByClassName(detaildiv);
	//console.log(v2Links);
	var v2Title = []
	for (let i = 1; i < TitleMatches.length; i++){
		v2Title.push(TitleMatches[i].innerHTML);
	}
	var v2IDs = []
	for (let i = 0; i < v2Links.length; i++){
		var temp_arr = v2Links[i].getElementsByTagName('a')[0].href.split('/');
		v2IDs.push(temp_arr[temp_arr.length-1]);
	}
	var presubmittals = []
	for (let i = 0; i < v2IDs.length; i++){
		presubmittals.push(v2IDs[i] + "	" + v2Title[i]+"	"+DateStart+"	"+DateEnd+"	"+ CaseNr +"		"
		+"	"+SaleAmt+"	"+Client+"	"+d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear() + "\n")
	}
	return presubmittals;
}

function sleep(ms){
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < ms);
}