var CaseData = []
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("Sender").addEventListener('click', onclick, false)
	
	function onclick(){
		CaseData[0] = document.getElementById("cNum").value;
		CaseData[1] = document.getElementById("sDate").value;
		CaseData[2] = document.getElementById("eDate").value;
		CaseData[3] = document.getElementById("cSale").value;
		var result = ""
		for (let i = 0; i < CaseData.length; i++){
			result += CaseData[i] + ",";
			
		}
		chrome.tabs.query({currentWindow:true, active: true},
			function (tabs){
				chrome.tabs.sendMessage(tabs[0].id, result)
		})
		
	}
}, false)