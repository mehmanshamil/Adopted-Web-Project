let product = document.getElementById('products');
let db
async function getProduct() {
    product.innerHTML=''
    await axios.get('https://655f2b37879575426b44b8f7.mockapi.io/basket')
        .then(res => {
            db = res.data;
            db.forEach((item) => {
                let div = document.createElement('div')
                div.className = 'box'
                div.innerHTML = `
                <img src="${item.image}" alt="photo">
                <p>${item.title}</p>
                <h3>${item.price}</h3>
                <button onclick="remove(${item.id})">Remove To Cart</button>
                `
                product.appendChild(div)
            })
        })
}
getProduct()

async function remove(id) {
        await axios.delete(`https://655f2b37879575426b44b8f7.mockapi.io/basket/${id}`);
        getProduct();
}
