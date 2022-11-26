<template>
  <div class="content">
    <my-header />
    <div
        v-if="$route.params.catalogItem === 'constructor'"
        class="constructor-banner"
        :style="{marginTop : this.$store.state.slider.header_height + 'px'}"
    >
      <video autoplay loop playsinline preload muted>
        <source src="https://u1600792.isp.regruhosting.ru/img_server/constructor_banner.mp4" type="video/mp4" />
        <source src="https://u1600792.isp.regruhosting.ru/img_server/constructor_banner.webm" type="video/webm" />
      </video>
    </div>
    <div
        v-if="$route.params.catalogItem === 'PACIFIC'"
        class="pacific-container"
        :style="{marginTop : $store.state.slider.header_height + 'px'}"
    >
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/pac_banner.webp', loading: 'data:image/gif;base64,R0lGODlhRw0MBoAAAP///wAAACH5BAEAAAEALAAAAABHDQwGAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iD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'}"
          alt="img"
      />
    </div>
    <main
        class="catalog-content"
        :style="[$route.params.catalogItem !== 'constructor' && $route.params.catalogItem !== 'PACIFIC' ? {marginTop : this.$store.state.slider.header_height + 'px'} : {marginTop : 0}]"
    >
      <div class="top-menu">
        <MenuItems
            v-for="item in $store.state.menu.menuItemUp"
            :key="item.id"
            :menuItem="item"
            :menuSetup="'top'"
        />
        <MenuItems
            v-for="item in $store.state.menu.menuItemDown"
            :key="item.id"
            :menuItem="item"
            :menuSetup="'top'"
        />
      </div>
      <CatalogBody />
      <CatalogConstructor />
      <div v-if="$route.params.catalogItem === 'constructor'" class="constructor-heart">
        <div class="constructor-heart__text">
          Предлагаем вам услугу коструктора,
          которая позволит вам собрать свое
          уникальное украшение от бренда Rushev.
          Просто добавьте
          в корзину элементы которые вам
          понравились, а мы
          собирем для вас ваше
          персональное украшение.
        </div>
      </div>
    </main>
    <my-footer />
  </div>
</template>

<script>
import MenuItems from "@/components/UI/MenuItems";
import CatalogBody from "@/components/CatalogBody";
import CatalogConstructor from "@/components/CatalogConstructor";

export default {
  name: 'Catalog',
  components: {
    MenuItems,
    CatalogBody,
    CatalogConstructor
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  }
}
</script>

<style lang="scss" scoped>

img, video {
  max-width: 100%;
}

.catalog-content {
  padding: 0 $pside-catalog-gallery;
}

.top-menu {
  display: flex;
  justify-content: space-between;
  margin-top: rem(100);
}

.constructor-heart {
  background: url("https://u1600792.isp.regruhosting.ru/img_server/const_heart.png") center no-repeat;
  background-size: contain;
  width: rem(716);
  height: rem(700);
  margin: rem(85) auto;
}

.constructor-heart__text {
  max-width: rem(250);
  padding: rem(96) rem(69);
  font-weight: 300;
  font-size: rem(18);
  box-sizing: content-box;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-content {
    padding: 0 calc(2rem + (230 - 32) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .top-menu {
    margin-top: calc(4.375rem + (100 - 70) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .constructor-heart {
    width: calc(36.1875rem + (716 - 579) * ((100vw - 64rem) / (1440 - 1024)));
    height: calc(35.375rem + (700 - 566) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .constructor-heart__text {
    max-width: calc(12.5rem + (250 - 200) * ((100vw - 64rem) / (1440 - 1024)));
    padding: calc(5.25rem + (96 - 84) * ((100vw - 64rem) / (1440 - 1024))) calc(3.4375rem + (69 - 55) * ((100vw - 64rem) / (1440 - 1024)));
    font-size: calc(0.875rem + (18 - 14) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-content {
    padding: 0 calc(0.625rem + (32 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .top-menu {
    margin-top: calc(1.875rem + (70 - 30) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .constructor-heart {
    width: calc(26.125rem + (579 - 418) * ((100vw - 26.75rem) / (1023 - 428)));
    height: calc(25.5rem + (566 - 408) * ((100vw - 26.75rem) / (1023 - 428)));
    margin: calc(4.6875rem + (85 - 75) * ((100vw - 26.75rem) / (1023 - 428))) auto;
  }
  .constructor-heart__text {
    max-width: calc(9.0625rem + (200 - 145) * ((100vw - 26.75rem) / (1023 - 428)));
    padding: calc(3.3125rem + (84 - 53) * ((100vw - 26.75rem) / (1023 - 428))) calc(2.5rem + (55 - 40) * ((100vw - 26.75rem) / (1023 - 428)));
    font-size: calc(0.625rem + (14 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }


}

@media (max-width: em(427, 16)) {
  .catalog-content {
    padding: 0 rem(10);
  }
  .top-menu {
    margin-top: calc(0.625rem + (30 - 10) * ((100vw - 12.5rem) / (427 - 200)));
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .constructor-heart {
    width: calc(11.25rem + (418 - 180) * ((100vw - 12.5rem) / (427 - 200)));
    height: calc(10.625rem + (408 - 170) * ((100vw - 12.5rem) / (427 - 200)));
    margin: rem(75) auto;
  }
  .constructor-heart__text {
    max-width: rem(145);
    padding: calc(1.25rem + (53 - 20) * ((100vw - 12.5rem) / (427 - 200))) calc(0.625rem + (40 - 10) * ((100vw - 12.5rem) / (427 - 200)));
    font-size: rem(10);
  }
}
</style>
