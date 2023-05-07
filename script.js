chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  let targetURL = tabs[0].url; 
  targetURL = encodeURIComponent(targetURL); 
  let requestURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + targetURL + "&size=[100]x[100]"
  document.getElementById("qr-image").setAttribute('src', requestURL); 
});










