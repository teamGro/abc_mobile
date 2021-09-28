<template>
  <div class="question" :class="{'question_first': currentQuestion.id === 1}">
    <p class="question__text">
      {{ currentQuestion.question }}
    </p>

    <div class="question__answers" v-if="currentQuestion.type === 'normal'">
      <button
        class="question__answer-btn"
        v-for="(answer, i) in currentQuestion.answers"
        :key="i"
        @click="saveAnswer(answer)">
        {{ answer }}
      </button>
    </div>

    <p class="question__num">
      Вопрос {{ currentQuestion.id }}-{{ allQuestions }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentQuestion', 'allQuestions']),
    // ...mapMutations(['answers']),
  },
  methods: {
    saveAnswer(answer) {
      this.$store.commit('answers', { questionId: this.currentQuestion.id, answer });
    },
  },
};
</script>

<style lang="less">
  .question {
    border: 1px solid #DEDEDE;
    border-radius: 3px;
    padding: 28px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      margin-bottom: 27px;

      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
    }

    &__answers {
      display: flex;
      flex-wrap: wrap;
    }

    &__answer-btn {
      border: none;
      min-width: 113px;
      padding: 11.5px 0;
      margin-bottom: 32px;

      font-size: 16px;
      line-height: 18px;
      color: #fff;

      background-color: #1A73EB;
      border-radius: 3px;

      &:nth-child(2n) {
        margin-left: 15px;
      }
    }

    &__num {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #9D9D9D;
    }
  }
</style>
