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

function currentlySelected(player) {
    let selectedPlayerCache = []
    selectedPlayerCache = player;
    console.log(selectedPlayerCache);
    playerSelected = 1;
    // $('.playerCard').each(function(i, obj) {
    //     if (this.id != player.id) {
    //         $(this).css("opacity", "0.2");
    //         $(this).click = null;
    //     }
    // });
    //
    console.log($(selectedPlayerCache).find(".playerText > h1"));
    $('.rosterItem').click(function() {
      if(playerSelected == 1){
            $(this).find('h1').hide();
            $(this).find('h4').remove();
            $(this).find('#permText > h2').text($(selectedPlayerCache).find(".playerText > h1")[0].innerText);
          }
        })

    $(".rosterItem").hover(
        function() {
            if (playerSelected == 1) {
                var tempBg = $(selectedPlayerCache).css('border-left-color');
                $(this).css("cursor", "pointer");
                $(this).css('background-color', tempBg);
                $(this).find('h4').hide();
                $(this).find('h1').text($(selectedPlayerCache).find(".playerText > h1")[0].innerHTML);
                console.log(selectedPlayerCache)
            }
        },
        function() {
            if (playerSelected == 1) {
                $(this).css("hover", "none");
                $(this).css("background-color", "#D3D3D3");
                $(this).find('h4').show();
                $(this).find('h1').text(` `);
            }
        }
    );
    // $('.rosterItem').click(function() {
    //     if (playerSelected == 1) {
    //         $(this).find('h1').hide();
    //         $(this).find('h4').remove();
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
