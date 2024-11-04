const hati = document.getElementById("hati");

hati.addEventListener("click", function() {
    hati.classList.toggle("active");
});

const quantityTampilan = document.getElementById("quantity");
const sisaTampilan = document.getElementById("sisa");
const hargaTampilan = document.getElementById("harga");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let quantity = 1;
let sisa = 6;
const hargaUnit = 25000;


function updateTampilan() {
    quantityTampilan.textContent = quantity;
    sisaTampilan.textContent = sisa - quantity;
    hargaTampilan.textContent = (hargaUnit * quantity).toLocaleString("id-ID");
    minus.disabled = quantity <= 0;
    plus.disabled = quantity >= sisa;
}


plus.addEventListener("click", () => {
   if(quantity < sisa){
    quantity += 1;
    updateTampilan();
   }
});

minus.addEventListener("click", () => {
    if (quantity > 0) {
        quantity -= 1;
        updateTampilan();
    }
});
updateTampilan();
