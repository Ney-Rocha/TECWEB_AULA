/*Criado por Ney Rocha
11/09/2018*/

var numeroPar = 10;
var numeroImpar = 3;

console.log(numeroPar + numeroImpar); //adicao
console.log(numeroPar - numeroImpar);//subtração
console.log(numeroPar * numeroImpar);// Multiplicação
console.log(numeroPar/numeroImpar);//divisão
console.log(numeroPar** numeroImpar);//potencia
console.log(numeroPar % numeroImpar);//Resto da divisão (modulo)

var strImp = "Impacta";
var strFac = "Faculdade";

console.log (strImp + " " + strFac);// concatenando String


// Expressões lógicas

var testeVaiUm = true;// boleano
var testeVaiDois = true;
var testeVaiTres =true;

console.log(testeVaiUm || testeVaiDois || testeVaiTres);//OU
console.log(testeVaiUm && testeVaiDois && testeVaiTres);//E
console.log(testeVaiUm && testeVaiDois || testeVaiTres);
console.log(testeVaiUm && (testeVaiDois || testeVaiTres));

console.log(2 + 2 * 3);
console.log((2 + 2)* 3);
console.log((2 + 2)* 3/3);
console.log(8 + 12 + 8 + 4 / 4);
console.log((8 + 12 + 8 + 4) / 4); //Média

// controle de fluxo

//if else

var numVar1 = 1;
var numVAr2 = 2;

if(numVar1 > numVAr2){
    console.log("Ok >");
}

if(numVar1 < numVAr2){
    console.log("Ok <");
}

if(numVar1 != numVAr2){
    console.log("Ok !=");
}

if(numVar1 > numVAr2){
    console.log("false >")
} else if(numVar1 < numVAr2){
    console.log("false <")
} else{
    console.log("True")
}

//switch case

var num = 5;

switch (num){
    case 5:
        alert("alexandre");
        break;
    case 10:
        alert("marta");
        break;
    default:
      console.log("ok");
}

//laço - sabe inicio e fim

for( cont = 0; cont < 10; cont++){

    console.log("valores de cont" + cont);
}


for( cont = 10; cont > 0; cont--){

    console.log("valores de cont" + cont);
}

//while - nao sabe qdo vai sair

var num = 20;

while(num > 15){
    num = prompt("digite um numero impar");
}


//Array - ARRANJO

var numArr = [ "a","b","c","d","e"];
var numArr2 = new Array(1,2,3,4,5,6);

for (i=0; i< numArr.length; i++){
    console.log(numArr[i]);
}

var str = "alexandre";

for (i=0; i < str.length; i++){
    console.log(str[i]);
}

//identifique se o arranjo é um palindrome~

var palavra = prompt("digite uma palavra")

var he = 0;
var ta = palavra.leght -1;
var pali = true;

while(he <= ta){
    if(palavra[he] == palavra[ta]){
        he++;
        ta--;
    } else{
        he = ta;

    }
}

if(pali){
    alert("ok");
}else{
    alert("nok");
}


// melhorado

while(!pali){
    if(he < ta && palavra[he] == palavra[ta]){
        he++;
        ta--;
        pali = false;
        

    } else if(he < ta){
       alert("nOK");
       pali = true;
        } else {
            alert("OK");
            pali = true;
        }
}

//checar se os 3 primeiros caracteres são iguais aos 3 ultimos.
