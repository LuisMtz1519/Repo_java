function operaciones(num,num2,operacion){
    let resultados=0;
    switch(operacion){
        case '+':
            resultados=num+num2;
            break;
        case '-':
            resultados=num-num2;
            break;
        case '/':
            resultados=num/num2;
            break;
        case '*':
            resultados=num*num2;
            break;
    }
    return resultados;
}

function calcularop(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);

    let numero2 = 
    parseInt(document.getElementById("numero2").value);
    console.log(numero2);

    let operacion=
    document.getElementById("operacion").value;
    console.log(operacion);
    console.log(typeof operacion);

    let resultado=
    document.getElementById("result");
    resultado.value=operaciones(numero,numero2,operacion);
    console.log(resultado);
};
