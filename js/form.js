var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault()
    var form = document.querySelector('#form-adiciona')
    var paciente = obtemPacienteDoFormulario(form)


    var erros = validaPaciente(paciente)
    
    var mensagemErro = document.querySelector('section > ul')
    mensagemErro.textContent = ''
    mensagemErro.classList.remove('mensagem-erro')
    console.log(erros)
    if(erros.length > 0 ) {   
        mensagemErro.classList.add('mensagem-erro')
        mensagemErro.textContent = exibeMensagensDeErro(erros, mensagemErro)
        return
    }

    adicionaPacienteNaTela(paciente)

    form.reset()
    var mensagemErro = document.querySelector('section > ul')
    mensagemErro.innerHTML = ''
})
function adicionaPacienteNaTela(paciente) {
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros, mensagem) {
    erros.forEach(function(erro) {
        var li = document.createElement('li')
        li.textContent = erro
        mensagem.appendChild(li)
        return erros
    })
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))


    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {
    var erros = []
    if(paciente.nome.length == 0) erros.push('O nome não pode ser em branco')
    if(!validaPeso(paciente.peso)) erros.push(' Peso é inválido')
    if(!validaAltura(paciente.altura)) erros.push(' Altura é inválida!')
    if(paciente.gordura.length == 0) erros.push(' A gordura não pode ser em branco')
    if(paciente.peso.length == 0) erros.push(' O peso não pode ser em branco')
    if(paciente.altura.length == 0) erros.push(' A altura não pode ser em branco')
    return erros
}

