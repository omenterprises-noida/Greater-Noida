/*

[Main Script]

Project     : SMM24 - Multipurpose Social Media Management and Marketing HTML Template
Author      : themelooks.com
Author URI  : https://themeforest.net/user/themelooks

*/

;(function(a) {
    var h = a(window)
      , m = a("body")
      , d = function(a, d) {
        return "undefined" === typeof a ? d : a
    };
    a(function() {
        a("[data-bg-img]").each(function() {
            var c = a(this);
            c.css("background-image", "url(" + c.data("bg-img") + ")").addClass("bg--img bg--overlay").attr("data-rjs", 2).removeAttr("data-bg-img")
        });
        a("img").attr("data-rjs", 2);
        retinajs();
        a('[data-trigger="sticky"]').each(function() {
            a(this).sticky({
                zIndex: 999
            })
        });
        a(".banner--section").find(".banner--slider").on("initialized.owl.carousel", function(c) {
            c = a(c.currentTarget);
            c.css("height", c.outerHeight())
        });
        a(".owl-carousel").each(function() {
            var c = a(this);
            c.owlCarousel({
                items: d(c.data("owl-items"), 1),
                margin: d(c.data("owl-margin"), 0),
                loop: d(c.data("owl-loop"), !0),
                autoplay: d(c.data("owl-autoplay"), !0),
                smartSpeed: d(c.data("owl-speed"), 1200),
                autoplaySpeed: 1600,
                mouseDrag: d(c.data("owl-drag"), !0),
                nav: d(c.data("owl-nav"), !1),
                navText: ["", ""],
                dots: d(c.data("owl-dots"), !1),
                responsive: d(c.data("owl-responsive"), {})
            })
        });
        var b = a('[data-popup="img"]');
        b.length && b.magnificPopup({
            type: "image"
        });
        b = a('[data-popup="video"]');
        b.length && b.magnificPopup({
            type: "iframe"
        });
        a('[data-form="validate"]').each(function() {
            a(this).validate({
                errorPlacement: function() {
                    return !0
                }
            })
        });
        a('[data-form="ajax"]').each(function() {
            var c = a(this)
              , b = c.find(".status");
            c.validate({
                errorPlacement: function() {
                    return !0
                },
                submitHandler: function(c) {
                    var d = a(c);
                    c = d.attr("action");
                    d = d.serialize();
                    a.post(c, d, function(a) {
                        b.show().html(a).delay(3E3).fadeOut("show")
                    })
                }
            })
        });
        b = a('[data-counter-up="numbers"]');
        b.length && b.counterUp({
            delay: 10,
            time: 1E3
        });
        a("[data-countdown]").each(function() {
            var c = a(this);
            c.countdown(c.data("countdown"), function(c) {
                a(this).html("<ul>" + c.strftime("<li><strong>%D</strong><span>Day</span></li><li><strong>%H</strong><span>Hour</span></li><li><strong>%M</strong><span>Min</span></li><li><strong>%S</strong><span>Sec</span></li>") + "</ul>")
            })
        });
        a('[data-trigger="spinner"]').each(function() {
            var c = a(this);
            c.spinner({
                min: c.data("min"),
                max: c.data("max")
            })
        });
        var b = a(".pricing--section")
          , h = b.find(".pricing--item");
        b.on("mouseenter", ".pricing--item:not(.active)", function() {
            var c = a(this);
            h.find(".features").slideUp(function() {
                a(this).parents(".pricing--item").removeClass("active")
            });
            c.find(".features").slideDown(function() {
                a(this).parents(".pricing--item").addClass("active").parents(".AdjustRow").isotope({
                    layoutMode: "fitRows"
                })
            })
        });
        var b = a(".pricing-table--section").find(".pricing-table--item")
          , e = b.children(".header")
          , k = 0
          , l = b.children(".features");
        e.each(function(c) {
            var b = a(this);
            b.outerHeight() > k && (k = b.outerHeight());
            c === e.length - 1 && e.css("height", k)
        });
        l.find(".nav > li").on("mouseenter", function(c) {
            var b = a(this);
            l.each(function() {
                a(this).find(".nav > li").eq(b.index()).addClass("hovered")
            })
        }).on("mouseleave", function(a) {
            l.find(".nav > li").removeClass("hovered")
        });
        a(".products--section").find(".product-single--img").on("click", '[data-toggle="tab"]', function() {
            a(this).parent(".item").addClass("active").parent(".owl-item").siblings().children(".item").removeClass("active")
        });
        b = a("#productRatingSelect");
        b.length && b.barrating({
            theme: "fontawesome-stars-o",
            hoverState: !1
        });
        a(".checkout--section").on("click", ".checkout--info-toggle", function(c) {
            c.preventDefault();
            a(this).toggleClass("active").parent("p").parent(".title").siblings(".checkout--info-form").slideToggle()
        });
        a(".team--section").find(".team--member .info").each(function() {
            var c = a(this);
            c.parent(".team--member").css("padding-bottom", c.outerHeight())
        });
        var f = a("#map");
        f.length && function() {
            var a = new google.maps.Map(f[0],{
                center: {
                    lat: f.data("map-latitude"),
                    lng: f.data("map-longitude")
                },
                zoom: f.data("map-zoom"),
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !0,
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        hue: "#FFBB00"
                    }, {
                        saturation: 43.400000000000006
                    }, {
                        lightness: 37.599999999999994
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        hue: "#FFC200"
                    }, {
                        saturation: -61.8
                    }, {
                        lightness: 45.599999999999994
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        hue: "#FF0300"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 51.19999999999999
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        hue: "#FF0300"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 52
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        hue: "#0078FF"
                    }, {
                        saturation: -13.200000000000003
                    }, {
                        lightness: 2.4000000000000057
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        hue: "#00FF6A"
                    }, {
                        saturation: -1.0989010989011234
                    }, {
                        lightness: 11.200000000000017
                    }, {
                        gamma: 1
                    }]
                }]
            });
            if ("undefined" !== typeof f.data("map-marker")) {
                var b = f.data("map-marker")
                  , d = 0;
                for (d; d < b.length; d++)
                    new google.maps.Marker({
                        position: {
                            lat: b[d][0],
                            lng: b[d][1]
                        },
                        map: a,
                        animation: google.maps.Animation.DROP,
                        draggable: !0
                    })
            }
        }();
        var g = a(".footer--section")
          , b = g.find(".widget--title")
          , g = g.find(".widget--logo");
        g.length && g.outerHeight() > b.outerHeight() && b.css("margin-top", g.outerHeight() - b.outerHeight());
        a(".back-to-top-btn").on("click", "a", function(c) {
            c.preventDefault();
            a("html, body").animate({
                scrollTop: 0
            }, 1200)
        });
        "undefined" !== typeof a.cColorSwitcher && a.cColorSwitcher({
            switcherTitle: "Main Colors",
            switcherColors: [{
                bgColor: "#179ea8",
                filepath: "css/colors/color-1.css"
            }, {
                bgColor: "#82b440",
                filepath: "css/colors/color-2.css"
            }, {
                bgColor: "#ff5252",
                filepath: "css/colors/color-3.css"
            }, {
                bgColor: "#e91e63",
                filepath: "css/colors/color-4.css"
            }, {
                bgColor: "#f69323",
                filepath: "css/colors/color-5.css"
            }, {
                bgColor: "#FC5143",
                filepath: "css/colors/color-6.css"
            }, {
                bgColor: "#00B249",
                filepath: "css/colors/color-7.css"
            }, {
                bgColor: "#D48B91",
                filepath: "css/colors/color-8.css"
            }, {
                bgColor: "#8CBEB2",
                filepath: "css/colors/color-9.css"
            }, {
                bgColor: "#119ee6",
                filepath: "css/colors/color-10.css"
            }],
            switcherTarget: a("#changeColorScheme")
        })
    });
    h.on("load", function() {
        var b = function() {
            1 < h.scrollTop() ? m.addClass("isScrolling") : m.removeClass("isScrolling")
        };
        b();
        h.on("scroll", b);
        b = a(".AdjustRow");
        b.length && b.isotope({
            layoutMode: "fitRows"
        });
        var b = a(".gallery--section")
          , d = b.find(".gallery--filter-menu")
          , e = b.find(".gallery--items");
        e.length && e.isotope({
            animationEngine: "best-available",
            itemSelector: ".gallery--item"
        });
        d.on("click", "li", function(b) {
            b.preventDefault();
            b = a(this);
            var d = b.data("target");
            e.isotope({
                filter: "*" !== d ? '[data-cat~="' + d + '"]' : d
            });
            b.addClass("active").siblings().removeClass("active")
        });
        b = a("#preloader");
        b.length && b.fadeOut("slow")
    })
}
)(jQuery);
