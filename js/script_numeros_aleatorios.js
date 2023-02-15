document.getElementById('selectTipoJogo').addEventListener('change', (event)=>{
    let tipoJogo = document.getElementById('selectTipoJogo').value

    switch (tipoJogo) {
        case 'mega_sena':
            document.getElementById('groupQtdDezenas').innerHTML = `<label>Qtde Dezenas:</label>
                                                                    <select name="selectQtdeDezenas" id="selectQtdeDezenas">
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                        <option value="11">11</option>
                                                                        <option value="12">12</option>
                                                                        <option value="13">13</option>
                                                                        <option value="14">14</option>
                                                                        <option value="15">15</option>
                                                                        <option value="16">16</option>
                                                                        <option value="17">17</option>
                                                                        <option value="18">18</option>
                                                                        <option value="19">19</option>
                                                                        <option value="20">20</option>
                                                                    </select>`
            break;

        case 'quina':
            document.getElementById('groupQtdDezenas').innerHTML = `<label>Qtde Dezenas:</label>
                                                                    <select name="selectQtdeDezenas" id="selectQtdeDezenas">
                                                                        <option value="5">5</option>
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                        <option value="11">11</option>
                                                                        <option value="12">12</option>
                                                                        <option value="13">13</option>
                                                                        <option value="14">14</option>
                                                                        <option value="15">15</option>
                                                                    </select>`
        break;

        case 'dupla_sena':
            document.getElementById('groupQtdDezenas').innerHTML = `<label>Qtde Dezenas:</label>
                                                                    <select name="selectQtdeDezenas" id="selectQtdeDezenas">
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                        <option value="11">11</option>
                                                                        <option value="12">12</option>
                                                                        <option value="13">13</option>
                                                                        <option value="14">14</option>
                                                                        <option value="15">15</option>
                                                                    </select>`
        break;

        case 'lotomania':
            document.getElementById('groupQtdDezenas').innerHTML = `<label>Qtde Dezenas:</label>
                                                                    <select name="selectQtdeDezenas" id="selectQtdeDezenas">
                                                                        <option value="50">50</option>
                                                                    </select>`
        break;

        case 'lotofacil':
            document.getElementById('groupQtdDezenas').innerHTML = `<label>Qtde Dezenas:</label>
                                                                    <select name="selectQtdeDezenas" id="selectQtdeDezenas">
                                                                        <option value="15">15</option>
                                                                        <option value="16">16</option>
                                                                        <option value="17">17</option>
                                                                        <option value="18">18</option>
                                                                        <option value="19">19</option>
                                                                        <option value="20">20</option>
                                                                    </select>`
        break;
    
    }
})

document.getElementById('btnGerarNumeros').addEventListener('click', (event)=>{
    let qtdeDezenas = Number(document.getElementById('selectQtdeDezenas').value)
    let numerosTipoDeJogo = document.getElementById('selectTipoJogo').value

    let numerosJogos = 0

    switch (numerosTipoDeJogo) {
        case 'mega_sena':
            numerosJogos = 60
            break;

        case 'quina':
            numerosJogos = 80
            break;

        case 'dupla_sena':
            numerosJogos = 50
            break;

        case 'lotomania':
            numerosJogos = 99
            break;

        case 'lotofacil':
            numerosJogos = 25
            break;
    
    }

    console.log(gerarListaNumerosAleatorios(qtdeDezenas, numerosJogos))
})

function formataNumeros(numero) {
    if(numero < 10) {
        return String('0'+numero)
    }else {
        return String(numero)
    }
}

function renderizaResultadosNumerosAleatorios(lista) {
    document.getElementById('conteudo-2').innerHTML = ``
    
    for(let index=0; index<lista.length; index++) {
        document.getElementById('conteudo-2').innerHTML += `<div class="numeros">${lista[index]}</div>`
    }
}

function gerarNumerosAleatorios(qtdeDezenas, numeros) {
    let numeroAleatorio = Math.random() * (numeros - 0) +1

    return formataNumeros(Math.floor(numeroAleatorio))
}

function gerarListaNumerosAleatorios(qtdeDezenas, numeros) {
    let arrayNumeros = []

    while(arrayNumeros.length < qtdeDezenas) {
        let numero = gerarNumerosAleatorios(qtdeDezenas, numeros)

        arrayNumeros.push(numero)
        arrayNumeros = [...new Set(arrayNumeros)]
        
    }

    renderizaResultadosNumerosAleatorios(arrayNumeros.sort())
}