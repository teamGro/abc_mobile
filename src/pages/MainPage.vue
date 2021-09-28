<template>
  <start-header></start-header>

  <main class="main">
    <div class="container">
      <div class="main__top experts">
        <faces class="experts__list"></faces>
        <p class="experts__desc">
          Лучшие астрологи и экстрасенсы Румынии. <span>Точность прогноза: 97%</span>
        </p>
      </div>

      <p class="main__para">
        Многие не верят предсказаниям и мы решили доказать, - прогноз может изменить жизнь каждого!
      </p>

      <p class="main__para_red">
        Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.
      </p>
    </div>
  </main>

  <div class="container">
    <base-question></base-question>
  </div>
</template>

<script>
import StartHeader from '@/components/StartHeader.vue';
import Faces from '@/components/Faces.vue';
import BaseQuestion from '@/components/BaseQuestion.vue';

export default {
  components: { StartHeader, Faces, BaseQuestion },
  data() {
    return {
      currentQuestion: 1,
    };
  },
};
</script>
