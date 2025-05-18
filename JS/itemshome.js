fetch('product.json')

.then(response => response.json())

.then(data => {


   const cart = JSON.parse(localStorage.getItem('cart')) ||[]

    const swiper_items_sale = document.getElementById('swiper-items-sale');
    const swiper_electronics = document.getElementById('swiper-electronics');
    const swiper_appliances = document.getElementById('swiper-appliances');
    const swiper_mobiles = document.getElementById('swiper-mobiles');





data.forEach(product => {
    if(product.old_price)
    {

        const isInCart = cart.some(cartItem => cartItem.id === product.id);

        const precent_disc = Math.floor((product.old_price - product.price)/ product.old_price *100);

        swiper_items_sale.innerHTML+=`

         <div class="swiper-slide product">
                        <span class="sale-present">%${precent_disc}</span>
                        <div class="img-product">
                            <a href="#"> <img src="${product.img}" >
                            </a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">$${product.old_price}</p>
                        </div>

                        <div class="icons">
                            <span class="btn-add-cart ${isInCart?'active':''} " data-id="${product.id}" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart?'Item in cart': 'add to cart'}
                            </span>
                            <span class="icon-products">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                            
                        </div>
                    </div>
        
        
        
        
        
        `
      
    }
})

data.forEach(product=>{

    if(product.catetory=="electronics")
    {

        const isInCart = cart.some(cartItem => cartItem.id === product.id);


        const old_price_paragraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
        const precent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/ product.old_price *100)}</span>` : ""


        swiper_electronics.innerHTML+=`

        <div class="swiper-slide product">
                       ${precent_disc_div}
                       <div class="img-product">
                           <a href="#"> <img src="${product.img}" >
                           </a>
                       </div>
                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>
                       <p class="name-product"><a href="#">${product.name}</a></p>
                       <div class="price">
                           <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}           
                           </div>

                       <div class="icons">
                            <span class="btn-add-cart ${isInCart?'active':''} " data-id="${product.id}" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart?'Item in cart': 'add to cart'}
                            </span>
                           <span class="icon-products">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                           
                       </div>
                   </div>
       
       
       
       
       
       `

    }






})


data.forEach(product=>{

    if(product.catetory=="appliances")
    {
        const isInCart = cart.some(cartItem => cartItem.id === product.id);


        const old_price_paragraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
        const precent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/ product.old_price *100)}</span>` : ""


        swiper_appliances.innerHTML+=`

        <div class="swiper-slide product">
                       ${precent_disc_div}
                       <div class="img-product">
                           <a href="#"> <img src="${product.img}" >
                           </a>
                       </div>
                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>
                       <p class="name-product"><a href="#">${product.name}</a></p>
                       <div class="price">
                           <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}           
                           </div>

                       <div class="icons">
                           <span class="btn-add-cart ${isInCart?'active':''} " data-id="${product.id}" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart?'Item in cart': 'add to cart'}
                            </span>
                           <span class="icon-products">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                           
                       </div>
                   </div>
       
       
       
       
       
       `

    }






})

data.forEach(product=>{

    if(product.catetory=="mobiles")
    {
        const isInCart = cart.some(cartItem => cartItem.id === product.id);


        const old_price_paragraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
        const precent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/ product.old_price *100)}</span>` : ""


        swiper_mobiles.innerHTML+=`

        <div class="swiper-slide product">
                       ${precent_disc_div}
                       <div class="img-product">
                           <a href="#"> <img src="${product.img}" >
                           </a>
                       </div>
                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>
                       <p class="name-product"><a href="#">${product.name}</a></p>
                       <div class="price">
                           <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}           
                           </div>

                       <div class="icons">
                           <span class="btn-add-cart ${isInCart?'active':''} " data-id="${product.id}" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart?'Item in cart': 'add to cart'}
                            </span>
                           <span class="icon-products">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                           
                       </div>
                   </div>
       
       
       
       
       
       `

    }






})




})


