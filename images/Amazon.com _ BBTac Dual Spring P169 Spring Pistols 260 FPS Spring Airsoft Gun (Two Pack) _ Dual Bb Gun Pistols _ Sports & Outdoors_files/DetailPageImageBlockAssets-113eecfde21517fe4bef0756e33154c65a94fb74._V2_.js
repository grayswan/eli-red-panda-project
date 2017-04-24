(function(r,z,U){r.execute(function(){r.register("postMetric",function(){return{postCountMetric:function(r){if("undefined"!==typeof r){var d=z.ue;if(d){var g=d.count(r)||0;d.count(r,g+1)}}}}});r.when("jQuery","ImageBlockController","ImageBlockATF","ImageBlockBTF").register("ImageBlock",function(r,d,g,m){r=r.extend(!0,{},g,m);return new d(r)});r.when("A","jQuery","ImageBlockBTF").register("ImageBlockAiryLoader",function(z,d,g){z=g.airyConfig;z.jsUrl&&r.load.js(z.jsUrl);z.cssUrl&&
r.load.css(z.cssUrl)});r.when("A","jQuery","ImageBlockModel","ImageBlockView","imageBlockUtils").register("ImageBlockController",function(r,d,g,m,b){var a={};return function(c){var e=this;e.dispatch=function(c,e){var g=a[c];b.isDefined(g)&&d.each(g,function(a,b){b.call(z,e)})};e.register=function(c,d){b.isDefined(a[c])||(a[c]=[]);"function"===typeof d&&a[c].push(d)};e.model=new g(c,e);e.view=new m(c,e,e.model);e.init=function(){e.model.init();e.view.init()};e.init()}});r.when("A",
"jQuery","imageBlockUtils").register("ImageBlockModel",function(r,d,g){function m(a,b,c,d,e){g.isDefined(a)&&(f.type=a);g.isDefined(b)&&(f.index=b);g.isDefined(c)&&(f.thumbnailIndex=c);g.isDefined(d)&&(f.variant=d);g.isDefined(e)&&(f.color=e)}function b(a){a=a.data;h=r.copy(f);m(a.type,a.index,a.thumbnailIndex,a.variant,a.color)}function a(a){b(a);a=r.copy(a);a.data=r.copy(f);e.dispatch("updateView",a)}var c,e,f={},h={};return function(d,g){e=g;c=d;e.register("updateSelection",a);e.register("updateModel",
b);this.init=function(){m("image",0,0,"MAIN",c.landingAsinColor||c.defaultColor)};this.getCurrentItem=function(){return r.copy(f)};this.getPreviousItem=function(){return r.copy(h)}}});r.when("ImageBlockBTF").execute(function(M){function d(d,m,b,a,c){function e(a){t.dispatch("updateSelection",a)}function f(a){t.dispatch("imageClick",a)}function h(a){t.dispatch("imageHover",a)}function l(c){!b.isDefined(c)||"swatchClick"!==c.type&&"updatedData"!==c.type?(p.update(c),"swatchHover"!==c.type&&
r.getPreviousItem().thumbnailIndex!==c.data.thumbnailIndex&&a.postCountMetric(c.data.type+"ThumbnailSelected"),d.trigger("image-block-thumbnail-selected",c.data)):p.render(c.data.color,!1,c.onload)}function k(a){t.dispatch("resize",a)}function n(a){var c=w.find("img");b.isDefined(c[a])&&m(c[a]).click()}var p,q,t,r,w;return function(a,b,x){p=this;q=a;t=b;r=x;w=m("#imageBlock #altImages ul");var A=m("#imageBlock .canvas"),G=m("#main-image-container");p.subViews=[];for(b=0;b<c.length;b++)p.subViews.push(new c[b](a,
x,p,t));p.render=function(a,b,c){var d=0;w.find(".item").remove();a=a||r.getCurrentItem().color;m.each(p.subViews,function(e,f){d=f.render(a,d,A,w,G,b,c)||d})};p.init=function(){w=m("#imageBlock #altImages ul");var a=w.find(".a-button-selected").closest(".a-declarative"),b=a.data("action"),a=a.data(b)||{};a.color=q.landingAsinColor||q.defaultColor;t.dispatch("updateModel",{data:a});p.render(a.color,!0);q.isDebug&&z.console&&console.log(q);t.register("updateView",l);t.register("selectThumbnail",n);
d.declarative("thumb-action",["click","mouseenter"],e);d.declarative("main-image-click",["click"],f);d.declarative("main-image-click",["mouseenter","mouseleave"],h);m(z).resize(k)};p.update=function(a){m.each(p.subViews,function(b,c){c.update(a)})}}}M=["A","jQuery","imageBlockUtils","postMetric"].concat(M.views);r.when.apply(r,M).register("ImageBlockView",function(){for(var g=arguments[0],m=arguments[1],b=arguments[2],a=arguments[3],c=[],e=4,f=arguments.length;e<f;e++)c.push(arguments[e]);return d(g,
m,b,a,c)})});r.when("A","jQuery","imageBlockUtils","postMetric").register("ImageBlockAltImageView",function(r,d,g,m){function b(a,b,c,e){if(!g.isjQueryObjDefined(a.find(".a-button-selected"))){var k=w.getCurrentItem();if(!e||"chromeless-video"!==k.type||!z.autoplayVideo){e=0;"image"===k.type&&(e=f(k.color,k.variant),e=-1!==e?e:0);var l=b+e;l>=c&&(e=0,l=b);b=h(k.color,e);-1!==b&&(u.dispatch("updateModel",{data:{index:e,thumbnailIndex:l,variant:b.variant,type:"image"}}),b=a.find(".item").get(l),
g.selectGivenThumbnail(d(b),a))}}}function a(a,c,e){c=z.colorImages&&z.colorImages[c];var f=a;g.isDefined(c)&&(d.each(c,function(b,c){a<z.maxAlts&&(g.createThumbnail({type:"image",index:b,thumbnailIndex:a,variant:c.variant},c.thumb,C),a++)}),b(C,f,a,e));return a}function c(a,b){var c=d("#image-canvas-caption #canvasCaption"),e,f=z.staticStrings,g=z.colorImages,h=a.color,k=a.index;b&&z.useIV?e=f.clickToExpand:g[h]&&g[h][k].hiRes&&z.useHoverZoom?(e=z.useHoverZoomIpad?f.touchToZoom:z.useClickZoom?f.clickToZoom:
f.rollOverToZoom,z.hoverZoomIndicator&&(e="<img src='"+z.staticImages.hoverZoomIcon+"'/>&nbsp;"+e)):z.useIV&&(e=f.clickToExpand);c.html(e)}function e(){x.find("li").removeClass("selected");d("#image-canvas-caption #canvasCaption").empty();g.hideUnavailable()}function f(a,b){var c=z.colorImages;if(1>c.length||!g.isDefined(c[a])||!g.isDefined(b))return-1;var e=-1;d.each(c[a],function(a,c){c.variant===b&&(e=a)});return e}function h(a,b){var c=z.colorImages;return!(g.isDefined(c)&&g.isDefined(c[a])&&
g.isDefined(c[a][b])&&g.isDefined(c[a][b].main))||1>d.map(c[a][b].main,function(a,b){return b}).length?-1:c[a][b]}function l(a,b){var c;d.each(a.main,function(a,b){g.isDefined(c)||(c=parseFloat(b[1]/b[0])<=parseFloat(z.holderRatio)?"a-stretch-vertical":"a-stretch-horizontal")});var e="a-dynamic-image "+c,f=g.getMaxHeightOfMainImage(a.main,A),h=g.getMaxWidthOfMainImage(a.main,A),k=d("<div></div>"),f=z.naturalMainImageSize?{}:{"max-height":f,"max-width":h};k.addClass(e).css(f).attr({"data-old-hires":a.hiRes,
"data-a-manual-replacement":"true",onload:b}).data("a-dynamic-image",a.main);return k}function k(a){var b=A.css("height");null!==b&&a.find(".imgTagWrapper").css("height",b);a.addClass("selected");z.imgTagWrapperClasses&&a.find(".imgTagWrapper").addClass(z.imgTagWrapperClasses)}function n(a,b){if("image"===a.type){var d=h(a.color,a.index);if(-1===d)return u.dispatch("updateModel",{data:{index:0,thumbnailIndex:0,variant:"",type:"unavailable"}}),g.showUnavailable(a.color),-1;var e=x.find(".item.itemNo"+
a.thumbnailIndex);if(!g.isjQueryObjDefined(e)){var e=a.thumbnailIndex,e=x.find(".mainImageTemplate").clone().removeClass("template mainImageTemplate").addClass("image item itemNo"+e+" maintain-height"),f=l(d,b);e.find(".placeHolder").replaceWith(f);x.find(".list").append(e);r.loadImageManually(f)}k(e);u.dispatch("loadMagnifier");c(a);z.useIV&&e.css("cursor","pointer");a.isUserGenerated&&(e=w.getPreviousItem(),f=a.variant,g.isDefined(f)&&e.thumbnailIndex!==a.thumbnailIndex&&(m.postCountMetric("ImageThumbnailSelectedVariant:"+
f),0===f.indexOf("IG")&&(m.postCountMetric("IGImageSelectedVariant:"+f),m.postCountMetric("IGImageSelectedEvent:"+a.interaction))));r.trigger("dp:image-block:update",d)}}function p(){var a=x.find(".item .imgTagWrapper"),b=g.getContainerHeight(A,z.holderRatio,z.holderMaxHeight);0<b&&(A.height(b),a.height(b));x.find("img.a-dynamic-image").each(function(){var a=d(this);a.data("a-manual-replacement")&&r.loadDynamicImage(this);var b=a.data("a-dynamic-image"),c=g.getMaxHeightOfMainImage(b,A),b=g.getMaxWidthOfMainImage(b,
A);z.naturalMainImageSize||a.css({"max-height":c+"px","max-width":b+"px"})})}function q(a){c(w.getCurrentItem(),"mouseenter"===a.type)}var t,z,w,u,C,x,A;return function(b,c,d,m){t=this;z=b;w=c;u=m;z.colorImages[z.landingAsinColor]=z.colorImages[z.defaultColor];t.render=function(b,c,d,f,g,h,k){x=d;C=f;A=g;b=a(c,b,h);e();h||x.find(".list .item").remove();n(w.getCurrentItem(),k);return b};t.update=function(a){e();var b=a.data;if("swatchHover"===a.type)if(b.color===w.getCurrentItem().color)n(w.getCurrentItem());
else{if(!a.captured){var c;c=f(b.color,w.getCurrentItem().variant);c=h(b.color,-1!==c?c:0);if(-1===c)g.showUnavailable(b.color),c=-1;else{var b=x.find(".swatchHoverExp"),d=l(c);b.find(".imgTagWrapper").html(d);r.loadImageManually(d);k(b);r.trigger("dp:image-block:update",c);c=void 0}-1!==c&&(a.captured=!0)}}else"image"===b.type&&(b.interaction=a.type,b.isUserGenerated=!0,n(b),g.selectGivenThumbnail(a.$declarativeParent,C))};u.register("imageHover",q);u.register("resize",p)}});r.when("A",
"jQuery","imageBlockUtils","postMetric").register("ImageBlockMagnifierView",function(r,d,g,m){function b(a){p?a.css("cursor","url('"+h.staticImages.zoomIn+"'), auto"):(a.css("cursor","-webkit-zoom-in"),a.css("cursor","-moz-zoom-in"),a.css("cursor","zoom-in"))}function a(a){var b=a.match(/\._((\w|,|\.)+)_\.(gif|jpg|png)$/i);a={};if(g.isDefined(b))for(var b=b[1].split("_"),c=0;c<b.length;c++){var d=b[c].match(/^([A-Z]+)(\d+(\.\d+)?)$/);g.isDefined(d)&&(a[d[1]]=parseInt(d[2],10))}return a}function c(c,
e){function f(){var a;e.useClickZoom?(a=e.offsetInClickZoom,a=[Math.min(1,Math.max(0,Z[0]-(R[0]+a))/(R[2]-2*a)),Math.min(1,Math.max(0,Z[1]-(R[1]+a))/(R[3]-2*a))]):a=F&&F.updatePosition();if(a&&M.detailSize){var b=[M.detailSize[0]-M.rect.width,M.detailSize[1]-M.rect.height];M.detailImage.get(0).style.left=-(a[0]*b[0])+"px";M.detailImage.get(0).style.top=-(a[1]*b[1])+"px"}}function k(a){var b=L?a.originalEvent.touches[0]||a.originalEvent.changedTouches[0]:"";Z=L?[b.pageX,b.pageY]:[a.pageX,a.pageY]}
function l(a){L&&a.preventDefault();k(a);e.useClickZoom?a=[R[0],R[1],R[0]+R[2],R[1]+R[3]]:(a=F?F.offset:c.offsetParent().offset(),a=[H[0]+a.left,H[1]+a.top,H[0]+H[2]+a.left,H[1]+H[3]+a.top]);Z[0]<a[0]||Z[1]<a[1]||Z[0]>=a[2]||Z[1]>=a[3]?(e.useClickZoom||n(),W&&(W=!1,clearTimeout(X))):(W||(W=!0,X=setTimeout(function(){m.postCountMetric("dppc_hoverZoomOpened")},1E3)),f())}function n(a){a&&G.suppressMagnifier(!0);if(Q&&(M&&M.hide(),F&&(F.destroy(),F=null),Q=!1,L?(c.unbind("touchmove.magnifier touchstart.magnifier touchend.magnifier"),
d(document).trigger("disengaged.magnifier")):d(document).unbind("mousemove.magnifier").trigger("disengaged.magnifier"),r(),a))c.one("click.magnifier touchstart.magnifier",function(a){x(a,!0)})}function x(a,b){b&&G.suppressMagnifier(!1);if(!Q&&!J&&(0===aa&&(m.postCountMetric("dppc_hoverTime",new Date-(z.ue&&z.ue.t0||0)),aa=1),N[K]||(m.postCountMetric("dppc_hoverMain"),N[K]=1),H=[c.position().left,c.position().top,c.width(),c.height()],K&&(k(a),M?M.refit().show():M=new O,e.useClickZoom||(F=F||new I),
R=M.getWindowSize(),f()),Q=!0,L?(c.unbind("touchstart.magnifier touchmove.magnifier").bind("touchmove.magnifier",l).bind("touchend.magnifier",n),d(document).trigger("engaged.magnifier")):(c.unbind("mousemove.magnifier"),d(document).trigger("engaged.magnifier").bind("mousemove.magnifier",l)),b)){var g=d("#zoomWindow");if(0<g.length)g.one("click.magnifier touchend.magnifier",function(a){n(!0)})}}function r(){e.useHoverZoom&&(L?c.bind("touchstart.magnifier touchmove.magnifier",x):c.bind("mousemove.magnifier",
x))}var G=this,B={detailImageUrl:c.attr("data-old-hires"),location:"over",locationElement:c,prelaod:"ready",zIndex:50,offsetInClickZoom:50};e=d.extend(B,e);e.adjustment=[10,0,-10,0];var M=null,F=null,Z=null,H=null,R=null,E={"null":1,"":1,undefined:1},Q=!1,J=!1,K=e.detailImageUrl,L=e.useHoverZoomIpad||0,aa=0,N={},I=function(){function a(b){var d=Math.round(Math.min(c.width(),M.rect.width/b));b=Math.round(Math.min(c.height(),M.rect.height/b));m.css({width:d,height:b});g=[d,b]}var f=this,g=[0,0],k=(M.detailSize&&
M.detailSize[0]||5E8)/H[2],l=(M.detailSize&&M.detailSize[1]||5E8)/H[3],k=l>k?l:k;d("#magnifierLens").remove();var m=d("<div id='magnifierLens' />").css({backgroundImage:"url("+e.generalImageUrls.zoomLensBackground+")",position:"absolute"});h.showMagnifierOnHover?b(m):m.css("cursor","pointer");f.updatePosition=function(){var a=[H[2]-g[0],H[3]-g[1]],b=0>=a[0]?.5:Math.max(0,Math.min(1,(Z[0]-g[0]/2-H[0]-f.offset.left)/a[0])),c=0>=a[1]?.5:Math.max(0,Math.min(1,(Z[1]-g[1]/2-H[1]-f.offset.top)/a[1])),d=
H[0]+Math.round(b*a[0]),a=H[1]+Math.round(c*a[1]);m.get(0).style.left=d+"px";m.get(0).style.top=a+"px";return[b,c]};f.destroy=function(){m.remove()};f.offset=c.offsetParent().offset();a(k);f.updatePosition();m.appendTo(c.parent());M.detailImage[0].complete||M.detailImage.load(function(){var b=M.detailImage.width()/H[2];a(b);f.updatePosition()})};I.preload=function(){G.preload(e.generalImageUrls.lensBackgroundUrl)};var O=function(){function b(){var a={};if("over"===e.location){var a=e.useClickZoom,
f={},h=d("#leftCol"),m=d("#centerCol"),p=d("#rightCol"),u=d("#hover-zoom-end"),w=g.isjQueryObjDefined(h)?h.outerHeight():m.outerHeight();f.top=g.isjQueryObjDefined(h)?h.offset().top:m.offset().top;f.bottom=w+f.top;f.right=p.offset().left;f.left=a?0:h.offset().left+h.outerWidth();g.isjQueryObjDefined(u)&&u.offset().top>f.bottom&&(f.bottom=u.offset().top);a=f}else"right"===e.location&&(a=c.offset(),a={left:a.left+c.outerWidth(),top:a.top,right:a.left+c.outerWidth()+400,bottom:a.top+400});e.minHeightElement&&
(a.bottom=Math.max(a.bottom,a.top+d(e.minHeightElement).outerHeight()));a.bottom=Math.min(a.bottom,d(z).scrollTop()+d(z).height());a.left+=l[0];a.top+=l[1];a.right+=l[2];a.bottom+=l[3];a.width=a.right-a.left;a.height=a.bottom-a.top;e.enhancedHoverOverlay&&g.isDefined(z.pageXOffset)&&(f=d(z).width(),a.width=f-a.left+z.pageXOffset-18,a.height-=14);n.css({left:a.left,top:a.top,width:a.width,height:a.height});k.rect=a;return k}function h(b){var c=new Image;k.detailSize=[0,0];c.onload=function(){k.detailSize=
[c.width,c.height];f()};c.src=b.attr("src");if(0<c.width&&0<c.height)k.detailSize=[c.width,c.height];else if(e.detailImageSize)k.detailSize=e.detailImageSize;else{b=a(c.src);var d=H[2]/H[3];b.SS||b.AA?(b=b.SS||b.AA,k.detailSize=[b,b]):b.SX?k.detailSize=[b.SX,Math.round(b.SX/d)]:b.SY?k.detailSize=[Math.round(b.SY*d),b.SY]:b.SL&&(k.detailSize=1<=d?[b.SL,Math.round(b.SL/d)]:[Math.round(b.SL*d),b.SL])}}var k=this,l=e.adjustment;d("#zoomWindow").remove();var m={overflow:"hidden",position:"absolute",backgroundColor:"white",
zIndex:e.zIndex};e.enhancedHoverOverlay&&(m.boxShadow="0 6px 8px 2px rgba(0,0,0,.25)",m.border="1px solid #949494",m.borderColor="rgb(148,148,148)");var n=d("<div id='zoomWindow' />").css(m);e.fadeMagnifier&&n.fadeIn(200);e.useClickZoom&&(p?n.css("cursor",'url("'+e.zoomOutIcon+'"), auto'):(n.css("cursor","-webkit-zoom-out"),n.css("cursor","-moz-zoom-out"),n.css("cursor","zoom-out")));k.updateImage=function(a){a=d("<img id='detailImg' src='"+a+"'/>").css("position","absolute");k.detailImage&&k.detailImage.remove();
n.append(a);d(document).trigger("updated.magnifier");k.detailImage=a;h(k.detailImage)};k.refit=function(){b();h(k.detailImage);return k};e.fadeMagnifier?(k.show=function(){n.fadeIn(200);return k},k.hide=function(){n.fadeOut(200);return k}):(k.show=function(){n.show();return k},k.hide=function(){n.hide();return k});k.destroy=function(){n.remove();return k};k.getWindowSize=function(){return[k.rect.left,k.rect.top,k.rect.width,k.rect.height]};k.updateImage(K);b();n.appendTo(document.body)},W=!1,X;G.preload=
function(a){a=d.makeArray(a);for(var b=a.length,c=0;c<b;c++)a[c]instanceof Array?G.preload(a[c]):"string"===typeof a[c]&&a[c]&&!E[a[c]]&&(E[a[c]]=new Image,E[a[c]].src=a[c])};G.changeImage=function(a,b){Q&&n();K=b;c.attr("src",a);G.preload(a);H=[c.position().left,c.position().top,c.width(),c.height()];b&&("immediately"===e.preload?G.preload(b,!0):d(z).ready(function(){G.preload(b)}),M?M.updateImage(b):c.attr("data-old-hires",b))};G.destroy=function(){c.unbind("touchstart touchstart.magnifier touchmove.magnifier mousemove.magnifier");
d(document).unbind("mousemove.magnifier");F&&F.destroy();F=null;M&&M.destroy();M=null};G.detailImage=function(){return M.detailImage};G.suppressMagnifier=function(a){J=a};G.isEngaged=function(){return Q};G.engageMagnifier=x;G.disengageMagnifier=n;c[0].complete?r():c.one("load",r);G.preload(c.attr("src"));if(e.preload){var V=e.detailImageUrl,B=function(){G.preload(V,!0);e.useClickZoom||I.preload()},Y=e.preload;Y.constructor!==Array&&(Y=[Y]);for(var U=0;U<Y.length;U++)if("immediately"===Y[U])B();else if(d(z)[Y[U]])d(z)[Y[U]](B);
else d(z).bind(Y[U],B)}return G}function e(){if(h.useHoverZoom){var a={adjustment:[0,0,1,1],generalImageUrls:h.staticImages,location:"over",minHeightElement:"#imageBlock",preload:"ready",zIndex:190,useHoverZoomIpad:h.useHoverZoomIpad,useHoverZoom:h.useHoverZoom,useClickZoom:h.useClickZoom,zoomOutIcon:h.staticImages.zoomOutCur,enhancedHoverOverlay:h.enhancedHoverOverlay};k&&(k.destroy(),k=U);var b=n.find(".image.item.selected img[data-old-hires]").not("[data-old-hires='']");g.isjQueryObjDefined(b)&&
(h.useClickZoom?(b.one("click.loadmagnifier touchstart.loadmagnifier",function(d){k=new c(b,a);k.engageMagnifier(d,!0)}),p?b.css("cursor",'url("'+h.staticImages.zoomInCur+'"), auto'):(b.css("cursor","-webkit-zoom-in"),b.css("cursor","-moz-zoom-in"),b.css("cursor","zoom-in"))):k=new c(b,a))}}var f,h,l,k,n,p=d.browser.msie||navigator.userAgent.match(/msie|trident/i);return function(a,b,c,d){f=this;h=a;l=d;f.render=function(a,b,c,d,e,f){n=c;k&&(k.destroy(),k=U)};f.update=function(a){};l.register("loadMagnifier",
e);l.register("resize",e)}});r.when("A","jQuery","imageBlockUtils").register("ImageBlockTwisterView",function(r,d,g){function m(a,b,d){a=(a=d?d:g.getColorFromState(b.getState().hovered_variations,c))&&""!==a?a:c.defaultColor;f.dispatch("updateView",{type:"swatchHover",data:{color:a}})}function b(a,b,d,m){a=(a=m?m:g.getColorFromState(b.getState().selected_variations,c))&&""!==a?a:c.defaultColor;a===e.getCurrentItem().color?"function"===typeof d&&d():f.dispatch("updateSelection",{type:"swatchClick",
data:{color:a},onload:d})}var a,c,e,f;return function(d,g,k,n){a=this;c=d;e=g;f=n;r.on("image-block-twister-swatch-hover",m);r.on("image-block-twister-swatch-click",b);a.render=function(a,b,c,d,e){};a.update=function(a){}}});r.when("A","jQuery","Airy","imageBlockUtils","ImageBlockLoader","postMetric").register("ImageBlockVideoView",function(r,d,g,m,b,a){function c(a,b,c){m.isjQueryObjDefined(a.find(".a-button-selected"))||(c=q.getCurrentItem(),c=h(c.color,0),-1!==c&&(b+=0,t.dispatch("updateModel",
{data:{index:0,thumbnailIndex:b,variant:c.variant,type:p.useChromelessVideoPlayer?"chromeless-video":"chromeful-video"}}),b=a.find(".item").get(b),m.selectGivenThumbnail(d(b),a)))}function e(a){if(!p.useChildVideos)return p.videos;if(p.colorToVideo[a])return p.colorToVideo[a];var c=p.colorToAsin[a];if(c&&c.asin){var d={};d.params={asin:c.asin,productGroupID:p.productGroupID,useAiryVideoPlayer:!0,useChromelessVideoPlayer:p.useChromelessVideoPlayer,isUDP:p.isUDP};d.success=function(b){b&&(p.colorToVideo[a]=
b,b={type:"updatedData",data:q.getCurrentItem()},t.dispatch("updateView",b))};b.load("/gp/product/features/apparel-main-image/videos.html",d);return p.colorToVideo&&p.colorToVideo[a]}}function f(b,c,e,f){return g.embed({isShowFirstFrameWhenReadyEnabled:!0,parentElement:b[0],streamingUrls:c.url,swfUrl:e.swfUrl,foresterMetadataParams:e.foresterMetadataParams,backgroundColor:"transparent",flashParams:{wmode:"transparent"},experiments:{supportChromelessPlayback:!0},bindings:{canplay:function(){var c=
m.isjQueryObjDefined(b.find("video"))?"HTML5":"FLASH";a.postCountMetric("dppc_chromelessVideo:"+c)},playing:function(){b.parent().css("z-index",8)},videounsupported:function(){t.dispatch("selectThumbnail",0);a.postCountMetric("dppc_chromelessVideo:VIDEO_UNSUPPORTED")},error:function(){t.dispatch("selectThumbnail",0);a.postCountMetric("dppc_chromelessVideo:ERROR")},ended:function(){C.seek(0)}},cuePoints:[{values:c.durationSeconds-1,type:"position",callback:function(a,c,e){a=e.durationSeconds-e.playheadTimeSeconds;
b.parent().css("background-color","white").find(".airy-renderer-container").fadeTo(1E3*a,.1,function(){b.parent().css({"background-color":"transparent","z-index":-1});t.dispatch("selectThumbnail",0);d(this).show().css("opacity",1)})}}]})}function h(a,b){var c;if(p.useChildVideos){if(!m.isDefined(p.colorToVideo))return-1;c=p.colorToVideo[a]}else c=p.videos;return m.isDefined(c)&&m.isDefined(c[b])&&m.isDefined(c[b].url)?c[b]:-1}function l(a){if("chromeful-video"===a.type||"chromeless-video"===a.type){var b=
h(a.color,a.index);if(-1===b)return-1;if("chromeful-video"===a.type){a=p.holderRatio;var c=parseInt(b.videoWidth,10),d=parseInt(b.videoHeight,10);w.parent().css("z-index",2);0!==d&&0!==c&&(c/=d,a>c?w.css("width",c/a*100+"%"):w.css("height",a/c*100+"%"));C?(C.show(),m.loadMediaIntoAiry(C,b,x),u.show()):(C=m.createAiryInstanceForChromeful(w,b,x),u.find("#videoCaption").text(p.staticStrings.playVideo))}else C?(C.show(),m.loadMediaIntoAiry(C,b,x),C.play()):(C=f(w,b,x))&&C.play()}}function k(b,f){var g=
e(f),h=b;m.isDefined(g)&&0<g.length&&p.alwaysIncludeVideo&&b===p.maxAlts&&(z.find(".item:last").remove(),b--);m.isDefined(g)&&(d.each(g,function(c,d){if(b<p.maxAlts){var e=p.useChromelessVideoPlayer?"chromeless-video":"chromeful-video";m.createThumbnail({type:e,index:c,thumbnailIndex:b,variant:d.variant},d.thumb,z);A||(A=!0,a.postCountMetric("chromeless-video"===e?"dppc_chromelessVideoAvailable":"dppc_chromefulVideoAvailable"));b++}}),c(z,h,b));return b}var n,p,q,t,z,w,u,C,x,A=!1;return function(a,
b,c,d){n=this;p=a;q=b;t=d;x=p.airyConfig;p.colorToVideo={};p.colorToVideo[p.landingAsinColor]=p.colorToVideo[p.defaultColor]=p.videos;n.render=function(a,b,c,d,e,f){z=d;w=e.find("#main-video-container");u=w.parent().find("#video-canvas-caption");a=k(b,a);l(q.getCurrentItem());return a};n.update=function(a){C&&(C.hide(),w.parent().css("z-index",-1),u.hide());var b=a.data;if("swatchHover"===a.type)b.color===q.getCurrentItem().color&&l(q.getCurrentItem());else if("chromeful-video"===b.type||"chromeless-video"===
b.type)l(b),m.selectGivenThumbnail(a.$declarativeParent,z)}}});r.when("A","a-modal","a-tooltip","jQuery","imageBlockUtils","postMetric").register("ImageBlockImmersiveView",function(r,d,g,m,b,a){function c(a){return a.hiRes||a.large||a.main[a.main.length-1]}function e(a,b){var c=r.copy(a);if(a.length>b){try{for(var d=-1,e=0;e<a.length;e++){var f=a.charAt(e);if(" "===f||"."===f||"?"===f||";"===f||","===f||":"===f)d=e;if(e===b-4){c=a.substring(0,-1===d?e:d);break}}}catch(g){c=a.substring(0,
b-3)}c+="..."}return c}function f(a){a=a.replace(/\._(AA|SS)\d+_/,"").replace(/\._SX\d+_SY\d+_CR,0,0,\d+,\d+_/,"");a=a.replace(/\._(US)\d+_/,"").replace(/\._SR\d+,\d+_/,"");var b=a.lastIndexOf(".");return a=a.substring(0,b)+"._AA50_"+a.substring(b)}function h(){J.find("#ivTitle").click(function(){Q.hide()})}function l(a,b){var c=parseInt(a.css(b),10);return isNaN(c)?0:c}function k(){var a=J.find("#ivStage"),b=Q.$container.find(".a-popover-wrapper"),c=b.find(".a-popover-inner"),b=b.height()-l(c,"padding-top")-
l(c,"padding-bottom");J.css("height",b);var c=J.find("#ivTitle").outerHeight(!0),d=J.find("#ivVariationSelection").outerHeight(!0),e=J.find("#ivMediaSelection").outerHeight(!0),f=J.find("#ivThumbs"),g=l(f,"margin-top")+l(f,"margin-bottom");f.css("height",b-c-d-e-g);J.find("#ivLargeImage").css("height",b);a.css("width",J.width()-l(J,"padding-left")-l(J,"padding-right")-J.find("#ivThumbColumn").width()-l(a,"margin-left")-l(a,"margin-right"))}function n(){J.find("#ivMediaSelect").change(function(){var a=
m(this).val();"all"===a?(J.find("#ivVideoList").hide(),J.find("#ivThumbs").show(),J.find(".ivThumbVideo").show(),"chromeful-video"===I.type&&J.find("#ivVideo_"+I.index).click()):"images"===a?(J.find("#ivVideoList").hide(),J.find("#ivThumbs").show(),J.find(".ivThumbVideo").hide(),"chromeful-video"===I.type&&J.find("#ivImage_0").click()):"videos"===a&&(J.find("#ivVideoList").show(),J.find("#ivThumbs").hide(),"image"===I.type?J.find("#ivVideoList_0").click():J.find("#ivVideoList_"+I.index).click())})}
function p(){var a=J.find("#ivStage").find("#ivLargeImage"),b=a.width(),c=a.height(),d=a.find(".fullscreen");d.removeAttr("style");var e=d.width(),f=d.height();0<d.length&&(d[0].naturalWidth&&(e=d[0].naturalWidth),d[0].naturalHeight&&(f=d[0].naturalHeight));a.css("cursor","auto");var e=0===e?1:e,f=0===f?1:f,g=Math.min(b/e,c/f),h=f*g,k=e*g;1>g?(X?a.css("cursor","url('"+H.staticImages.zoomIn+"'), auto"):(a.css("cursor","-webkit-zoom-in"),a.css("cursor","-moz-zoom-in"),a.css("cursor","zoom-in")),U=!0):
U=!1;e=Math.min(k,e);f=Math.min(h-20,f);d.css({"margin-top":(c-f)/2,"margin-left":(b-e)/2,height:f,width:e});a.css("visibility","visible");Y=!1}function q(a){var b=J.find("#ivLargeImage");b.css("visibility","hidden");b.empty();b.animate({opacity:1},200);b.append(a);p()}function t(){O&&O.hide();J.find("#ivLargeVideo").css("display","none");J.find("#ivLargeImage").css("display","block");var a;b.isDefined(K)&&(a=c(K[I.index]));if(b.isDefined(a)){J.find(".fullscreen").remove();var d=m("<img>").attr("src",
a).addClass("fullscreen"),e=J.find("#ivLargeImage");e.animate({opacity:.4},200,function(){d.load(function(){q(d)});if(d[0].complete)q(d);else{e.empty();var a=(e.height()-104)/2,b=(e.width()-80)/2;m("<img>").attr("src",H.staticImages.spinner).css({top:a+"px",left:b+"px"}).appendTo(e)}})}}function D(){var a=parseInt(I.index,10)+1;a>=L.length||J.find("#ivVideo_"+a).click()}function w(){var a;b.isDefined(L)&&(a=L[I.index]);if(b.isDefined(a)){J.find("#ivLargeImage").css("display","none").empty();var c=
J.find("#ivLargeVideo").css("display","block");O?(O.isDetached()&&O.attach(c[0]),b.loadMediaIntoAiry(O,a,W),O.show()):(O=b.createAiryInstanceForChromeful(c,a,W,"ImmersiveView"),W.enableContinuousPlay&&O.bind("ended",D));O.play({isAsync:!0})}}function u(){I=R.getCurrentItem();var a;if("image"===I.type)a=J.find("#ivImage_"+I.index);else if("chromeful-video"===I.type||"chromeless-video"===I.type)a=J.find("#ivVideo_"+I.index);b.isjQueryObjDefined(a)||(a=J.find("#ivImage_0"));C(a)}function C(a){J.find(".ivThumb").removeClass("selected");
a.addClass("selected");a.hasClass("ivThumbVideo")?(I.type="chromeful-video",I.index=a.attr("id").split("_")[1],w()):(I.type="image",I.index=a.attr("id").split("_")[1],t())}function x(){J.delegate(".ivThumb","click",function(){var a=m(this);C(a)});J.delegate(".ivThumbVideoListOuter","click",function(){J.find(".ivThumbVideoListOuter").removeClass("selected");var a=m(this);a.addClass("selected");I.type="chromeful-video";I.index=a.attr("id").split("_")[1];w()})}function A(){O&&!O.isDetached()&&(W.volume=
O.getVolume(),O.detach(),!document.all||z.atob||document.addEventListener||(O=null));J.find("#ivLargeImage").empty()}function G(a,b){return 0<b?b/2:Math.min(0,Math.max(b,a))}function B(a){var b=fa.top-(a.pageY-sa[1])*ca;a=G(fa.left-(a.pageX-sa[0])*ca,na.left);b=G(b,na.top);J.find(".fullscreen").css({left:a,top:b})}function P(){J.delegate("#ivLargeImage","click",function(a){if(Y)p();else if(U){J.find(".fullscreen").removeAttr("style");if(U){var b=J.find("#ivLargeImage"),c=b.find(".fullscreen");X?b.css("cursor",
"url('"+H.staticImages.zoomOut+"'), auto"):(b.css("cursor","-webkit-zoom-out"),b.css("cursor","-moz-zoom-out"),b.css("cursor","zoom-out"));Y=!0;var d=J.find("#ivLargeImage");na.left=d.width()-c.width();na.top=d.height()-c.height();var d=b.height()/2,e=b.width()/2;sa=[b.offset().left+e,b.offset().top+d];fa.top=d-c.height()/2;fa.left=e-c.width()/2;c.css({position:"relative",left:fa.left,top:fa.top});ca=Math.max(c.height()/b.height(),c.width()/b.width())}B(a)}});J.delegate("#ivLargeImage","mousemove",
function(a){Y&&B(a)})}function F(){var c;(c=!H.useIV)||(c=R.getCurrentItem().color,c=H.colorImages&&H.colorImages[c]&&0<H.colorImages[c].length?!0:!1,c=!c);if(!c){a.postCountMetric("dppc_immersiveViewOpened");if(b.isDefined(Q))Q.show();else{c=m("#auiImmersiveViewDiv");var g=m(z).height()-150,h=m(z).width()-75;Q=d.create(c,{name:"immersiveView",activate:"onclick",width:h,height:g,popoverLabel:"ImmersiveView",hideHeader:!0});c.click()}if(V){J=m("#ivMain");c=R.getCurrentItem().color;K=H.colorImages[c];
L=H.useChildVideos?H.colorToVideo[c]:H.videos;I=R.getCurrentItem();N=aa=0;b.isDefined(K)&&(aa=K.length);b.isDefined(L)&&(N=L.length);c=J.find("#ivTitle");c.attr("title",H.title);c.text(e(H.title,45));if(b.isDefined(z.DetailPage)&&b.isDefined(z.DetailPage.StateController)){c=J.find("#ivVariationSelection");c.empty();var g=z.DetailPage.StateController.getState(),h=g.variation_label_order,k;for(k in h)if(h.hasOwnProperty(k)){var l=h[k],n=g.selected_variations[l],l=g.variation_display_labels[l];n&&m("<div/>").addClass("ivVariations").text(l+
":"+n).appendTo(c)}}k=J.find("#ivMediaSelect");0===aa||0===N?(k.parent().hide(),J.find("#ivThumbs").addClass("noMediaSelection")):(k.empty(),m("<option/>").attr("value","all").prop("selected",!0).text(H.staticStrings.allMedia+" ("+(aa+N)+")").appendTo(k),m("<option/>").attr("value","images").text(H.staticStrings.images+" ("+aa+")").appendTo(k),m("<option/>").attr("value","videos").text(H.staticStrings.videos+" ("+N+")").appendTo(k),k.parent().show(),k.val("all"));k=J.find("#ivThumbs");k.find(".ivRow").not(".placeholder").remove();
c=aa+N;for(h=g=0;g<c;)for(n=k.find(".ivRow.placeholder").clone().removeClass("placeholder").appendTo(k),l=0;3>l&&g<c;l++,g++,h++)if(h<aa){var p=K[g].thumb,q=k.find(".ivThumb.placeholder").clone().removeClass("placeholder").attr("id","ivImage_"+g).appendTo(n);q.find(".ivThumbImage").css("background",'url("'+f(p)+'") center no-repeat')}else if(p=L[g-aa],q=k.find(".ivThumb.placeholder").clone().removeClass("placeholder").addClass("ivThumbVideo").attr("id","ivVideo_"+(g-aa)).appendTo(n),q.find(".ivThumbImage").css("background",
'url("'+p.thumbUrl+'") center no-repeat'),b.isDefined(p)){var t={position:"triggerTop"},u=J.find("#ivThumbs").find(".ivThumbVideoPopover.placeholder").clone().removeClass("placeholder");u.find(".ivVideoPopoverTitle").text(p.title);u.find(".ivVideoPopoverDuration").text(p.durationTimestamp);t.inlineContent=u[0];r.declarative.create(q,"a-tooltip",t)}k=J.find("#ivVideoList");k.find(".ivThumbVideoListOuter").not(".placeholder").remove();c=k.find(".placeholder");for(g=0;g<N;g++)h=L[g],n=c.clone().removeClass("placeholder").appendTo(k),
n.attr("id","ivVideoList_"+g),n.find(".ivThumbImage").css("background",'url("'+h.thumbUrl+'") center no-repeat'),n.find(".ivThumbTitle").text(h.title),n.find(".ivThumbDuration").text(h.durationTimestamp);W=H.airyConfig;V=!1;T()}}}var Z,H,R,E,Q,J,K,L,aa,N,I,O,W,X=m.browser.msie,V=!0,Y=!1,U=!1,na={},fa={},ca,sa,T=r.once(function(){n();x();P();r.on("a:popover:afterUpdatePosition:immersiveView",k);r.on("a:popover:afterShow:immersiveView",u);r.on("a:popover:afterHide:immersiveView",A);h()});return function(a,
b,c,d){Z=this;H=a;R=b;E=d;Z.render=function(a,b,c,d,e,f){V=!0};Z.update=function(a){};E.register("imageClick",F)}});r.when("A","jQuery","imageBlockUtils").register("ImageBlockLoader",function(r,d,g){return{load:function(d,b){b=b||{};b.timeout=b.timeout||4E3;r.ajax(d,b)}}});r.when("A","jQuery","Airy","postMetric","ImageBlockATF","ImageBlockBTF").register("imageBlockUtils",function(r,d,g,m,b,a){function c(a){return null!==a&&"undefined"!==typeof a}function e(a){var b=0;d.each(a,
function(a,c){var d=parseInt(c[1],10);d>b&&(b=d)});return b}function f(a){var b=0;d.each(a,function(a,c){var d=parseInt(c[0],10);d>b&&(b=d)});return b}var h,l,k=d.extend(!0,{},b,a);return{isDefined:c,isjQueryObjDefined:function(a){return 0!==a.length},getMaxHeightOfMainImage:function(a,b){var c=b.height(),d=f(a);0<d&&(c=Math.min(c,d));return c},getMaxWidthOfMainImage:function(a,b){var c=b.width(),d=e(a);0<d&&(c=Math.min(c,d));return c},getContainerHeight:function(a,b,d){a=a.get(0);var e=0;c(a)&&(e=
a.offsetWidth/b,e=Math.min(e,d));return e},getColorFromState:function(a,b){if(a){b=b||k;var c="";d.each(b.visualDimensions,function(b,d){a[d]&&(c+=" "+a[d])});return c&&c.substring(1)}},createThumbnail:function(a,b,c){var d=c.find(".template").clone().removeClass("template").addClass("item"),e=document.createElement("img");e.src=b;d.find(".placeHolder").replaceWith(e);r.declarative.create(d,"thumb-action",a);c.append(d)},selectGivenThumbnail:function(a,b){var c=a.find(".a-button");b.find(".a-button").removeClass("a-button-selected").removeClass("a-button-focus");
c.addClass("a-button-selected").addClass("a-button-focus")},createAiryInstanceForChromeful:function(a,b,c,e){var f=d.extend({},c.foresterMetadataParams);null!==e&&(f.method+="."+e);var k=[];b.disabledViewIds&&(k=b.disabledViewIds);return g.embed({parentElement:a[0],streamingUrls:b.url,contentId:b.mediaObjectId,contentMinAge:Number(b.minimumAge||"")||0,contentTitle:b.title,swfUrl:c.swfUrl,foresterMetadataParams:f,backgroundColor:"transparent",flashParams:{wmode:"transparent"},slateImages:{preloadSlate:b.slateUrl,
postMediaSlate:b.slateUrl},videoAds:c.videoAds,bindings:{play:function(){"ImmersiveView"===e?h||(h=!0,m.postCountMetric("dppc_chromefulVideoPlayedIV")):l||(l=!0,m.postCountMetric("dppc_chromefulVideoPlayedPV"))}},disabledViewIds:k})},loadMediaIntoAiry:function(a,b,c){a&&a.getMediaSourceInfo()!==b.url&&a.loadMedia({mediaSourceInfo:b.url,contentId:b.mediaObjectId,contentMinAge:Number(b.minimumAge||"")||0,contentTitle:b.title,slateImages:{preloadSlate:b.slateUrl,postMediaSlate:b.slateUrl}})},showUnavailable:function(a){a&&
(d("#imageBlock .unvailableVariation").html(a),d("#imageBlock .variationUnavailable").show())},hideUnavailable:function(){d("#imageBlock .variationUnavailable").hide()}}})})})(function(){var r=window.AmazonUIPageJS||window.P,z=r._namespace||r.attributeErrors;return z?z("DetailPageImageBlockAssets"):r}(),window);