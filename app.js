const vue = Vue.createApp({
  data: function () {
    return {
      goalA: "Learn Vue!",
      goalB: "Learn React!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    randomGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});

vue.mount("#user-goal");
