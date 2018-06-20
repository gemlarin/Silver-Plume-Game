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
                                <br>
                           <br>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-6">
                                <label>Hero's Name</label>
                                <input v-model="playername" placeholder="Sir Dante">
                                <!--<p>Your name is: {{ this.$store.state.name }}</p>-->
                            </div>
                            <div class="col-6">
                                <label>Hero's Diety</label>
                                <input v-model="playerdiety" placeholder="Rah'tesh">
                                <!--<p>Your name is: {{ this.$store.state.name }}</p>-->
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

    }
  },
  computed: {
        playername: {
            get () {
                return this.$store.state.name
            },
            set (value) {
                this.$store.commit('updateName', value)
            }
        },
        playerdiety: {
            get () {
                return this.$store.state.guardian
            },
            set (value) {
                this.$store.commit('updateDiety', value)
            }
        }
    },
    methods:{
      
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
  font-family: 'Sura', serif;
  width:100%;
  height:40px;
  font-size:18px;
  padding-left:10px;
  color:#333;
  border-radius:3px;
  border:1px solid #dddddd;
}  

.hline{
    display:relative;
}

.field-wrap{
    margin-top:30px;
}
</style>