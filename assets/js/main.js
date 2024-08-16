const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    } 

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivel = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivel})`;
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 
                'peso normal', 'Sobrepeso', 
                'Obesidade grau 1', 'Obesidade grau 2'
                , 'Obesidade grau 3'];
        switch (true) {
            case imc >= 39.9:
                return nivel[5];
            case imc >= 34.9:
                return nivel[4];
            case imc >= 29.9:
                return nivel[3];
            case imc >= 24.9:
                return nivel[2];
            case imc >= 18.5:
                return nivel[1];
            case imc < 18.5:
                return nivel[0];
        }        
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}    

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP(); 

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}