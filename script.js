const plates = document.querySelectorAll('.plate')
const drinks = document.querySelectorAll('.drink')
const desserts = document.querySelectorAll('.dessert')

let pratoEscolhido
let bebidaEscolhida
let sobremesaEscolhida

let pratoEscolhidoValor
let bebidaEscolhidaValor
let sobremesaEscolhidaValor

plates.forEach(function (plate) {
  plate.addEventListener('click', () => {
    plates.forEach(function (plate) {
      plate.classList.remove('border')
    })
    plate.classList.add('border')

    if (plate.classList.contains('border')) {
      pratoEscolhido = plate.querySelector('h2').textContent
      pratoEscolhidoValor = plate.querySelector('h3').textContent
    }
  })
})

drinks.forEach(function (drink) {
  drink.addEventListener('click', () => {
    drinks.forEach(function (drink) {
      drink.classList.remove('border')
    })
    drink.classList.add('border')

    if (drink.classList.contains('border')) {
      bebidaEscolhida = drink.querySelector('h2').textContent
      bebidaEscolhidaValor = drink.querySelector('h3').textContent
    }
  })
})

desserts.forEach(function (dessert) {
  dessert.addEventListener('click', () => {
    desserts.forEach(function (dessert) {
      dessert.classList.remove('border')
    })
    dessert.classList.add('border')

    if (dessert.classList.contains('border')) {
      sobremesaEscolhida = dessert.querySelector('h2').textContent
      sobremesaEscolhidaValor = dessert.querySelector('h3').textContent
    }
  })
})

function concatenarPedidos() {
  let new_value_plate = Number(
    pratoEscolhidoValor.replace('R$ ', '').replace(',', '.')
  )

  let new_value_drink = Number(
    bebidaEscolhidaValor.replace('R$ ', '').replace(',', '.')
  )

  let new_value_dessert = Number(
    sobremesaEscolhidaValor.replace('R$ ', '').replace(',', '.')
  )

  let soma = new_value_plate + new_value_drink + new_value_dessert

  let texto = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoEscolhido}
  - Bebida: ${bebidaEscolhida}
  - Sobremesa: ${sobremesaEscolhida}
    Total: R$ ${soma.toFixed(2)}`

  console.log(texto)
}
