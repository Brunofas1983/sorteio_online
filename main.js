document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeromaximo = document.getElementById('numero-maximo').value;
        numeromaximo = parseInt(numeromaximo);

        let numeroaleartorio = Math.random() * numeromaximo;
        numeroaleartorio = Math.floor(numeroaleartorio + 1);

        document.getElementById('resultado-valor').innerText = numeroaleartorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})
