const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ]
        }
    }
})