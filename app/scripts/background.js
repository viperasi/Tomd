var h2m = require('h2m')
var beautify_html = require('js-beautify').html;

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { cmd: "tomd" }, function (response) {
    console.log("mdresp--->", response)
    var prety_html = beautify_html(response)
    let md = h2m(prety_html);
    console.log('md=-===>', md)
    chrome.storage.local.set({md: md}, function() {
      chrome.tabs.sendMessage(tab.id, { cmd: "view"}, function(resp){
        console.log("resp-------->", resp)
      });
    });
  });
});