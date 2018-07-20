var gameModes = [document.getElementById('modern'),
                 document.getElementById('allTime'),
                 document.getElementById('warriors'),
                 document.getElementById('allDefense'),
                 document.getElementById('allLakers'),
                 document.getElementById('allCeltics')
];



function selectMode(mode){
  for (var i = 0; i < gameModes.length; i++) {
      gameModes[i].style.opacity = "0.5";
      gameModes[i].style.height = "0px";
}

}
