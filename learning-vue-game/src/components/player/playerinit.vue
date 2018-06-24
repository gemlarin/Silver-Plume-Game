<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Create Your Hero</h1>
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    <hr>
                    <div class="field-wrap">
                        <div class="row">
                            <div class="col-12">
                                <p>Before we set out on our fantastic quest, it would probably be a good idea to give your hero a name and a guardian. Your guardian will provide healing comfort once per day, but it may come at a cost, so be careful!</p>
                                <p class="text--mod-small"><strong>By decree of the king, names must not contain numbers, nor special characters.</strong> </p>
                                <br>
                           <br>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-6">
                                <label>Hero's Name</label>
                                <input 
                                v-model="playername" 
                                :maxlength="maxnamelength"
                                placeholder="Hero's Name">
                                <span v-if="this.namelength == this.maxnamelength">max</span>
                            </div>
                            <div class="col-6">
                                <label>Hero's Diety</label>
                                <input 
                                :maxlength="maxdietyamelength"
                                v-model="playerdiety" 
                                placeholder="Hero's Diety">
                                <span v-if="this.dietynamelength == maxdietyamelength">max</span>
                            </div>
                        </div>
                    </div>
                        <div class="options-nav">
                            <router-link to="/instructions">
                                <button type="button" class="btn btn-primary btn-lg btn-block btn--alt-red">Save Hero and Continue
                                </button>
                            </router-link>
                        </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>

export default {
  name: 'playerinit',
  data () {
    return {
        namelength:'',
        dietynamelength:'',
        maxnamelength:10,
        maxdietyamelength:12,
        playermask:''
    }
  },
  computed: {
        
        playername: {
            get () {
                this.namelength = this.$store.state.name.length
                return this.$store.state.name
            },
            set (value) {
                //sanitze to alpha only
                let pm = /[^A-Z]/gi
                this.$set(this, 'playermask', value.replace(pm, ''))
                this.$store.commit('updateName', this.playermask); 
            }
        },
        playerdiety: {
            get () {
                this.dietynamelength = this.$store.state.guardian.length
                return this.$store.state.guardian
            },
            set (value) {
                let pd = /[^A-Z]/gi
                this.$set(this, 'playermask', value.replace(pd, ''))
                this.$store.commit('updateDiety', value)
            }
        }
    },
    created(){
        this.$store.state.disableAllInputs = true;
    },
    beforeRouteLeave (to, from, next) {
        this.$store.state.disableAllInputs = false;
        var message =  "Hello... " + this.$store.state.name + "I am your scrying tablet!" + this.$store.state.guardian + " will communicate important status messages to you here."
        this.$store.commit('updateTurnsLog', {message, isPlayer:true});
        //this.$store.state.roomsVisited.push(this.roomID);
        next()
    },
    methods:{
    
      updatemax(){
        alert("kill")
     }
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
    outline: none;
}
img{
    height:50px;
    width:auto;
    position:absolute;
    right:20px;
    top:-10px;
    opacity:.3;
}
p{
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
}
p.text--mod-small{
    font-size:1.4em;
}
ul li {
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
    font-size:1.7em;
}
h1{
    color:#ab4646;
}
label{
  font-family: 'Kurale', serif;
  font-size:15px;
  color:#ab4646;
}

input{
  font-family: 'Zilla Slab', serif;
  width:100%;
  height:40px;
  font-size:18px;
  padding-left:10px;
  color:#333;
  border-radius:3px;
  border:1px solid #dddddd;
  position:relative;
}  

span{
    float:right;
    top:-29px;
    margin-bottom:-29px;
    margin-right:15px;
    position:relative;
    color:#ab4646;
    font-size:12px;
}

.hline{
    display:relative;
}

.field-wrap{
    margin-top:30px;
}
</style>