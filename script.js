const baseUrl = "https://restduathlon20220323111452.azurewebsites.net/api/duathlete"

Vue.createApp({
    data() {
        return {
            duathletes: [],
            singleDuathlete: null,
            bibToGet: null,
            deleteBib: 0,
            deleteMessage: "",
        }
    },
    methods: {
        getDuathletes(){
            this.getDuathletesHelper(baseUrl)
        },
        async getDuathletesHelper(url){
            try {
                const response = await axios.get(url)
                this.duathletes = await response.data
                console.log(this.duathletes)
            }
            catch(ex) {
                alert(ex.message)
            }
        },
        async getByBib(bib) {
            const url = baseUrl + "/" + bib
            try {
                const response = await axios.get(url)
                this.singleDuathlete = await response.data
                console.log(this.singleDuathlete)
            }
            catch (ex) {
                alert(ex.message)
            }
        },
        async deleteDuathlete(deleteBib) {
            const url = baseUrl + "/" + deleteBib
            try {
                const response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getDuathletes()
            }
            catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")