let countCarts;

let divContainer = document.createElement('div');
divContainer.style.display = 'grid';
divContainer.style.gridTemplateColumns = `repeat(2, 1fr)`;
divContainer.style.gridTemplateRows = `repeat(${Math.ceil(countCarts/2)}, 1fr)`;
divContainer.style.gap = '10px';
document.body.append(divContainer);

function creatCartProductPropertys(item){
    let divWrap = document.createElement('div');
    divWrap.style.display = 'flex';
    divWrap.style.justifyContent = 'space-between';
    divWrap.style.alignItems = 'center';
    divWrap.style.border = '1px solid black';
    let divImageProduct = document.createElement('div');
    let divContent = document.createElement('div');
    divContent.classList.add('product');
    divContent.classList.add(`product-${item.id}`);
    divContent.style.display = 'flex';
    divContent.style.justifyContent = 'center';
    divContent.style.alignItems = 'center';
    divContent.style.flexDirection = 'column';
    divWrap.append(divImageProduct, divContent);
    let image = document.createElement('img');
    image.src = item.thumbnail;
    image.alt = 'Foto product ' + item.name;
    image.style.width = '150px';
    image.style.height = '150px';
    divImageProduct.appendChild(image);
    let title = document.createElement('h3');
    title.innerText = item.title;
    title.classList.add('product_title');
    divContent.appendChild(title);
    let price = document.createElement('p');
    price.innerText = 'price: '+ item.price;
    divContent.appendChild(price);
    let quantity = document.createElement('p');
    quantity.innerText = 'quantity: ' + item.quantity + 'qt';
    divContent.appendChild(quantity);
    let totalPrice = document.createElement('p');
    totalPrice.innerText = 'total price: ' + item.discountedTotal;
    divContent.appendChild(totalPrice);
    return divWrap;
}


function createCartBox (cart, cartNumber) {
    let divCart = document.createElement('div');
    divCart.style.display = 'flex';
    divCart.style.border = '1px solid black';
    divCart.style.flexDirection = 'column';
    divCart.style.padding = '5px';
    let title = document.createElement('h3');
    title.innerText = 'Cart # ' + cartNumber;
    title.style.textAlign = 'center';
    divCart.append(title);
    let divWrap = document.createElement('div');
    divWrap.classList.add('cart');
    divWrap.classList.add(`cart-${cart.id}`);
    divWrap.style.display = 'grid';
    divWrap.style.gridTemplateColumns = `repeat(2, 1fr)`;
    divWrap.style.gap = '5px';
    divWrap.style.gridTemplateRows = `repeat(${Math.ceil(Math.ceil(cart.length/2))}, 1fr)`;
    divWrap.style.marginBottom = '30px';
    divCart.append(divWrap);
    for (let product of cart) {
        let prod = creatCartProductPropertys(product)
        divWrap.appendChild(prod);
    }
    let button = document.createElement('button');
    button.innerText = 'Order all cart';
    button.id ='btn-' + cartNumber;
    divCart.appendChild(button);
    return divCart;

}


fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts= values.carts}) => {
        for (let cart of carts) {
            let res = createCartBox (cart.products, cart.id)
                divContainer.appendChild(res);
        }
    });
