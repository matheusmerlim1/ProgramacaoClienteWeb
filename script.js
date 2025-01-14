
const btn01 = document.querySelector("#q01-executar")
const btn02 = document.querySelector("#q02-executar")
const btn03 = document.querySelector("#q03-executar")
const btn04 = document.querySelector("#q04-executar")
const btn05 = document.querySelector("#q05-executar")

/*****************************************
 * QUESTÃO 01
 */

// Função que retorna a quantidade de dinheiro digitada pelo usuário
const getDinheiro = () => parseFloat(document.querySelector("#q01-dinheiro").value) || 0

// Função que calcula a quantidade de combustível comprada
const calcLitrosCombustivel = dinheiro => {
    const precoPorLitro = 7; // cada litro custa R$ 7,00
    return (dinheiro / precoPorLitro).toFixed(2); // retorna 2 casas decimais
}

// Função que retorna a quantidade de km que o carro conseguirá percorrer
const calcAutonomia = litros => {
    const kmPorLitro = 20; // O carro anda 20 km por litro
    return (litros * kmPorLitro).toFixed(2); // retorna 2 casas decimais
}

const respondeQuestao01 = (litros, autonomia) => {
    const listaResp = document.querySelector("#q01-result")
    const liResp = `<li>Você abastecerá ${litros}l</li>
                    <li>Sua autonomia é de ${autonomia}km</li>`
    listaResp.innerHTML = liResp
}

btn01.addEventListener("click", () => {
    const dinheiro = getDinheiro()
    const litros = calcLitrosCombustivel(dinheiro)
    const autonomia = calcAutonomia(litros)

    respondeQuestao01(litros, autonomia)
})

/*****************************************
 * QUESTÃO 02
 */

// Função que retorna o PESO digitado pelo usuário
const getPeso = () => parseFloat(document.querySelector("#q02-peso").value) || 0

// Função que retorna a ALTURA digitada pelo usuário
const getAltura = () => parseFloat(document.querySelector("#q02-altura").value) || 0

const calcIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2); // Fórmula IMC
}

const getFaixa = imc => {
    if (imc < 18.5) return "Abaixo do peso"
    if (imc >= 18.5 && imc < 25) return "Peso normal"
    if (imc >= 25 && imc < 30) return "Levemente acima do peso"
    if (imc >= 30 && imc < 35) return "Obesidade grau I"
    if (imc >= 35 && imc < 40) return "Obesidade grau II (severa)"
    return "Obesidade grau III (mórbida)"
}

btn02.addEventListener("click", () => {
    const peso = getPeso()
    const altura = getAltura()
    const imc = calcIMC(peso, altura)

    const faixa = getFaixa(imc)

    const listaResp = document.querySelector("#q02-result")
    const liResp = `<li>Seu IMC é ${imc}</li>
                    <li>Você está na faixa: ${faixa}</li>`
    listaResp.innerHTML = liResp
})

/*****************************************
 * QUESTÃO 03
 */

const lancadorDados = () => Math.ceil(Math.random() * 6)

btn03.addEventListener("click", () => {
    let lances = [0, 0, 0, 0, 0, 0] // 6 faces do dado
    for (let i = 0; i < 1000000; i++) {
        const lance = lancadorDados()
        lances[lance - 1]++ // incrementa o lance na face correspondente
    }

    // Atualizando a tabela com os resultados
    const totalLances = 1000000
    for (let i = 0; i < 6; i++) {
        const face = i + 1
        const ocorrencias = lances[i]
        const frequencia = ((ocorrencias / totalLances) * 100).toFixed(2)

        document.querySelector(`.face-ocorr-${face}`).textContent = ocorrencias
        document.querySelector(`.face-freq-${face}`).textContent = `${frequencia}%`
    }
})

/*****************************************
 * QUESTÃO 04
 */
const btnAddNome = document.querySelector("#q04-add")

// Função que retorna o nome digitado
const getNome = () => document.querySelector("#q04-nome").value

const insereNome = nome => {
    const listaNomes = document.querySelector("#q04-nomes")
    listaNomes.innerHTML += `<li>${nome}</li>`
}

const inverteNome = nome => {
    return nome.split('').reverse().join('') // inverte o nome
}

// Insere nome digitado
btnAddNome.addEventListener("click", () => {
    const nome = getNome()
    if (nome) {
        insereNome(nome)
        document.querySelector("#q04-nome").value = '' // limpa o campo de nome
    }
})

btn04.addEventListener("click", () => {
    const liNomesDigitados = document.querySelectorAll("#q04-nomes li")
    const listaInvertido = document.querySelector("#q04-nomes-invertidos")

    listaInvertido.innerHTML = '' // limpa a lista invertida

    liNomesDigitados.forEach(li => {
        const nome = li.textContent
        const nomeInvertido = inverteNome(nome)
        listaInvertido.innerHTML += `<li>${nomeInvertido}</li>`
    })
})

/*****************************************
 * QUESTÃO 05
 */

// Função que retorna o nome digitado
const getPalavra = () => document.querySelector("#q05-palavra").value

const verificaPalindromo = palavra => {
    const palavraInvertida = palavra.split('').reverse().join('') // inverte a palavra
    return palavra === palavraInvertida // compara a palavra original com a invertida
}

btn05.addEventListener("click", () => {
    const palavra = getPalavra()
    const resp = document.querySelector("#q05-result")
    if (palavra) {
        const resultado = verificaPalindromo(palavra)
        resp.innerHTML = `A palavra ${palavra} ${resultado ? 'é' : 'não é'} um palíndromo`
    } else {
        resp.innerHTML = "Por favor, insira uma palavra."
    }
})

