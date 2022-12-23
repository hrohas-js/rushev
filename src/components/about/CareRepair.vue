<template>
  <article v-if="$store.state.display_width >= 768" class="care-repair">
    <section class="blaze">
      <div class="blaze__photo">
        <img
            v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/webp/careRepair-photo1.webp', loading: 'data:image/gif;base64,R0lGODlh0AKOA4AAAP///wAAACH5BAEAAAEALAAAAADQAo4DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKI5Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3xESAEAADs='}"
            alt="care"
        />
      </div>
      <div class="blaze__text">
        <p>
          Лучше всего для этого подойдут закрытые футляры, коробочки,
          тканевые мешочки.
        </p>
        <p>
          Примечание:<br>
          Возможна аллергическая реакция.
        </p>
      </div>
      <div class="blaze__png">
        <img
            src="https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/png/blaze.png"
            alt="blaze"
        />
      </div>
      <div class="mail-address">
        <h2>
          Уточнить состав изделия можно на нашем сайте:
        </h2>
        <p>
          <a href="https://rushev.online">rushev.online</a>
          или написав нам на почту: <a href="mailto:rushevshop@gmail.com">rushevshop@gmail.com</a>
        </p>
        <p>
          Срок годности и службы товара не ограничен.
          На изделия распространяется бесплатная услуга покрытия родием.
        </p>
      </div>
    </section>
    <section class="star">
      <div class="star__text">
        <p>
          Все наши изделия покрыты родием.
          Это благородный металл из платиновой группы, который защищает украшения от агрессивного воздействия окружающей
          среды и потемнений.
        </p>
      </div>
      <div class="star__png">
        <img
            src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
            alt="star"
        />
      </div>
      <div class="our-recommendation">
        <h2>Мы рекомендуем:</h2>
        <div>
          - Беречь изделия от влаги и косметических средств;
        </div>
        <div>
          - Не опрыскивать спреями (лак для волос, парфюм и т.д.);
        </div>
        <div>
          - Беречь от падений и ударов, от них украшения могут деформироваться;
        </div>
        <div>
          - Хранить изделия в сухом месте при комнатной температуре.
        </div>
      </div>
      <div class="star__photo">
        <img
            v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/webp/careRepair-photo2.webp', loading: 'data:image/gif;base64,R0lGODlhggHnAYAAAP///wAAACH5BAEAAAEALAAAAACCAecBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyK+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnokmZgUAADs='}"
            alt="care"
        />
      </div>
    </section>
  </article>
  <article v-if="$store.state.display_width <= 767" class="care-repair">
    <div class="star__text">
      <p>
        Все наши изделия покрыты родием.
        Это благородный металл из платиновой группы, который защищает украшения от агрессивного воздействия окружающей
        среды и потемнений.
      </p>
    </div>
    <div class="blaze-star">
      <section class="blaze">
        <div class="blaze__photo">
          <img
              v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/webp/careRepair-photo1.webp', loading: 'data:image/gif;base64,R0lGODlh0AKOA4AAAP///wAAACH5BAEAAAEALAAAAADQAo4DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKI5Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3xESAEAADs='}"
              alt="care"
          />
        </div>
        <div>
          <div class="star__png">
            <img
                src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
                alt="star"
            />
          </div>
          <div class="our-recommendation">
            <h2>
              Мы рекомендуем:
            </h2>
            <div>
              - Беречь изделия от влаги и косметических средств;
            </div>
            <div>
              - Не опрыскивать спреями (лак для волос, парфюм и т.д.);
            </div>
            <div>
              - Беречь от падений и ударов, от них украшения могут деформироваться;
            </div>
            <div>
              - Хранить изделия в сухом месте при комнатной температуре.
            </div>
          </div>
        </div>
      </section>
      <section class="star">
        <div class="blaze__content">
          <div class="blaze__text">
            <p>
              Лучше всего для этого подойдут закрытые футляры, коробочки,
              тканевые мешочки.
            </p>
            <p>
              Примечание:<br>
              Возможна аллергическая реакция.
            </p>
          </div>
          <div class="blaze__png">
            <img
                src="https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/png/blaze.png"
                alt="blaze"
            />
          </div>
        </div>
        <div class="star__photo">
          <img
              v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/webp/careRepair-photo2.webp', loading: 'data:image/gif;base64,R0lGODlhggHnAYAAAP///wAAACH5BAEAAAEALAAAAACCAecBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyK+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnokmZgUAADs='}"
              alt="care"
          />
        </div>
      </section>
    </div>
    <div class="mail-address">
      <h2>
        Уточнить состав изделия можно на нашем сайте:
      </h2>
      <p>
        <a href="https://rushev.online">rushev.online</a>
        или написав нам на почту: <a href="mailto:rushevshop@gmail.com">rushevshop@gmail.com</a>
      </p>
      <p>
        Срок годности и службы товара не ограничен.
        На изделия распространяется бесплатная услуга покрытия родием.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'care-repair'
}
</script>

<style lang="scss" scoped>
h2 {
  color: $button-color-blue;
}

img {
  max-width: 100%;
}

.care-repair {
  display: flex;
  column-gap: rem(55);
  margin-left: rem(236);
  font-size: rem(16);
  line-height: rem(19);
}

.blaze {
  max-width: rem(386);
  flex: 1 1 50%;
}

