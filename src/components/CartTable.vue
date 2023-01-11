<template>
  <div v-if="$store.state.display_width > 767 && !cartModal" class="cart-table">
    <div class="__content__rows">
      <div class="good-name">
        НАИМЕНОВАНИЕ
      </div>
      <div class="good-info">
        ИНФОРМАЦИЯ
      </div>
      <div class="good-amount">
        КОЛЛИЧЕСТВО
      </div>
      <div class="good-price">
        СУММА
      </div>
    </div>
    <div
        class="__content__rows"
        v-for="good in $store.state.cart"
        :key="good.product_id"
    >
      <div class="good-img">
        <router-link :to="{name:'Product', params: {id: good.product_id}}">
          <img
              v-lazy="{src: good.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp'), loading: 'data:image/gif;base64,R0lGODlh/wX/B4AAAP///wAAACH5BAEAAAEALAAAAAD/Bf8HAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEXRaZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZxuUwAAOw=='}"
              alt="good"
          />
        </router-link>
      </div>
      <div class="good-name">
        <router-link :to="{name:'Product', params: {id: good.product_id}}">
          {{ good.product }}
        </router-link>
      </div>
      <div class="good-info">
        <div v-if="good.category_ids[0] === '4' && good.product.indexOf('custom') !== -1">
          <div>
            {{ good.product_features[1].variant }}
          </div>
          <div>{{ good.product_options['2'] }}</div>
        </div>
        <div v-if="good.category_ids[0] === '5'">
          <div>
            {{ good.product_features[4].variant }}
          </div>
        </div>
      </div>
      <change-amount :amountID="good.product_id" />
      <div class="good-price">
        {{ parseInt(good.price) * parseInt(good.amount) }} ₽
      </div>
      <div class="close" @click="$store.commit('REMOVE_FROM_CART', good.product_id)">
        <div class="close-button">
          <img src="@/assets/img/svg/deleteWishButton.svg">
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!cartModal" class="cart-table__mobile">
    <div
        class="__content__rows"
        v-for="good in $store.state.cart"
        :key="good.product_id"
    >
      <div class="good-img">
        <router-link :to="{name:'Product', params:{id:good.product_id}}">
          <img
              v-lazy="{src: good.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp'), loading: 'data:image/gif;base64,R0lGODlh/wX/B4AAAP///wAAACH5BAEAAAEALAAAAAD/Bf8HAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEXRaZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZxuUwAAOw=='}"
              alt="good"
          />
        </router-link>
      </div>
      <div class="__mobile-content">
        <div class="good-name-close">
          <div class="good-name">
            <router-link :to="{name:'Product', params:{id:good.product_id}}">
              {{ good.product }}
            </router-link>
          </div>
          <div class="close-button" @click="$store.commit('REMOVE_FROM_CART', good.product_id)">
            <img src="@/assets/img/svg/deleteWishButton.svg" alt="delete">
          </div>
        </div>
        <div class="good-info">
          <div v-if="good.category_ids[0] === '4' && good.product.indexOf('custom') !== -1">
            <div>
              {{ good.product_features[1].variant }}
            </div>
            <div>
              {{ good.product_options['2'] }}
            </div>
          </div>
          <div v-if="good.category_ids[0] === '5'">
            <div>
              {{ good.product_features[4].variant }}
            </div>
          </div>
        </div>
        <div class="cout-price">
          <change-amount :amountID="good.product_id" />
          <div class="good-price">
            {{ parseInt(good.price) * parseInt(good.amount) }} ₽
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      v-if="(cartModal && $route.name === 'Checkout') || (cartModal && $route.name !== 'Cart')"
      class="cart-table__mobile"
  >
    <div
        class="__content__rows modal"
        v-for="good in $store.state.cart"
        :key="good.product_id" :class="{noBorder:$route.name === 'Checkout'}"
    >
      <div class="good-img">
        <router-link :to="{name:'Product',params:{id:good.product_id}}">
          <img
              v-lazy="{src: good.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp'), loading: 'data:image/gif;base64,R0lGODlh/wX/B4AAAP///wAAACH5BAEAAAEALAAAAAD/Bf8HAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEXRaZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZxuUwAAOw=='}"
              alt="good"
          />
        </router-link>
      </div>
      <div class="__mobile-content">
        <div class="good-name-close">
          <div class="good-name">
            <router-link :to="{name:'Product',params:{id:good.product_id}}">
              {{ good.product }}
            </router-link>
          </div>
          <div
              v-if="$route.name !== 'Checkout'"
              class="close-button"
              @click="$store.commit('REMOVE_FROM_CART', good.product_id)"
          >
            <img src="@/assets/img/svg/deleteWishButton.svg" alt="delete">
          </div>
        </div>
        <div class="good-info">
          <div v-if="good.category_ids[0] === '4' && good.product.indexOf('custom') !== -1">
            <div>
              {{ good.product_features[1].variant }}
            </div>
            <div>
              {{ good.product_options['2'] }}
            </div>
          </div>
          <div v-if="good.category_ids[0] === '5'">
            <div>
              {{ good.product_features[4].variant }}
            </div>
          </div>
        </div>
        <div class="cout-price">
          <change-amount :amountID="good.product_id" v-if="$route.name !== 'Checkout'" />
          <div class="good-price">
            {{ parseInt(good.price) * parseInt(good.amount) }} ₽
          </div>
          <div v-if="$route.name === 'Checkout'" class="quantity">
            Количество: {{ good.amount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeAmount from "@/components/UI/ChangeAmount";

export default {
  name: 'cartTable',
  components: {ChangeAmount},
  props: ['cartModal']
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.cart-table {
  font-size: rem(13);

  &:first-child {
    .good-name {
      grid-column: 2/3;
    }
  }
}

.cart-symbol svg {
  width: rem(18);
}

.font {
  font-weight: 300;
}

.__content__rows {
  display: grid;
  grid-template-columns: rem(121) repeat(4, 1fr) rem(12);
  grid-gap: rem(50);
  align-items: center;
  border-bottom: 1px solid;
  padding: $pup-row-table-cart 0;

  &:first-child {
    padding-top: 0;
    padding-bottom: rem(22);
  }

  &:last-child {
    border-bottom: none;
  }
}

.cart-table__mobile .noBorder {
  border-bottom: none !important;

  .__mobile-content {
    display: flex;
    flex-direction: column;

    .good-info {
      order: 1;
    }
  }
}

.modal {
  grid-gap: rem(16);
  align-items: flex-start;

  .__mobile-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .cout-price {
    display: block;
  }

  .good-price {
    margin-top: rem(15);
  }

  &:first-child {
    border-top: none !important;
  }
}

.close {
  display: flex;
  height: 100%;
  cursor: pointer;
}

.cart-table__mobile {
  font-size: rem(13);

  .__content__rows {
    grid-template-columns: rem(121) 1fr;

    &:first-child {
      padding-top: rem(14);
      border-top: 1px solid;
    }

    &:last-child {
      border-bottom: 1px solid;
    }

    .good-price {
      font-weight: 300;
    }
  }
}

.good-name-close, .cout-price {
  display: flex;
  justify-content: space-between;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .__content__rows {
    grid-gap: calc(1.25rem + (50 - 20) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .__content__rows {
    grid-gap: calc(0.625rem + (20 - 10) * ((100vw - 48rem) / (1024 - 768)));
  }
}

@media (max-width: em(427, 16)) and (min-width: em(220, 16)) {
  .cart-table__mobile {
    font-size: calc(0.5rem + (13 - 8) * ((100vw - 13.75rem) / (428 - 220)));
  }
  .__content__rows {
    grid-gap: calc(0.625rem + (56 - 10) * ((100vw - 13.75rem) / (428 - 220)));
  }
}
</style>
