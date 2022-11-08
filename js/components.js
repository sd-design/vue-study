const app = Vue.createApp({
    template: "#app"
 });

 app.component('greeting-item', {
    template: "#greeting-item",
    data(){
        return {
            title: "I'm a component"
        }
    },
    methods: {
        changeTitle(){
            this.title = "Changed title"
        }
    }
 })

 app.mount("#root");