let main = document.getElementById("products");
let btnLoad = document.getElementById('ldMoreBtn');

let db;
let page = 1;
let limit = 5;
btnLoad.addEventListener('click', getapi)

async function getapi() {
    let skip = (page - 1) * limit
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        .then(res => {
            db = res.data;
            db.forEach(item => {
                let div = document.createElement('div')
                div.className = 'box';
                div.innerHTML = `
            <img src="${item.image}" alt="photo">
            <p>${item.title}</p>
            <h3>${item.price}</h3>
            <button onclick="addToCart(${item.id})">Add To Cart</button>
            `
                main.appendChild(div)
            })
        })
}

getapi()
function addToCart(index) {
    let datalar = [];
    console.log(datalar);
    datalar.push(db.find(item => item.id === index))
    axios.post('https://655f2b37879575426b44b8f7.mockapi.io/basket', datalar)
}