var page = tabris.create("Page", {
  title: "Асклепиус справка",
  topLevel: true
});

var webview = tabris.create("WebView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0}
}).appendTo(page);

function loadUrl() {
  webview.set("url", "http://94.79.10.35:9740/rinfo/std");
}

loadUrl();

page.open();
