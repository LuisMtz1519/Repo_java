function divisores(numero){
    let total=0

    for(let i=1; i<=numero;i++){
        if(numero % i==0){
            total ++;
        }
    }
    return total;
}

console.log("Total de divisores", divisores(32));

const divisoresV2 = function(numero){
    let total=0;

    for(let i=1; i<=numero;i++){
        if(numero % i==0){
            total++
        }
    }
    return total
};

console.log("Total divisiores (v2)",divisoresV2);

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);

    let resultado=
    document.getElementById("result");

    resultado.value=divisores(numero);

    console.log(numero)
};
