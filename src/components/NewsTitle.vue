<template>
  <div class="news__content">
    <div
        class="news__item"
        :class="{active:isVisible}"
        @click="is_visible"
    >
      <div class="__item-text">
        <div class="news-name">
          {{ news.name }}
        </div>
        <div v-if="$store.state.display_width >= 768" class="news-discription">
          {{ news.title }}
        </div>
      </div>
      <div class="news__open">
        <img
            v-if="!isVisible || $store.state.display_width >= 768"
            src="@/assets/img/svg/arrow_down.svg"
            alt="arrow down"
        />
        <img
            v-if="isVisible && $store.state.display_width < 768"
            src="@/assets/img/svg/arrow_down_white.svg"
            alt="arrow down"
        />
      </div>
    </div>
    <transition name="show">
      <div v-if="isVisible" class="news-container">
        <NewsItem1 v-if="news.id === '4'" />
        <NewsItem2 v-if="news.id === '3'" />
        <NewsItem3 v-if="news.id === '2'" />
        <NewsItem4 v-if="news.id === '1'" />
      </div>
    </transition>
  </div>
</template>
<script>
import NewsItem1 from "@/components/about/news_items/NewsItem1";
import NewsItem2 from "@/components/about/news_items/NewsItem2";
import NewsItem3 from "@/components/about/news_items/NewsItem3";
import NewsItem4 from "@/components/about/news_items/NewsItem4";

export default {
  name: 'news-title',
  data: function () {
    return {
      isVisible: false
    }
  },
  props: ['news'],
  components: {
    NewsItem1,
    NewsItem2,
    NewsItem3,
    NewsItem4
  },
  methods:{
    is_visible(){
      this.isVisible = !this.isVisible;
      this.$store.commit('news/SET_CLICKED',true);
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes newsShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.show-enter-active {
   animation: newsShow .5s linear;
 }
.show-leave-active {
  animation: newsShow .5s reverse linear;
}

.news-container, .__item-text {
  overflow: hidden;
}

.active {
  .news__open img {
    transform: rotate(180deg);
  }
}

.news__item {
  display: flex;
  justify-content: space-between;
  padding: rem(15) 0;
  border-bottom: 1px solid;
  cursor: pointer;
}

.__item-text {
  text-transform: uppercase;
  display: flex;
  width: 100%;
}

.news-name {
  flex: 1 1 25%;
}

.news-discription {
  justify-self: center;
  font-style: italic;
  flex: 1 1 75%;
}

.news-container {
  padding: rem(39) rem(32) rem(78);
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .news-container {
    padding: rem(39) rem(32) rem(78);
  }
  .__item-text {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .news__item {
    padding: calc(0.75rem + (15 - 12) * ((100vw - 64rem) / (1440 - 1024))) 0;
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .news-container {
    padding: rem(39) rem(32) rem(78);
  }
  .__item-text {
    font-size: calc(0.5625rem + (12 - 9) * ((100vw - 48rem) / (1024 - 768)));
  }
  .news__item {
    padding: calc(0.6rem + (12 - 9.6) * ((100vw - 48rem) / (1024 - 768))) 0;
  }
}
@media (max-width: em(767, 16)) {
  .active{
    border-bottom: none;
    background-color: #1F83DE;
    color: white;
    img{
      transform: rotate(180deg);
    }
  }
  .news__item{
    padding-left: rem(23);
    padding-right: rem(22);
  }
  .news-container{
    padding: 0;
  }
}
</style>
