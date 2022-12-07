import {createStore} from 'vuex'
import {slider} from "@/store/slider";
import {footerStore} from "@/store/footerStore";
import {newsStore} from "@/store/newsStore";
import {menuStore} from "@/store/menuStore";
import axios from "axios";

export default createStore({
    state: () => ({
        display_width: 0,
        menuVisible: false,
        goods: [],
        cart: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : [],
        curentGood: null,
        wishGoods: localStorage.getItem('wishlist') != null ? JSON.parse(localStorage.getItem('wishlist')) : [],
        delivery: {
            email: '',
            name: '',
            surname: '',
            address: '',
            city: '',
            region: '',
            direction: '',
            index: '',
            phone: ''
        },
        takesdek: 0,
        checkOptions: true,
        promo: '',
        couponValue: 0,
        preload: false,
        subscribed: localStorage.getItem('news') !== null ? true : false,
        miniCartShow: false,
        isMobile: false,
        kladr: [],
        error: false,
        sertSuccess: false,
        regionPVZ: '',
        cityPVZ: '',
        pvzName: '',
        cityPVZshow: false,
        pvzListShow: false,
        checkoutEmpty: false
    }),
    getters: {
        wish_count(state) {
            return state.wishGoods.length;
        },
        cart_count(state) {
            return state.cart.length;
        }
    },
    mutations: {
        SET_DISPLAY_WIDTH(state, width) {
            state.display_width = width;
        },
        SET_MENU_VISIBLE(state, flag) {
            state.menuVisible = flag;
        },
        FETCH_GOODS(state, goods) {
            state.goods = goods.filter(item => item.status === 'A');
        },
        REMOVE_FROM_WISH_LIST(state, id) {
            state.wishGoods = state.wishGoods.filter(elem => {
                return elem.product_id !== id;
            });
            localStorage.setItem('wishlist', JSON.stringify(state.wishGoods));
        },
        ADD_TO_WISH_LIST(state, good) {
            state.wishGoods.push(good);
            localStorage.setItem('wishlist', JSON.stringify(state.wishGoods));
        },
        SET_CURENTGOOD(state, some_info) {
            state.curentGood = some_info;
        },
        SETUP_PREORDER(state, amount) {
            state.curentGood.amount = amount;
        },
        ADD_TO_CART(state, good) {
            state.cart.push(good);
            localStorage.setItem('cart', JSON.stringify((state.cart)));
        },
        REMOVE_FROM_CART(state, id) {
            state.cart = state.cart.filter(elem => {
                return elem.product_id !== id;
            });
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CLEAR_CART(state) {
            state.cart = [];
            localStorage.removeItem('cart');
        },
        CHANGE_AMOUNT_CART(state, inputData) {
            state.cart.forEach(elem => {
                if (elem.product_id === inputData.id) {
                    elem.amount = inputData.amount;
                }
            });
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CHANGE_CURRENTGOOD(state, word) {
            state.curentGood.product_options['2'] = word;
        },
        SET_DELIVERY(state, obj) {
            if (obj.name === 'EMAIL') {
                state.delivery.email = obj.value;
            }
            if (obj.name === 'ИМЯ') {
                state.delivery.name = obj.value;
            }
            if (obj.name === 'ФАМИЛИЯ') {
                state.delivery.surname = obj.value;
            }
            if (obj.name === 'АДРЕС, ДОМ, КВАРТИРА') {
                state.delivery.address = obj.value;
            }
            if (obj.name === 'ГОРОД') {
                state.delivery.city = obj.value;
            }
            if (obj.name === 'СТРАНА') {
                state.delivery.region = obj.value;
            }
            if (obj.name === 'ОБЛАСТЬ') {
                state.delivery.direction = obj.value;
            }
            if (obj.name === 'ИНДЕКС') {
                state.delivery.index = obj.value;
            }
            if (obj.name === 'ТЕЛЕФОН') {
                state.delivery.phone = obj.value;
            }
        },
        SET_DELIVERY_FROM_LOCAL(state, obj) {
            state.delivery = obj;
        },
        CHANGE_SDEK(state, val) {
            state.takesdek = val;
        },
        SET_CHECK_OPTIONS(state, check) {
            state.checkOptions = check;
        },
        SET_COUPON(state, promo) {
            state.promo = promo;
        },
        SET_COUPON_VALUE(state, value) {
            state.couponValue = value;
        },
        SET_PRELOAD(state, preload) {
            state.preload = preload;
        },
        CHANGE_SUBSCRIBED(state, mail) {
            state.subscribed = true;
            localStorage.setItem('news', mail);
        },
        CHANGE_MINI_CART_SHOW(state, show) {
            state.miniCartShow = show;
        },
        ADD_PVZ_INFO(state, pvz) {
            state.cart.forEach(elem => {
                elem.product_options['4'] = pvz;
            });
        },
        SET_IS_MOBILE(state, mob) {
            state.isMobile = mob;
        },
        SET_KLADR(state, kladr) {
            state.kladr = kladr;
        },
        SET_ERROR(state) {
            state.error = true;
            setTimeout(() => {
                state.error = false;
            }, 3000);
        },
        SET_SERT(state) {
            state.sertSuccess = true;
            setTimeout(() => {
                state.sertSuccess = false;
            }, 3000);
        },
        SET_CITYPVZ(state, city) {
            state.cityPVZ = city;
        },
        SET_REGIONPVZ(state, region) {
            state.regionPVZ = region;
        },
        CHANGE_CITYPVZ_SHOW(state) {
            state.cityPVZshow = !state.cityPVZshow;
        },
        CHANGE_PVZLIST_SHOW(state) {
            state.pvzListShow = !state.pvzListShow;
        },
        SET_PVZ_NAME(state, name) {
            state.pvzName = name;
        },
        SET_CHECKOUT_EMPTY(state, status) {
            state.checkoutEmpty = status;
        }
    },
    actions: {
        async GetRequest({commit}, url) {
            try {
                commit('SET_PRELOAD', true);
                const response = await axios.get(url);
                commit('FETCH_GOODS', response.data.products);
            } catch (e) {
                location.reload(true);
            } finally {
                commit('SET_PRELOAD', false);
            }
        },
        async PostRequest({commit, state, dispatch}, postData) {
            try {
                if (postData.url.indexOf('kladr') === -1 && postData.url.indexOf('sdek') === -1) {
                    commit('SET_PRELOAD', true);
                }
                if (postData.url === 'https://rushev.online/server/buy_sert.php') {
                    const response = await axios.post(postData.url, {
                        mail: postData.body.email,
                        nominal: postData.body.price
                    });
                }
                else if(postData.url === 'https://rushev.online/server/kladr_city_pvz.php') {
                    const response = await axios.post(postData.url, {
                        region: state.regionPVZ,
                        city: postData.body
                    });
                    commit('SET_KLADR', response.data.result);
                }
                else if(postData.url === 'https://rushev.online/server/sdek_api.php') {
                    const response = await axios.post(postData.url, {
                        region: state.regionPVZ,
                        city: postData.body
                    });
                    commit('SET_KLADR', response.data.items);
                    commit('CHANGE_PVZLIST_SHOW');
                }
                else {
                    const response = await axios.post(postData.url, {
                        insert_data: postData.body
                    });
                    if (postData.url === 'https://rushev.online/server/sdek.php') {
                        commit('CHANGE_SDEK', response.data);
                    }
                    if (postData.url === 'https://rushev.online/server/order.php') {
                        console.log(response.data);
                    }
                    if (postData.url.indexOf('kladr') !== -1) {
                        commit('SET_KLADR', response.data.result);
                    }
                    if (postData.url === 'https://rushev.online/server/product_id.php') {
                        commit('SET_CURENTGOOD', response.data);
                    }
                    if (postData.url === 'https://rushev.online/server/check_sert.php') {
                        commit('SET_COUPON_VALUE', response.data);
                        commit('SET_SERT');
                    }
                    if (postData.url === 'https://rushev.online/server/payment.php') {
                    //if (postData.url === 'https://rushev.online/server/payment_test.php') {
                        console.log(response)
                        localStorage.setItem('rushev_paymentID', response.data.id)
                        window.open(response.data.confirmation.confirmation_url, "_self");
                    }
                    if (postData.url === 'https://rushev.online/server/subscribe.php') {
                        commit('CHANGE_SUBSCRIBED', response.data);
                    }
                    if (postData.url === 'https://rushev.online/server/payment_confirm.php') {
                    //if (postData.url === 'https://rushev.online/server/payment_confirm_test.php') {
                        if(response.data.status === 'waiting_for_capture' || response.data.status === 'succeeded') {
                            if(localStorage.getItem('rushev_order') !== null) {
                                const obj = JSON.parse(localStorage.getItem('rushev_order'));
                                dispatch('PostRequest', {
                                    url: 'https://rushev.online/server/order.php',
                                    body: obj
                                });
                                state.cart.forEach(elem => {
                                    if (elem.product_code === 'RSHV_SERT' && elem.variation_name.indexOf('Электронный') !== -1) {
                                        const quantity = parseInt(elem.amount);
                                        for (let i = 1; i <= quantity; i++) {
                                            dispatch('PostRequest', {
                                                url: 'https://rushev.online/server/buy_sert.php',
                                                body: {
                                                    price: parseInt(elem.price),
                                                    email: obj.user_data.email
                                                }
                                            });
                                        }
                                    }
                                });
                                localStorage.removeItem('rushev_order');
                                localStorage.removeItem('rushev_paymentID');
                            }
                            commit('CLEAR_CART');
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                commit('SET_PRELOAD', false);
            }
        }
    },
    modules: {
        slider: slider,
        footer: footerStore,
        news: newsStore,
        menu: menuStore
    }
})
