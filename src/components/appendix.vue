


<template>
    <div class="appendix__wrp" style="background-image: url('/img/app-img-card.png')">
        <h3 class="appendix__title-text">
            Официальное приложение GreenVision GVSS
        </h3>
        <div>
            <div class="appendix__btns-wrp">
                <button class="appendix__btn-wrp">
                    <a class="appendix__btn-link" href="#">
                        <img src="/icon/Google-Play-logo.svg" alt="">
                        <div>
                            <p class="appendix__btn-text">Завантажуйте у</p>
                            <p class="appendix__btn-text-serve">Google Play</p>
                        </div>
                    </a>
                </button>
                <button class="appendix__btn-wrp">
                    <a class="appendix__btn-link" href="#">
                        <img src="/icon/Apple-logo.svg" alt="">
                        <div>
                            <p class="appendix__btn-text">Завантажуйте у</p>
                            <p class="appendix__btn-text-serve">App Store</p>
                        </div>
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>

/*Логика по которой должен отображаться этот компонент, 1 первая проверка на вывод блока, если есть хотя бы одна ссылка, на одно из приложений, google или apple? выводим блок, вторая проверка на каждую кнопку, соответственно, если нет ссылки на кнопке, то и кнопку не выводим, думаю такого не будет, но я бы перестраховался */

<script>
export default {
  name: "appendix"
};
</script>

<style lang="scss" src="../scss/main_card.scss" scoped>

</style>