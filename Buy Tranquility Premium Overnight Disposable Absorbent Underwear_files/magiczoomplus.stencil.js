function mtLinkFile(url) {
    var extention = url.replace(/^.+\.([^.]+)$/, '$1'),
        targetTag = document.getElementsByTagName('head')[0];
    if (extention == 'js') {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = url;
        scriptTag.async = false;
        if (arguments.length > 1) {
            scriptTag.onload = arguments[1];
        }
        targetTag.appendChild(scriptTag);
    }
    if (extention == 'css') {
        var linkTag = document.createElement('link');
        linkTag.type = 'text/css';
        linkTag.href = url;
        linkTag.rel = 'stylesheet';
        linkTag.media = 'screen';
        targetTag.appendChild(linkTag);
    }
}

mtLinkFile('/content/magiczoomplus/magiczoomplus.css');
mtLinkFile('/content/magiczoomplus/magiczoomplus.stencil.css');

mtLinkFile('/content/magiczoomplus/magiczoomplus.settings.js');
mtLinkFile('/content/magiczoomplus/magiczoomplus.js');

if (typeof jQuery == 'undefined') {
    mtLinkFile('https://code.jquery.com/jquery-3.3.1.min.js');
}

mzpScriptsReady(function() { initMagicZoomPlus(); })

var $mzp_firstImageIsVideo = false;

function mzpScriptsReady(fnc) {
    if (typeof MagicZoom == 'undefined' || typeof mzOptions == 'undefined' || typeof jQuery == 'undefined') {
        setTimeout(function() {
            mzpScriptsReady(fnc);
        }, 250);
        return;
    }
    arguments[0]();
}


function initSirv() {
    var SirvProductID = jQuery('input[name="product_id"]').val(),
        SirvProductSKU = BCData.product_attributes.sku;
    if (SirvID == '') return;

    var spinURL = document.location.protocol.replace('file:', 'http:') + '//' + SirvID + '.sirv.com/' + SirvSpinsPath.replace(/{product\-id}/g, SirvProductID).replace(/{product\-sku}/g, SirvProductSKU);

    jQuery.ajax({
        url: spinURL,
        dataType: "jsonp",
        cache: true,
        timeout: 8000,
        error: function(data) {},
        success: function(data) {

            jQuery('div[data-slide-id="zoom"]').after('<div style="display:none;" data-slide-id="spin"><div class="Sirv" id="sirv-spin" data-src="' + spinURL + '"></div></div>');

            jQuery('.MagicZoomSelectors').addClass('sirv-enabled').show().append('<a data-slide-id="spin" class="SirvIcon mz-thumb" href="#"><img id="SirvIcon" src="' + SirvIconURL + '"/></a>');

            jQuery('.MagicZoomSelectors a[data-zoom-id]').first().addClass('active-magic-selector');

            initMagicZoomPlusSelectors('a[data-slide-id="spin"]') 

            var sirv = document.createElement('script');
            sirv.type = 'text/javascript';
            sirv.async = true;
            sirv.src = document.location.protocol.replace('file:', 'http:') + '//scripts.sirv.com/sirv.js';
            document.getElementsByTagName('script')[0].parentNode.appendChild(sirv);
        }
    });
}

function initMagicZoomPlusSelectors($s) {
    jQuery($s).on('click touchend', function(e) {
        if ( jQuery('div[data-slide-id]:visible iframe').length ==1 ) {
          jQuery('div[data-slide-id]:visible iframe')[0].src = jQuery('div[data-slide-id]:visible iframe')[0].src;
        }
        jQuery('div[data-slide-id]').hide();
        jQuery('div[data-slide-id="' + jQuery(this).attr('data-slide-id') + '"]').show();
        jQuery('a.active-magic-selector').removeClass('active-magic-selector');
        jQuery(this).addClass('active-magic-selector');
        e.preventDefault();
    });
}

