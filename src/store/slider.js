export const slider = {
    state: () => ({
        images_header: [],
        slider_bottom: 0.0,
        header_height: 0.0,
        main_scroll: true
    })
    ,
    getters: {},
    mutations: {
        SET_IMG_HEADER(state,count){
            for (let i = 1; i <= count; i++){
                state.images_header.push({
                    src: `https://u1600792.isp.regruhosting.ru/img_server/images_header/images_header${i}.webp`,
                    subsrc: `https://u1600792.isp.regruhosting.ru/img_server/images_header/images_header${i}sm.webp`
                });
            }
        },
        SET_SLIDER_BOTTOM(state, bottom) {
            state.slider_bottom = bottom;
        },
        SET_HEADER_HEIGHT(state, height) {
            state.header_height = height;
        },
        SET_MAIN_SCROLL(state, scroll) {
            state.main_scroll = scroll;
        }
    },
    actions: {},
    namespaced: true
}

