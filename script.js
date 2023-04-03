const plates = document.querySelectorAll('.plate')
const drinks = document.querySelectorAll('.drink')
const desserts = document.querySelectorAll('.dessert')
const button = document.querySelector('.main-button')
const checked = document.querySelector('ion-icon')
const container = document.querySelector('.container')
const bonus = document.querySelector('.bonus')

let nome
let endereco
const pedidoPrato = document.querySelector('.pedido-prato')
const pedidoBebida = document.querySelector('.pedido-bebida')
const pedidoSobremesa = document.querySelector('.pedido-sobremesa')

const precoPrato = document.querySelector('.preco-prato')
const precoBebida = document.querySelector('.preco-bebida')
const precoSobremesa = document.querySelector('.preco-sobremesa')

const totalBonus = document.querySelector('.total-bonus p')

let pratoEscolhido
let bebidaEscolhida
let sobremesaEscolhida

let pratoEscolhidoValor
let bebidaEscolhidaValor
let sobremesaEscolhidaValor
let contaBorda = 0
let soma

plates.forEach(function (plate) {
  plate.addEventListener('click', () => {
    plates.forEach(function (plate) {
      plate.classList.remove('border')
      plate.querySelector('ion-icon').classList.remove('checked') // remove checked de todos os elementos
    })
    plate.classList.add('border')
    if (plate.classList.contains('border')) {
      pratoEscolhido = plate.querySelector('h2').textContent
      pratoEscolhidoValor = plate.querySelector('h3').textContent
      if (!plate.dataset.clicked) {
        if (contaBorda <= 3) {
          contaBorda++
          plate.dataset.clicked = true
        } else {
          return
        }
      } else {
        contaBorda = 1
      }
      if (contaBorda === 3) {
        abilitaBotao()
      }
      plate.querySelector('ion-icon').classList.add('checked') // adiciona checked ao elemento clicado
    }
  })
})

drinks.forEach(function (drink) {
  drink.addEventListener('click', () => {
    drinks.forEach(function (drink) {
      drink.classList.remove('border')
      drink.querySelector('ion-icon').classList.remove('checked') // remove checked de todos os elementos
    })
    drink.classList.add('border')

    if (drink.classList.contains('border')) {
      bebidaEscolhida = drink.querySelector('h2').textContent
      bebidaEscolhidaValor = drink.querySelector('h3').textContent
      if (!drink.dataset.clicked) {
        if (contaBorda <= 3) {
          contaBorda++
          drink.dataset.clicked = true
        } else {
          return
        }
      } else {
        contaBorda = 1
      }
      if (contaBorda === 3) {
        abilitaBotao()
      }
      drink.querySelector('ion-icon').classList.add('checked') // adiciona checked ao elemento clicado
    }
  })
})

desserts.forEach(function (dessert) {
  dessert.addEventListener('click', () => {
    desserts.forEach(function (dessert) {
      dessert.classList.remove('border')
      dessert.querySelector('ion-icon').classList.remove('checked') // remove checked de todos os elementos
    })
    dessert.classList.add('border')

    if (dessert.classList.contains('border')) {
      sobremesaEscolhida = dessert.querySelector('h2').textContent
      sobremesaEscolhidaValor = dessert.querySelector('h3').textContent

      if (!dessert.dataset.clicked) {
        if (contaBorda <= 3) {
          contaBorda++
          dessert.dataset.clicked = true
        } else {
          return
        }
      } else {
        contaBorda = 1
      }
      if (contaBorda === 3) {
        abilitaBotao()
      }
      dessert.querySelector('ion-icon').classList.add('checked') // adiciona checked ao elemento clicado
    }
  })
})

function convertNumbers() {
  let new_value_plate = Number(
    pratoEscolhidoValor.replace('R$ ', '').replace(',', '.')
  )

  let new_value_drink = Number(
    bebidaEscolhidaValor.replace('R$ ', '').replace(',', '.')
  )

  let new_value_dessert = Number(
    sobremesaEscolhidaValor.replace('R$ ', '').replace(',', '.')
  )
  return (soma = new_value_plate + new_value_drink + new_value_dessert)
}

function abilitaBotao() {
  button.removeAttribute('disabled')
  button.classList.add('active')
  button.textContent = 'Fechar Pedido'
}

function finalizarPedido() {
  nome = prompt('Qual o seu nome? ')
  endereco = prompt('Qual o seu endereço? ')
  convertNumbers()

  pedidoPrato.innerHTML = pratoEscolhido
  pedidoBebida.innerHTML = bebidaEscolhida
  pedidoSobremesa.innerHTML = sobremesaEscolhida

  precoPrato.innerHTML = pratoEscolhidoValor
  precoBebida.innerHTML = bebidaEscolhidaValor
  precoSobremesa.innerHTML = sobremesaEscolhidaValor
  totalBonus.innerHTML = `R$ ${soma.toFixed(2)}`

  bonus.classList.add('active-bonus')
  container.classList.add('transparencia')
}

function tudoCerto() {
  let texto = `Olá, gostaria de fazer o pedido: %0a
  - Prato: ${pratoEscolhido} %0a
  - Bebida: ${bebidaEscolhida} %0a
  - Sobremesa: ${sobremesaEscolhida} %0a
  Total: R$ ${soma.toFixed(2)} %0a 
    %0a 
  Nome: ${nome} %0a 
  Endereço: ${endereco}
    `

  window.open(`https://wa.me/+5519998701203?text=${texto}`)
}

function cancelar() {
  bonus.classList.remove('active-bonus')
  container.classList.remove('transparencia')
}
