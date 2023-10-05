/*

Shopping Guarantee Loader
Copyright 2023, BuySafe, Inc.
20211103
*/
var bs_R=window.bs_R||{},buySAFE=window.buySAFE||{},_GUARANTEE=window._GUARANTEE||buySAFE;
(function(a,c){a.T0=a.T0||new Date;if(!a.sRoot){a.sRootHost="https://seal.buysafe.com";a.sRoot=a.sRootHost+"/private/rollover/";for(var l=document.getElementsByTagName("script"),k=0;k<l.length;k++){var d=l[k].src;if(d&&(d=d.substr(0,100),d=d.match(/((.*)\/private\/.*\/)rollover(?:\.unpacked)?\.js/i)||d.match(/()(.*)\/(Web\/Seal|SealCore\/api)\/gjs/i))){a.sRootHost=d[2];a.sRoot=d[1]||a.sRootHost+"/private/rollover/";break}}}a.aExecQ=a.aExecQ||[];a.onEvent=function(b,f,g){if(b){var e=b.addEventListener;
b=b.attachEvent;e?e(f,g,!1):b&&b("on"+f,g)}};a.onLoad=function(b,f){if(b)if(a.fOnLoad||f||"complete"===document.readyState)b();else a.onEvent(window,"load",b)};a.AddJS=function(b,f,g){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=b;a.onLoad(function(){window.setTimeout(function(){var h=document.getElementsByTagName("script")[0];h&&h.parentNode&&h.parentNode.insertBefore(e,h)},f||10)},!g)};c.Loaded||(c.Hash||(c.Hash=""),c.Guarantee||(c.Guarantee={order:"",total:"",
email:""}),c.Seal||(c.Seal={bgcolor:"#FFFFFF"}),c.Button||(c.Button={bgcolor:"#FFFFFF"}),c.Loaded=1)})(bs_R,buySAFE);var buySAFESealConfig=buySAFE.Seal,buySAFEButtonConfig=buySAFE.Button;
(function(a){function c(e,h){h[e]||(h[e]=function(){a.aExecQ.push([e,h,arguments])})}a.onLoad(function(){a.fOnLoad=1});for(var l=[["+AffiliateSeal"],["+Button"],["+ButtonAjax"],["+ButtonAjaxInvisible"],["+ButtonInvisible"],["+Guarantee"],["+Kickers"],["+Seal"],["+TrustRatingSeal"],["+TrustSeal"],["buysafeGetAffiliateURL"],["Display",1]],k=[{},{pre:"WriteBuySafe"},{pre:"Write",obj:"buySAFE"}],d=0;d<l.length;d++)for(var b=1;b<k.length;b++){var f=k[b],g=l[d];g[b]||(g=g[0].replace(/^\+/,f.pre),c(g,f.obj&&
window[f.obj]||window))}a.AddJS(a.sRoot+"rollover.core.js",100)})(bs_R);
//  Client specific code
var buySAFE = window.buySAFE || {};
var _GUARANTEE = window._GUARANTEE || buySAFE;
if(!_GUARANTEE.Guarantee)  _GUARANTEE.Guarantee = { order:'', total:'', email:'' };
_GUARANTEE.Hash = 'bp0ejDAVDE9Do85mJnlr7hFFZ5pMJKmOcIUAOmRBXoDAw%2bal1bSy422zsKYsz6cU0pqxIvylpTE%2fBJlXcDOxtg%3d%3d';
_GUARANTEE.EnableClientDisplay = 1;
_GUARANTEE.Version = 'V4';
_GUARANTEE.NoOnTop = 1;
//CJSS
_GUARANTEE.InsertKickers = [];
_GUARANTEE.InsertKickers.push({"loc":"First","anchorTagName":"DIV","anchorID":"","anchorClass":"bottom-box","path":[],"kickerType":"Kicker Custom Minimal3","kickerStyle":"margin:-6px 10px 0 0;","containerTagName":"","containerStyle":"","responsive":[]});


/* Mobile Seal */
_GUARANTEE.SealCore = 1;
_GUARANTEE.SealExt  = 'svg';

_GUARANTEE.Responsive = {
    Breakpoints : [ 480, 606, 800, 902, 967, 1019, 1260, 1502 ],
    Seal : { Breakpoint : 1, Mobile : '-27px', Minimize : 3000 }};


if ( document.location.href.match( new RegExp("/checkout", "i") ) ) {
 _GUARANTEE.InsertKickers.push({"loc":"Last","anchorTagName":"LI","anchorID":"","anchorClass":"checkout-step--payment","path":[],"kickerType":"Kicker Custom text6","kickerStyle":"margin:0 0 20px;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['','','text6','text6','text6','','text6','text6','text6']},
                                {"loc":"Last","anchorTagName":"LI","anchorID":"","anchorClass":"checkout-step--payment","path":[],"kickerType":"Kicker Custom text1","kickerStyle":"margin:0 0 20px;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['text1','text1','','','','text1','','','']});
}
else if ( document.location.href.match( new RegExp("/cart", "i") ) ) {
  _GUARANTEE.InsertKickers.push({"loc":"Last","anchorTagName":"DIV","anchorID":"","anchorClass":"cart-sidebar-block","path":[],"kickerType":"Kicker Custom Text6","kickerStyle":"margin:20px 0 0;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['','','text6','text6','text6','text6','text6','','']},
                               {"loc":"Last","anchorTagName":"DIV","anchorID":"","anchorClass":"cart-sidebar-block","path":[],"kickerType":"Kicker Custom Text1","kickerStyle":"margin:20px 0 0;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['text1','text1','','','','','','text1','text1']});
}
else {_GUARANTEE.InsertKickers.push({"loc":"After","anchorTagName":"INPUT","anchorID":"form-action-addToCart","anchorClass":"button","path":[],"kickerType":"Kicker Custom Text5","kickerStyle":"margin:0 0 20px 20px;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['','','text5','','text5','text5','text5','','text5']},
                               {"loc":"After","anchorTagName":"INPUT","anchorID":"form-action-addToCart","anchorClass":"button","path":[],"kickerType":"Kicker Custom Text1","kickerStyle":"margin:10px 0 20px;","containerTagName":"DIV","containerStyle":"text-align:center;","responsive":['text1','text1','','text1','','','','text1','']});
}


_GUARANTEE.WriteSeal();
//CJSE