.star {
  max-width: rem(386);
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blaze__photo {
  margin-bottom: rem(65);
}

.blaze__text {
  p:nth-child(2) {
    padding-top: rem(22);
  }
}

.blaze__png {
  display: flex;
  justify-content: center;
  margin: rem(47) auto rem(47);
  max-width: rem(107);
}

.mail-address {
  p:nth-child(3) {
    padding-top: rem(22);
  }
}

.star__text {
  margin-bottom: rem(40);
}

.star__png {
  display: flex;
  justify-content: center;
  margin-bottom: rem(45);
  max-width: rem(54);
  margin-left: auto;
  margin-right: auto;
}

.star__photo {
  margin-top: rem(44);
}

.our-recommendation {
  margin-bottom: rem(40);
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .care-repair {
    column-gap: calc(2.0725rem + (55 - 33.16) * ((100vw - 64rem) / (1440 - 1024)));
    margin-left: calc(10.625rem + (236 - 170) * ((100vw - 64rem) / (1440 - 1024)));
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.875rem + (19 - 14) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .blaze, .star {
    max-width: calc(17.99rem + (386 - 287.84) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .blaze__photo {
    margin-bottom: calc(2.1875rem + (65 - 35) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .blaze__text {
    p:nth-child(2) {
      padding-top: calc(1rem + (22 - 16) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
  .blaze__png {
    margin: calc(2.125rem + (47 - 34) * ((100vw - 64rem) / (1440 - 1024))) auto calc(2.6875rem + (47 - 43) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .mail-address {
    p:nth-child(3) {
      padding-top: calc(1.1875rem + (22 - 19) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
  .star__text {
    margin-bottom: calc(2.125rem + (40 - 34) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .star__png {
    margin-bottom: calc(2.5625rem + (45 - 41) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .star__photo {
    margin-top: calc(2.375rem + (44 - 38) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(767, 16)) {
  .care-repair {
    column-gap: calc(1.2497175rem + (33.16 - 19.999548) * ((100vw - 48rem) / (1023 - 767)));
    margin-left: calc(8.5rem + (170 - 136) * ((100vw - 48rem) / (1023 - 767)));
    font-size: rem(12);
    line-height: rem(14);
  }
  .blaze, .star {
    max-width: calc(13.40255rem + (287.84 - 214.4408) * ((100vw - 48rem) / (1023 - 767)));
  }
  .blaze__photo {
    margin-bottom: calc(1.176875rem + (35 - 18.83) * ((100vw - 48rem) / (1023 - 767)));
  }
  .blaze__text {
    p:nth-child(2) {
      padding-top: calc(0.727rem + (16 - 11.632) * ((100vw - 48rem) / (1023 - 767)));
    }
  }
  .blaze__png {
    margin: calc(1.323875rem + (34 - 21.182) * ((100vw - 48rem) / (1023 - 767))) auto calc(2.6875rem + (47 - 43) * ((100vw - 48rem) / (1023 - 767)));
  }
  .mail-address {
    p:nth-child(3) {
      padding-top: calc(1.0248125rem + (19 - 16.397) * ((100vw - 48rem) / (1023 - 767)));
    }
  }
  .star__text {
    margin-bottom: calc(1.80625rem + (34 - 28.9) * ((100vw - 48rem) / (1023 - 767)));
  }
  .star__png {
    margin-bottom: calc(2.3549375rem + (41 - 37.679) * ((100vw - 48rem) / (1023 - 767)));
  }
  .star__photo {
    margin-top: calc(2.049625rem + (38 - 32.794) * ((100vw - 48rem) / (1023 - 767)));
  }
}

@media (max-width: em(767, 16)) {
  .care-repair {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    font-size: rem(12);
    line-height: rem(14);
    margin-bottom: rem(94);
  }
  .star__text {
    padding: rem(25);
    margin: 0;
  }
  .star__png {
    margin-bottom: calc(0.3125rem + (30 - 5) * ((100vw - 13.75rem) / (767 - 200)));
  }

  .our-recommendation {
    text-align: center;
    padding-left: calc(0.3125rem + (20 - 5) * ((100vw - 13.75rem) / (767 - 200)));
    padding-right: calc(0.3125rem + (20 - 5) * ((100vw - 13.75rem) / (767 - 200)));;
    padding-bottom: calc(0.3125rem + (25 - 5) * ((100vw - 13.75rem) / (767 - 200)));;
  }
  .blaze__content {
    display: flex;
    flex-direction: column;
  }
  .blaze__photo{
    max-width: em(420,16);
    order: 2;
  }
  .blaze__text {
    order: 1;
    text-align: center;
    order: 1;
    padding-right: calc(0.3125rem + (37 - 5) * ((100vw - 13.75rem) / (767 - 200)));
    padding-left: calc(0.3125rem + (37 - 5) * ((100vw - 13.75rem) / (767 - 200)));

    p:nth-child(2) {
      padding-top: calc(0.3125rem + (21 - 5) * ((100vw - 13.75rem) / (767 - 200)));
    }
  }
  section {
    display: flex;
  }
  .blaze{
    flex-direction: column;
  }
  .blaze, .star {
    flex: 1 1 100%;
    max-width: 100%;
    align-items: center;
  }
  .blaze > div, .star > div {
    flex: 1 1 50%;
  }
  .blaze__photo {
    margin: 0;
  }
}

.blaze__png {
  margin-top: rem(35);
  margin-bottom: rem(35);
}

.mail-address {
  max-width: rem(334);
  margin: rem(31) rem(20);
}

.star__photo {
  margin: 0;
}
</style>
