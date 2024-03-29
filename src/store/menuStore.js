export const menuStore = {
    state: () => ({
        menuItemUp: [
            {
                id: 1,
                text: 'КОЛЬЕ',
                name: 'necklace',
                linkpath: '/catalog/necklace'
            },
            {
                id: 2,
                text: 'СЕРЬГИ',
                name: 'earrings',
                linkpath: '/catalog/earrings'
            }
            ,
            {
                id: 3,
                text: 'БРАСЛЕТЫ',
                name: 'bracelet',
                linkpath: '/catalog/bracelet'
            },
        ],
        menuItemDown: [
            {
                id: 4,
                text: 'КАФФЫ',
                name: 'kaffs',
                linkpath: '/catalog/kaffs'
            },
            {
                id: 5,
                text: 'КОНСТРУКТОР',
                name: 'constructor',
                linkpath: '/catalog/constructor'
            },
            {
                id: 6,
                text: 'СЕРТИФИКАТ',
                name: 'сertificate',
                linkpath: '/product/48'
            }
        ]
    })
}
