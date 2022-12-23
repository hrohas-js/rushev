<template>
  <div v-if="$route.params.catalogItem === 'necklace'" class="catalog-body">
    <div class="left-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/catalog_banners/necklacebaner.webp', loading: 'data:image/gif;base64,R0lGODlhPgIsBoAAAP///wAAACH5BAEAAAEALAAAAAA+AiwGAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqENQHwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlETUwAAOw=='}"
          alt="baner"
      />
    </div>
    <goods-item v-for="good in necklace" :key="good.product_id" :good="good"/>
  </div>
  <div v-if="$route.params.catalogItem === 'bracelet'" class="catalog-body">
    <div class="left-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/catalog_banners/bracletbaner.webp', loading: 'data:image/gif;base64,R0lGODlhPgIsBoAAAP///wAAACH5BAEAAAEALAAAAAA+AiwGAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqENQHwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlETUwAAOw=='}"
          alt="baner"
      />
    </div>
    <goods-item v-for="good in bracelet" :key="good.product_id" :good="good"/>
  </div>
  <div v-if="$route.params.catalogItem === 'earrings'" class="catalog-body">
    <div class="right-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/catalog_banners/earingsbaner.webp', loading: 'data:image/gif;base64,R0lGODlhqwTcDIAAAP///wAAACH5BAEAAAEALAAAAACrBNwMAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEX+aZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZzPCZ3RKZ3TSZ3VaZ3XiZ3ZqZ3byZ3d6Z3fCZ7hKZ7jSZ7laZ7niZ7pqZ7ryZ7t6Z7+7wmf8Smf80mf9Wmf94mf+amf+8mf/emf/wmgASqgA0qgBWqgB4qgCaqgC8qgDeqgDwqhESqhE0qhFWqhF4qhGaqhG8qhHeqhHwqiISqiI0qiJWqiJ4qiKaqiK8qiLeqiLwqjMSqjM0qjNWqjN4qjOaqjO8qjPeqjPwqkQSqkQ0qkRWqkR4qkSaqkS8qkTeqkTwqlUSqlU0qlVWqlV4qlWaqlW8qlXeqlXwqmYSqmY0qmZWqmZ4qmaaqma8qmbeqmbwqncSqnc0qndWqnd4qneaqne8qnfeqnfwqogSqog0qohWqoh4qoiaqoi8qojeqojwqpkSqpk0qplWqpl4qUqZmqqZvKqZ3qqZ8KqqEqqqNKqqVqqqeKqqmqqqvKqq3qqq8Kq7Eqq7NKq7Vqq7eKq7mqq7vKq73qq78KrMEqrMNKrMVqrMeKrMmqrMvKrM3qrM8KrdEqrdNKrdVqrdeKrdmqrdvKrd3qrd8KruEqruNKruVqrueKrumqruvKru3qru8Kr/Eqr/NKr/Vqr/eKrzZVAAA7'}"
          alt="baner"
      />
    </div>
    <goods-item v-for="good in earrings" :key="good.product_id" :good="good"/>
  </div>
  <div v-if="$route.params.catalogItem === 'kaffs'" class="catalog-body">
    <div class="right-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/catalog_banners/kaffbaner.webp', loading: 'data:image/gif;base64,R0lGODlhqwTcDIAAAP///wAAACH5BAEAAAEALAAAAACrBNwMAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvP+nOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlL4/5zGt+85zvvOc/D/rQi370pC+96U+P+tSrfvWsb73rXw/72Mt+9rSvve1vj/vc6373vO+9738P/OALf/jEL77xj4/85Ct/+cxvvvOfD/3oS3/61K++9a+P/exrf/vc7773vw/+8It//OQvv/nPj/70q3/97G+/+98P//j+y3/+9K+//e+P//zrf//877///w+AASiAA0iABWiAB4iACaiAC8iADeiADwiBESiBE0iBFWiBF4iBGaiBG8iBHeiBHwiCISiCI0iCJWiCJ4iCKaiCK8iCLeiCLwiDMSiDM0iDNWiDN4iDOaiDO8iDPeiDPwiEQSiEQ0iERWiER4iESaiES8iETeiETwiFUSiFU0iFVWiFV4iFWaiFW8iFXeiFXwiGYSiGY0iGZWiGZ4iGaaiGa8iGbeiGbwiHcSiHc0iHdWiHd4iHeaiHe8iHfeiHfwiIgSiIg0iIhWiIh4iIiaiIi8iIjeiIjwiJkSiJk0iJlWiJl4iJmaiJm8j+iZ3oiZ8IiqEoiqNIiqVoiqeIiqmoiqvIiq3oiq8Ii7Eoi7NIi7Voi7eIi7moi7vIi73oi78IjMEojMNIjMVojMeIjMmojMvIjM3ojM8IjdEojdNIjdVojdeIjdmojdvIjd3ojd8IjuEojuNIjuVojueIjumojuvIju3oju8Ij/Eoj/NIj/Voj/eIj/moj/vIj/3oj/8IkAEpkANJkAVpkAeJkAmpkAvJkA3pkA8JkREpkRNJkRVpkReJkRmpkRvJkR3pkR8JkiEpkiNJkiVpkieJkimpkivJki3pki8JkzEpkzNJkzVpkzeJkzmpkzvJkz3pkz8JlEEplENJlEX+aZRHiZRJqZRLyZRN6ZRPCZVRKZVTSZVVaZVXiZVZqZVbyZVd6ZVfCZZhKZZjSZZlaZZniZZpqZZryZZt6ZZvCZdxKZdzSZd1aZd3iZd5qZd7yZd96Zd/CZiBKZiDSZiFaZiHiZiJqZiLyZiN6ZiPCZmRKZmTSZmVaZmXiZmZqZmbyZmd6ZmfCZqhKZqjSZqlaZqniZqpqZqryZqt6ZqvCZuxKZuzSZu1aZu3iZu5qZu7yZu96Zu/CZzBKZzDSZzFaZzHiZzJqZzLyZzN6ZzPCZ3RKZ3TSZ3VaZ3XiZ3ZqZ3byZ3d6Z3fCZ7hKZ7jSZ7laZ7niZ7pqZ7ryZ7t6Z7+7wmf8Smf80mf9Wmf94mf+amf+8mf/emf/wmgASqgA0qgBWqgB4qgCaqgC8qgDeqgDwqhESqhE0qhFWqhF4qhGaqhG8qhHeqhHwqiISqiI0qiJWqiJ4qiKaqiK8qiLeqiLwqjMSqjM0qjNWqjN4qjOaqjO8qjPeqjPwqkQSqkQ0qkRWqkR4qkSaqkS8qkTeqkTwqlUSqlU0qlVWqlV4qlWaqlW8qlXeqlXwqmYSqmY0qmZWqmZ4qmaaqma8qmbeqmbwqncSqnc0qndWqnd4qneaqne8qnfeqnfwqogSqog0qohWqoh4qoiaqoi8qojeqojwqpkSqpk0qplWqpl4qUqZmqqZvKqZ3qqZ8KqqEqqqNKqqVqqqeKqqmqqqvKqq3qqq8Kq7Eqq7NKq7Vqq7eKq7mqq7vKq73qq78KrMEqrMNKrMVqrMeKrMmqrMvKrM3qrM8KrdEqrdNKrdVqrdeKrdmqrdvKrd3qrd8KruEqruNKruVqrueKrumqruvKru3qru8Kr/Eqr/NKr/Vqr/eKrzZVAAA7'}"
          alt="baner"
      />
    </div>
    <goods-item v-for="good in kaffs" :key="good.product_id" :good="good"/>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'CatalogBody',
  components: {
    GoodsItem
  },
  computed: {
    necklace() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 1;
      });
    },
    earrings() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 2;
      });
    },
    bracelet() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 3;
      });
    },
    kaffs() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 6;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.catalog-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: $column-gap-catalog-gallery;
  grid-row-gap: $row-gap-catalog-gallery;
  margin-top: $mtop-catalog-gallery;
  margin-bottom: $mbottom-catalog-gallery;
}

