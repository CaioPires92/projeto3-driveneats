const plates = document.querySelectorAll('.plate')
const drinks = document.querySelectorAll('.drink')
const desserts = document.querySelectorAll('.dessert')
const button = document.querySelector('button')

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
    })
    plate.classList.add('border')

    if (plate.classList.contains('border')) {
      pratoEscolhido = plate.querySelector('h2').textContent
      pratoEscolhidoValor = plate.querySelector('h3').textContent
      contaBorda++
      if (contaBorda === 3) {
        abilitaBotao()
      }
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
      contaBorda++
      if (contaBorda === 3) {
        abilitaBotao()
      }
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
      contaBorda++
      if (contaBorda === 3) {
        abilitaBotao()
      }
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

function concatenarPedidos() {
  convertNumbers()

  let texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoEscolhido}
    - Bebida: ${bebidaEscolhida}
    - Sobremesa: ${sobremesaEscolhida}
      Total: R$ ${soma.toFixed(2)}`

  console.log(contaBorda)

  // window.open(`https://wa.me/19999999999?text=${texto}`)

  console.log(texto)
}
