
var expdate = new Date();
expdate.setTime (expdate.getTime() +  (60 * 1000 )); 
document.cookie = "HMS=a2c25fc409822739; expires=" + expdate.toGMTString() +  "; path=/";

var nav = navigator;
var doc = document;
var agt = nav.userAgent.toLowerCase();
var apv = nav.appVersion.toLowerCase();
var cpu = nav.cpuClass ? escape(nav.cpuClass) : escape(nav.oscpu);
var plf = escape(nav.platform);
var lan = nav.browserLanguage ? nav.browserLanguage : 
	nav.userLanguage ? nav.userLanguage : nav.language;
var apn = (nav.appName == 'Microsoft Internet Explorer') ? '_MSIE' :
	(nav.appName == 'Netscape') ? '_NS' : escape(nav.appName);

var tz = (new Date()).getTimezoneOffset() * (-1);
var sc = 'W' + screen.width + 'H' + screen.height;
var cd = screen.colorDepth;
var wv,fv,xv,cy,acv,xmv,qtv;
var dt = encodeURIComponent(doc.title);
var dl = encodeURIComponent(doc.location);
var rr = encodeURIComponent(doc.referrer);

var qs = 'uid=' + '51522';
qs += '&ts=1240517493';
qs += '&cs=a2c25fc409822739';
qs += '&apn=' + apn;
qs += '&plf=' + plf;
qs += '&cpu=' + cpu;
qs += '&lan=' + lan;
qs += '&tz=' + tz;
qs += '&sc=' + sc;
qs += '&cd=' + cd;
qs += '&dl=' + dl;
qs += '&rr=' + rr;

if ( nav.product ) {
	qs += '&npd=' + escape(nav.product);
	}
if ( nav.productSub ) {
	qs += '&nps=' + escape(nav.productSub);
	}
if ( nav.vendor ) {
	qs += '&nvd=' + escape(nav.vendor);
	}
if ( nav.vendorSub ) {
	qs += '&nvs=' + escape(nav.vendorSub);
	}
// document.write("<h3>CNFO...</h3>");
qs += '&cy=' + 'undefined';
qs += '&fv=' + '9.0.124';
qs += '&wv=' + 'undefined';
qs += '&xv=' + 'undefined';
qs += '&acv=' + 'undefined';
qs += '&xmv=' + 'undefined';
qs += '&qtv=' + 'undefined';
qs += '&jsv=' + 'JS15';
qs += '&dt=' + dt;
document.write("<script src=http://h06.hotrank.com.tw/hotrank88?" + qs + "></script>");
