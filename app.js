const vue = Vue.createApp({
  data: function () {
    return {
      goal: "Learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    randomGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Skip to Projects";
      } else {
        return "Learn from Basics";
      }
    },
  },
});

vue.mount("#user-goal");
