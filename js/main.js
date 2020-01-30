function clicou() {
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    window.open("https://google.com"); //Abre em outra aba
    window.location.href = "https://google.com"; //Abre na mesma janela
}

function trocar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Obrigado por passar o mouse';
    elemento.innerHTML = 'Obrigado por passar o mouse'
}

function voltar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui';
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load() {
    alert('pagina carregada');
}

function change(elemento) {
    console.log(elemento.value);
}

/*function soma(x, y) {
    return x + y;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar - false;
    }
    
    return validar;
}

var idade = prompt('Qual sua idade?');
console.log(validaIdade(idade));
alert(soma(5,10));*/

/*Data
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/* FOR
var i;
for (i=0; i<10; i++) {
    console.log(i);
}*/

/* WHILE
var count = 0;
while (count < 5) {
    console.log(count);
    count++; //count += 1
}*/

/* IF/ELSE, prompt
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};*/

/* Lista de dicionarios
var frutas = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'roxa'}];
console.log(frutas);

Dicionario
var fruta = {nome:'maça', cor:'vermelha'};
console.log(fruta);*/

/*Listas
var lista = ['maça', 'pera', 'laranja'];
console.log(lista);
console.log(lista[1]);
lista.pop();
console.log(lista);
lista.push('uva');
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(' - '));*/


/* var nome = "John Doe";
var n1 = 5;
var n2 = 3;
var frase = 'Japão é o melhor time do mundo';
// alert(nome + ' tem ' + idade + ' anos');
// alert(idade + idade2);

console.log(nome);
console.log(n1 + n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 - n2);
console.log(n1 % n2);
console.log(frase.replace('Japão', 'Brasil'));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase()); */