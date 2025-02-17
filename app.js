//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Declaração das variáveis
let friendList = [];
let b_restart = document.getElementById('reiniciar');
let draw = document.getElementById('sortear');
let input = document.getElementById('amigo');

//habilita a opção enviar pelo botão enter
input.addEventListener('Keypress', function(event){
    if(event.key == 'Enter') {
        event.preventDefault();
        document.getElementById('addButton').click();
    }
});

//Adiciona nomes de amigos
function toAddFriend() {
    let friendName = document.querySelector('input').value;
    if (friendName == '') {
        alert('Não é permitido deixar nome em branco. Favor adicionar um nome!');
        return false;
    } else {
        clearList();
        friendList.push(friendName);
        let desplayedList = document.getElementById('friendList');
        for (i = 0; i < friendList.length; ++i){
            let list = document.createElement('list');
            list.innerText =  friendList[i];
            desplayedList.appendChild(list);
        }
    clearField();
    }
}

//sorteio de ammigos
function drawFriend() {
    if (friendList == '') {
        alert('Não é permitido deixar nome em branco. Favor adicionar um nome!');
    } else {
        let secretFriend = friendList[Math.floor(Math.random() * friendList.length)];
        friendList = friendList.filter(item => item !== secretFriend);
        result.innerHTML = 'O amigo sorteado é ... ${secretFriend}!';
        b_restart.removeAttribute('hidden');
        draw.setAttribut('hidden', 'hidden');

    }
    clearList();
}

//novo jogo
function newGame() {
    document.getElementById('Reiniciar');
    friendList = [];
    result.innerHTML = '';
    b_restart.setAttribute('hidden','hidden');
    draw.removeAttribute('hidden');

}
 //limpa campo
function clearField(){
    friendName = document.querySelector('input');
    friendName.value = '';
}

//limpa lista
function clearList() {
    schedule = document.getElementById('friendList')
    schedule.innerHTML = '';
}