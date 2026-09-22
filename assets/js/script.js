

let num = 923162832434;
let input = document.querySelectorAll('.input')
let price = document.getElementById('price')
let prices = document.getElementById('prices')
input.forEach(function(item) {

item.addEventListener('click',function() {

   input.forEach(function(other) {
                other.classList.remove("selected");
            other.style.backgroundColor = "";
            other.style.color = "";
        });
item.classList.add("selected")
 item.style.backgroundColor = '#A93D5F';
item.style.color = '#b9b9b9';
price.innerText = item.dataset.price;
selectedScent = item.placeholder;
prices.innerText = item.dataset.price;
    })

})

let selectedScent ="";
function order(){
    let message = `Assalam O Alikum I wanna order ${selectedScent} . Price ${price.innerText}`;
    let url =  `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
window.open(url,"_blank")
}
function orders(){
let msg = "Hello I wanna Know About Order";
 let url =  `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
window.open(url,"_blank")

}
