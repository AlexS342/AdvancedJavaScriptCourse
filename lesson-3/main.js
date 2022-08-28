//Ссылки на файлы json
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


const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

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

    _getProducts(docJson = "catalogData.json") {
        return fetch(API + docJson)
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

/*Урок №3 Работа с карзиной*/
/*
В процессе выполнения задания заметил, что для классов ProductList и Basket
нужно создавать класс родитель с методом getAPI и postAPI
*/

class Basket {
    constructor(container = ".basket") {
        this.container = container;
        this.product = [];
        this._getProducts()
            .then(data => {
                this.product = data;
                this.render();
            });
    }
    _getProducts(docJson = "getBasket.json") {
        return fetch(API + docJson)
            .then(result => result.json())
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        let block = document.querySelector(this.container);
        this.product.contents.forEach(element => {
            let productOdj = new ItemBasket(element);
            block.insertAdjacentHTML("beforeend", productOdj.render())
        });
    }

    changeItem() { }

    removeItem() { }

}

class ItemBasket {
    constructor(product, img = "https://imgholder.ru/600x300/E2FF83/888.jpg&text=Product&fz=80") {
        this.id_product = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.img = img;
    }
    render() {
        return `<div class="basket-item" data-id="${this.id_product}">
                    <div class="basket-itemLeft">
                        <div class="basket-wrpItemImg">
                            <img class="basket-itemImg" src="${this.img}" alt="${this.title}">
                        </div>
                        <h3 class="basket-itemTitle">${this.title}</h3>
                    </div>
                    <div class="basket-itemRight">
                    <p class="basket-itemCount data-id="${this.id_product}">${this.quantity}шт.</p>
                    <p class="basket-itemPrice">${this.price}руб.</p>
                    <button class="basket-itemButtonPlus" data-id="${this.id_product}" type="button">&#9650;</button>
                    <button class="basket-itemButtonMinus" data-id="${this.id_product}" type="button">&#9660;</button>
                    <button class="basket-itemButtonDel" data-id="${this.id_product}" type="button">&#128465;</button>
                    </div>
                </div>`;
    }
}

const list = new ProductList();
list._getProducts("catalogData.json");


const myBasket = new Basket();
myBasket._getProducts("getBasket.json");

let buttonBasket = document.querySelector(".cart-button");
let basket = document.querySelector(".basket");

buttonBasket.addEventListener("click", () => {
    basket.classList.toggle("hide");
});

basket.addEventListener("click", (event) => {
    let el = event.target.dataset.id;
    let bl = document.querySelectorAll(".basket-item")

})

/*
Если я правильно понял, то обязательное задание я выполнил. К сожелению с 
дополнительнм пока справится не получилось, но с любопытством посмотрю в 
разборе ДЗ.
Если я правильно понимаю, то для классов ProductList и Basket можно создать
родительский класс, в который можно вынести методы getAPI, postAPI, render,
changeItem и removeItem.
*/