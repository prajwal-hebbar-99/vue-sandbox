const vue = Vue.createApp({
  data: function () {
    return {
      count: 0,
      name: "",
    };
  },
  methods: {
    add: function (num) {
      this.count += num;
    },
    subtract: function (num) {
      this.count -= num;
    },
    displayName: function (event) {
      this.name = event.target.value;
    },
    resetName: function () {
      this.name = "";
    },
  },
});

vue.mount("#user-goal");
