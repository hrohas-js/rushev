<template>
  <div class="my-menu">
    <div class="close">
      <div
          class="close-button"
          @click="this.$store.commit('SET_MENU_VISIBLE', false)"
      >
        <img src="@/assets/img/svg/close.svg" alt="close">
      </div>
    </div>
    <div class="menu-container">
      <div class="main-menu">
        <div
            class="__items__container"
            v-for="item in $store.state.menu.menuItemUp"
            :key="item.id"
        >
          <MenuItems :menuItem="item" />
        </div>
        <div class="photo">
          <img
              v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/burgerMenu/png/womenMenu.webp', loading: 'data:image/gif;base64,R0lGODlhpgNgAYAAAP///wAAACH5BAEAAAEALAAAAACmA2ABAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHouDbLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy73VAAAOw=='}"
              alt="women"
          />
        </div>
        <div
            class="__items__container"
            v-for="item in $store.state.menu.menuItemDown"
            :key="item.id"
        >
          <MenuItems :menuItem="item" />
        </div>
      </div>
      <div class="main-menu__footer">
        <Footer :rechange="true" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItems from "@/components/UI/MenuItems";
import Footer from "@/components/UI/Footer";

export default {
  name: 'Mymenu',
  components: {
    MenuItems,
    Footer
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  width: 100%;
}

.my-menu {
  background: white;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
}

.menu-container {
  border-top: 1px solid;
  border-bottom: 1px solid;
}

.main-menu {
  display: grid;
  align-items: center;
  grid-template-columns:  repeat(3, 1fr);
  border-left: 1px solid;
  border-right: 1px solid;
  flex: 1 1 48%;
}

.close-button {
  background: $button-color-blue;
  display: inline;
  padding: rem(6);
  cursor: pointer;
}

.__items__container:nth-child(2), .__items__container:nth-child(6) {
  border-left: 1px solid;
  border-right: 1px solid;
}

.photo {
  grid-column: 1/4;
  border-top: 1px solid;
  border-bottom: 1px solid;

  img {
    display: block;
    margin: 0 auto;
  }
}

.close {
  display: flex;
  justify-content: flex-end;
}

.menu-container {
  display: flex;
}

.main-menu__footer {
  padding-top: rem(38);
  padding-bottom: rem(14);
  width: 100%;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .main-menu__footer {
    padding-top: calc(1.6875rem + (38 - 27) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .main-menu__footer {
    padding-top: calc(0.625rem + (27 - 10) * ((100vw - 48rem) / (1023 - 768)));
  }
  .photo {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .__items__container:nth-child(2), .__items__container:nth-child(6) {
    height: 100%;
  }
}

@media (max-width: em(767, 16)) {
  .menu-container {
    display: block;
  }
  .main-menu {
    border-bottom: 1px solid;
  }
  .main-menu__footer {
    display: none;
  }
}
</style>
