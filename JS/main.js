let category_nav_list = document.querySelector('.category-nav-list');

function OpenCateList(){

    category_nav_list.classList.toggle('active');

}

var cart = document.querySelector('.cart');

function openCloseCart(){

    cart.classList.toggle('active');

}

fetch('product.json')

.then(response => response.json())

.then(data=>{

    const addTocartButtons = document.querySelectorAll('.btn-add-cart');

    addTocartButtons.forEach(button => {
        button.addEventListener("click", (event)=>{

            const productId = event.target.getAttribute('data-id');

            const selectedProduct = data.find(product => product.id == productId );

            addToCart(selectedProduct);

            const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`)

            allMatchingButtons.forEach(btn =>{
                btn.classList.add("active");
                btn.innerHTML = `    <i class="fa-solid fa-cart-shopping"></i> Item in cart`
            })






        })
    })


})


function addToCart(product){

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart.push({...product, quantity:1})
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
}

function increaseQuantity(index){

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart[index].quantity +=1;

    localStorage.setItem('cart',JSON.stringify(cart));
    updateCart();
}


function decreaseQuantity(index){

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    if(cart[index].quantity >1){
        cart[index].quantity -=1;
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    updateCart();
}

function updateCart(){

   

    const cartItemsContainer = document.getElementById('cart-items');
    var total_price = 0;
    var total_count = 0;

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    const cheackout_items = document.getElementById('cheackout-items');

    let items_input = document.getElementById('items');
    let total_price_input = document.getElementById('total-price');
    let count_items_input = document.getElementById('count-items');

    if(cheackout_items){
        cheackout_items.innerHTML=""

        

        items_input.value = "";
        total_price_input.value= "";
        count_items_input.value= "";





    }



    cartItemsContainer.innerHTML = "";

    cart.forEach((item,index) => {

       

        let total_price_item = item.price* item.quantity;
        total_price += total_price_item;
        total_count += item.quantity;

        if(cheackout_items){
            items_input.value = item.name + "---" + "Price: " + total_price_item + "---" + "Count: " + item.quantity + "\n"
            total_price_input.value = total_price + 20
            count_items_input.value = total_count



        }


        cartItemsContainer.innerHTML += `

        <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${total_price_item}</p>
                    <div class="quantity-control">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>

                    </div>
                </div>

                <button class="delete-item" data-index='${index}' > <i class="fa-solid fa-trash-can"></i> </button>
            </div>
        `

        if(cheackout_items){
            cheackout_items.innerHTML += `
             <div class="item-cart">
                            <div class="image-name">
                                <img src="${item.img}" alt="">
                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price-cart">$${total_price_item}</p>
                                    <div class="quantity-control">
                                        <button class="decrease-quantity" data-index="${index}">-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase-quantity" data-index="${index}">+</button>

                                    </div>
                                </div>
                            </div>

                            <button class="delete-item">
                                <i class="fa-solid fa-trash-can" data-index='${index}'></i>
                            </button>
                        </div>
            
            `
        }

    })

    const price_cart_total = document.querySelector('.price-cart-total');
    const count_item_cart = document.querySelector('.count-items-cart');
    const count_item_header = document.querySelector('.count-item-header');

    price_cart_total.innerHTML= `$${total_price}`;
    count_item_cart.innerHTML = total_count;
    count_item_header.innerHTML=  total_count;

    if(cheackout_items){
        const subtotal_checkout = document.querySelector('.subtotal-checkout');
        const total_checkout = document.querySelector('.total-checkout');

        subtotal_checkout.innerHTML = `$${total_price}`;
        total_checkout.innerHTML = `$${total_price + 20 }`



    }



    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');

    increaseButtons.forEach(button => {

        button.addEventListener('click',(event)=>{

            const itemIndex = event.target.getAttribute("data-index");
            increaseQuantity(itemIndex);
        })
    })

    decreaseButtons.forEach(button => {

        button.addEventListener('click',(event)=>{

            const itemIndex = event.target.getAttribute("data-index");
            decreaseQuantity(itemIndex);
        })
    })


    

    const deleteButtons = document.querySelectorAll('.delete-item');

    deleteButtons.forEach(button => {

        button.addEventListener('click',(event)=>{

            const item_index = event.target.closest('button').getAttribute('data-index');

            removeFromCart(item_index);



        })



    })





}


updateCart();


function removeFromCart(index){

    let cart = JSON.parse(localStorage.getItem('cart')) || []


    const removeProduct = cart.splice(index,1)[0] 
    localStorage.setItem('cart',JSON.stringify(cart));

    updateCart();

    updateButtonsState(removeProduct.id)



}

function updateButtonsState(productId){

    const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);

    allMatchingButtons.forEach(button => {

        button.classList.remove('active');
        button.innerHTML =  `    <i class="fa-solid fa-cart-shopping"></i> add to cart`
    })
 
}







