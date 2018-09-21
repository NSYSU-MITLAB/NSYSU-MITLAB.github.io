
function _st_u_en(str) 
{ 
	var en="",i=0; 
	
	for(i=0;i<str.length;i++){ 
		if(str.charCodeAt(i)>=0&&str.charCodeAt(i)<=255){ 
			en=en+escape(str.charAt(i)); 
		} 
		else { 
			en=en+str.charAt(i); 
		} 
	}
	
	return en; 
} 

function _st_g_sr() 
{ 
	if (self.screen) { 
		sr=screen.width+"x"+screen.height; 
	} 
	else if (self.java) { 
		var j=java.awt.Toolkit.getDefaultToolkit(); 
		var s=j.getScreenSize(); 
		sr=s.width+"x"+s.height; 
	} 

	return sr; 
} 

function _st_g_sc() 
{ 
	var sc=""; 

	if (self.screen) { 
		sc=screen.colorDepth+"-bit"; 

	} 
	return sc; 
} 

function _st_g_lg() 
{ 
	var lg=""; 
	var n=navigator; 

	if (n.language) { 
		lg=n.language.toLowerCase(); 
	} 
	else if (n.browserLanguage) { 
		lg=n.browserLanguage.toLowerCase(); 
	}
	
	return lg; 
} 

function _st_g_ag() 
{ 
	var ag=""; 
	var n=navigator; 

	if (n.userAgent) { 
		ag = n.userAgent; 
	} 

	return ag; 
}

function _st_g_je() { 
	var je=""; 
	var n=navigator; 
	je = n.javaEnabled()?1:0; 

	return je; 
} 

function _st_g_fl() 
{ 
	var f="",n=navigator; 
	
	if (n.plugins && n.plugins.length) { 
		for (var ii=0;ii<n.plugins.length;ii++) { 
			if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) { 
				f=n.plugins[ii].description.split('Shockwave Flash ')[1]; 
				break; 
			} 
		} 
	} 
	else if (window.ActiveXObject) { 
		for (var ii=10;ii>=2;ii--) { 
			try { 
				var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');"); 
				if (fl) { 
					f=ii + '.0'; break; 
				} 
			} catch(e) {} 
		} 
	} 
	
	return f; 
}

function _st_c_co()
{
	var c_en = (navigator.cookieEnabled)? 1 : 0;

	return c_en;
}

function _st_g_ss_val(str)
{
	len=str.indexOf("_"); 
	str=str.substring(len+1); 
	len=str.indexOf("_"); 
	str=str.substring(len+1); 

	return str; 
}

function _st_g_co(name) 
{ 
	var mn=name+"="; 
	var b,e; 
	var co=document.cookie; 

	if (mn=="=") { 
		return co; 
	} 
	b=co.indexOf(mn); 
	if (b < 0) { 
		return ""; 
	} 
	
	e=co.indexOf(";", b+name.length); 

	if (e < 0) { 
		return co.substring(b+name.length + 1); 
	} 
	else { 
		return co.substring(b+name.length + 1, e); 
	} 
} 

function _st_s_co(name,val,cotp) 
{ 
	var date=new Date; 
	var year=date.getYear(); 
	var hour=date.getHours(); 

	if (cotp == 0) { 
		document.cookie=name+"="+val+";"; 
	} 
	else if (cotp == 1) { 
		year=year+10; 
		date.setYear(year); 
		document.cookie=name+"="+val+";expires="+date.toGMTString()+";"; 
	} 
	else if (cotp == 2) { 
		hour=hour+1; 
		date.setHours(hour); 
		document.cookie=name+"="+val+";expires="+date.toGMTString()+";"; 
	} 
} 

function _st_g_so() 
{ 
	var so=""; 
	var n=navigator; 
	
	if (n.appName) { 
		so=n.appName; 
	} 
	
	return so; 
} 

function _st_g_stm() 
{ 
	var date = new Date(); 
	var yy=date.getYear(); 
	var mm=date.getMonth(); 
	var dd=date.getDate(); 
	var hh=date.getHours(); 
	var ii=date.getMinutes(); 
	var ss=date.getSeconds(); 
	var i; 
	var tm=0; 
	for(i = 1970; i < yy; i++) { 
		if ((i % 4 == 0 && i % 100 != 0) || (i % 100 == 0 && i % 400 == 0)) { 
			tm=tm+31622400; 
		} 
		else { 
			tm=tm+31536000; 
		} 
	}
	mm=mm+1;
	
	for(i = 1; i < mm; i++) { 
		if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) { 
			tm=tm+2678400; 
		} 
		else { 
			if (i == 2) { 
				if ((yy % 4 == 0 && yy % 100 != 0) || (yy % 100 == 0 && yy % 400 == 0)) { 
					tm=tm+2505600; 
				} 
				else { 
					tm=tm+2419200; 
				} 
			} 
			else { 
				tm=tm+2592000; 
			} 
		} 
	}
	
	tm = tm +  (dd-1) * 86400; tm = tm +  hh * 3600; 
	tm = tm +  ii * 60; 
	tm = tm +  ss; 
	return tm; 
} 

function _st_g_ctm(str) 
{ 
	len=str.indexOf("_"); 
	str=str.substring(len+1); 
	len=str.indexOf("_"); 
	str=str.substring(0,len); 
	return parseInt(str, 10); 
}

