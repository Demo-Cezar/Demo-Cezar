 window.addEventListener('load', function() {
      var text = document.getElementById('header_rainbow');
      var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      var currentColor = 0;
      setInterval(function() {
        text.style.color = colors[currentColor];
        currentColor = (currentColor + 1) % colors.length;
      }, 1000); // Change color every 1 second (1000 milliseconds)
	    var bgImg = document.getElementsByTagName('body')[0].style.backgroundImage;
    var xPos = 0;
    var yPos = 0;
	var time = 0;
    function moveBackground() {
		time++;
      xPos= 0*Math.sin(time/100)+100;
	  yPos= 5*Math.cos(time/100)+800;
      document.getElementsByTagName('body')[0].style.backgroundPosition = xPos + 'px ' + yPos + 'px';
      requestAnimationFrame(moveBackground);
    }
    moveBackground();
    });