<template>
  <div
      v-if="good"
      class="goods-item"
      @click="itemClick"
  >
    <div
        class="goods-item__image"
        @mouseover="$store.state.isMobile ? changeImage = false : changeImage = true"
        @mouseout="changeImage = false"
    >
      <transition name="change">
        <img
            v-if="changeImage && $store.state.display_width > 768"
            v-lazy="{src: difImage, loading: 'data:image/gif;base64,R0lGODlh/wX/B4AAAP///wAAACH5BAEAAAEALAAAAAD/Bf8HAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEXRaZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZxuUwAAOw=='}"
            alt="good"
            class="dif-img"
        />
      </transition>
      <img
          v-lazy="{src:mainImage, loading: 'data:image/gif;base64,R0lGODlh/wX/B4AAAP///wAAACH5BAEAAAEALAAAAAD/Bf8HAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEXRaZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZxuUwAAOw=='}"
          alt="good"
      />
      <div class="wish__button" :class="{chooseGood:like, searchWidth:search}">
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M24.8719 8.67291L13.084 22.4974C13.031 22.5624 12.9426 22.5624 12.8896 22.4974L1.11929 8.67291C1.01326 8.55919 0.977909 8.39674 1.01325 8.25054L2.21503 2.77597C2.25037 2.59728 2.40943 2.43483 2.60383 2.38609L7.60532 1.02151C7.79973 0.972776 7.99413 1.02151 8.15319 1.13523L12.9603 5.29395C12.9779 5.31019 13.031 5.31019 13.0486 5.29395L17.8557 1.13523C17.9971 1.00527 18.2092 0.972776 18.4036 1.02151L23.4051 2.38609C23.5995 2.43483 23.7585 2.59728 23.7939 2.77597L24.9957 8.25054C25.0133 8.39674 24.978 8.55919 24.8719 8.67291Z"
              stroke="#1E1E1C" stroke-miterlimit="10"/>
        </svg>
      </div>
      <div v-if="good.amount === '0'" class="preorder">
        предзаказ
      </div>
      <div v-if="basePrice !== price" class="sale sale_title">
        sale
      </div>
      <div v-if="basePrice !== price" class="sale sale_amount">
        -{{ discount }}%
      </div>
    </div>
    <div class="goods-item__info" :class="{catalog:$route.name === 'Catalog', searchProduct:search}">
      <div class="name">
        {{ good.product }}
      </div>
      <div class="price">
        <div v-if="basePrice !== price" class="price_old">
          {{ basePrice }} ₽
        </div>
        <div>
          {{ price }} ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-item',
  data: () => ({
    like: false,
    changeImage: false,
    regular: /\.jpg|\.png/gi
  }),
  props: ['good', 'search'],
  computed: {
    price() {
      let count = this.good.price;
      if (typeof count == 'string') {
        let newCount = count.split('.');
        return parseInt(newCount[0]);
      }
      else {
        return count
      }
    },
    basePrice() {
      let count = this.good.base_price;
      let newCount = count.split('.');
      return parseInt(newCount[0]);
    },
    discount() {
      return this.good.discount_prc;
    },
    mainImage() {
      return this.good.main_pair.detailed.image_path.replace(this.regular, '.webp');
    },
    difImage() {
      const rand = Object.values(this.good.image_pairs);
      let artboard = '';
      rand.forEach(elem => {
        if(elem.detailed.image_path.indexOf('Artboard') !== -1) {
          artboard = elem.detailed.image_path.replace(this.regular, '.webp');
        }
      });
      return artboard;
    }
  },
  mounted() {
    if (this.$store.state.goods.length > 0 && this.good) {
      this.$store.state.wishGoods.forEach(elem => {
        if (elem.product_id === this.good.product_id) {
          this.like = true;
        }
      });
    }
  },
  methods: {
    itemClick(e) {
      if (e.target.classList.contains('wish__button') || e.target.tagName === 'svg') {
        this.like = !this.like;
        if (this.like) {
          this.$store.commit('ADD_TO_WISH_LIST', this.good);
        } else {
          this.$store.commit('REMOVE_FROM_WISH_LIST', this.good.product_id);
        }
      } else {
        this.$router.push({name: 'Product', params: {id: this.good.product_id}})
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.change-enter-active, .change-leave-active {
  transition: opacity .5s;
}

.change-enter, .change-leave-to {
  opacity: 0;
}

img {
  max-width: 100%;
}

.dif-img {
  position: absolute;
}

.goods-item {
  user-select: none;
  cursor: pointer;
}

.goods-item__info {
  display: flex;
  justify-content: space-between;
  margin-top: $mtop-product-title;
  font-size: $fs-product-item-text;

  .name {
    text-transform: uppercase;
  }

  .price {
    font-weight: 700;
  }

  .price_old {
    font-weight: 400;
    text-decoration: line-through;
    color: #898989;
  }
}

.catalog {
  margin-top: rem(16);
}

.searchProduct {
  .name {
    font-size: rem(10);
  }
}

.goods-item__image {
  position: relative;
}

.wish__button {
  position: absolute;
  top: rem(13);
  right: rem(12);
  padding: rem(10);
  cursor: pointer;
}

.searchWidth {
  width: rem(18);
}

.chooseGood {
  svg {
    fill: $button-color-black;
  }
}

.preorder {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: rem(14);
  background-color: black;
  color: white;
  padding: rem(15) rem(43);
  text-transform: uppercase;
}

.sale {
  position: absolute;
  background-color: #F58B28;
  color: #ffffff;
  text-transform: uppercase;
  padding: rem(15) rem(12);
}

.sale_title {
  top: 0;
  left: 0;
}

.sale_amount {
  bottom: rem(4);
  right: 0;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .wish__button {
    top: calc(0.125rem + (13 - 2) * ((100vw - 64rem) / (1440 - 1024)));
    right: calc(0.125rem + (12 - 2) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .wish__button {
    top: rem(2);
    right: calc(0.125rem + (7 - 2) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .goods-item__info {
    margin-top: calc(1.125rem + (21 - 18) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .preorder {
    font-size: rem(12);
    padding: rem(13) rem(33);
  }
  .sale {
    font-size: rem(12);
    padding: rem(12) rem(9);
  }
}


@media (max-width: em(427, 16)) and (min-width: em(220, 16)) {
  .wish__button {
    top: rem(2);
    right: 0;
  }
  .goods-item__info {
    margin-top: rem(18);
  }
}

@media (max-width: em(768, 16)) {
  .goods-item__info {
    font-size: rem(10);
  }
  .wish__button svg {
    height: rem(18);
  }
  .preorder {
    font-size: rem(8);
    padding: rem(8) rem(13);
  }
  .sale {
    font-size: rem(8);
    padding: rem(10) rem(6);
  }
}
</style>
