//Ссылки на json
//addReview.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addReview.json
//addToBasket.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json
//approveReview.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/approveReview.json
//catalogData.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json
//changeUserData.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/changeUserData.json
//deleteFromBasket.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json
//getBasket.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json
//getGoodById.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getGoodById.json
//login.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/login.json
//logout.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/logout.json
//registerUser.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/registerUser.json
//removeReview.json:https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/removeReview.json


const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class ProductList {
    constructor(container = ".product") {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    _getProducts() {
        //console.log(`${API}/catalogData.json`);
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    calcSum() {
        this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", productObj.render())
        }
    }
}

class ProductItem {
    constructor(product, img = "https://imgholder.ru/600x300/E2FF83/888.jpg&text=Product&fz=80") {
        this.title = product.product_name;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                    <div class="goods-wrpItemImg">
                        <img class="goods-itemImg" src="${this.img}" alt="${this.title}">
                    </div>
                    <h3 class="goods-itemTitle"><a class="goods-itemTitleLink" href="#">${this.title}</a></h3>
                    <p class="goods-itemPrice">${this.price}руб.</p>
                    <button class="goods-itemButton" type="button">Купить</button>
                </div>`;
    }
}

const list = new ProductList();
list._getProducts();