.left-banner {
  grid-row: 1 / 3;
  padding-bottom: rem(35);
  display: flex;
}

.right-banner {
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  padding-bottom: rem(35);
  display: flex;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-body {
    margin-top: calc(5.625rem + (123 - 90) * ((100vw - 64rem) / (1440 - 1024)));
    margin-bottom: calc(21.25rem + (360 - 340) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-body {
    margin-top: calc(3.25rem + (90 - 52) * ((100vw - 26.75rem) / (1023 - 428)));
    margin-bottom: calc(12.5rem + (340 - 200) * ((100vw - 26.75rem) / (1023 - 428)));
    grid-column-gap: calc(0.625rem + (50 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
    grid-row-gap: calc(1.25rem + (37 - 20) * ((100vw - 26.75rem) / (1023 - 428)));
  }
}

@media (max-width: em(767, 16)) {
  .catalog-body {
    grid-template-columns: repeat(2, 1fr);
  }
  .right-banner {
    grid-column: 2 / 3;
  }
}

@media (max-width: em(427, 16)) {
  .catalog-body {
    grid-column-gap: rem(10);
    grid-row-gap: rem(20);
    margin-top: calc(0.625rem + (52 - 10) * ((100vw - 12.5rem) / (427 - 200)));
    margin-bottom: calc(6.25rem + (200 - 100) * ((100vw - 12.5rem) / (427 - 200)));
  }
}
</style>
