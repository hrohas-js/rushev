export const footerStore = {
    state: () => ({
        aboutUs: [
            {
                id: 1,
                text: 'О НАС',
                linkpath: '/about/aboutUs'
            },
            {
                id: 2,
                text: 'НОВОСТИ',
                linkpath: '/about/news'
            },
            {
                id: 3,
                text: 'ГДЕ КУПИТЬ',
                linkpath: '/about/where'
            }
        ],
        care: [
            {
                id: 1,
                text: 'УХОД ЗА УКРАШЕНИЯМИ',
                linkpath: '/about/care'
            },
            {
                id: 2,
                text: 'ОБРАТНАЯ СВЯЗЬ',
                linkpath: '/about/callback'
            }
        ],
        rules: [
            {
                id: 1,
                text: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
                linkpath: '/about/privacypolicy'
            },
            {
                id: 2,
                text: 'УСЛОВИЯ И ПРАВИЛА ПОЛЬЗОВАНИЯ САЙТОМ',
                linkpath: '/about/conditions'
            }
            ,
            {
                id: 3,
                text: 'ДОСТАВКА И ОПЛАТА',
                linkpath: '/about/deliverypayment'
            }
            ,
            {
                id: 4,
                text: 'ВОЗВРАТ ТОВАРА',
                linkpath: '/about/refuind'
            }
        ],
        footerItemsName: [
            {
                id : 1 ,
                name: 'ИНФОРМАЦИЯ'
            },
            {
                id : 2,
                name: 'ОБРАТНАЯ СВЯЗЬ'
            },
            {
                id : 3,
                name: 'УСЛОВИЯ'
            },
            {
                id : 4,
                name: 'СОЦИАЛЬНЫЕ СЕТИ'
            },
            {
                id : 5,
                name: 'НОВОСТНАЯ РАССЫЛКА'
            },
        ],
        careHeader: [
            {
                id: 1,
                text: 'УХОД ЗА УКРАШЕНИЯМИ',
                linkpath: '/about/care'
            },
            {
                id: 2,
                text: 'ОБРАТНАЯ СВЯЗЬ',
                linkpath: '/about/callback'
            }
        ],
        rulesHeader: [
            {
                id: 1,
                text: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
                linkpath: '/about/privacypolicy'
            },
            {
                id: 2,
                text: 'УСЛОВИЯ И ПРАВИЛА ПОЛЬЗОВАНИЯ САЙТОМ',
                linkpath: '/about/conditions'
            }

        ],
        deliveryHeader:[
            {
                id: 3,
                text: 'ДОСТАВКА И ОПЛАТА',
                linkpath: '/about/deliverypayment'
            }
            ,
            {
                id: 4,
                text: 'ВОЗВРАТ ТОВАРА',
                linkpath: '/about/refuind'
            }
        ]
    }),
    namespaced: true
}