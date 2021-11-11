var app = new Vue({
    el: '#app',
    data: {
        nombre: "",
        link: "https://www.google.com.ar"
    },
    methods: {
        alerta() {
            alert('Esto es una ALERTA!')
        }
    }
  })