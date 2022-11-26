<template>
  <article v-if="$store.state.display_width >= 769" class="new">
    <section class="new__item">
      <img
          v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/Magazine_TATLER /photo/Magazine_TATLER_photo1.webp', loading: 'data:image/gif;base64,R0lGODlhCgiEA4AAAP///wAAACH5BAEAAAEALAAAAAAKCIQDAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvNxnOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj3ixFAAAOw=='}"
          alt=""
          class="rush_img"
      />
      <p>
        Членство в клубе Фаустуса дает возможность стать патроном Фонда Михоэлса и внести вклад в развитие
        современного театра и постановку новых спектаклей. Также члены клуба получают доступ к программам разного
        уровня, которые включают в себя театральные премьеры, эдьютейнмент, просветительские программы и участие в
        лекциях и тренингах Богомолова.
      </p>
      <div class="linc-article">
        <p class="text">
          Ссылка на статью:
          <a
              href="https://www.ok-magazine.ru/stars/chronicle/238601-konstantin-bogomolov-kseniya-sobchak-aleksandra-revenko-i-drugie-gosti-prezentacii-zakrytogo-kluba"
              target="_blank">
            OK Magazine
          </a>
          <a
              href="https://www.tatler.ru/party/gosti-prezentacii-intellektualnogo-kluba-konstantina-bogomolova/gallery/16887"
              target="_blank"
          >
            Tatler
          </a>
        </p>
      </div>
    </section>
    <section class="new-description">
      <h1>
        Браслет RUSHEV с серебряным знаком Фаустуса
      </h1>
      <p>
        Ювелирный символом нового проекта Константина Богомолова – интеллектуального клуба им. Георгиуса Фаустуса.
        Его обладателями могут стать только члены клуба.
      </p>
      <div class="img__container">
        <img
            v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/Magazine_TATLER /photo/Magazine_TATLER_photo2.webp', loading: 'data:image/gif;base64,R0lGODlhHQGcAYAAAP///wAAACH5BAEAAAEALAAAAAAdAZwBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8bqjRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+P3kYBADs='}"
            alt=""
        />
      </div>
    </section>
  </article>
  <article v-if="$store.state.display_width <= 767" class="new">
    <section class="new__item">
      <div class="new__title">
        <h1>
          Браслет RUSHEV с серебряным знаком Фаустуса
        </h1>
        <p>
          Членство в клубе Фаустуса дает возможность стать патроном Фонда Михоэлса и внести вклад в развитие
          современного театра и постановку новых спектаклей. Также члены клуба получают доступ к программам разного
          уровня, которые включают в себя театральные премьеры, эдьютейнмент, просветительские программы и участие в
          лекциях и тренингах Богомолова.
        </p>
      </div>
      <div class="new__photo-main">
        <img
            v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/Magazine_TATLER /photo/Magazine_TATLER_photo1.webp', loading: 'data:image/gif;base64,R0lGODlhCgiEA4AAAP///wAAACH5BAEAAAEALAAAAAAKCIQDAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKL+Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOc5CynOc+JznSqc53sbKc73wnPeMpznvSspz3vic986nOf/OynP/8J0IAKdKAELahBD4rQhCp0oQxtqEP+HwrRiEp0ohStqEUvitGManSjHO2oRz8K0pCKdKQkLalJT4rSlKp0pSxtqUtfCtOYynSmNK2pTW+K05zqdKc87alPfwrUoAp1qEQtqlGPitSkKnWpTG2qU58K1ahKdapUrapVr4rVrGp1q1ztqle/CtawinWsZC2rWc+K1rSqda1sbatb3wrXuMp1rnStq13vite86nWvfO2rX/8K2MAKdrCELaxhD4vYxCp2sYxtrGMfC9nISnaylK2sZS+L2cxqdrOc7axnPwva0Ip2tKQtrWlPi9rUqna1rG2ta18L29jKdra0ra1tb4vb3Op2t7ztrW9/C9zgCne4xC2ucY/+i9zkKne5zG2uc58L3ehKd7rUra51r4vd7Gp3u9ztrne/C97wine85C2vec+L3vSqd73sba973wvf+Mp3vvStr33vi9/86ne//O2vf/8L4AALeMAELrCBD4zgBCt4wQxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHPwziEIt4xCQusYlPjOIUq3jFLG6xi18M4xjLeMY0rrGNb4zjHOt4xzzusY9/DOQgC3nIRC6ykY+M5CQreclMbrKTnwzlKEt5ylSuspWvjOUsa3nLXO6yl78M5jCLecxkLrOZz4zmNKt5zWxus5vfDOc4y3nOdK6zne+M5zzrec987rOf/wz+6EALetCELrShD43oRCt60YxutKMfDelIS3rSlK60pS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvNxnOt85zzvuc9/DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj3ixFAAAOw=='}"
            alt=""
            class="rush_img"
        />
      </div>
      <div class="new-description">
        <div class="img__container">
          <img
              v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/Magazine_TATLER /photo/Magazine_TATLER_photo2.webp', loading: 'data:image/gif;base64,R0lGODlhHQGcAYAAAP///wAAACH5BAEAAAEALAAAAAAdAZwBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8bqjRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+P3kYBADs='}"
              alt=""
          />
        </div>
        <div class="new__text">
          <p>
            Ювелирный символом нового проекта Константина Богомолова – интеллектуального клуба им. Георгиуса Фаустуса.
            Его обладателями могут стать только члены клуба.
          </p>
          <div class="linc-article">
            <p class="text">
              Ссылка на статью:
              <a
                  href="https://www.ok-magazine.ru/stars/chronicle/238601-konstantin-bogomolov-kseniya-sobchak-aleksandra-revenko-i-drugie-gosti-prezentacii-zakrytogo-kluba"
                  target="_blank"
              >
                OK Magazine
              </a>
              <a
                  href="https://www.tatler.ru/party/gosti-prezentacii-intellektualnogo-kluba-konstantina-bogomolova/gallery/16887"
                  target="_blank"
              >
                Tatler
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'new-two'
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.rush_img {
  max-width: rem(494);
}

