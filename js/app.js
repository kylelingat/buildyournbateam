var gameModes = [document.getElementById('modern'),
    document.getElementById('allTime'),
    document.getElementById('warriors'),
    document.getElementById('allDefense'),
    document.getElementById('allLakers'),
    document.getElementById('allCeltics')
];

var inMode = 0;
var inModernMode = 0;
var playerSelected = 0;
var modernBalance = 15

$("#actualBalance").text("Your current balance is $" + modernBalance)

function selectMode(mode) {

    inMode = 1;
    $('#buildTeamText').text('CLICK HERE TO RETURN');

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
        inModernMode = 1
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
        $('#gridContainer').css('display', 'grid');
        $('#modernContainer').css('display', 'none');
        inModernMode = 0;

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
var selectedPlayerCache;
function currentlySelected(player) {
    selectedPlayerCache = player;
    console.log(selectedPlayerCache);
    playerSelected = 1;
    if($(selectedPlayerCache).hasClass("5worth") && inModernMode == 1){
      modernBalance-=5;
    } else if($(selectedPlayerCache).hasClass("4worth") && inModernMode == 1){
      modernBalance-=4
    } else if($(selectedPlayerCache).hasClass("3worth") && inModernMode == 1){
      modernBalance-=3
    } else if($(selectedPlayerCache).hasClass("2worth") && inModernMode == 1){
      modernBalance-=2
    } else if($(selectedPlayerCache).hasClass("1worth") && inModernMode == 1){
      modernBalance-=1
    }
    $('.playerCard').removeAttr("onclick");
    // $('.playerCard').each(function(i, obj) {
    //     if (this.id != player.id) {
    //         $(this).css("opacity", "0.2");
    //         $(this).click = null;
    //     }
    // });

    $(".rosterItem").hover(
        function() {
            if (playerSelected == 1 && typeof selectedPlayerCache !== "undefined" && !$(this).hasClass("rosterItemActive")) {
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
      if(playerSelected == 1 && !$(this).hasClass("rosterItemActive") && modernBalance >= 0){
            $(this).find('h1').hide();
            $(this).find('h4').remove();
            $(this).css("display", "grid");
            $(this).css("margin-bottom", "10px");
            var classTemp = $(selectedPlayerCache).attr("id");
            $(this).attr("id", classTemp);
            $(this).addClass("white");
            $(selectedPlayerCache).find(".playerIcon").clone().appendTo(this);
            $(selectedPlayerCache).find(".playerText").clone().appendTo(this);
            $("#actualBalance").text("Your current balance is $" + modernBalance)
            $(this).find(".tempText").hide();
            $(selectedPlayerCache).addClass("inRoster");
            $(this).addClass('rosterItemActive');
            $('.playerCard').each(function(i, obj) {
                if (this.id != player.id) {
                    $(this).attr("onclick", "currentlySelected(this)");
                }
            });
            selectedPlayerCache = undefined;


            playerSelected = 0;
          }
        })


}
