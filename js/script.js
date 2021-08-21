/*global $, alert */
$(function () {
    'use strict';
    var tab_link = $(".navbar .menu .tab .tab-link");
    
    /* Clac My age and set it  (1994 is my birthday year) */
        let theYear = new Date().getFullYear();
        $('.my_age').text(theYear - 1995);
        $('.thisyear').text(theYear);
    

    /*Start Script for tramsition between section*/
    tab_link.on("click", function (e) {
        e.preventDefault();
        $(this).parent().addClass("active-tab").siblings().removeClass("active-tab");

        var secId = $("." + $(this).data("id"));

        if (secId.is(":hidden")) {
            secId.siblings("section").slideUp("700", function () {
                secId.delay("700").slideDown("950");
            });
        }
    });
    /*End Script for tramsition between section*/

    /*Start Script For Stars Rate*/
    $(".skill li .rate").each(function (indx, rt) {

        var $ratNumber = 6,
            $rating = $(rt).data("rate"),
            $icoRat = "<span class=\"fas fa-star fa-fw\"></span>";

        while ($ratNumber > 0) {
            $(rt).append($icoRat);
            $ratNumber--;
        }

        $(rt).find("span").each(function (index, r) {
            if (index >= $rating) {
                return false;
            }
            // Append Disabled Rats
            $(r).css({
                color: "#FDC750",
                opacity: 1
            });
        });
    });
    /*End Script For Stars Rate*/

    /*Start Shuffle Scripts*/
    $(".portfolio .list li").on("click", function () {
        $(this).addClass('sticked').siblings().removeClass('sticked');
    });

    /*Start Mixitup*/
    $('#container').mixItUp({
        animation: {
            enable: false

        },
        callbacks: {
            onMixLoad: function () {
                $(this).mixItUp('setOptions', {
                    animation: {
                        enable: true,
                        duration: 800,
                        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    },
                    callbacks: {
                        onMixFail: function () {
                            alert('No elements found matching in this Category');
                        }
                    }
                });
            }
        }
    });
    /*End Mixitup*/


    /*Start Portfolio Scripting to View Image*/
    $(".portfolio .items img").on("click", function () {
        var img = $(this).attr('src'),
            link = $(this).siblings().find('a.link').attr('href'),
            title = $(this).siblings().find('.title').html(),
            desc = $(this).siblings().find('.desc').html();



        $(".content .viewer").css("transform", "scale(1,1)"); // 1

        $(".content .viewer .window").find('a').attr('href', link);

        $(".content .viewer .window .title").html(title);

        $(".content .viewer .window img").attr('src', img).fadeIn(800);

        $(".content .viewer .window .desc").html(desc);
    });

    /*Close Viewer On click on background or close icon*/
    $(".viewer, .close-ico").click(function () {
        $(".viewer").css("transform", "scale(0,0)");
    });

    /*Prevent Closing Viewer On click on Image*/
    $(".viewer img").click(function (e) {
        e.stopPropagation();
    });

    /*Close Viewer On click on Esc key*/
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(".viewer").css("transform", "scale(0,0)");
        }
    });

    /*End Portfolio Scripting to View Image*/

    /*
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#555"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#555"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": .2,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#555",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 170,
                        "line_linked": {
                            "opacity": .5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
*/
});
