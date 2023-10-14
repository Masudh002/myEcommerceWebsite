const product = [
    {
        id:0,
        image:'images/nokia.jpg',
        title: 'Nokia',
        price: 28000,

    },
    {
        id:1,
        image:'images/samsung.jpeg',
        title: 'Samsung',
        price: 34000,

    },
    {
        id:2,
        image:'images/oppo.jpeg',
        title: 'Oppo',
        price: 32000,

    },
    {
        id:3,
        image:'images/tecno.jpeg',
        title: 'Tecno',
        price: 18000,

    },
    {
        id:4,
        image:'images/iphone.jpeg',
        title: 'iPhone',
        price: 178000,

    },
    {
        id:4,
        image:'images/huaweii.jpeg',
        title: 'Huawei',
        price: 25000,

    }
];
const categories = [...new Set(product.map((item)=>{
    return item
}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var{image,title,price} = item;
    return(
        `<div class= 'box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>KSH ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
        </div>`
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty";
        document.getElementById('total').innerHTML="KSH "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML= cart.map((item)=>{
            var{image,title,price} = item;
            total =total+price;
            document.getElementById("total").innerHTML="KSH "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                  <img class='rowimg' src =${image}>
                </div>
                <p style='font-size:15px;'>${title}</p>
                <h2 style='font-size:15px;'>KSH ${price}.00</h2>`+
                "<i class='fas fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// Function to filter products based on the search input
function filterProducts() {
    const searchInput = document.getElementById('search-box');
    const searchValue = searchInput.value.toLowerCase();

    const filteredProducts = product.filter((item) => item.title.toLowerCase().includes(searchValue));

    document.getElementById('root').innerHTML = filteredProducts.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>KSH ${price}.00</h2>` +
            "<button onclick='addtocart(" + (item.id) + ")'>Add to cart</button>" +
            `</div>
            </div>`
        );
    }).join('');
}

// Add an input event listener to the search input
document.getElementById('search-box').addEventListener('input', filterProducts);
