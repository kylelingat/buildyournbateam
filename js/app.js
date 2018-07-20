var gameModes = [document.getElementById('modern'),
    document.getElementById('allTime'),
    document.getElementById('warriors'),
    document.getElementById('allDefense'),
    document.getElementById('allLakers'),
    document.getElementById('allCeltics')
];

var inMode = 0;

function selectMode(mode) {

    inMode = 1;
    $('#buildTeamText').text('CLICK TO GO BACK');
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
