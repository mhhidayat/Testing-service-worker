
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
 }else {
    alert('no service worker')
}
