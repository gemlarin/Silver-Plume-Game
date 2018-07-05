<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>How to Play</h1>
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    <hr>
                        <div class="row">
                            <div class="col-12">
                                <h2>Game instructions:</h2>
                                
                                <h3>The Interface</h3>
                                <ul>
                                    <li>Status: Your heros current physical status. Bonuses and banes applied are listed below the status.</li>
                                    <li>Armor Rating: Your combined armor rating includes all armor ratings plus any bonuses or banes applied to your player status.</li>
                                    <li>Attack Damage: Your combined attack rating includes your weapon rating plus any bonuses or banes applied to your player status. This is represented as a range of MIN - MAX attack.</li>
                                </ul>
                                 <div id="options-nav">
                                    <router-link to="/intro_1">
                                        <button type="button" class="btn btn-primary btn-lg btn-block">Adventure Awaits!
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>

export default {
    name: 'playerinstructions2',
    data () {
        return {

        }
    },
    created(){
        this.$store.state.disableAllInputs = true;
    },
    beforeRouteLeave (to, from, next) {
        this.$store.state.disableAllInputs = false;
        //this.$store.state.roomsVisited.push(this.roomID);
        next();
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