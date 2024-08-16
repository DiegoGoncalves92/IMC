const form = document.querySelector('#formulario');



form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Evento previnido');
    setResultado();
});

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'qualquer coisa';
    resultado.appendChild(p);
}