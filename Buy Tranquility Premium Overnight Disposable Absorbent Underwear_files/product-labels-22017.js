var ZAPL={};ZAPL.ScriptMaker=function(e,t){var a=document.createElement("script");a.type="text/javascript",a.src=e,""!=t&&(a.onload=t),document.getElementsByTagName("head")[0].appendChild(a)};ZAPL.is_product_details_found=0;ZAPL.productDetailsPage=function(){var d_img,c_img=jQuery("img.zend_img_prod_details");var z_image=jQuery('img[src*="/products/"][src*="https://cdn11.bigcommerce.com/"]').filter('[src*=".jpg"],[src*=".JPG"],[src*=".jpeg"],[src*=".png"],[src*=".gif"]');if(z_image.length==0){z_image=jQuery('img[srcset*="/products/"][srcset*="https://cdn11.bigcommerce.com/"]').filter('[srcset*=".jpg"],[src*=".JPG"],[srcset*=".jpeg"],[srcset*=".png"],[srcset*=".gif"]');}var i=0;z_image.each(function(index,ele){var r=ele.width;r>i&&(i=r,d_img=ele)});var url=location.origin+location.pathname;if(c_img.length>0){ZAPL.is_product_details_found=1;jQuery(c_img).each(function(i,ele){jQuery(ele).after("<a href='"+url+"'></a>");});}else if(d_img!="undefined"){ZAPL.is_product_details_found=1;jQuery(d_img).after("<a href='"+url+"'></a>");}};ZAPL.init=function(){var a,i,n,o,s,t,is_added=false,a_href,href_url='';jQuery.each(ZAPL.products,function(index,ele){href_url+='a[href^="https://'+location.host+'/'+ele.handle+'/"],';});href_url=href_url.slice(0,-1);o=jQuery(href_url);t=0;while(t<o.length){try{i=o.eq(t);n=i.attr('href');n=n.replace("https://"+location.host+"/","").replace("/","");a=n;s=i.parent();a_href=i.attr('href');jQuery.each(ZAPL.products,function(index,ele){if(a===ele.handle||a===encodeURI(ele.handle)){is_added=true;var con=s.find("img").first();if(con.length==0){con1=jQuery(s).find('div[background-image!=none]:first');if(jQuery(con1).css("background-image")!='none'){con=con1;}}if(!s.hasClass("zend_ribbon_container")&&s.find(".zend_ribbon_container").length<1&&con.length!=0){var labels=ele.label_id.split(',');jQuery.each(labels,function(k,k_ele){jQuery.each(ZAPL.labels,function(index,value){if(k_ele==value['id']){con.after(ZAPL["template"+k_ele]);}});});if(s.is("a")){s=s.parent();}s.addClass("zend_ribbon_container");}}});++t;}catch(e){}}};function ZAPL_ready(){ZAPL.products=JSON.parse('[{"handle":"gary-pull-on-plastic-pants","label_id":"722"},{"handle":"gary-pull-on-euroflex-urethane-pants","label_id":"722"},{"handle":"gary-pull-on-enclosed-elastic-plastic-pants","label_id":"722"},{"handle":"gary-pull-on-high-back-long-waist-plastic-pants","label_id":"722"},{"handle":"gary-pull-on-reusable-adult-cloth-diaper","label_id":"722"},{"handle":"gary-heavy-duty-plastic-mattress-cover","label_id":"722"},{"handle":"gary-comfort-pul-pull-on-incontinence-pants","label_id":"722"},{"handle":"garywear-active-brief-adult-diaper-cover","label_id":"722"},{"handle":"abena-abri-form-comfort-level-4-adult-diapers-w-plastic-backing","label_id":"722"},{"handle":"abena-boost-booster-pads","label_id":"722"},{"handle":"tranquility-premium-overnight-disposable-absorbent-underwear","label_id":"722"},{"handle":"tranquility-atn-all-through-the-night-adult-diapers","label_id":"722"},{"handle":"abena-slip-premium-level-4-adult-diapers","label_id":"722"},{"handle":"abena-pants-premium-pull-on-absorbent-underwear-level-3","label_id":"722"},{"handle":"tranquility-4xl-air-plus-disposable-bariatric-briefs","label_id":"722"},{"handle":"tranquility-topliner-booster-pads","label_id":"722"},{"handle":"tranquility-swimmates-disposable-swim-diapers","label_id":"722"},{"handle":"tena-womens-super-plus-heavy-protective-underwear","label_id":"722,730"},{"handle":"tena-mens-super-plus-protective-underwear","label_id":"729"},{"handle":"wellness-brief-superio-adult-diapers","label_id":"722"},{"handle":"janibell-akord-adult-diaper-disposal-system-11ga-capacity-white","label_id":"722"},{"handle":"tena-for-men-guards","label_id":"729"},{"handle":"depend-fit-flex-mens-underwear-maximum","label_id":"729"},{"handle":"depend-mens-real-fit-absorbent-underwear","label_id":"729"},{"handle":"depend-womens-silhouette-incontinence-underwear","label_id":"730"},{"handle":"depend-silhouette-active-fit-underwear-for-women","label_id":"730"},{"handle":"depend-fit-flex-incontinence-underwear-for-women-moderate","label_id":"730"},{"handle":"depend-night-defense-underwear-for-women","label_id":"730"},{"handle":"depend-incontinence-guards-for-men","label_id":"729"},{"handle":"depend-incontinence-shields-for-men","label_id":"729"},{"handle":"prevail-breezers-adult-diapers-briefs","label_id":"722,728"},{"handle":"prevail-total-care-disposable-underpads","label_id":"728"},{"handle":"prevail-underwear-for-women","label_id":"730"},{"handle":"prevail-per-fit-womens-pull-on-absorbent-underwear","label_id":"730"},{"handle":"prevail-per-fit-men-pull-on-absorbent-underwear","label_id":"729"},{"handle":"prevail-boxers-for-men","label_id":"729"},{"handle":"prevail-underwear-for-men","label_id":"729"},{"handle":"prevail-maximum-absorbency-underwear","label_id":"722,728"},{"handle":"prevail-bariatric-adult-briefs","label_id":"722,728"},{"handle":"prevail-curve-pads-for-women","label_id":"730"},{"handle":"prevail-womens-bladder-control-pad-light","label_id":"730"},{"handle":"prevail-womens-bladder-control-pad-moderate","label_id":"730"},{"handle":"prevail-womens-bladder-control-pad-maximum","label_id":"730"},{"handle":"prevail-womens-bladder-control-pad-ultimate","label_id":"730"},{"handle":"wellness-absorbent-underwear","label_id":"722"},{"handle":"cardinal-health-wings-quilted-adult-briefs-ultra","label_id":"728"},{"handle":"tena-overnight-super-protective-underwear","label_id":"722"},{"handle":"attends-discreet-womens-underwear","label_id":"730"},{"handle":"attends-discreet-mens-underwear","label_id":"729"},{"handle":"attends-bariatric-briefs","label_id":"722"},{"handle":"prevail-purseready-max-absorbency-underwear-for-women","label_id":"730"},{"handle":"seni-super-quatro-adult-diapers","label_id":"722"},{"handle":"seni-booster-pads","label_id":"722"},{"handle":"betterdry-adult-diapers-w-plastic-backing","label_id":"722"},{"handle":"cardinal-health-wings-quilted-adult-briefs-overnight","label_id":"728"},{"handle":"cardinal-health-wings-quilted-adult-briefs-super","label_id":"728"},{"handle":"depend-fit-flex-underwear-for-women-maximum","label_id":"730"},{"handle":"mckesson-adult-pull-up-underwear-ultra","label_id":"728"},{"handle":"mckesson-underpads-ultra","label_id":"728"},{"handle":"cardinal-health-curity-ob-maternity-pad-heavy","label_id":"728"},{"handle":"molicare-premium-mobile-6d-pull-up-underwear","label_id":"722"},{"handle":"tena-proskin-stretch-super-3xl-bariatric-briefs","label_id":"722"},{"handle":"attends-premier-tab-style-briefs","label_id":"722"},{"handle":"attends-premier-pull-up-absorbent-underwear","label_id":"722"},{"handle":"prevail-air-overnight-adult-briefs","label_id":"728"},{"handle":"tena-proskin-underwear-for-men","label_id":"729"},{"handle":"tena-proskin-underwear-for-women","label_id":"730"},{"handle":"presto-pads-for-women-moderate","label_id":"730"},{"handle":"presto-pads-for-women-ultimate","label_id":"730"},{"handle":"presto-pads-for-women-light","label_id":"730"},{"handle":"presto-guards-for-men","label_id":"729"},{"handle":"prevail-overnight-pull-on-underwear","label_id":"722,728"},{"handle":"drive-nitro-aluminum-4-wheel-rollator-red-10-casters","label_id":"722"}]');ZAPL.labels=JSON.parse('[{"id":"722","show":"all"},{"id":"728","show":"all"},{"id":"729","show":"all"},{"id":"730","show":"all"}]');ZAPL.template722='<style type="text/css"> .zend_ribbon_722 .zend_ribbon4{ padding-top:0; top: 2%; left: 0; } .zend-ribbons:before { display: none !important; } .zend_ribbon4 { border-radius: 5px !important; top: 0% !important; } @media only screen and (max-width: 550px){ .zend-ribbons { height: 20px !important; font-size: 14px !important; } }</style> <div class="zend_ribbon_722"> <span class="zend_ribbon4 zend-ribbons" style="font-size:16px; background-color:#4bad00; width:100px; height:35px; opacity:1; color:#ffffff;"> Top Seller </span> </div>';ZAPL.template728='<style type="text/css"> .zend_ribbon_728 .zend_ribbon4{ padding-top:0; top: 2%; left: 0; } .zend-ribbons:before { display: none !important; } .zend_ribbon4 { border-radius: 5px !important; top: 0% !important; } @media only screen and (max-width: 550px){ .zend-ribbons { height: 20px !important; font-size: 14px !important; } }</style> <div class="zend_ribbon_728"> <span class="zend_ribbon4 zend-ribbons" style="font-size:16px; background-color:#5b7df9; width:100px; height:35px; opacity:1; color:#ffffff;"> Great Value </span> </div>';ZAPL.template729='<style type="text/css"> .zend_ribbon_729 .zend_ribbon4{ padding-top:0; top: 2%; left: 0; } .zend-ribbons:before { display: none !important; } .zend_ribbon4 { border-radius: 5px !important; top: 0% !important; } @media only screen and (max-width: 550px){ .zend-ribbons { height: 20px !important; font-size: 14px !important; } }</style> <div class="zend_ribbon_729"> <span class="zend_ribbon4 zend-ribbons" style="font-size:16px; background-color:#181b44; width:100px; height:35px; opacity:1; color:#ffffff;"> For Men </span> </div>';ZAPL.template730='<style type="text/css"> .zend_ribbon_730 .zend_ribbon4{ padding-top:0; top: 2%; left: 0; } .zend-ribbons:before { display: none !important; } .zend_ribbon4 { border-radius: 5px !important; top: 0% !important; } @media only screen and (max-width: 550px){ .zend-ribbons { height: 20px !important; font-size: 14px !important; } }</style> <div class="zend_ribbon_730"> <span class="zend_ribbon4 zend-ribbons" style="font-size:16px; background-color:#8959b9; width:100px; height:35px; opacity:1; color:#ffffff;"> For Women </span> </div>';jQuery("head").append("<link rel='stylesheet' type='text/css' href='https://big-product-labels.zend-apps.com/css/ribbon-css.css'></link");var check_p_detail=setInterval(function(){ZAPL.productDetailsPage();if(ZAPL.is_product_details_found==1){clearInterval(check_p_detail);ZAPL.init();}},2100);ZAPL.init();}if(window.self==window.top){"undefined"==typeof jQuery?ZAPL.ScriptMaker("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",ZAPL_ready):ZAPL_ready();}