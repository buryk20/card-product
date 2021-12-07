<template>
  <div class="reviews-page-top-card">
    <div class="overall-rating-card-prod">
      <p class="overall-rating-card-prod__title">Общий рейтинг</p>
      <div class="overall-rating-card-prod__wrp">
        <div>
          <p class="overall-rating-card-prod__num">5,0</p>
          <starReviews class="overall-rating-card-prod__star"></starReviews>
          <p class="overall-rating-card-prod__text">{{ numberStarsFive }} отзывов</p>
        </div>
        <div class="rating-scale">
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">5</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${averageFive * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
                <p class="rating-scale__num-style">{{ numberStarsFive }}</p>
          </div>
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">4</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${averageFour * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
                <p class="rating-scale__num-style">{{ numberStarsFour }}</p>
          </div>
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">3</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${averageThree * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
                <p class="rating-scale__num-style">{{ numberStarsThree }}</p>
          </div>
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">2</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${averageTwo * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
                <p class="rating-scale__num-style">{{ numberStarsTwo }}</p>
          </div>
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">1</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${numberStarsOne * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
              <p class="rating-scale__num-style">{{ averageOne }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews-slider-card-prod">
      <h4 class="reviews-slider-card-prod__title">Фото и видео покупателей</h4>
      <sliderRev :carousel_data="sliderItems"></sliderRev>
    </div>
  </div>
  <reviewsText></reviewsText>
  <div class="pop-up-reviews-card">
    <h4 class="pop-up-reviews-card__title">Написать отзыв</h4>
    <stars class="pop-up-reviews-card__star-wrp"></stars>
    <div>
      <form class="pop-up-reviews-card__wrp-bene" action="#">
        <label class="pop-up-reviews-card__lab" for="dignity">Достоинство</label>
        <input class="pop-up-reviews-card__inp-style" type="text">
        <label class="pop-up-reviews-card__lab" for="limitations">Недостатки</label>
        <input class="pop-up-reviews-card__inp-style" type="text">
        <label class="pop-up-reviews-card__lab" for="comments">Комментарий</label>
        <input class="pop-up-reviews-card__inp-comments" type="text">
      </form>
      <form class="pop-up-reviews-card__video-wrp" action="#">
        <div class="pop-up-reviews-card__video">
          <label class="pop-up-reviews-card__lab" for="video">Ссылка на видео с Youtube</label>
          <input class="pop-up-reviews-card__inp-style" type="url">
        </div>
        <input class="pop-up-reviews-card__video-btn" type="button" value="Добавить видео">
      </form>
      <div class="pop-up-reviews-card__photo">
        <div class="pop-up-reviews-card__photo-text-wrp">
          <p class="pop-up-reviews-card__photo-text">
            Перетащите файлы сюда или нажмите на кнопку. Добавляйте до 10 изображений в форматах .jpg, .gif, .png, размером файла до 5 МБ
          </p>
          <button class="pop-up-reviews-card__photo-btn">Выбрать файлы</button>
        </div>
        <div>
          <div class="pop-up-reviews-card__img-wrp">
            <img class="pop-up-reviews-card__img-del" src="/icon/icon-del-pop-up-card-prod.svg" alt="удалить">
            <img src="" alt="изображение товара">
          </div>
        </div>
      </div>
      <form action="#">
        <label class="pop-up-reviews-card__lab" for="dignity">Ваше имя и фамилия</label>
        <input class="pop-up-reviews-card__inp-style" type="text">
        <label class="pop-up-reviews-card__lab" for="limitations">Электронная почта</label>
        <input class="pop-up-reviews-card__inp-style" type="email">
      </form>
      <form action="#">
        <input type="checkbox" id="agreement">
        <label for="agreement">Уведомлять об ответах по электронной почте</label>
      </form>
      <div>
        <button>Отменить</button>
        <button>Оставить отзыв</button>
      </div>
      <div>
        <p>
          Чтобы ваш отзыв либо комментарий прошел модерацию и был опубликован, ознакомьтесь, пожалуйста, <span> с нашими правилами.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import starReviews from './starReviews.vue';
import sliderRev from './slider-reviews.vue';
import reviewsText from './reviews-text.vue';
import stars from './stars.vue';

export default {
  name: 'ratingReview',
  components: {
    starReviews,
    sliderRev,
    reviewsText,
    stars
  },
  data () {
    return {
      numberStarsFive: 15,
      numberStarsFour: 1,
      numberStarsThree: 3,
      numberStarsTwo: 5,
      numberStarsOne: 1,
      averageFive: 2,
      averageFour: 5,
      averageThree: 4,
      averageTwo: 2,
      averageOne: 0,
      numberOfReviews: 2,
      sliderItems: [
            { id: 1, name: 'img1', img: '1.png'},
            { id: 2, name: 'img2', img: '6626_2.png'},
            { id: 3, name: 'img2', img: '6626_3.png'},
            { id: 4, name: 'img2', img: '6626_4.png'},
            { id: 5, name: 'img2', img: '6626_5.png'},
            { id: 6, name: 'img2', img: '6626_4.png'}
          ]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" src="../scss/main_card.scss" scoped>


</style>

