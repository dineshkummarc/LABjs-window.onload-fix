(function(){
	window._winload = false;
	window.onload = function() {
		window._winload = true;
	}

	$LAB.setOptions({ AlwaysPreserveOrder: true, BasePath: 'Assets/Scripts/'})
		.script('script1.js')
		.script('script2.js')
		.wait(function(){
			// If window.onload has already fired then just call the code that should run on window onload...
			if (_winload) {
				myapp.init();
			} 
			// ...otherwise assign the function to be called when the window.onload event is triggered
			else {
				window.addEventListener('load', myapp.init, false);
			}
		})
}())