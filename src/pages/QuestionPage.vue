<template>
  <div class="container container_question">
    <div class="experts__wrapper">
      <faces :facesInCenter="facesInCenter"></faces>
    </div>
    <base-question></base-question>
  </div>
</template>

<script>
import Faces from '@/components/Faces.vue';
import BaseQuestion from '@/components/BaseQuestion.vue';

export default {
  components: { Faces, BaseQuestion },
  data() {
    return {
      facesInCenter: true,
    };
  },
  created() {
    if (this.$store.state.currentQuestionId !== this.$route.params.id) {
      this.$store.commit('updateCurrentQuestionId', +this.$route.params.id);
    }
  },
};
</script>

<style lang="less">
.container_question {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 15px;
  }

  .experts__wrapper {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
</style>
