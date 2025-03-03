chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    // Construct new URL by prepending cooked.wiki/ and encoding the original URL
    const newUrl = "https://cooked.wiki/" + encodeURIComponent(tab.url);
    chrome.tabs.update(tab.id, { url: newUrl });
  }
});
