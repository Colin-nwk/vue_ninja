new Vue({
  el: "#app",
  data: {
    title: "Becoming a view ninja",
    showName: false,
    showAge: true,
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    },
  },
});
