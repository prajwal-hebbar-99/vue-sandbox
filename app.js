const vue = Vue.createApp({
  data: function () {
    return {
      count: 0,
      name: "",
      fullName: "",
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
    displayFullName: function (event, lastName) {
      this.fullName = event.target.value + " " + lastName;
    },
  },
});

vue.mount("#user-goal");
