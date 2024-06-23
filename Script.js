
/*
//Função que cria lista com os dados e os armazena no local storage
function list_store() {
//depois faz uns verificadores pros campos
let Nome = document.getElementById("name").value;
//localStorage.setItem('tarefa', JSON.stringify(inputValue.value));
    localStorage.setItem('Nome', JSON.stringify(Nome)); 
    localStorage.setItem('Nome', JSON.stringify(Nome));
    localStorage.setItem('Nome', JSON.stringify(Nome));
}
*/
function store() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    var confirmar_senha = document.getElementById('confirm-password').value;
    var telefone = document.getElementById('phone').value;
    var data_nascimento = document.getElementById('birthdate').value;
    var data = new Date().toLocaleString();
    //var numbers = /[0-9]/g;

        alert('Conta criada com sucesso');
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('senha', JSON.stringify(senha));
        localStorage.setItem('data_nascimento', JSON.stringify(data_nascimento));
        localStorage.setItem('telefone', JSON.stringify(telefone));
        localStorage.setItem('timestamp', JSON.stringify(new Date().toLocaleString()));
}

function Listar() {

    
    let li = document.createElement("li");
    

    let nome_li = document.createTextNode(nome);
    li.appendChild(nome_li);
    /*
    let email_li = document.createTextNode(email);
    let senha_li = document.createTextNode(senha);
    let data_li = document.createTextNode(data_nascimento);
    let telefone_li = document.createTextNode(telefone);
    let timestamp_li = document.createTextNode(data);
    
    li[2].appendChild(email_li);
    li[3].appendChild(senha_li);
    li[4].appendChild(data_li);
    li[5].appendChild(telefone_li);
    li[6].appendChild(timestamp_li);
    */
    let txt = document.createTextNode()

    for(let i=0;i<6;i++){
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
    }
}
function Limpar() {
    document.getElementById('cadastroForm').reset();
}