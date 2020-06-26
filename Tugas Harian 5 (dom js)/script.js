// release 0
var items = [
  ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
  ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
  ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
  ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]


function cards(items) {
  let result = '';
  for (let i = 0; i < items.length; i++) {
    result += `<div class="card mr-5" style="width: 18rem;">
      <img src="img/${items[i][4]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" id="itemName">${items[i][1]}</h5>
        <p class="card-text" id="itemDesc">${items[i][3]}</p>
        <p class="card-text">Rp ${items[i][2]}</p>
        <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
      </div>
    </div>
  </div>`
  }
  return result;
}

let listBarang = cards(items)

document.getElementById('listBarang').innerHTML = listBarang

// release 1
var formItem = document.getElementById("formItem")
formItem.addEventListener("submit", function(e) {
  e.preventDefault()

  var kataKunci = document.getElementById("keyword").value

  var saringan = []
  for (var i = 0; i < items.length; i++) {
    if (items[i][1].toLowerCase().includes(kataKunci.toLowerCase())) {
      saringan.push(items[i])
    }
  }
  document.getElementById('listBarang').innerHTML = cards(saringan)
})




// release 2 

const addCarts = document.querySelectorAll('#addCart');
addCarts.forEach((e) => {
  const cart = document.getElementById('cart')
  let i = 0;
  e.addEventListener('click', () => {
    cart.innerHTML = '<i class="fas fa-shopping-cart"></i>(' + (i += 1) + ')';
  })
})