const goods = [
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

const renderGoodsList = (list) => {
    list.forEach((el) => {
        let goodsList = renderGoodsItem(el);
        document.querySelector('.goods-list').innerHTML += goodsList;
    });
}

const renderGoodsItem = (el) => {
    return `<div class="goods-item">
                    <div class="goods-wrpItemImg">
                        <img class="goods-itemImg" src="${el.img}" alt="${el.title}">
                    </div>
                    <h3 class="goods-itemTitle"><a class="goods-itemTitleLink" href="#">${el.title}</a></h3>
                    <p class="goods-itemDescription">${el.description}</p>
                    <p class="goods-itemPrice">${el.price}$</p>
                    <button class="goods-itemButton" type="button">Купить</button>
                </div>`;
}

renderGoodsList(goods);
