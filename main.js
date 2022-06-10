const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})