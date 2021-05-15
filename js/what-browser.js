// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
	return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var uuse = "You use "
if (isOpera == true) {
	var whattoshow = uuse + "Opera."
} else if (isFirefox == true) {
	var whattoshow = uuse + "Mozilla Firefox."
} else if (isSafari == true) {
	var whattoshow = uuse + "Safari."
} else if (isIE == true) {
	var whattoshow = uuse + "Internet Explorer."
} else if (isEdge == true) {
	var whattoshow = uuse + "Microsoft Edge."
} else if (isChrome == true) {
	var whattoshow = uuse + "Chrome or a Chromium browser (Brave, Vivaldi, etc.)"
} else {
	var whattoshow = "I don't know what browser you use."
}
