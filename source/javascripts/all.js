// = require_tree .


$(document).ready(function () {
  $('.color-swatches #red').click(function () {
    console.log('red');
    $('head').append('<link rel="stylesheet" href="stylesheets/theme/red.css" type="text/css" />');
	});
});

$(document).ready(function () {
  $('.color-swatches #orange').click(function () {
    console.log('orange');
     $('head').append('<link rel="stylesheet" href="stylesheets/theme/orange.css" type="text/css" />');
	});
});

$(document).ready(function () {
  $('.color-swatches #yellow').click(function () {
    console.log('yellow');
     $('head').append('<link rel="stylesheet" href="stylesheets/theme/yellow.css" type="text/css" />');
	});
});


$(document).ready(function () {
  $('.color-swatches #green').click(function () {
    console.log('green');
    $('head').append('<link rel="stylesheet" href="stylesheets/theme/green.css" type="text/css" />');
	});
});

$(document).ready(function () {
  $('.color-swatches #blue').click(function () {
    console.log('blue');
    $('head').append('<link rel="stylesheet" href="stylesheets/theme/blue.css" type="text/css" />');
	});
});

$(document).ready(function () {
  $('.color-swatches #violet').click(function () {
    console.log('violet');
    $('head').append('<link rel="stylesheet" href="stylesheets/theme/violet.css" type="text/css" />');
	});
});
