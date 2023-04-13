function redirect(requestDetails) {
  const searchEngineURL = 'https://www.google.com/search?q=';

  let url = new URL(requestDetails.url);
  if (url.hostname === 'www.google.com') {
    return;
  }

  let searchQuery = url.searchParams.get('q');
  if (searchQuery) {
    let redirectURL = searchEngineURL + encodeURIComponent(searchQuery);
    return {
      redirectUrl: redirectURL
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ['*://*.duckduckgo.com/*'] },
  ['blocking']
);
