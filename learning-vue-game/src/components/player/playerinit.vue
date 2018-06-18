<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Create Player</h1>
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
                        <div class="row">
                            <div class="col-12">
                                <h2>Game instructions:</h2>
                                <p>The Silver Plume is a game of choice and consequense, in the vein of the traditional "choose your path" books, with a twist -- your hero. The hero is a representation of you and your decisions will directly impact your hero, so make your choices wisely.</p>
                                <h3>Gameplay</h3>
                                <p>In The Silver Plume, you will embark on an epic quest with uncertain future. Your player may die, alot. Remember the choice that slipped your blood and be sure not to make them again.</p>
                                <p>To play, you will be reading the story in the right panel and making a selection between several possible actions presented in the section of the story. You are not limited to these decisions however - as your hero avatar has some skills that can be used outside of the main story choices to aid your quest.</p>
                                <ul>
                                    <li>Name: This is the name you assigned your avatar at the beginning of gameplay.</li>
                                    <li>Guardian: Your guardian is your choice. Mostly your guardian simply watches over your progress lending advice and offering healing. Your guardian is usually quite busy, so don't expect assistance more than once every game day (1 hour cooldown)</li>
                                    <li>Status: Your heros surrent physical status. Bonuses and banes applied are listed below the status.</li>
                                    <li>Weapon: The weapon you are currently weilding. Its damage rating is listed next to the weapon name.</li>
                                    <li>Shield: The shield you are currently holding. Its armore rating is listed beside its name.</li>
                                    <li>Armor: The armor you are currently holding. Its armore rating is listed beside its name.</li>
                                    <li>Armor Rating: Your combined armor rating includes your shield and armor ratings plus any bonuses or banes applied ot your plaaer status.</li>
                                    <li>Attack Rating: Your combined attack rating includes your sword damage rating plus any bonuses or banes applied to your player status.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="options-nav">
                        <router-link to="/p_12">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Approach the mouth of the valley.
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
p{
    font-family: 'Sura', serif;
    color:#5f5f5f;
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

.field-wrap{
    margin-top:30px;
}
</style>