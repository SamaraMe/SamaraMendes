let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

let bemVindo = document.querySelector('#bemVindo')
bemVindo.innerHTML = 'Para voltar a página inicial clique em sair'

logado.innerHTML = `Olá ${userLogado.nome} `
if(localStorage.getItem('token') ==  null){
    alert ('Você precisa estar logado para acessar essa página')
    window.location.href= 'http://127.0.0.1:5500/login.html'


}

function sair (){
    localStorage.removeItem('token')
    window.location.href= 'http://127.0.0.1:5500/index.html'
}