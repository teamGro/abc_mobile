import { createStore } from 'vuex';

export default createStore({
  state: {
    currentQuestionNum: 0,
    questions: [
      {
        id: 1,
        question: 'Боитесь ли Вы умереть?',
        answers: ['Да', 'Нет'],
        type: 'normal',
      },
      {
        id: 2,
        question: 'Когда Вы чувствуете себя наиболее комфортно?',
        answers: ['Утро', 'День', 'Вечер', 'Ночь'],
        type: 'normal',
      },
    ],
    answers: [],
  },
  mutations: {
    answers(state, { questionId, answer }) {
      state.answers.push({ questionId, answer });
      state.currentQuestionNum += 1;
    },
  },
  getters: {
    currentQuestion(state) {
      return state.questions[state.currentQuestionNum];
    },
    allQuestions(state) {
      return state.questions.length;
    },
  },
  actions: {
  },
  modules: {
  },
});
