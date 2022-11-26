<template>
  <header
      ref="wdt"
      class="header"
      :class="{headerBack:$store.state.slider.main_scroll}"
  >
    <transition name="lol">
      <My-menu v-if="$store.state.menuVisible" />
    </transition>
    <div
        class="header__content"
        :class="{newGrid:searchVisible, checkoutClass:$route.name === 'Checkout'}"
    >
      <div
          class="content__item"
          :class="{mobflex:$store.state.display_width <= 768}" v-if="$route.name  !== 'Checkout'"
      >
        <div
            v-if="!searchVisible"
            class="menu"
            @click="this.$store.commit('SET_MENU_VISIBLE', true)">
          <img
              v-if="$store.state.slider.main_scroll === false"
              src="@/assets/img/svg/burger-menu_white.svg"
              alt="burger"
          />
          <img
              v-else
              src="@/assets/img/svg/burger-menu.svg"
              alt="burger"
          />
        </div>
        <div v-if="searchVisible" class="search-container">
          <div class="search-container__header">
            <div class="__header-text">
              ПОИСК
            </div>
            <div
                class="__header-close"
                @click="searchReqest=''; searchVisible = !searchVisible; flag = false"
            >
              <img src="@/assets/img/svg/search-close.svg" alt="close" />
            </div>
          </div>
          <div class="search-container__body">
            <input type="text" v-model="searchReqest">
          </div>
        </div>
        <div v-if="searchReqest.length > 0 && searchVisible" class="search-content">
          <SearchContent :searchLine="searchReqest" />
        </div>
        <div class="action-buttons__item" v-if="$store.state.display_width <= 768"
             @click="changeFlag"
             :class="{noVisible:flag}">
          <img
              v-if="$store.state.slider.main_scroll === false"
              src="@/assets/img/svg/search_white.svg"
              alt="search"
          />
          <img
              v-else
              src="@/assets/img/svg/search.svg"
              alt="search"
          />
        </div>
      </div>
      <div v-if="!searchVisible" class="content__item">
        <div class="logo">
          <router-link to="/">
            <img
                v-if="$store.state.slider.main_scroll === false"
                src="@/assets/img/svg/rushev-logo_white.svg"
                alt="logo"
            />
            <img
                v-else
                src="@/assets/img/svg/rushev-logo.svg"
                alt="logo"
            />
          </router-link>
        </div>
      </div>
      <div v-if="!flag && $route.name  !== 'Checkout'" class="content__item">
        <div class="action-buttons">
          <div
              v-if="$store.state.display_width > 768"
              class="action-buttons__item"
              @click="changeFlag"
          >
            <img
                v-if="$store.state.slider.main_scroll == false"
                src="@/assets/img/svg/search_white.svg"
                alt="search"
            />
            <img
                v-else
                src="@/assets/img/svg/search.svg"
                alt="search"
            />
          </div>
          <div class="action-buttons__item">
            <div
                v-if="$store.getters.wish_count > 0"
                class="count-item"
                :class="{countWhite:$store.state.slider.main_scroll === false}"
            >
              {{ $store.getters.wish_count }}
            </div>
            <router-link to="/wishlist">
              <img
                  v-if="$store.state.slider.main_scroll === false"
                  src="@/assets/img/svg/wish-menu_white.svg"
                  alt="wish"
              />
              <img
                  v-else
                  src="@/assets/img/svg/wish-menu.svg"
                  alt="wish"
              />
            </router-link>
          </div>
          <div
              class="action-buttons__item"
              @mouseover="$route.name !== 'Cart' ? cartModalShow = true : cartModalShow = false"
              @mouseout="cartModalShow = false"
          >
            <div
                v-if="$store.getters.cart_count > 0"
                class="count-item"
                :class="{countWhite:$store.state.slider.main_scroll === false}"
            >
              {{ $store.getters.cart_count }}
            </div>
            <router-link to="/cart">
              <img
                  v-if="$store.state.slider.main_scroll === false"
                  src="@/assets/img/svg/card-menu_white.svg"
                  alt="cart"
              />
              <img
                  v-else
                  src="@/assets/img/svg/card-menu.svg"
                  alt="cart"
              />
            </router-link>
            <transition name="modalShow">
              <div
                  v-if="$store.getters.cart_count > 0 && $store.state.miniCartShow && $store.state.display_width > 768 && $route.name !== 'Cart'"
                  class="modal-container"
                  :class="{big:$store.getters.cart_count > 3}"
              >
                <cart-table :cartModal="true" />
                <router-link to="/checkout" class="checkout-button">
                  перейти к оформлению
                </router-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Mymenu from "@/components/Menu";
import SearchContent from "@/components/SearchContent";
import CartTable from "@/components/CartTable";

