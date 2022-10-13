const app = Vue.createApp({
template: "#apple",
data(){
    return {
        title: "Shabbat Shalom!",
        title2: "Hello world!",
        href: "https://sd-design.tk/",
        link2: "https://media-church.ru/",
        consoleString: "",
        question: '',
        answer: 'Questions usually contain a question mark. ;-)'
    }
},
watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
        
      if (newQuestion.includes('?')) {
        console.log(oldQuestion + ' | ' + newQuestion)
        this.getAnswer()
      }
      else{
        console.log(oldQuestion + ' | ' + newQuestion)
      }
    }
  },
methods:{
    handleChange(e){
       this.title = e.target.value
    },
    handleConsole(stringParam, event){
        this.consoleString = stringParam
        console.log(event)
    },
    changeTitle2(){
        this.title2 = "!dlrow olleH"
    },
    async getAnswer() {
        this.answer = 'Thinking...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          this.answer = (await res.json()).answer
        } catch (error) {
          this.answer = 'Error! Could not reach the API. ' + error
        }
      }
},
computed:{
    reversedTitle(){
        console.log("computed")
        return this.title2.split("").reverse().join("")
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
        //console.log(scrollPos)
    } else {
        btnUp.classList.remove('is_shown')
        //console.log(scrollPos)
    }
    this.oldScroll = this.scrollY;
  })

