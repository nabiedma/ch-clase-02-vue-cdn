var app = new Vue({
    el: '#app',
    data: {
        nombre: "",
    },
    methods: {
        darVueltaNombre: function () {
            this.nombre = this.nombre.split('').reverse().join('')
        }
    }
  })