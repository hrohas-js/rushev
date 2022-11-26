export const newsStore = {
    state: () => ({
        newsHeaders: [{
            name: 'BLUEPRINT',
            title: 'Пацифистские знаки',
            id: '4'
        }, {
            name: 'OK Magazine | TATLER',
            title: 'Браслет RUSHEV с серебряным знаком Фаустуса',
            id: '3'
        }, {
            name: 'BLUEPRINT',
            title: 'Творческий беспорядок, или neck mess',
            id: '2'
        }, {
            name: 'VOGUE RU',
            title: 'УСЛЫШЬТЕ НАС',
            id: '1'
        }],
        clicked:false
    }),
    mutations:{
        SET_CLICKED(state,bolean){
            state.clicked = bolean;
        }
    },
    namespaced: true
}