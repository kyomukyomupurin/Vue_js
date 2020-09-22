new Vue({
    el: '#app',
    data() {
        return {
            text: 'Hello Vue.js'
        };
    },
    methods: {
        handleClick() {
            this.text = 'button pushed';
        }
    }
});