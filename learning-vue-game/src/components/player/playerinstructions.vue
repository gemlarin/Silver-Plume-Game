<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hline">
                        <h1>How to Play</h1>
                        <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    </div>
                    <hr>
                        <div class="row">
                            <div class="col-12">
                                <h2>Game instructions:</h2>
                                <p>The Silver Plume is a game of choice and consequense, in the vein of the traditional "choose your path" books, with a twist -- your hero. The hero is a representation of you and your decisions will directly impact your hero, so make your choices wisely.</p>
                                <h3>Gameplay</h3>
                                <p>In The Silver Plume, you will embark on an epic quest with uncertain future. Your player may die, alot. Remember the choice that slipped your blood and be sure not to make them again.</p>
                                <p>To play, you will be reading the story in the right panel and making a selection between several possible actions presented in the section of the story. You are not limited to these decisions however - as your hero avatar has some skills that can be used outside of the main story choices to aid your quest.</p>
                                <div class="options-nav">
                                    <router-link to="/instructions2">
                                        <button type="button" class="btn btn-primary btn-lg btn-block">Instructions Continued.
                                        </button>
                                    </router-link>
                                    <router-link to="/intro_1">
                                        <button type="button" class="btn btn-primary btn-lg btn-block">Skip and Start Game
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
    name: 'playerinstructions',
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