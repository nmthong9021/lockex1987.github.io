/* (c) 2008, 2009 Add This, LLC */
var addthis_conf={ver:200};function addthis_invoke(s,u,t,p){addthis_config.username=p||_ate.pub();addthis_share.url=(u||w.addthis_url);addthis_share.title=(t||w.addthis_title);var w=window,lu=addthis_share.url.toLowerCase(),lt=addthis_share.title.toLowerCase();if(lu===""||lu==="[url]"){addthis_share.url=location.href;}if(lt===""||lt==="[title]"){addthis_share.title=document.title;}_ate.as(s);return false;}if(!window._ate){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atu="undefined",_atc={dr:0,ver:250,loc:0,enote:"",cwait:500,tamp:0.2,samp:0.01,camp:1,vamp:1,addr:-1,addt:1,xfl:!!window.addthis_disable_flash,abf:!!window.addthis_do_ab};(function(){try{var l=window.location;if(l.protocol.indexOf("file")===0){_atr="http:"+_atr;}if(l.hostname.indexOf("localhost")!=-1){_atc.loc=1;}}catch(e){}var ua=navigator.userAgent.toLowerCase(),d=document,w=window,wa=w.addEventListener,we=w.attachEvent,dl=d.location,b={win:/windows/.test(ua),chr:/chrome/.test(ua),iph:/iphone/.test(ua),saf:(/webkit/.test(ua))&&!(/chrome/.test(ua)),web:/webkit/.test(ua),opr:/opera/.test(ua),msi:(/msie/.test(ua))&&!(/opera/.test(ua)),ffx:/firefox/.test(ua),ie6:/msie 6.0/.test(ua),ie7:/msie 7.0/.test(ua),mod:-1},_9={isBound:false,isReady:false,readyList:window.addthis_onload||[],onReady:function(){if(!_9.isReady){_9.isReady=true;var l=_9.readyList;for(var fn=0;fn<l.length;fn++){l[fn].call(window);}_9.readyList=[];}},addLoad:function(_c){var _d=w.onload;if(typeof w.onload!="function"){w.onload=_c;}else{w.onload=function(){if(_d){_d();}_c();};}},bindReady:function(){if(r.isBound){return;}r.isBound=true;if(d.addEventListener&&!b.opr){d.addEventListener("DOMContentLoaded",r.onReady,false);}var _e=window.addthis_product;if(_e&&_e.indexOf("f")>-1){r.onReady();return;}if(b.msi&&window==top){(function(){if(r.isReady){return;}try{d.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}r.onReady();})();}if(b.opr){d.addEventListener("DOMContentLoaded",function(){if(r.isReady){return;}for(var i=0;i<d.styleSheets.length;i++){if(d.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}}r.onReady();},false);}if(b.saf){var _10;(function(){if(r.isReady){return;}if(d.readyState!="loaded"&&d.readyState!="complete"){setTimeout(arguments.callee,0);return;}if(_10===undefined){var _12=d.gn("link");for(var i=0;i<_12.length;i++){if(_12[i].getAttribute("rel")=="stylesheet"){_10++;}}var _14=d.gn("style");_10+=_14.length;}if(d.styleSheets.length!=_10){setTimeout(arguments.callee,0);return;}r.onReady();})();}r.addLoad(r.onReady);},append:function(fn,_16){r.bindReady();if(r.isReady){fn.call(window,[]);}else{r.readyList.push(function(){return fn.call(window,[]);});}}},r=_9,_17={vst:[],rev:"$Rev: 69494 $",bro:b,clck:1,show:1,dl:dl,camp:_atc.camp-Math.random(),samp:_atc.samp-Math.random(),vamp:_atc.vamp-Math.random(),tamp:_atc.tamp-Math.random(),ab:"-",scnt:1,seq:1,inst:1,wait:500,tmo:null,cvt:[],svt:[],sttm:new Date().getTime(),max:268435455,pix:"tev",sid:0,sub:!!window.at_sub,uid:null,oot:null,swf:"//bin.clearspring.com/at/v/1/button1.6.swf",evu:"//e1.clearspring.com/at/",ifpp:null,com:function(m){if(window.parent&&window.postMessage){window.parent.postMessage(m,"*");}else{_17.ifm(m);}},ifm:function(m){if(addthis_wpl){var a=(addthis_wpl.split("#"))[0];window.parent.location.href=a+"#at"+m;}return false;},hash:window.location.hash,ifp:function(){var a=_17,m=window.location.hash,p=0;if(m&&m.indexOf("#at")>-1){m=m.substr(3).split(";");for(var k in m){var v=m[k].length>3?m[k].substr(0,3):null;switch(v){case"ssh":p=1;a.ssh(m[k].substr(4));break;case"uid":p=1;a.asetup(m[k].substr(4));break;}}if(p){if(!a.hash.length||a.hash==""){a.hash="#";}window.location.hash=a.hash;}}if(a.gssh&&a.guid){clearInterval(a.ifpp);}},pmh:function(e){if(e.origin.substr(e.origin.length-12)==".addthis.com"){var _21=e.data.split(";");for(var m in _21){var msg=_21[m],typ=msg&&typeof(msg)=="string"?msg.substr(0,3):"";if(typ=="uid"){_17.asetup(_21[m].substr(4));}else{if(typ=="ssh"){_17.ssh(_21[m].substr(4));}}}}},ssh:function(ssh){_17.gssh=1;window.addthis_ssh=_duc(ssh);},mun:function(s){var mv=291;if(s){for(var i=0;i<s.length;i++){mv=(mv*(s.charCodeAt(i)+i)+3)&1048575;}}return(mv&16777215).toString(32);},ibt:function(){if(_17.bti){return _17.bti;}var _29=(window.addthis_product||"men").substr(0,3),_2a=_29=="bkm"||_29=="fct"||_29=="fxe";if(_2a){_17.bti=_2a;}return _2a;},off:function(){return Math.floor((new Date().getTime()-_17.sttm)/100).toString(16);},ran:function(){return Math.floor(Math.random()*4294967295).toString(36);},srd:function(){if(_17.dr){return"&pre="+_euc(_17.dr);}else{return"";}},cst:function(c){return"CXNID=2000001.521545608054043907"+(c||2)+"NXC";},imgz:[],hrr:function(_2c){if(_2c&&_2c.urls&&_2c.urls instanceof Array){for(var i=0;i<_2c.urls.length;i++){var img=new Image();_17.imgz.push(img);img.src=_2c.urls[i];}}},img:function(i,c){if(!window.at_sub&&!_atc.xtr){var a=_17,dr=a.dr,rev=((a.rev||"").split(" "));if(dr){dr=(dr.split("?")).shift();dr=(dr.split("http://")).pop();if(dr.length>25){dr=dr.substr(0,25);}}var img=new Image();a.imgz.push(img);img.src=_atr+"live/t00/"+i+".gif?"+(a.uid!==null?"uid="+a.uid+"&":"")+a.ran()+"&"+a.cst(c)+(a.pub()?"&pub="+a.pub():"")+(dr?"&dr="+_euc(dr):"")+(rev.length>1?"&rev="+rev[1]:"");}},cuid:function(){return(_17.sttm&_17.max).toString(16)+(Math.floor(Math.random()*_17.max)).toString(16);},ssid:function(){if(_17.sid===0){_17.sid=_17.cuid();}return _17.sid;},sev:function(id,_36){_17.pix="sev-"+(typeof(id)!=="number"?_euc(id):id);_17.svt.push(id+";"+_17.off());if(_36===1){_17.xmi(true);}else{_17.sxm(true);}},cev:function(k,v){_17.pix="cev-"+_euc(k);_17.cvt.push(_euc(k)+"="+_euc(v)+";"+_17.off());_17.sxm(true);},sxm:function(b){if(_17.tmo!==null){clearTimeout(_17.tmo);}if(b){_17.tmo=_17.sto("_ate.xmi(false)",_17.wait);}},sto:function(c,t){return setTimeout(c,t);},sta:function(){var a=_17;return"AT-"+(a.pub()?a.pub():"unknown")+"/-/"+a.ab+"/"+a.ssid()+"/"+(a.seq++)+(a.uid!==null?"/"+a.uid:"");},xred:function(){var w=window,a=_17,hp=0,dr=d.referer||d.referrer||"",du=dl?dl.href:null,fnd=0;if(a.camp>=0&&du&&dl&&dl.protocol&&(dr.indexOf(".com")>-1)&&(dl.protocol.indexOf("https")==-1)){if(dr&&dr.match(/ws\/results\/(Web|Images|Video|News)/)){fnd=1;}else{if(dr.indexOf(".com/search")>-1){var t=dr.split("?").pop().split("&");for(var i=0;i<t.length;i++){if(t[i].indexOf("q=")===0||t[i].indexOf("p=")===0||t[i].indexOf("query")===0||t[i].indexOf("qry")===0||t[i].indexOf("text")===0){fnd=1;break;}}}}if(!_atc.xtr&&!_atc.xck&&fnd&&a.mun(a.pub())!=="mu2r"){var o=d.ce("script");o.src="//cf.addthis.com/red/p.json?callback=_ate.hrr"+(a.pub()?"&pub="+a.pub():"")+(a.uid&&a.uid!=="anonymous"?"&uid="+_euc(a.uid):"")+"&url="+_euc(du)+"&ref="+_euc((d.referer||d.referrer));d.gn("head")[0].appendChild(o);}}},xld:function(){var a=_17;if(!a.xld_p){a.xld_p=1;if(a.samp>=0&&!a.sub){a.sev("20");a.cev("plo",Math.round(1/_atc.samp));if(a.dr){a.cev("pre",a.dr);}}a.xred();a.img(_atc.ver+"lo","2");}},xmi:function(_47){var a=_17,h=a.dl?a.dl.hostname:"";if(!a.uid){a.dck("X"+a.cuid());}else{a.coo();}if(a.cvt.length+a.svt.length>0){a.sxm(false);if(a.seq===1){a.cev("pin",a.inst);}if(_atc.xtr){return;}if(h.indexOf(".gov")>-1||h.indexOf(".mil")>-1){_atc.xck=1;}var urp=a.pix+"-"+a.ran()+".png?ev="+_17.sta()+"&se="+a.svt.join(",")+"&ce="+a.cvt.join(",")+(_atc.xck?"&xck=1":""),url=a.evu+urp;a.cvt=[];a.svt=[];if(_47){var d=document,i=d.ce("iframe");i.id="_atf";i.src=url;_17.opp(i.style);d.body.appendChild(i);i=d.getElementById("_atf");}else{var img=new Image();a.imgz.push(img);img.src=url;}}},loc:function(){return _atc.loc;},opp:function(st){st.width=st.height="1px";st.position="absolute";st.zIndex=100000;},pub:function(){return window.addthis_config&&addthis_config.username?_euc(addthis_config.username):(window.addthis_pub||"");},plo:[],lad:function(x){_17.plo.push(x);},lng:function(al){var d=document;if(al&&(al.toLowerCase()).indexOf("en")!==0&&!_17.pll){_17.pll=_17.ajs("static/r07/lang01.js");}},ajs:function(_53){var o=d.ce("script");o.src=_atr+_53;d.gn("head")[0].appendChild(o);return o;},jlo:function(){try{var d=document,al=(window.addthis_language||addthis_config.ui_language||(_17.bro.msi?navigator.userLanguage:navigator.language));_17.lng(al);if(!_17.pld){_17.pld=_17.ajs("static/r07/menu35.js");}}catch(e){}},igv:function(u,t){if(!w.addthis_share){w.addthis_share={url:w.addthis_url||u,title:w.addthis_title||t};}if(!w.addthis_config){w.addthis_config={username:w.addthis_pub};}else{if(addthis_config.data_use_flash===false){_atc.xfl=1;}if(addthis_config.data_use_cookies===false){_atc.xck=1;}}},lod:function(arg){try{var w=window,a=_17,hp=0,f=((arg===1||w.addthis_load_flash)&&!_atc.abf),dr=d.referer||d.referrer||"",du=dl?dl.href:null,si=du?du.indexOf("sms_ss"):-1,ifr=d.ce("iframe"),al=((w.addthis_language||(w.addthis_config?w.addthis_config.ui_language:null)||(_17.bro.msi?navigator.userLanguage:navigator.language)).split("-"))[0],_63=_atr+"static/r07/sh05.html",lks=d.getElementsByTagName("link");for(var i=0;i<lks.length;i++){var l=lks[i];if(l.rel&&l.rel=="canonical"&&l.href){du=l.href;}}a.igv(du,d.title||"");_17.gov();a.dr=dr;a.ab=(!al||al=="en")&&(a.bro.ffx||a.bro.msi)&&!a.ibt()?"ps-"+(window.addthis_ab!==undefined?addthis_ab:(a.tamp>0?Math.min(4,Math.floor(Math.random()*4+1)):0)):"~";var _67=(a.swf&&!_atc.xfl&&!(a.loc())&&!_atc.abf&&(f||a.uid===null||(a.uid!=="anonymous"&&a.oot&&((new Date()).getTime()-a.oot>60480000))));_63+="#swfp="+(_67&&a.bro.msi?1:0);if(!a.bro.msi&&_67){var _68=function(o,n,v){var c=d.ce("param");c.name=n;c.value=v;o.appendChild(c);},div=d.ce("div"),o=d.ce("object");o.id="atff";o.data=a.swf;o.width=o.height="1px";o.quality="high";o.type="application/x-shockwave-flash";_68(o,"wmode","transparent");_68(o,"allowScriptAccess","always");div.appendChild(o);d.body.insertBefore(div,d.body.firstChild);}if(dl.href.indexOf(_atr)==-1){ifr.id="_atssh";a.opp(ifr.style);ifr.width=ifr.height=1;ifr.frameborder=ifr.style.border=0;ifr.style.top=ifr.style.left=0;if(window.postMessage){ifr.src=_63;if(_17.bro.msi){window.attachEvent("onmessage",a.pmh);}else{window.addEventListener("message",a.pmh,false);}}else{if(a.hash.indexOf("#atuid")===0||a.hash.indexOf("#atssh")===0){window.location.hash=a.hash="#";}ifr.src=_63+"&wpl="+_euc(dl.href);if(a.ifpp){clearInterval(a.ifpp);}a.ifpp=setInterval(function(){_17.ifp();},50);}ifr=d.body.appendChild(ifr);a.sifr=ifr;}if(!f){if(_67){a.uoo();a.sto("_ate.xld()",5000);}else{a.guid=1;a.xld();}if(si>-1){var sm=du.substr(si),am=sm.indexOf("&");if(am>-1){sm=sm.substr(0,am);}sm=(sm.split("="))[1];if(a.vamp>=0&&!a.sub&&sm.length){a.cev("plv",Math.round(1/_atc.vamp));a.cev("rsc",sm);}}}if(a.plo.length>0){a.jlo();}}catch(e){}},kck:function(k){var d=document;if(d.cookie){d.cookie=k+"= ; expires=Tue, 31 Mar 2009 05:47:11 UTC; path=/";}},rck:function(k){var d=document;if(d.cookie){var ck=d.cookie.split(";");for(var i=0;i<ck.length;i++){var c=ck[i],x=c.indexOf(k+"=");if(x>=0){return c.substring(x+(k.length+1));}}}return;},uoo:function(){_17.sck("_csoot",(new Date().getTime()));},coo:function(f){if(_17.uid=="anonymous"&&!_17.oot){_17.xck=1;_17.uoo();}},dck:function(c){_17.uid=c;_17.sck("_csuid",c);_17.coo();},gov:function(){var h=_17.dl?_17.dl.hostname:"";if(h.indexOf(".gov")>-1||h.indexOf(".mil")>-1){_atc.xck=1;_atc.xfl=1;}var p=_17.pub(),x=["usarmymedia","gobiernousa","govdelivery"];for(i in x){if(p==x[i]){_atc.xck=1;_atc.xfl=1;break;}}},sck:function(u,v,s){_17.gov();if(!_atc.xck){d.cookie=u+"="+v+(!s?"; expires=Wed, 04 Oct 2028 03:19:53 GMT":"")+"; path=/";}},fcl:null,asetup:function(x){var a=_17;try{if(!a.guid){a.guid=1;if(x!==null&&x!==_atu){a.dck(x);}if(a.fcl){a.fcl();}a.xld();}}catch(e){}return x;},ao:function(elt,_85,_86,_87,_88,_89){_17.lad(["open",elt,_85,_86,_87,_88,_89]);_17.jlo();return false;},ac:function(){},as:function(s,cf,sh){_17.lad(["send",s,cf,sh]);_17.jlo();}},a=_17;w._ate=a;w._adr=r;d.ce=d.createElement;d.gn=d.getElementsByTagName;r.bindReady();if(!_atc.ost){if(!w.addthis_conf){w.addthis_conf={};}for(var i in addthis_conf){_atc[i]=addthis_conf[i];}_atc.ost=1;}r.append(a.lod);if(d.cookie){var ck=d.cookie.split(";");for(var i=0;i<ck.length;i++){var c=ck[i],x=c.indexOf("_csuid="),y=c.indexOf("_csoot=");if(x>=0){_17.uid=c.substring(x+7);}else{if(y>=0){_17.oot=c.substring(y+7);}}}}try{var l=d.ce("link");l.rel="stylesheet";l.type="text/css";l.href=_atr+"static/r07/widget19.css";l.media="all";d.gn("head")[0].appendChild(l);}catch(e){}var ss=d.gn("script"),s=ss[ss.length-1],q=s.src.indexOf("#")>-1?s.src.replace(/^[^\#]+\#?/,""):s.src.replace(/^[^\?]+\??/,""),pq=function(q){var p={};if(!q){return p;}var ps=q.split(/[;&]/);for(var i=0;i<ps.length;i++){var kv=ps[i].split("=");if(!kv||kv.length!=2){continue;}var k=_duc(kv[0]),v=_duc(kv[1]);v=v.replace(/\+/g," ");ps[k]=v;}return ps;},p=pq(q);if(p.pub){w.addthis_pub=_duc(p.pub);if(w.addthis_config){w.addthis_config.username=w.addthis_pub;}}else{if(p.username){w.addthis_pub=_duc(p.username);if(w.addthis_config){w.addthis_config.username=w.addthis_pub;}}}if(p.domready){_atc.dr=1;}try{if(_atc.ver===120){var rc="atb"+w._ate.cuid();d.write("<span id=\""+rc+"\"></span>");w._ate.igv();w._ate.lad(["span",rc,addthis_share.url||"[url]",addthis_share.title||"[title]"]);}if(w.addthis_clickout){_17.lad(["cout"]);}}catch(e){}})();function addthis_open(elt,_a0,_a1,_a2,_a3,_a4){if(typeof _a3=="string"){_a3=null;}return _ate.ao(elt,_a0,_a1,_a2,_a3,_a4);}function addthis_close(){_ate.ac();}function addthis_sendto(s,cf,sh){_ate.as(s,cf,sh);return false;}if(_atc.dr){_adr.onReady();}}else{_ate.inst++;}if(_atc.abf){addthis_open(document.getElementById("ab"),"emailab",window.addthis_url||"[URL]",window.addthis_title||"[TITLE]");}