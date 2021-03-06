<template>
  <div class="additional-text" v-if="currentQuestion.additionalText">
    {{ currentQuestion.additionalText }}
  </div>

  <div class="question" :class="{'question_first': currentQuestion.id === 1}">
    <p class="question__text">
      {{ currentQuestion.question }}
    </p>

     <div v-if="currentQuestion.type === 'date'">
      <base-date-select
        v-for="item, i in date"
        :key="i"
        :dateRange="item.quantity"
        :initialValue="item.initialValue"
        v-model:selectedValue="item.selected"
        v-model:isFilled="item.isFilled"
        v-model:isChecked="item.isChecked"
        class="date-select">
      </base-date-select>

       <button
        class="question__answer-btn question__answer-btn_date"
        v-for="(answer, i) in currentQuestion.answers"
        :key="i"
        @click="saveDateAnswer(answer)">
        {{ answer }}
      </button>
    </div>

    <div class="question__answers" v-else>
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
import BaseDateSelect from '@/components/BaseDateSelect.vue';
import months from '@/helpers/months';
import transformDate from '@/helpers/transformUserDate';
import getAge from '@/helpers/getAge';
import checkLastDayOfMonth from '@/helpers/checkLastDayOfMonth';

export default {
  components: { BaseDateSelect },
  data() {
    return {
      date: [
        {
          initialValue: 'День',
          selected: '',
          quantity: 31,
          isFilled: false,
          isChecked: false,
        },
        {
          initialValue: 'Месяц',
          selected: '',
          quantity: months,
          isFilled: false,
          isChecked: false,
        },
        {
          initialValue: 'Год',
          selected: '',
          quantity: [new Date().getFullYear() - 18, new Date().getFullYear() - 100],
          isFilled: false,
          isChecked: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['currentQuestion', 'allQuestions']),
  },
  methods: {
    saveAnswer(answer) {
      if (!this.$route.params.id || this.allQuestions > this.$route.params.id) {
        this.$store.commit('answers', answer);
        this.$router.push({ name: 'question', params: { id: this.currentQuestion.id + 1 } });
      } else {
        this.$router.push({ name: 'audioMesage' });
      }

      return false;
    },
    saveDateAnswer() {
      const isFieldsFilled = this.date.find((item) => item.isFilled === false);

      if (isFieldsFilled) {
        isFieldsFilled.isChecked = true;
        return false;
      }

      const userDate = checkLastDayOfMonth(
        this.date[2].selected,
        this.date[1].selected,
        this.date[0].selected,
      );

      if (!userDate.status) {
        this.date[0].quantity = userDate.lastDay;
        this.date[0].isFilled = false;
        this.date[0].isChecked = true;
        this.date[0].selected = '';
        return false;
      }

      const answer = transformDate(this.date.map((item) => (item.selected)));

      this.$store.commit('answers', answer);
      this.$store.commit('userAge', getAge(answer));

      if (this.allQuestions > this.$route.params.id) {
        this.$router.push({ name: 'question', params: { id: this.currentQuestion.id + 1 } });
      } else {
        this.$router.push({ name: 'audioMesage' });
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
      cursor: pointer;
      margin-bottom: 32px;

      font-size: 16px;
      line-height: 18px;
      color: #fff;
      white-space: normal;

      background-color: #1A73EB;
      border-radius: 3px;

      transition: opacity .2s linear;

      &:nth-child(2n + 1) {
        margin-right: 15px;
      }

      &_date {
        margin-top: 30px;
      }

      &:hover {
        opacity: .7;
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

  @media(min-width: 768px) {
    .additional-text {
      font-size: 18px;
      line-height: 25px;
    }

    .question {
      padding-left: 40px;
      padding-right: 40px;

      &__answer-btn {
        width: 200px;
        min-height: 60px;
        margin-bottom: 32px;

        font-size: 20px;

        &:nth-child(2n + 1) {
          margin-right: 25px;
        }
      }

      &__text {
        margin-bottom: 55px;
        font-size: 30px;
        line-height: 35px;
      }

      &__num {
        font-size: 18px;
      }
    }
  }
</style>
