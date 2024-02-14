// store/index.js
export const state = () => ({
    quizzes: {
      web: { url: "https://formnx.com/f/21ag52?iframe=true", label: "Web Quiz" },
      india: { url: "https://formnx.com/f/21ag52?iframe=true", label: "India Quiz" },
    },
  });
  
  export const mutations = {
    updateQuizzes(state, newQuizzes) {
      state.quizzes = newQuizzes;
    },
  };
  