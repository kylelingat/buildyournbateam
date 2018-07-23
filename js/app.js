var gameModes = [document.getElementById('modern'),
    document.getElementById('allTime'),
    document.getElementById('warriors'),
    document.getElementById('allDefense'),
    document.getElementById('allLakers'),
    document.getElementById('allCeltics')
];

var inMode = 0;
var playerSelected = 0;



function selectMode(mode) {

    inMode = 1;
    $('#buildTeamText').text('CLICK HERE TO RETURN');
    $('#buildTeamText').css('cursor', 'pointer');

    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });

            return this;
        },
    });
    $('#gridContainer').animateCss('fadeOut', function() {
        $('#gridContainer').css('display', 'none');
    });

    if (mode == document.getElementById('modern')) {
        $('#modernContainer').css('display', 'grid');
    }

    $("#buildTeamText").hover(
        function() {
            if (inMode == 1) {
                $(this).css("background-color", "#C9082A");
            }
        },
        function() {
            if (inMode == 1) {
                $(this).css("background-color", "#17408B");
            }
        });
    $("#buildTeamText").click(function() {
        inMode = 0;
        $(this).css("background-color", "#17408B");
        $(this).text("BUILD YOUR NBA TEAM");
        $('#buildTeamText').css('cursor', 'default');
        $('#gridContainer').css('display', 'grid');
        $('#modernContainer').css('display', 'none');

    });

};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}

$('.playerCard').click(function() {
    $('html, body').animate({
        scrollTop: $(".teamRoster").offset().top
    }, 700);
});
let selectedPlayerCache;
function currentlySelected(player) {
    selectedPlayerCache = player;
    console.log(selectedPlayerCache);
    playerSelected = 1;
    // $('.playerCard').each(function(i, obj) {
    //     if (this.id != player.id) {
    //         $(this).css("opacity", "0.2");
    //         $(this).click = null;
    //     }
    // });

    $(".rosterItem").hover(
        function() {
            if (playerSelected == 1 && typeof selectedPlayerCache !== "undefined" && !$(this).hasClass("rosterItemActive")) {
                $(this).css("cursor", "pointer");
                var borderLeft = $(selectedPlayerCache).css('border-left');
                $(this).css('border-left', borderLeft);
                $(this).find('h4').hide();
                $(this).find('h1').text($(selectedPlayerCache).find(".playerText > h1")[0].innerText);
            }
        },
        function() {
            if (playerSelected == 1 && typeof selectedPlayerCache !== "undefined" && !$(this).hasClass("rosterItemActive")) {
                // $(this).css("hover", "none");
                $(this).css("border-left", "none");
                $(this).find('h4').show();
                $(this).find('h1').text(` `);
            }
        }
    );


    $('.rosterItem').click(function() {
      if(playerSelected == 1 && !$(this).hasClass("rosterItemActive")){
            $(this).find('h1').hide();
            $(this).find('h4').remove();
            $(this).css("display", "grid");
            $(this).css("margin-bottom", "10px");
            var classTemp = $(selectedPlayerCache).attr("id");
            $(this).attr("id", classTemp);
            $(this).addClass("white");
            $(selectedPlayerCache).find(".playerIcon").clone().appendTo(this);
            $(selectedPlayerCache).find(".playerText").clone().appendTo(this);
            $(this).find(".tempText").hide();
            $(selectedPlayerCache).hide();
            $(this).addClass('rosterItemActive');
            selectedPlayerCache = undefined;
            // $('.playerCard').each(function(i, obj) {
            //     if (this.id != player.id) {
            //         $(this).css("opacity", "1");
            //     }
            // });
            playerSelected = 0;
          }
        })

    // // $('.rosterItem').click(function() {
    // //     if (playerSelected == 1) {
    // //         $(this).find('h1').hide();
    // //         $(this).find('h4').remove();
    //         $(this).find('#permText > h2').append($(selectedPlayerCache).find(".playerText > h1")[0].innerText);
    //         $(selectedPlayerCache).css("opacity", "0.2")
    //         $('.playerCard').each(function(i, obj) {
    //             if (this.id != player.id) {
    //                 $(this).css("opacity", "1");
    //             }
    //         });
    //         playerSelected = 0;
    //     }
    // });
}
