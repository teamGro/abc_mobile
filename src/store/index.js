import { createStore } from 'vuex';

export default createStore({
  state: {
    currentQuestionId: 1,
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
        additionalText: 'Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.',
      },
      {
        id: 3,
        question: 'Укажите свою дату рождения:',
        answers: ['Далее'],
        type: 'date',
        additionalText: 'Уже совсем скоро Вы узнаете много интересного о своем будущем!',
      },
      {
        id: 4,
        question: 'Снятся ли Вам умершие люди?',
        answers: ['Да', 'Нет', 'Иногда'],
        type: 'normal',
        additionalText: 'Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!',
      },
      {
        id: 5,
        question: 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?',
        answers: ['Да', ' Затрудняюсь ответить'],
        type: 'depend',
        texts: {
          young: 'По вам скучает очень близкий человек, которого больше нет в мире живых.',
          middle: 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.',
          old: 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.',
        },
      },
    ],
    answers: [],
    userAge: null,
    experts: [
      {
        id: 1,
        url: '/img/face1.jpg',
        alt: 'Эксперт №1',
      },
      {
        id: 2,
        url: '/img/face2.jpg',
        alt: 'Эксперт №2',
      },
      {
        id: 3,
        url: '/img/face3.jpg',
        alt: 'Эксперт №3',
      },
    ],
    serverResponse: null,
  },
  mutations: {
    answers(state, { questionId, answer }) {
      state.answers.push({ questionId, answer });
    },
    updateCurrentQuestionId(state, questionId) {
      state.currentQuestionId = questionId;
    },
    userAge(state, userAge) {
      state.userAge = userAge;
    },
    loadData(state, data) {
      state.serverResponse = data;
    },
  },
  getters: {
    currentQuestion(state) {
      const question = state.questions.find((item) => (item.id === state.currentQuestionId));
      if (question.type === 'depend') {
        const age = state.userAge;
        if (age < 36) {
          question.additionalText = question.texts.young;
        } else if (age < 46) {
          question.additionalText = question.texts.middle;
        } else {
          question.additionalText = question.texts.old;
        }
      }
      return question;
    },
    allQuestions(state) {
      return state.questions.length;
    },
  },
});
