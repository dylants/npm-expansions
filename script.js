$(function() {
    // load the npm expansion file of random npm"s
    $.getJSON("index.json", function(data) {
        // changes the text to a random element within the array
        function changeText() {
            var num = Math.floor(Math.random() * data.length - 1);

            // some sparkle to animate the change
            $("#npm-expansion").animate({
                "opacity": 0
            }, 100, function() {
                $(this).text(data[num]);
            }).animate({
                "opacity": 1
            }, 100);
        }

        // change the text to start...
        changeText();

        // do this every 5 seconds
        setInterval(function() {
            changeText();
        }, 5000);
    });
});
