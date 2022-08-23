class GoodsItem {
    constructor(title = "no name", price = 100000, img = "img/noPhoto.jpg", description = "no description") {
        this.title = title;
        this.price = price;
        this.img = img;
        this.description = description;

    }
    render() {
        return `<div class="goods-item">
                    <div class="goods-wrpItemImg">
                        <img class="goods-itemImg" src="${this.img}" alt="${this.title}">
                    </div>
                    <h3 class="goods-itemTitle"><a class="goods-itemTitleLink" href="#">${this.title}</a></h3>
                    <p class="goods-itemDescription">${this.description}</p>
                    <p class="goods-itemPrice">${this.price}$</p>
                    <button class="goods-itemButton" type="button">Купить</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Утка', price: 10, img: 'img/duck.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 2, title: 'Рябчик', price: 15, img: 'img/grouse.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 3, title: 'Вальдшнеп', price: 12, img: 'img/woodcock.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 4, title: 'Тетерев', price: 50, img: 'img/blackGrouse.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 5, title: 'Глухарь', price: 100, img: 'img/capercaillie.jpeg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 6, title: 'Вяхирь', price: 10, img: 'img/woodPigeon.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 7, title: 'Куропатка', price: 20, img: 'img/partridge.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 8, title: 'Бобр', price: 150, img: 'img/beaver.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 9, title: 'Куница', price: 250, img: 'img/marten.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 10, title: 'Лиса', price: 120, img: 'img/fox.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 11, title: 'Рысь', price: 350, img: 'img/lynx.jpeg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
            { id: 12, title: 'Волк', price: 500, img: 'img/wolf.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium earum sint vel!" },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img, good.description);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

/*1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
    какие методы понадобятся для работы с этими сущностями.*/
class Basket{ //Корзина
    constructor(){
        this.bayProduct = []; /*Массив товаров в виде объектов добавленных в карзину*/
    }
    addItem(){} /*Добавляем товар в корзину*/
    removeItem(){} /*Убираем товар из карзины*/
    increaseItem(){} /*Увеличиваем количество товара в корзине*/
    decreaseItem(){} /*Уменьшаем количество товара в корзине*/
    clearBasket(){} /*Очищаем корзину*/
    costPosition(){} /*считаем стоимость одной позиции товара с учетом ее количества */
    TotolCost(){} /*Считаем полную стоимость товаров в карзине*/
}

class Purchase{ //Покупка
    constructor(){
        this.id = id;                   //id покупки
        this.Product = product;         //Купленные товары
        this.Bayer = bayer;             //Покупатель
        this.delivery = delivery;       //Выбрать способ доставки
        this.condition = condition;     //Состояние сделки (Оплачено, отправлено, доставлено, получено)
    }
    addBay(){}
}

 class Delivery{    //Почтовые компании
    constructor(){
        this.name   //Название компании
    }
}
 
/*
Возможно потребуется покупатель с методом "Совершить покупку"
*/
class Buyer{ //Зарегестрированный пользователь магазина с личными данными
    constructor(id, FirstName, lastName, patronymic, gender, dateBirth, address){
        this.id = id;                   //id пользователя
        this.FirstName = FirstName;     //Имя пользователя
        this.lastName = lastName;       //Фамилия пользователя
        this.patronymic = patronymic;   //Отчество пользователя
        this.gender = gender;           //Пол (М/Ж)
        this.dateBirth = dateBirth;     //Дата рождения
        this.address = address;         //Адрес доставки
    }
    bayAllBascet(){} //Производим оплату покупки всех товаров, добавленных в карзину
}

/*
Возможно должен быть реестор совершенных покупок всеми ползователями
*/
class PurchaseRegister{
    constructor(){
        this.perfectPurchase = []; //массив покупок
    }
    registrationBay(){} //метод заносит данные о сделке в массив
}

 /*
 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
 
 */