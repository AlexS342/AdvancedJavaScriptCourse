/*Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);         //  <<== Нужен ли сдесь знак $ (this.products.push(el);)
                    this.$data.filtered.push(item);         //  <<== Нужен ли сдесь знак $ (this.filtered.push(el);)
                }
            });
    },
    template: `<ul class="products__list">
                    <product 
                    v-for="product of filtered" 
                    :key="product.id_product"
                    :product="product"
                    :img="product.img"></product>
                </ul>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template:
        `<li class="products__item">
                    <img class="products__item-img" :src="img" alt="man-1">
                    <a class="products__item-title" href=#>{{product.product_name}}</a>
                    <p class="products__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p class="products__item-price">{{product.price}}$</p>
                    <div class="products__item-hover products-hover">
                        <button class="products-hover__button" @click="$root.$refs.cart.addProduct(product)">
                            <img class="products-hover__img" src="img/basket.svg" alt="basket">
                            <p class="products-hover__text">Add to Cart</p>
                        </button>
                    </div>
                </li>`
})*/

Vue.component('products', {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div class="products">
            <product 
            v-for="product of filtered" 
            :key="product.id_product"
            :product="product"
            :img="product.imgProduct"></product>
        </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item standart p-3" >
                <img :src="img" :alt="product.product_name">
                <div class="desc">
                    <h3 class="price-name text-white pt-3">{{ product.product_name }}</h3>
                    <div class="price d-flex justify-content-center align-items-end"><p>{{ product.price }} руб.</p></div>
                    <button class="buy-btn ml-3" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                </div>
            </div>`
})