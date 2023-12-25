export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sendResponse("My Response is Swift")
  })
});
