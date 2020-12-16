// View Username
var username = prompt('USERNAME:');
document.getElementById('user-name').innerHTML = username;

// When user click Go Button
var element = document.getElementById("go-btn");
element.addEventListener('click',
function() {

    // User result
    var userPoint = document.getElementById('user-move').innerHTML = Math.floor(Math.random()*6) +1;
    // CPU result
    var cpuPoint = document.getElementById('cpu-move').innerHTML = Math.floor(Math.random()*6) +1;

    // Calc who is the winner
    if (userPoint > cpuPoint){
        document.getElementById('winner').innerHTML = 'YOU WON!'
    }
    else{
        document.getElementById('winner').innerHTML = 'OOOPS... CPU is the Winner!'
    }

    // If it's a draw
    if (userPoint === cpuPoint){
        document.getElementById('winner').innerHTML = ' It\'s a DRAW, nobody won...'
    }
    
});

