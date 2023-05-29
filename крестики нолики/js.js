for (var i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"></div>';
    }
    
    var step = 0;
    
    document.getElementById('game').onclick = function(event){
    console.log(event);
    if(event.target.className == 'block'){
    if (step % 2 == 0){
    event.target.innerHTML = 'x';
    }
    else {
    event.target.innerHTML = 'o';
    }
    step++;
    checkWinner();
    }
    
    function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    console.log(allblock);
    if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x') alert('Победили крестики');
    if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x') alert('Победили крестики');
    if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики');
    if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x') alert('Победили крестики');
    if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x') alert('Победили крестики');
    if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики');
    if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x') alert('Победили крестики');
    if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики');
    if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x') alert('Победили крестики');

    if (allblock[0].innerHTML == 'o' && allblock[1].innerHTML == 'o' && allblock[2].innerHTML == 'o') alert('Победили нолики');
    if (allblock[3].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[5].innerHTML == 'o') alert('Победили нолики');
    if (allblock[6].innerHTML == 'o' && allblock[7].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики');
    if (allblock[0].innerHTML == 'o' && allblock[3].innerHTML == 'o' && allblock[6].innerHTML == 'o') alert('Победили нолики');
    if (allblock[1].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[7].innerHTML == 'o') alert('Победили нолики');
    if (allblock[2].innerHTML == 'o' && allblock[5].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики');
    if (allblock[0].innerHTML == 'o' && allblock[1].innerHTML == 'o' && allblock[2].innerHTML == 'o') alert('Победили нолики');
    if (allblock[0].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики');
    if (allblock[2].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[6].innerHTML == 'o') alert('Победили нолики');
    }
}