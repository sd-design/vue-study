const app = Vue.createApp({
template: "#apple",
data(){
    return {
        title: "Shabbat Shalom!",
        href: "https://sd-design.tk/",
        link2: "https://media-church.ru/",
        consoleString: ""
    }
},
methods:{
    handleChange(e){
       this.title = e.target.value
    },
    handleConsole(stringParam, event){
        this.consoleString = stringParam
        console.log(event)
    }
}
})

app.mount("#root")