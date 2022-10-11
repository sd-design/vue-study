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

const showBtn = document.getElementById('showBtn')
const btnUp = document.getElementById('btnUp')

showBtn.addEventListener('click', ()=>{
btnUp.classList.toggle('is_shown');
})
btnUp.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
})

window.addEventListener('scroll', (e) => {    
    let scrollPos = this.scrollY
    
    if(scrollPos > 400 && this.oldScroll > this.scrollY) {
        btnUp.classList.add('is_shown')
        console.log(scrollPos)
    } else {
        btnUp.classList.remove('is_shown')
        console.log(scrollPos)
    }
    this.oldScroll = this.scrollY;
  })