function isVideoSelector($s) {
    var regex_youtube_short = /https?:\/\/youtu\.be\/([^\/]{1,})\/?/gm,
        regex_youtube_full = /https?:\/\/www\.youtube\.com\/watch\?v=(.{1,})/gm,
        regex_youtube_embed = /https?:\/\/www\.youtube\.com\/embed\/(.{1,})/gm,
        regex_vimeo = /https?:\/\/vimeo\.com\/(.{1,})/gm,
        video_id, video_type;
    var m = regex_youtube_short.exec($s);
    if (m) {
        video_id = m[1];
        video_type = 'youtube';
    } else {
        var m = regex_youtube_full.exec($s);
        if (m) {
            video_id = m[1];
            video_type = 'youtube';
        } else {
            var m = regex_youtube_embed.exec($s);
            if (m) {
                video_id = m[1];
                video_type = 'youtube';
            } else {
                var m = regex_vimeo.exec($s);
                if (m) {
                    video_id = m[1];
                    video_type = 'vimeo';
                }
            }  
        }
    }
    if (video_type=='youtube') {
        return '<iframe src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen></iframe>';
    } else if (video_type=='vimeo') {
        return '<iframe src="https://player.vimeo.com/video/'+video_id+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }

    return false;
}

var mzp_xhr_open = window.XMLHttpRequest.prototype.open,
    mzp_xhr_send = window.XMLHttpRequest.prototype.send,
    mzp_xhr_onReadyStateChangeReplacement;

function mzp_xhr_openReplacement(method, url, async, user, password) {
    var syncMode = async !== false ? 'async' : 'sync';
    return mzp_xhr_open.apply(this, arguments);
}
function mzp_xhr_sendReplacement(data) {
    if(this.onreadystatechange) {
        this._onreadystatechange = this.onreadystatechange;
    }
    this.onreadystatechange = mzp_xhr_onReadyStateChangeReplacement;
    return mzp_xhr_send.apply(this, arguments);
}
function mzp_xhr_onReadyStateChangeReplacement() {

    if(this._onreadystatechange) {
        this._onreadystatechange.apply(this, arguments);
    }
    if (this.readyState == 4 && this.responseText.match(/modal\-body quickView/gm)) {
        setTimeout(initMagicZoomPlus,500);
    }
}

window.XMLHttpRequest.prototype.open = mzp_xhr_openReplacement;
window.XMLHttpRequest.prototype.send = mzp_xhr_sendReplacement;

