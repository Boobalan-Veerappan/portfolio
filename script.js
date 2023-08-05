
function navigator(){

  window.location.href('https://www.linkedin.com/in/boobalan-v-94119320b/');
}



function accordionToogle(){

  var elem = document.getElementById('accodion-default');


var arrow = document.getElementById('arrowstyle');

if(elem.getAttribute('collapse') == 'true'){

  elem.style.maxHeight = '0px'
  arrow.style.transform = 'rotate(320deg)'
  // arrow.style.transition = 'all 0.8s'
  elem.setAttribute('collapse','false');
}else{
  console.log(" # ");
  elem.style.maxHeight = '100px';
  arrow.style.transform = 'rotate(45deg)'
  // arrow.style.transition = 'all 0.8s'
  elem.setAttribute('collapse','true');
}
}
