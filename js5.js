function operaciones(numero,numero2,operacion){
    let resultado=0;
    switch(operacion){
        case '+':
            resultado = numero + numero2;
            break;
        case '-':
            resultado = numero - numero2;
            break;
        case '/':
            resultado = numero / numero2;
            break;
        case '*':
            resultado = numero * numero2;
            break;
    }
    return resultado
}

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero)
    let numero2 = 
    parseInt(document.getElementById("numero2").value);
    console.log(numero2)

    let operacion=
    document.getElementById("operacion")

    let resultado=
    document.getElementById("result");

    resultado.value=operaciones(numero,numero2,operacion)
    console.log(resultado)
};
