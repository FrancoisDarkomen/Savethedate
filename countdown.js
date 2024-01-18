// Replace the date below with your wedding date
var weddingDate = new Date('Septerber 7, 2024 14:00:00').getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = weddingDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'The big day has arrived!';
    }
}, 1000);