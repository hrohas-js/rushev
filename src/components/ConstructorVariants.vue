<template>
  <div class="constructor-variants">
    <div class="__metal">
      <div class="__metal__text">
        ВЫБЕРЕТЕ ЦВЕТ ИЗДЕЛИЯ
      </div>
      <div class="__metal__choose">
        <div
            class="__metal__choose__item"
            :class="{colorChooseActive:colorChoose === 'Серебро'}"
            @click="chooseColor('Серебро')"
        >
          СЕРЕБРО
        </div>
        <div
            class="__metal__choose__item"
            :class="{colorChooseActive:colorChoose === 'Золото'}"
            @click="chooseColor('Золото')"
        >
          ЗОЛОТО
        </div>
      </div>
    </div>
    <div class="__symbol">
      <div class="__symbol__text">
        ВЫБЕРЕТЕ СИМВОЛ
      </div>
      <div class="__symbol__choose">
        <div
            class="__symbol__choose__item"
            :class="{symbolChooseActive:symbolChoose === 'Сердце'}"
            @click="chooseSymbol('Сердце')"
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.9181 11.7119L16.1446 31.012C16.0781 31.1027 15.9674 31.1027 15.9009 31.012L1.14951 11.7119C1.01661 11.5532 0.972313 11.3264 1.01661 11.1223L2.52276 3.47939C2.56706 3.22991 2.7664 3.00312 3.01005 2.93509L9.27829 1.03003C9.52193 0.961993 9.76557 1.03003 9.96492 1.18879L15.9895 6.99467C16.0117 7.01734 16.0781 7.01734 16.1003 6.99467L22.1249 1.18879C22.3021 1.00735 22.5679 0.961993 22.8115 1.03003L29.0797 2.93509C29.3234 3.00312 29.5227 3.22991 29.567 3.47939L31.0732 11.1223C31.0953 11.3264 31.051 11.5532 30.9181 11.7119Z"
                stroke="#1E1E1C" stroke-miterlimit="10"/>
          </svg>
        </div>
        <div
            class="__symbol__choose__item"
            :class="{symbolChooseActive:symbolChoose === 'Огонь'}"
            @click="chooseSymbol('Огонь')"
        >
          <svg width="11" height="27" viewBox="0 0 17 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.8811 21.6328C15.0283 20.4611 16 18.8893 16 18.8893C16 18.8893 13.7622 18.2892 13.085 20.6326C12.4078 22.9759 14.4689 25.6621 12.2017 25.6336C9.81673 25.605 11.23 22.1757 12.8789 19.4895C14.7928 16.3745 11.3773 10.5734 8.55063 10.6019C8.28563 10.6019 12.025 16.6317 8.55063 16.6889C3.89845 16.7746 8.02063 11.1449 8.1973 8.80158C8.37396 6.45825 7.72619 2.14309 4.36956 1C4.36956 1 4.84066 4.22923 4.54622 5.22943C4.25178 6.22963 1.48403 10.8306 1.51347 12.5452C1.54292 15.4887 4.134 16.6317 4.28123 16.6889C4.42845 16.7461 1.42514 18.3464 1.51347 21.5756C1.60181 24.7763 5.63566 28.2055 5.60621 29.4058C5.54732 30.9775 3.25068 31.8063 2.33791 29.4058C1.95514 28.377 2.6618 27.2911 2.6618 27.2911C2.6618 27.2911 0.689038 27.5197 1.04237 30.5489C1.30737 32.8636 4.98788 33.4066 5.48844 34.8354C5.98899 36.2643 5.48844 37.6646 6.34232 37.9789C7.1962 38.2933 15.3522 35.0641 15.8822 29.9773C16.4122 24.862 14.7339 22.8044 14.8811 21.6328ZM4.929 22.2043C2.10236 21.9757 4.10456 18.9751 4.78178 18.0606C4.89955 17.9177 5.10566 17.8891 5.25288 18.032C5.57677 18.3464 6.10676 18.9179 6.37176 19.5466C6.99009 20.9469 7.10786 22.4043 4.929 22.2043ZM10.0523 33.3208C6.01843 33.4923 8.1973 26.8624 8.87451 25.0049C8.9334 24.8048 9.16896 24.8048 9.31618 24.9477C9.9345 25.5193 11.0534 26.7195 11.6717 28.1769C12.5845 30.4631 12.4961 33.2351 10.0523 33.3208Z"
                stroke="black" stroke-width="0.5" stroke-miterlimit="10"/>
          </svg>
        </div>
        <div
            class="__symbol__choose__item"
            :class="{symbolChooseActive:symbolChoose === 'Лезвие'}"
            @click="chooseSymbol('Лезвие')"
        >
          <svg width="38" height="18" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M53.0956 5.79058C52.6994 5.40826 52.1496 5.17419 51.5513 5.17419C50.6782 5.17419 49.8939 4.83089 49.3199 4.28472C48.7459 3.73856 48.3982 2.97393 48.3982 2.13128C48.3982 1.27302 47.6786 0.578613 46.7893 0.578613H7.57729C7.13262 0.578613 6.72837 0.750265 6.43731 1.03115C6.14625 1.31203 5.96838 1.70215 5.96838 2.13128C5.96838 2.97393 5.61264 3.73076 5.0467 4.28472C4.47267 4.83869 3.68843 5.17419 2.81525 5.17419C1.65102 5.17419 0.705078 6.08707 0.705078 7.2106V18.8673C0.705078 19.4291 0.939542 19.9362 1.31953 20.3029C1.69953 20.6696 2.22505 20.8959 2.80717 20.8959C3.68034 20.8959 4.46458 21.2392 5.03861 21.7854C5.61264 22.3393 5.9603 23.0962 5.9603 23.9388C5.9603 24.7971 6.67986 25.4915 7.5692 25.4915H46.7731C47.2178 25.4915 47.6221 25.3198 47.9131 25.039C48.2042 24.7581 48.382 24.3679 48.382 23.9388C48.382 23.0962 48.7378 22.3393 49.3037 21.7854C49.8778 21.2314 50.662 20.8959 51.5352 20.8959C52.7479 20.8959 53.7262 19.9518 53.7262 18.7815V7.28863C53.7343 6.70345 53.4917 6.17289 53.0956 5.79058ZM51.6403 15.4733L51.2522 17.104C51.1714 17.3458 50.9531 17.4395 50.7833 17.4473C50.6054 17.4551 50.3871 17.3771 50.282 17.1508L49.9182 15.6449C49.8616 15.4031 49.6352 15.2314 49.3765 15.2314H48.6246C48.4791 15.2314 48.3335 15.286 48.2284 15.3875L46.4174 17.1352C45.9808 17.5565 45.3744 17.7594 44.76 17.6891C44.1455 17.6189 43.6119 17.2912 43.2885 16.7763L42.4639 15.4811C42.3507 15.3016 42.1485 15.1924 41.9383 15.1924H41.243C41.0328 15.1924 40.8307 15.3016 40.7175 15.4811L39.7392 17.0181C39.5614 17.2912 39.246 17.4629 38.9146 17.4629H38.8337C38.4699 17.4629 38.1222 17.26 37.9605 16.9401L37.3865 15.7932C37.2248 15.4655 36.8772 15.2626 36.5052 15.2626H31.6381C31.4926 15.2626 31.347 15.325 31.25 15.4265C29.7139 16.9713 27.2076 16.9947 27.1833 16.9947C27.159 16.9947 26.5203 16.9869 25.6957 16.7607C24.871 16.5344 23.8604 16.0741 23.0923 15.1768C22.9872 15.0598 22.8498 14.9895 22.6961 14.9895H17.8694C17.4733 14.9895 17.1175 15.2236 16.9639 15.5747L16.3737 16.9479C16.212 17.3224 15.8724 17.5643 15.5005 17.5643H15.4197C15.0801 17.5643 14.7729 17.3692 14.595 17.0416L13.6167 15.247C13.5036 15.0442 13.3014 14.9193 13.0912 14.9193H12.3959C12.1857 14.9193 11.9755 15.0442 11.8704 15.247L11.0457 16.7607C10.7142 17.3692 10.1564 17.7594 9.52576 17.8296C8.92747 17.892 8.34536 17.6579 7.91686 17.182L6.10583 15.1456C6.00072 15.0285 5.85519 14.9661 5.70966 14.9661H4.95776C4.69904 14.9661 4.47267 15.1612 4.41607 15.4421L4.05225 17.1898C3.96331 17.4161 3.77736 17.5565 3.55907 17.5487C3.3812 17.5409 3.1629 17.4317 3.08205 17.143L2.68589 15.3875C2.33824 13.8504 2.34632 12.2587 2.71823 10.7295L3.0012 9.5357C3.08205 9.29383 3.28418 9.14558 3.5429 9.12998C3.80161 9.11437 4.01991 9.25482 4.12501 9.48108L4.48884 10.9947C4.53735 11.2054 4.73138 11.3458 4.94968 11.3458H5.70158C5.83094 11.3458 5.94413 11.299 6.03306 11.2132L7.84409 9.46548C8.29685 9.02855 8.92747 8.81788 9.56618 8.88811C10.2049 8.95833 10.7628 9.30943 11.1023 9.83219L11.927 11.1274C12.024 11.2834 12.2019 11.3771 12.3878 11.3771H13.0831C13.2691 11.3771 13.447 11.2834 13.544 11.1274L14.5223 9.59032C14.7082 9.29383 15.0559 9.10657 15.4116 9.10657H15.4925C15.8886 9.10657 16.2605 9.33284 16.4384 9.67614L16.9882 10.7763C17.1499 11.104 17.4975 11.3068 17.8694 11.3068H22.6881C22.8093 11.3068 22.9306 11.26 23.0195 11.1664C24.5719 9.59812 27.1267 9.58251 27.1671 9.58251V9.62153V9.59032C27.2318 9.59032 29.7462 9.60592 31.2905 11.4239C31.3794 11.5253 31.5007 11.5799 31.6219 11.5799H36.4001C36.7963 11.5799 37.152 11.3458 37.3057 10.9947L37.8797 9.66834C38.0576 9.26262 38.4214 9.00514 38.8256 9.00514H38.9065C39.2703 9.00514 39.6099 9.22361 39.8039 9.56691L40.7822 11.3614C40.8792 11.5409 41.049 11.6501 41.243 11.6501H41.9383C42.1243 11.6501 42.2941 11.5409 42.3992 11.3614L43.2238 9.84779C43.5715 9.2158 44.1455 8.81008 44.8004 8.73986C45.423 8.66964 46.0374 8.91932 46.4821 9.41867L48.2931 11.4551C48.382 11.5565 48.5033 11.6111 48.6246 11.6111H49.3765C49.5948 11.6111 49.7888 11.4395 49.8373 11.1976L50.2012 9.44207C50.2982 9.17679 50.5246 9.02075 50.7752 9.02855C51.0339 9.03635 51.2441 9.22361 51.325 9.49669L51.6079 10.628C52.0122 12.2197 52.0203 13.8738 51.6403 15.4733Z"
                stroke="black" stroke-width="0.5" stroke-miterlimit="10"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="__choose-name">
      <div class="__choose-name__input">
        <input
            type="text"
            class="__metal__input__item"
            placeholder="Введите имя или инициалы которые хотите добавить в изделие"
            @blur="fetchInitials"
            v-model="initials"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'constructor-variants',
  data: () => ({
    colorChoose: '',
    symbolChoose: '',
    initials: ''
  }),
  mounted() {
    this.$store.commit('SET_CHECK_OPTIONS', false);
  },
  methods: {
    chooseColor(val) {
      this.colorChoose = val;
      if (this.symbolChoose !== '') {
        let product_id = '';
        this.$store.state.goods.forEach(elem => {
          if (elem.product_code === this.$store.state.curentGood.product_code && elem.product_features[1].variant === this.colorChoose && elem.product_features[2].variant === this.symbolChoose) {
            product_id = elem.product_id;
          }
        });
        if (product_id !== '') {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/product_id.php',
            body: product_id
          });
          this.$router.push({name: 'Product', params: {id: product_id}})
          if(this.initials !== '') {
            this.$store.commit('SET_CHECK_OPTIONS', true);
            this.$store.commit('CHANGE_CURRENTGOOD',this.initials);
          }
        }
      }
    },
    chooseSymbol(val) {
      this.symbolChoose = val;
      if (this.colorChoose !== '') {
        let product_id = '';
        this.$store.state.goods.forEach(elem => {
          if (elem.product_code === this.$store.state.curentGood.product_code && elem.product_features[1].variant === this.colorChoose && elem.product_features[2].variant === this.symbolChoose) {
            product_id = elem.product_id;
          }
        });
        if (product_id !== '') {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/product_id.php',
            body: product_id
          });
          this.$router.push({name: 'Product', params: {id: product_id}})
          if(this.initials !== '') {
            this.$store.commit('SET_CHECK_OPTIONS', true);
            this.$store.commit('CHANGE_CURRENTGOOD',this.initials);
          }
        }
      }
    },
    fetchInitials() {
      if(this.initials !== '') {
        this.$store.commit('CHANGE_CURRENTGOOD',this.initials);
        if(this.colorChoose !== '' && this.symbolChoose !== '') {
          this.$store.commit('SET_CHECK_OPTIONS', true);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.constructor-variants {
  font-size: rem(20);
  font-weight: 300;
  margin-top: rem(46);
}

.__metal {
  margin-bottom: rem(15);
}

.__metal__text, .__symbol__text {
  margin-bottom: rem(15);
  font-size: rem(12);
}

.__metal__choose, .__symbol__choose {
  display: flex;
}

.__symbol__choose {
  align-items: center;
}

.__metal__choose__item {
  border: 1px solid black;
  font-size: rem(10);
  padding: rem(15);
  flex: 50%;
  text-align: center;
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
}

.__symbol__choose__item {
  border: 1px solid;
  flex: 1 1 33.333%;
  text-align: center;
  cursor: pointer;

  &:first-child {
    padding: rem(7.5);
  }

  &:nth-child(2) {
    padding: rem(5);
    border-right: none;
    border-left: none;
  }

  &:last-child {
    padding: rem(9)
  }
}

.__choose-name {
  margin-top: rem(28);
}

.__metal__input__item {
  width: 100%;
  height: rem(47);
  border-top: 1px solid black;
  outline: none;
  font-size: rem(10);
  padding: 0 rem(10);
  box-sizing: border-box;
  text-align: center;

  &::placeholder {
    font-size: rem(10);
    color: #1f82de;
    text-align: center;
  }
}

.colorChooseActive {
  color: white;
  background-color: #1f82de;
}

.symbolChooseActive {
  svg path {
    stroke: white;
  }

  background-color: #1f82de;
}
</style>
