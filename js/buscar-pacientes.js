var botaoAdicionar = document.querySelector('#buscar-pacientes')


botaoAdicionar.addEventListener('click', function() {
    console.log('Buscando pacientes')

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function() {
        var erroAoBuscar = document.querySelector('#erro-ajax')
        if (xhr.status == 200) {
            erroAoBuscar.classList.add('invisivel')
            var resposta = xhr.responseText
    
            var pacientes = JSON.parse(resposta)
            
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTela(paciente)
            })
        } else {
            erroAoBuscar.classList.remove('invisivel')
        }

    })

    xhr.send()
})