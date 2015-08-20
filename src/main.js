var page = tabris.create("Page", {
  title: "Web View",
  topLevel: true
});

var urlInput = tabris.create("TextInput", {
  layoutData: {left: 8, right: 8, top: 8},
  message: "Enter URL...",
  text: "http://http://rap.eclipsesource.com/demo/release/rapdemo/"
}).on("accept", loadUrl).appendTo(page);

var webview = tabris.create("WebView", {
  layoutData: {left: 0, top: [urlInput, 8], right: 0, bottom: 0}
}).appendTo(page);

function loadUrl() {
  webview.set("url", urlInput.get("text"));
}

loadUrl();

page.open();
