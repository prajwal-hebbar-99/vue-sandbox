const vue = Vue.createApp({
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    subtract: function () {
      this.count--;
    },
  },
});

vue.mount("#user-goal");