function _st_g_u_sn(str) 
{ 
	len=str.indexOf("_"); 
	str=str.substring(0,len); 

	return parseInt(str); 
}

if(typeof YAHOO=="undefined"){var YAHOO={};}YAHOO.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=A[C].split(".");E=YAHOO;for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};

YAHOO.createEl = {
    get : function(sTag, oAttr, sHtml, sAppendType) {
        var el = document.createElement(sTag);
        for (var i in oAttr) { // necessary for each all item
            el[i] = oAttr[i];
        }
        if (sHtml) {
            el.innerHTML = sHtml;
        }
        if(sAppendType){
            this.append(el,sAppendType);
        }
        if(!el.id){
            YAHOO.namespace("util.Dom");
            if(YAHOO.util.Dom.generateId){
                YAHOO.util.Dom.generateId(el);
            }
        }
        return el;
    },
    append : function(dNode,sType){
        switch(sType){
            default :
            case 'head':
                var p = document.getElementsByTagName("head")[0] || document.body;
                p.appendChild(dNode);
                break;
            case 'bodyAbsolute':
                dNode.style.position = 'absolute';
                dNode.style.display = 'none';
            case 'bodyStart':
                document.body.insertBefore(dNode,document.body.childNodes[0]);
                break;
            case 'bodyEnd':
                document.body.appendChild(dNode);
                break;
        }
    },
    remove : function(dNode){
        // Must use setTimeout, otherwise may cause crashes in IE6
        setTimeout(function() {
            dNode.parentNode.removeChild(dNode);
            dNode = null;
        }, 0);
    },
    js : function(sUrl,sCharset){
         var dNode = this.get("script",{src:sUrl,type:'text/javascript'},null,'head');
         if(sCharset){
            dNode.setAttribute('charset',sCharset);
         }
         return dNode;
    } 
};

var _st_unit_id=20978;
var _st_expr_tm=1800; 
var _st_url_sn=0;
var _st_ip="tw.rc.webmaster.yahoo.com";
var _st_dest="/ystat.do?unit_id="+_st_unit_id; 
var _st_nuv=0; 
var _st_uv =""; 
var _st_ss =""; 
var _st_ref=""; 
var _st_url=""; 
var _st_clr=""; 
var _st_scr=""; 
var _st_lng=""; 
var _st_agt=""; 
var _st_jvm=""; 
var _st_flu="";
var _st_sof=""; 
var _st_cva=""; 
var _st_len=0; 

var rand;
var _en_co = _st_c_co();
var _ss_val = 0;

_st_uv="7672924021247574911"; 
_st_nuv=1;
	
_st_ss=_st_g_co("ystat_tw_ss_"+String(_st_unit_id)); 
if (_st_ss == "") { 
	_st_url_sn = 0;
	rand = parseInt( Math.random() * 4000000000 );
	_st_ss="0_"+_st_g_stm()+"_"+String(rand);
	_st_s_co("ystat_tw_ss_"+String(_st_unit_id), _st_ss, 0); 
} 
else { 
	if (_st_g_stm() - _st_g_ctm(_st_ss) > _st_expr_tm) { 
		_st_url_sn = 0;
		rand = parseInt( Math.random() * 4000000000 );
		_st_ss="0_"+_st_g_stm()+"_"+String(rand); 
	} 
	else{
		_st_url_sn = _st_g_u_sn(_st_ss) + 1;
		_ss_val = _st_g_ss_val(_st_ss);
		_st_ss = String(_st_url_sn)+"_"+_st_g_stm()+"_"+_ss_val; 
	}
		
	_st_s_co("ystat_tw_ss_"+String(_st_unit_id), _st_ss, 0); 
} 
	
_st_cva=String(Math.random()); 
_st_len=_st_ss.indexOf("_"); 
_st_ss=_st_g_ss_val(_st_ss);
_st_ref=document.referrer; 
_st_ref=_st_u_en(String(_st_ref)); 
_st_url=document.URL; 
_st_url=_st_u_en(String(_st_url)); 
_st_clr=_st_g_sc(); 
_st_clr=_st_u_en(String(_st_clr)); 
_st_scr=_st_g_sr(); 
_st_scr=_st_u_en(String(_st_scr)); 
_st_lng=_st_g_lg(); 
_st_lng=_st_u_en(String(_st_lng)); 
_st_agt=_st_g_ag(); 
_st_agt=_st_u_en(String(_st_agt)); 
_st_jvm=_st_g_je(); 
_st_jvm=_st_u_en(String(_st_jvm)); 
_st_flu=_st_g_fl(); 
_st_flu=_st_u_en(String(_st_flu)); 
_st_sof=_st_g_so(); 
_st_sof=_st_u_en(String(_st_sof)); 
_st_dest="http://"+_st_ip+_st_dest+"&uv="+_st_uv+"&nuv="+_st_nuv+"&ss="+_st_ss+"&usn="+_st_url_sn+"&ec="+_en_co+"&ref="+_st_ref+"&url="+_st_url+"&nac="+_st_sof+"&agt="+_st_agt+"&clr="+_st_clr+"&scr="+_st_scr+"&lng="+_st_lng+"&jvm="+_st_jvm+"&flu="+_st_flu+"&tm=1240517357"+"&tc=6dfd988c03cb851423ddf8241beb6340"+"&ut=0"+"&cnu="+_st_cva;
YAHOO.createEl.js(_st_dest);

