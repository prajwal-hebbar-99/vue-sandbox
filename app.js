const vue = Vue.createApp({
  data: function () {
    return {
      count: 0,
      name: "",
      fullName: "",
      confirmedName: "",
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
    submitForm: function (event) {
      alert("Form Submitted");
    },
    confirmInput: function () {
      this.confirmedName = this.fullName;
    },
  },
});

vue.mount("#user-goal");
