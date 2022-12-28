document.getElementById("1stbox").style.display = "none";  
document.getElementById("2ndbox").style.display = "none";  
document.getElementById("3rdbox").style.display = "none";  

learnmore.addEventListener("click", function() {
    var div = document.createElement('div')
    div.setAttribute('class', 'children');
    div.innerHTML = document.getElementById('1stbox').innerHTML;
  });