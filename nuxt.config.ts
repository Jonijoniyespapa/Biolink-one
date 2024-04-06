export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Biolink for your needs", 
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
        },

    }
})
