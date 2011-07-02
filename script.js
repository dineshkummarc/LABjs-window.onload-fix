(function(){
	window._winload = false;
	window.onload = function() {
		window._winload = true;
	}

	$LAB.setOptions({ AlwaysPreserveOrder: true, BasePath: 'Assets/Scripts/'})
		.script('script1.js')
		.script('script2.js')
		.wait(function(){
			// code to execute
		})
}())