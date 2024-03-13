const vue = Vue.createApp({
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    add: function (num) {
      this.count += num;
    },
    subtract: function (num) {
      this.count -= num;
    },
  },
});

vue.mount("#user-goal");
