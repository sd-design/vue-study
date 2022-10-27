const app = Vue.createApp({
    template: "#application",
    data(){
        return {
            arr: ['one', 'two', 'three'],
            team: [
                {id: 1, name: "Alex", salary: 15000},
                {id: 2, name: "Elon", salary: 150000},
                {id: 3, name: "Bill", salary: 177000},
                {id: 4, name: "John", salary: 210000},
                {id: 5,name: "Mickel", salary: 25000},
                {id: 6, name: "Louis", salary: 55000}
            ]

        }
    },
    computed: {
        topMembers(){
            return this.team.filter(member => member.salary > 100000);
        }
    }
})

app.mount("#root")