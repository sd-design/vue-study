const app = Vue.createApp({
template: "#apple",
data(){
    return {
        title: "Shabbat Shalom!",
        href: "https://sd-design.tk/"
    }
},
methods:{
    handleChange(e){
       this.title = e.target.value
    }
}
})

app.mount("#root")