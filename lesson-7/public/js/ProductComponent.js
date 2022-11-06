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
    template: `<ul class="products__list">
            <product 
            v-for="product of filtered" 
            :key="product.id_product"
            :product="product"
            :img="product.imgProduct"></product>
        </ul>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<li class="products__item">
                    <img class="products__item-img" :src="product.img" :alt="product.product_name">
                    <a class="products__item-title" href=#>{{ product.product_name }}</a>
                    <p class="products__item-text">Known for her sculptural takes on traditional tailoring,
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p class="products__item-price">{{ product.price }}</p>
                    <div class="products__item-hover products-hover">
                        <button class="products-hover__button" @click="$root.$refs.cart.addProduct(product)">
                            <img class="products-hover__img" src="img/basket.svg" alt="basket">
                            <p class="products-hover__text">Add to Cart</p>
                        </button>
                    </div>
                </li>`
})