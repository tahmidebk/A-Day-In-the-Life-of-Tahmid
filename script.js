$(".1stbt").click(function() {
    $(".oneimg").hide();
    $(".1stbt").hide();
    $(".twoimg").show();
    $(".twobt").show();
    $(".threebt").show();
});

$(".threebt").dblclick(function() {
    $(".twoimg").hide();
    $(".twobt").hide();
    $(".threebt").hide();
    $(".threeimg").show();
    $(".onetext").show();
});

$(".twobt").dblclick(function() {
    $(".fourimg").show();
    $(".twoimg").hide();
    $(".twobt").hide();
    $(".threebt").hide();
    $(".fourbt").show();
    $(".fivebt").show();
});

$(".fivebt").dblclick(function() {
    $(".fourbt").hide();
    $(".fourimg").hide();
    $(".fivebt").hide();
    $(".fiveimg").slideDown();
    $(".twotext").show();
});

$(".fourbt").dblclick(function() {
    $(".fourimg").hide();
    $(".fivebt").hide();
    $(".fourbt").hide();
    $(".siximg").fadeIn();
    $(".sixbt").show();
    $(".sevenbt").show();
});

$(".sevenbt").dblclick(function() {
    $(".siximg").fadeOut();
    $(".sixbt").hide();
    $(".sevenbt").hide();
    $(".sevenimg").slideDown();
    $(".threetext").show();
});

$(".sixbt").dblclick(function() {
    $(".siximg").fadeOut();
    $(".sixbt").hide();
    $(".sevenbt").hide();
    $(".eightimg").slideDown();
    $(".fourtext").show();
    $(".eightbt").show();
    $(".ninebt").show();
});

$(".ninebt").dblclick(function() {
    $(".eightimg").fadeOut();
    $(".fourtext").hide();
    $(".eightbt").hide();
    $(".ninebt").hide();
    $(".fivetext").show();
    $(".nineimg").slideDown();
});

$(".eightbt").dblclick(function() {
    $(".eightimg").fadeOut();
    $(".fourtext").hide();
    $(".eightbt").hide();
    $(".ninebt").hide();
    $(".tenbt").show();
    $(".tenimg").fadeIn();
});

$(".tenbt").dblclick(function() {
    $(".tenbt").hide();
    $(".sixtext").show();
    $(".elevenbt").show();
});

$(".elevenbt").dblclick(function() {
    $(".sixtext").hide();
    $(".elevenbt").hide();
    $(".tenimg").fadeOut();
    $(".twelvebt").show();
    $(".thirteenbt").show();
    $(".twelveimg").show();
    $(".elevenimg").show();
});

$(".thirteenbt").dblclick(function() {
$(".twelvebt").hide();
    $(".elevenimg").hide();
    $(".thirteenbt").hide();
    $(".twelveimg").hide();
    $(".thirteenimg").fadeIn();
     $(".seventext").show();
    });

$(".twelvebt").dblclick(function() {
    $(".twelvebt").hide();
    $(".elevenimg").hide();
    $(".thirteenbt").hide();
    $(".twelveimg").hide();
    $(".fourteenimg").fadeIn();
    $(".eighttext").show();
    }); 



