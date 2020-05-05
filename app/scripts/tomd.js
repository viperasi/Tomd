var body = document.body;
var html = document.body.innerHTML;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendMessage) {
        if (request.cmd == "tomd") {
            sendMessage(html);
        } else if(request.cmd == "view"){
            // sendMessage("not use"); // snub them.
            body.innerHTML = "";
            chrome.storage.local.get('md', function(data) {
                console.log("data---->", data)
                var current = data.md;
                body.innerHTML = current;
                sendMessage("ok")
              });
        }
        return true;
    });