(function(f){var j={numOfCol:5,offsetX:5,offsetY:5,padding:20,blockElement:"div"};var b,g;var k=[];if(!Array.prototype.indexOf){Array.prototype.indexOf=function(n){var m=this.length>>>0;var o=Number(arguments[1])||0;o=(o<0)?Math.ceil(o):Math.floor(o);if(o<0){o+=m}for(;o<m;o++){if(o in this&&this[o]===n){return o}}return -1}}var l=function(){k=[];for(var m=0;m<j.numOfCol;m++){e("empty-"+m,m,0,1,-j.offsetY)}};var e=function(s,n,r,p,m){for(var o=0;o<p;o++){var q=new Object();q.x=n+o;q.size=p;q.endY=r+m+j.offsetY*2;k.push(q)}};var h=function(m,o){for(var p=0;p<o;p++){var n=d(m+p,"x");k.splice(n,1)}};var d=function(o,n){for(var m=0;m<k.length;m++){var p=k[m];if(n=="x"&&p.x==o){return m}else{if(n=="endY"&&p.endY==o){return m}}}};var c=function(n,q){var r=[];for(var p=0;p<q;p++){r.push(k[d(n+p,"x")].endY)}var o=Math.min.apply(Math,r);var m=Math.max.apply(Math,r);return[o,m,r.indexOf(o)]};var a=function(u){if(u>1){var r=k.length-u;var m=false;var q,s;for(var o=0;o<k.length;o++){var n=k[o];var t=n.x;if(t>=0&&t<=r){var p=c(t,u);if(!m){m=true;q=p;s=t}else{if(p[1]<q[1]){q=p;s=t}}}}return[s,q[1]]}else{q=c(0,k.length);return[q[2],q[0]]}};var i=function(p,m){if(!p.data("size")||p.data("size")<0){p.data("size",1)}else{if(p.data("size")>j.numOfCol){p.data("size",j.numOfCol)}}var q=a(p.data("size"));var n=g*p.data("size")-(p.outerWidth()-p.width());p.css({width:189,left:q[0]*g+j.padding,top:q[1],position:"absolute"});var o=p.outerHeight();h(q[0],p.data("size"));e(p.attr("id"),q[0],q[1],p.data("size"),o)};f.fn.BlocksIt=function(n){if(n&&typeof n==="object"){f.extend(j,n)}b=f(this);g=b.width()/j.numOfCol;l();b.children(j.blockElement).each(function(o){i(f(this),o)});var m=c(0,k.length);b.height(m[1]+j.offsetY);return this}})(jQuery);