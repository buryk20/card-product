<template>
<div>
              <div class="card-prod-info-deliv">
                <div class="card-prod-info-deliv__title-wrp">
                  <h3 class="card-prod-info-deliv__title">Доставка</h3>
                </div>
                <div>
                  <div class="card-prod-info-deliv__btn-wrp">
                    <div class="card-prod-info-deliv__line"></div> 
                    <button @click="active = !active" class="card-prod-info-deliv__btn-od " >Одесса</button>
                    <button class="card-prod-info-deliv__btn-ua">По Украине</button>
                  </div>
                </div>
                <div class="card-prod-info-deliv__wrp-condi">
                  <div class="card-prod-info-deliv__wrp-od-pos" :class="{ active }">
                    <div class="card-prod-info-deliv__wrp-condi-od">
                      <div class="card-prod-info-deliv__wrp-text-od">
                        <strong>Самовывоз</strong> <span class="card-prod-info-deliv__text-gray"> завтра </span><span class="card-prod-info-deliv__text-green">Бесплатно</span>
                      </div>
                      <div>
                        <strong>Курьер</strong><span class="card-prod-info-deliv__text-gray"> завтра с 10:00 до 17:00 </span><span class="card-prod-info-deliv__text-green">Бесплатно</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-prod-info-deliv__wrp-ua-pos">
                    <div >
                      <div class="card-prod-info-deliv__wrp-text-od">
                        <strong>Отделение “Новая Почта”</strong>
                        <span class="card-prod-info-deliv__text-gray"> отправим завтра </span><strong>от 56 грн</strong>
                      </div>
                      <div>
                        <strong>Отделение “УкрПочта”</strong>
                        <span class="card-prod-info-deliv__text-gray">  отправим завтра </span><span><strong>от 56 грн</strong></span>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div> 
</template>

<script>

export default ({
    name: 'delivery',
    data() {
        return {
            isActive: false
        }
    }
  })
</script>

<style lang="scss" scoped>
@import "scss/_main_variable_gv.scss";
@import "scss/main_card.scss";

.activ {
    opacity: 1;
}

</style>