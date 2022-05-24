var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event) {
    var condicao = window.confirm('Você está prestes a remover um paciente... Deseja proseguir?')
    if (condicao) {
        var alvoEvento = event.target
        var paiDoEvento = alvoEvento.parentNode
        paiDoEvento.classList.add('fade-out')
        setTimeout(function() {
            paiDoEvento.remove()
        }, 500)
    } else {
        return
    }
})

/* pacientes.forEach(function(paciente) {
    paciente.addEventListener('dblclick', function() {
        this.remove()
    })
}) */