function initMagicZoomPlus() {

    var themes = {
        'Light': {
            'imagesList': '.productView .productView-thumbnails img',
            'galleryContainer': 'figure.productView-image',
            'elementsToHide': 'ul.productView-thumbnails, div.productView-thumbnails'
        },
        'Light2': {
            'imagesList': '.productView .productView-thumbnails img',
            'galleryContainer': 'ul.productView.productView-image',
            'elementsToHide': 'ul.productView-thumbnails, div.productView-thumbnails'
        },
        'Arcade': {
            'imagesList': '.template-product .product-images img',
            'galleryContainer': '.template-product .product-images',
            'elementsToHide': ''
        },
        'Clean': {
            'imagesList': '.product-wrap .product-thumbnails img',
            'galleryContainer': '.product-wrap .product-main-image',
            'elementsToHide': '.product-wrap .product-thumbnails'
        },
        'Exhibit': {
            'imagesList': '.main-product-graphic .product-slides-container img',
            'galleryContainer': '.main-product-graphic .product-slides-container',
            'elementsToHide': ''
        },
        'Cornerstone': {
            'imagesList': '.productView-img-container img',
            'galleryContainer': '.productView-img-container',
            'elementsToHide': 'ul.productView-thumbnails'
        },
        'Cornerstone2': {
            'imagesList': '.productView-images .productView-thumbnails img',
            'galleryContainer': '.productView-images .productView-image-update',
            'elementsToHide': '.productView-images .productView-thumbnails'
        },
        'PartsWarehouse': {
            'imagesList': '#product-images-container .main-image-container img',
            'galleryContainer': '#product-images-container .main-image-container',
            'elementsToHide': '#product-images-container .slider-nav'
        },
        'Covent': {
            'imagesList': '.productView-images .productView-thumbs img',
            'galleryContainer': 'figure.productView-image',
            'elementsToHide': '.productView-thumbs'
        },
        'Covent2': {
            'imagesList': '.productView-images .productView-img-container img',
            'galleryContainer': 'figure.productView-image',
            'elementsToHide': '.productView-thumbs'
        },
        'Merchant': {
            'imagesList': 'body.product .product-slides-container img',
            'galleryContainer': 'body.product .product-images-container',
            'elementsToHide': 'body.product .product-images-container .product-images-pagination'
        },
        'Fortune': {
            'imagesList': 'body.template-product .product-slideshow-wrapper img',
            'galleryContainer': 'body.template-product .product-slideshow-wrapper',
            'elementsToHide': 'body.template-product .single-product-thumbnails'
        },
        'Supermarket': {
            'imagesList': '.productView-detailsWrapper .productView-images .productView-imageCarousel-main img',
            'galleryContainer': '.productView-detailsWrapper .productView-images .productView-imageCarousel-main',
            'elementsToHide': '.productView-detailsWrapper .productView-images .productView-imageCarousel-nav'
        },
        'Supermarket2': {
            'imagesList': '.productView-images .productView-imageCarousel-main img',
            'galleryContainer': '.productView-images .productView-imageCarousel-main',
            'elementsToHide': '.productView-images .productView-imageCarousel-nav'
        },
        'Foundry': {
            'imagesList': '.template-product .product-slideshow .product-slideshow-images img',
            'galleryContainer': '.template-product .product-slideshow .product-slideshow-images',
            'elementsToHide': '.template-product .product-slideshow .product-thumbnails, .template-product .product-slideshow .spinner'
        },
        'Eloquence': {
            'imagesList': '.hero-carousel--product img',
            'galleryContainer': '.hero-carousel--product',
            'elementsToHide': '.hero-carousel-navContainer'
        },
        'Warm': {
            'imagesList': 'body.product .product-container .product-images .product-thumbnails img',
            'galleryContainer': 'body.product .product-container .product-images .product-main-image',
            'elementsToHide': 'body.product .product-container .product-images .product-thumbnails'
        },
        'Solera': {
            'imagesList': '.page-type-product .productView-images .productView-wrap .productView-image img',
            'galleryContainer': '.page-type-product .productView-images .productView-wrap',
            'elementsToHide': '.page-type-product .productView-images .productView-thumbnails'
        },
        'Brixton': {
            'imagesList': '.product-images .product-image-slide img',
            'galleryContainer': '.product-image-slides-wrap',
            'elementsToHide': '.product-images-pagination'
        },
        'Warm2': // single image page
        {
            'imagesList': 'body.product .product-container .product-images .product-main-image img',
            'galleryContainer': 'body.product .product-container .product-images .product-main-image',
            'elementsToHide': 'body.product .product-container .product-images .product-thumbnails'
        }
    }

    mzOptions.onUpdate = function() {
        jQuery('a.active-magic-selector').removeClass('active-magic-selector');
        jQuery('a.mz-thumb-selected').addClass('active-magic-selector');
    }

    mzOptions.onZoomReady = function(id) {
        if (!$mzp_firstImageIsVideo) {
            jQuery('a.mz-thumb-selected').addClass('active-magic-selector');
        }
    }

    for (var th in themes) {
        var theme = themes[th];
        if (jQuery(theme.imagesList).length && jQuery(theme.galleryContainer).length) {

            var $gallery = jQuery('<div class="MagicZoomGallery ' + th + '"><div class="MagicZoomSelectors"></div></div>');

            var $images = [];

            jQuery(theme.imagesList).each(function(index, el) {
                var $imageURL = jQuery(this).attr('src');

                if (typeof jQuery(this).attr('data-src') !== typeof undefined && jQuery(this).attr('data-src') !== false) {
                    $imageURL = jQuery(this).attr('data-src').replace(/(.*)\?.*$/gm, '$1');
                }
                if (typeof jQuery(this).attr('data-lazy') !== typeof undefined && jQuery(this).attr('data-lazy') !== false) {
                    $imageURL = jQuery(this).attr('data-lazy').replace(/(.*)\?.*$/gm, '$1');
                }

                $imageURL = $imageURL.replace(/(.*)\?.*?$/gm,'$1').replace(/stencil\/[0-9]{1,}x[0-9]{1,}\/products/gm, 'stencil/original/products').replace(/\?[^\/]*$/gm,'')+'?c=2&imbypass=on&imbypass=on';

                if (typeof $images[$imageURL] != 'undefined') {
                    return;
                }
                $images[$imageURL] = $imageURL;

                var $alt = jQuery(this).attr('alt'),
                    $title = jQuery(this).attr('alt');
                var $videoCode = isVideoSelector($alt);

                if (index == 0) {
                    $gallery.prepend(
                        '<div data-slide-id="zoom">' +
                        '<a title="' + $title + '" class="MagicZoom" data-options="autostart:false;" id="zoom" href="' + $imageURL + '">' +
                        '<img title="' + $title + '" alt="' + $alt + '" src="' + $imageURL.replace(/\/original\//gm, '/500x659/') + '" xsrcset="' + $imageURL.replace(/\/original\//gm, '/1000x1318/') + ' 2x"/>' +
                        '</a></div>'
                    );
                }

                if ($videoCode) {
                    $gallery.find('.MagicZoomSelectors').append('<a data-slide-id="video-' + index + '" href="#"><img src="' + $imageURL.replace(/\/original\//gm, '/75x75/') + '"/></a>');
                    $gallery.find('div[data-slide-id="zoom"]').after('<div style="display:none" data-slide-id="video-' + index + '">' + $videoCode + '</div>');

                    if (index == 0) {
                        $mzp_firstImageIsVideo = true;
                        $gallery.find('div[data-slide-id="zoom"]').hide();
                        $gallery.find('div[data-slide-id="video-' + index + '"]').show();
                        $gallery.find('a[data-slide-id="video-' + index + '"]').addClass('active-magic-selector');
                    }

                } else {
                    $gallery.find('.MagicZoomSelectors').append('<a data-slide-id="zoom" title="' + $title + '" data-zoom-id="zoom" href="' + $imageURL + '" data-image="' + $imageURL.replace(/\/original\//gm, '/500x659/') + '" xdata-image-2x="' + $imageURL.replace(/\/original\//gm, '/1000x1318/') + '"><img title="' + $title + '" alt="' + $alt + '" src="' + $imageURL.replace(/\/original\//gm, '/200x60/') + '" srcset="' + $imageURL.replace(/\/original\//gm, '/400x120/') + ' 2x"/></a>');
                }

            })

            jQuery(theme.galleryContainer).hide().after($gallery);

            if (jQuery('.MagicZoomSelectors a').length == 1) {
                jQuery('.MagicZoomSelectors').hide();
            }

            initMagicZoomPlusSelectors('a[data-slide-id]');

            jQuery(theme.elementsToHide).remove();
            jQuery(document.body).addClass('MZP-' + th);

            jQuery('input[name*="attribute"], select[name*="attribute"]').on('change', function() {
                var data = { }, $formData = $('form[data-cart-item-add]').serializeArray();
                for (var i in $formData) {
                    data[$formData[i].name] = $formData[i].value;
                }
                jQuery.ajax({
                    dataType: "json",
                    url: '/remote/v1/product-attributes/' + jQuery('input[name="product_id"]').val(),
                    headers: { 'stencil-config': '{}', 'stencil-options': '{"render_with":"products/bulk-discount-rates"}', "x-xsrf-token": window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : "" },
                    data: data,
                    method: 'post',
                    success: function(response) {
                        if (response.data.image != null) {
                            MagicZoom.update('zoom', response.data.image.data.replace('{:size}', 'original'), response.data.image.data.replace('{:size}', '1000x1318'))
                        }
                    }
                });
            });

            $mjs(document).jAddEvent('domready', function() {
                setTimeout(function(){MagicZoom.start();},100);
            });

            initSirv();

            break;
        }
    }
}