export default {
  name: 'my-header',
  data: () => ({
    rechange: true,
    searchVisible: false,
    searchReqest: '',
    flag: false,
    cartModalShow: false
  }),
  components: {
    CartTable,
    SearchContent,
    "My-menu": Mymenu,
  },
  mounted() {
    this.$store.commit('SET_DISPLAY_WIDTH', window.innerWidth);
    this.$store.commit('slider/SET_HEADER_HEIGHT', this.$refs.wdt.getBoundingClientRect().height);
    window.addEventListener("resize", () => {
      this.$store.commit('SET_DISPLAY_WIDTH', window.innerWidth);
    });
  },
  methods: {
    changeFlag() {
      this.searchVisible = !this.searchVisible;
      if (this.searchVisible && this.$store.state.display_width < 767) {
        this.flag = !this.flag;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lol-enter-active,
.lol-leave-active {
  transition: all 0.5s ease;
}

.lol-enter-from,
.lol-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.modalShow-enter-active, .modalShow-leave-active {
  transition: opacity .5s;
}

.modalShow-enter, .modalShow-leave-to {
  opacity: 0;
}

.modal-container {
  position: absolute;
  background-color: white;
  right: rem(-40);
  z-index: 999;
  padding: rem(13) rem(29) 0 rem(42);
  box-sizing: border-box;
  width: rem(390);
  height: 100vh;
}

.big {
  height: auto;
}

.headerBack {
  background-color: white;
}

.checkout-button {
  display: block;
  margin-top: rem(100);
  margin-bottom: rem(40);
  font-size: rem(10);
  padding: rem(12) 0;
  text-transform: uppercase;
  background-color: black;
  color: white;
  text-align: center;
  cursor: pointer;
}

.header {
  padding: $pup-header $pside-header;
  flex: 0 0 auto;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 99;
}

.menu {
  cursor: pointer;
}

.header__content {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
}

.newGrid {
  grid-template-columns: 1fr 1fr;
}
.checkoutClass {
  grid-template-columns: 1fr;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
}

.action-buttons__item {
  cursor: pointer;
  position: relative;
}

.logo {
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    position: relative;
    top: -3px;
  }
}

img {
  height: rem(25);
}

.count-item {
  font-size: 8px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 18px;
  display: inline-block;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: absolute;
  right: 0;
  top: 40%;
  margin-top: -18px;
  background-color: #23232c;
  transition: all 0.5s;
  margin-right: -10px;
}

.countWhite {
  background-color: white;
  color: #1F83DE;
}

.mobflex {
  display: flex;
}

.action-buttons__item {
  margin-left: rem(38);

  &:first-child {
    margin-left: 0;
  }
}

//search
.search-container {
  max-width: rem(379);
}

.search-container__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(16);
}

.__header-text {
  font-size: rem(12);
  color: $button-color-blue;
}

.search-container__body {
  input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid;
    padding-bottom: rem(13);
    font-size: rem(10);
  }
}

.search-content {
  position: absolute;
  z-index: 100;
  background-color: white;
  top: rem(109);
  left: 0;
}

.noVisible {
  display: none;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .header {
    padding: calc(1.25rem + (25 - 20) * ((100vw - 64rem) / (1440 - 1024))) $pside-header;
  }
  .action-buttons__item {
    margin-left: calc(1.625rem + (38 - 26) * ((100vw - 64rem) / (1440 - 1024)));
  }

}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .header {
    padding: calc(1.875rem + (20 - 30) * ((100vw - 26.75rem) / (1024 - 428))) calc(1.4375rem + (38 - 23) * ((100vw - 26.75rem) / (1024 - 428)));
  }
  .action-buttons__item {
    margin-left: calc(1.25rem + (26 - 20) * ((100vw - 26.75rem) / (1024 - 428)));
  }
  img {
    height: calc(1.25rem + (25 - 20) * ((100vw - 26.75rem) / (1024 - 428)));;
  }
}

@media (max-width: em(767, 16)) {
  .newGrid {
    grid-template-columns: 1fr;

    .mobflex {
      display: block;
    }
  }
  .search-container {
    max-width: 100%;
    top: rem(37);
  }
}

@media (max-width: em(427, 16)) and (min-width: em(220, 16)) {
  .header {
    padding: calc(0rem + (30 - 0) * ((100vw - 13.75rem) / (427 - 220))) calc(0rem + (23 - 0) * ((100vw - 13.75rem) / (428 - 220)));
  }
  .action-buttons__item {
    margin-left: calc(0rem + (20 - 0) * ((100vw - 13.75rem) / (428 - 220)));
  }
  img {
    height: rem(20);
  }
}
</style>
