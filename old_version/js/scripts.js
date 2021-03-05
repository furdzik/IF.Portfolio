$(document).ready(function () {

// CLOCK

    var clock = {
        currentTime: {},
        degrees: {},
        getDegrees: function (time) {
            this.degrees.hour = time.hour * 30;
            this.degrees.minute = time.minute * 6;
            this.degrees.second = time.second * 6;
        },
        getTime: function () {
            var d = new Date();
            this.currentTime.hour = d.getHours();
            this.currentTime.minute = d.getMinutes();
            this.currentTime.second = d.getSeconds();

            if (this.currentTime.hour > 12) {
                this.currentTime.hour = this.currentTime.hour - 12;
            }
            this.getDegrees(this.currentTime);
        },
        setTime: function () {
            this.getTime();

            $('#hour').css({
                'transform': 'rotate(' + this.degrees.hour + 'deg)'
            });
            $('#minute').css({
                'transform': 'rotate(' + this.degrees.minute + 'deg)'
            });
            $('#second').css({
                'transform': 'rotate(' + this.degrees.second + 'deg)'
            });

        }
    };

    setInterval(function() {
        clock.setTime();
    }, 1000);


// RESIZE
    var setNewWrapperWidth = function () {
        var windowWidth = $(window).width();
        $('#wrapper').css({'width': windowWidth +'px'});
    };

    $(window).resize(function () {
        setNewWrapperWidth()
    });

});


