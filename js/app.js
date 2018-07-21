var gameModes = [document.getElementById('modern'),
    document.getElementById('allTime'),
    document.getElementById('warriors'),
    document.getElementById('allDefense'),
    document.getElementById('allLakers'),
    document.getElementById('allCeltics')
];

var inMode = 0;
var playerSelected = 0;

$(".playerCard").click(function() {
    $('html, body').animate({
        scrollTop: $(".teamRoster").offset().top
    }, 700);
});

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

function currentlySelected(player){
  console.log(player)
  $( "p" ).addClass( "selected" );
  $('.playerCard').each(function(i, obj) {
    if(this.id != player.id){
      $(this).css("opacity", "0.2");
    }
});
  $(player).find(".playerIcon").clone().appendTo("#currentlySelectedTemp")
  var currentlySelectedPlayerText = $(player).find(".playerText > h1")[0].innerHTML
  var t = document.createTextNode(currentlySelectedPlayerText);
  document.getElementById("currentlySelectedTemp").appendChild(t);
}

$( ".rosterItem" ).hover(
  function() {
    if(playerSelected == 1){
    $( this ).css( "cursor", "pointer" );
    $( this ).css( "background-color", "white" );
  }
  }, function() {
    if(playerSelected == 1){
    $( this ).css( "hover", "none" );
    $( this ).css( "background-color", "#D3D3D3" );
  }
  }
);
