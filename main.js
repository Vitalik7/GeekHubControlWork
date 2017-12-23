function changeBackground(newBgrColor) {
	var bgrColor = document.getElementById('example')
	bgrColor.style.backgroundColor = newBgrColor
}

function changeColor(newColor) {
	var color = document.getElementById('example')
	color.style.color = newColor
}

function changeFont(newFont) {
	document.getElementById('example').style.fontFamily = newFont
}

function changeSize(num) {
	var result = document.getElementById('example')
	result.style.fontSize = num
}

document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById('example')
	var nuled = null
  var hot = new Handsontable(container, {
		data: nuled,
    rowHeaders: true,
    colHeaders: true,
    colWidths: 70,
		minCols: 26,
 		minRows: 100,
    manualColumnResize: true,
    manualRowResize: true,
  });

	var local = document.getElementsByClassName('current')
	localStorage.setItem(local, JSON.stringify({	}))
	JSON.parse(localStorage.getItem(local))

// 	var localArticles = JSON.parse( localStorage.getItem('current') )
//
// for (var i = 0; i < localArticles.length; i++) {
// 	if ( articleId == localArticles[i].id ) {
// 		localArticles[i]['title'] = document.getElementsByClassName('current').val()
// 	}
// }
});