p {
  line-height: rem(19);
}

.new {
  display: flex;
  column-gap: rem(42);
  justify-content: space-between;
}

.new__item {
  img {
    margin-bottom: rem(79);
  }

  p {
    max-width: rem(494);
  }
}

.linc-article {
  display: flex;
  justify-content: flex-end;
  margin-top: rem(153);

  a {
    color: $button-color-blue;
    text-decoration: underline;
    display: block;
    text-align: right;
  }

  p {
    color: $button-color-blue;
    align-self: center;
  }

  &::after {
    content: '';
    width: rem(82);
    height: rem(82);
    margin-left: rem(30);
    background: url("http://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/Magazine_TATLER /href/bleack_heart.png") center no-repeat;
    background-size: contain;
  }
}

.new-description {
  p {
    max-width: rem(325);
    padding-top: rem(54);
    padding-bottom: rem(80);
  }
}

.img__container {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .new {
    font-size: calc(0.6875rem + (16 - 11) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.8125rem + (19 - 13) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .new__item {

    img {
      margin-bottom: calc(4.48rem + (79 - 71.68) * ((100vw - 64rem) / (1440 - 1024)));
    }

    p {
      max-width: calc(23.488125rem + (494 - 375.81) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }

  .linc-article {
    margin-top: calc(7.8125rem + (153 - 125) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .new-description {
    p {
      padding-top: calc(1rem + (54 - 16) * ((100vw - 64rem) / (1440 - 1024)));
      padding-bottom: calc(4.5625rem + (80 - 73) * ((100vw - 64rem) / (1440 - 1024)));
      max-width: calc(13.5625rem + (325 - 217) * ((100vw - 64rem) / (1440 - 1024)))
    }
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .new {
    font-size: calc(0.47265625rem + (11 - 7) * ((100vw - 48rem) / (1023 - 768)));
    line-height: calc(0.547625rem + (13 - 8.762) * ((100vw - 48rem) / (1023 - 768)));
  }
  .new__item {

    img {
      margin-bottom: calc(4.06336rem + (71.68 - 65.01376) * ((100vw - 48rem) / (1024 - 768)));
    }

    p {
      max-width: calc(19.6360725rem + (375.81 - 314.17716) * ((100vw - 48rem) / (1024 - 768)));
    }
  }

  .linc-article {
    margin-top: calc(6.375rem + (125 - 102) * ((100vw - 48rem) / (1024 - 768)));
  }
  .new-description {
    p {
      padding-top: calc(0.196rem + (16 - 3.136) * ((100vw - 48rem) / (1024 - 768)));
      padding-bottom: calc(4.151875rem + (73 - 66.43) * ((100vw - 48rem) / (1024 - 768)));
      max-width: calc(10.5380625rem + (217 - 168.609) * ((100vw - 48rem) / (1024 - 768)));
    }
  }
}

@media (max-width: em(767, 16)) {
  .new {
    flex-direction: column;
    font-size: rem(11);
    line-height: rem(13);
    padding-bottom: rem(40);

    h1 {
      padding-bottom: rem(18);
    }

    p {
      max-width: 100%;
      margin: 0;
    }
  }
  .new__item {
    img {
      margin: 0;
    }
  }
  .new__photo-main{
    margin-bottom: rem(36);
  }
  .new__title {
    padding: rem(20)
  }
  .new__photo-main {
    display: flex;
    justify-content: center;
  }
  .new-description {
    display: flex;
    padding-left: rem(15);
    padding-right: rem(26);
    column-gap: rem(15);
    p{
      padding-top: 0;
      padding-bottom: rem(20);
    }
  }
  .img__container, .new__text {
    flex: 1 1 50%;
  }
  .linc-article{
    margin: 0;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: rem(34.66);

    &::after{
      margin-left:auto;
    }
  }
  .linc-article p{
    order: 1;
    align-self: flex-end;
  }
}

</style>
