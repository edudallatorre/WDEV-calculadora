var operando1 = -1
var operando2 = -1
var operador = ''

function digitaOperando(numero){

    let visor = document.getElementById("visor")

    if (operador == ''){
        operando1 = numero
        visor.innerHTML = operando1
    } else {
        operando2 = numero
        visor.innerHTML = operando1 + ' ' + operador + ' ' + operando2
    }

}

function digitaOperador(simbolo){
    let visor = document.getElementById("visor")
    operador  = simbolo
    visor.innerHTML = operando1 + ' ' + operador
}

function executa(){
    let resultado = 0
    let visor = document.getElementById("visor")

    switch (operador) {
        case '+': 
            resultado = operando1 + operando2 
            break
        case '-': 
            resultado = operando1 - operando2
            break
        case 'x': 
            resultado = operando1 * operando2
            break            
        case '/': 
            resultado = operando1 / operando2
            break

    }

    visor.innerHTML = operando1 + ' ' + operador + ' ' + operando2 + ' = ' + resultado
}

function limpar(){
    let visor = document.getElementById("visor")
    operando1 = -1
    operando2 = -1
    operador = ''
    visor.innerHTML = ''
}

limpar()

