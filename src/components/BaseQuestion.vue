<template>
  <div class="additional-text" v-if="currentQuestionNormalized.additionalText">
    {{ currentQuestionNormalized.additionalText }}
  </div>

  <div class="question" :class="{'question_first': currentQuestionNormalized.id === 1}">
    <p class="question__text">
      {{ currentQuestionNormalized.question }}
    </p>

     <div v-if="currentQuestionNormalized.type === 'date'">
      <base-date-select
        v-for="item, i in date"
        :key="i"
        :dateRange="item.amount"
        :initialValue="item.initialValue"
        v-model:selectedValue="item.selected"
        v-model:isFilled="item.isFilled"
        v-model:isChecked="item.isChecked"
        class="date-select">
      </base-date-select>

       <button
        class="question__answer-btn question__answer-btn_date"
        v-for="(answer, i) in currentQuestionNormalized.answers"
        :key="i"
        @click="saveDateAnswer(answer)">
        {{ answer }}
      </button>
    </div>

    <div class="question__answers" v-else>
      <button
        class="question__answer-btn"
        v-for="(answer, i) in currentQuestionNormalized.answers"
        :key="i"
        @click="saveAnswer(answer)">
        {{ answer }}
      </button>
    </div>

    <p class="question__num">
      Вопрос {{ currentQuestionNormalized.id }}-{{ allQuestions }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseDateSelect from '@/components/BaseDateSelect.vue';
import months from '@/helpers/months';
import transformDate from '@/helpers/transformUserDate';
import getAge from '@/helpers/getAge';

export default {
  components: { BaseDateSelect },
  data() {
    return {
      date: [
        {
          initialValue: 'День',
          selected: '',
          amount: 31,
          isFilled: false,
          isChecked: false,
        },
        {
          initialValue: 'Месяц',
          selected: '',
          amount: months,
          isFilled: false,
          isChecked: false,
        },
        {
          initialValue: 'Год',
          selected: '',
          amount: [new Date().getFullYear() - 18, new Date().getFullYear() - 100],
          isFilled: false,
          isChecked: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['currentQuestion', 'allQuestions']),
    currentQuestionNormalized() {
      const question = this.currentQuestion[0];

      if (question.type === 'depend') {
        const age = this.$store.state.userAge;
        if (age < 36) {
          question.additionalText = question.additionalText[0].text;
        } else if (age < 46) {
          question.additionalText = question.additionalText[1].text;
        } else {
          question.additionalText = question.additionalText[2].text;
        }
      }

      return question;
    },
  },
  methods: {
    saveAnswer(answer) {
      this.$store.commit('answers', { questionId: this.currentQuestionNormalized.id, answer });
      this.$router.push({ name: 'question', params: { id: this.$store.state.currentQuestionId } });
    },
    saveDateAnswer() {
      const isFieldsFilled = this.date.find((item) => item.isFilled === false);

      if (isFieldsFilled) {
        isFieldsFilled.isChecked = true;
        return false;
      }

      const answer = transformDate(this.date.map((item) => (item.selected)));

      this.$store.commit('answers', { questionId: this.currentQuestionNormalized.id, answer });
      this.$store.commit('userAge', getAge(answer));

      if (this.allQuestions > this.$route.params.id) {
        this.$router.push({ name: 'question', params: { id: this.$store.state.currentQuestionId } });
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="less">
  .additional-text {
    margin: 15px 0 30px;
    text-align: center;
  }

  .question {
    border: 1px solid #DEDEDE;
    border-radius: 3px;
    padding: 28px 0 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

    &__text {
      margin-bottom: 27px;

      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
    }

    &__answers {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    &__answer-btn {
      border: none;
      width: 113px;
      min-height: 41px;
      // padding: 11.5px 8px;
      margin-bottom: 32px;

      font-size: 16px;
      line-height: 18px;
      color: #fff;
      white-space: normal;

      background-color: #1A73EB;
      border-radius: 3px;

      &:nth-child(2n + 1) {
        margin-right: 15px;
      }

      &_date {
        margin-top: 30px;
      }
    }

    &__num {
      margin-top: auto;

      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #9D9D9D;
    }
  }

  .date-select {
    &:not(:last-child) {
      margin-bottom: 13px;
    }
  }
</style>
