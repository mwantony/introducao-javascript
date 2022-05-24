var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll(".paciente")


for(let i = 0; i < pacientes.length; i++) { 
    var tdPeso = pacientes[i].querySelector('.info-peso')
    var tdAltura = pacientes[i].querySelector('.info-altura')
    var tdImc = pacientes[i].querySelector('.info-imc')
    
    var peso = tdPeso.textContent
    var altura = tdAltura.textContent
    
    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)
    if (!pesoEhValido) {
        tdImc.textContent = 'Peso inválido!'
        pesoEhValido = false
        pacientes[i].classList.add('paciente-invalido')
    }
    
    if (!alturaEhValida) {
        tdImc.textContent = 'Altura inválida!'
        alturaEhValida = false
        pacientes[i].classList.add('paciente-invalido')
    }
    
    if (!pesoEhValido && !alturaEhValida) {
        tdImc.textContent = 'Peso e Altura inválidos'
        pacientes[i].classList.add('paciente-invalido')
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso) {
    if (peso >=0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >=0 && altura <= 3) {
        return true
    } else {
        return false
    }
}



function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}
