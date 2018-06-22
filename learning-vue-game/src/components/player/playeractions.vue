<template>
    <div class="wrap--playeractions">
       <div class="row flex--buttons">
       
               <button class="button--style-alt" @click="updateHealth"><div class="attack"></div>Attack</button>
               <button class="button--style-alt">Magic</button>

               <button class="button--style-alt" @click="searchRoom"
               
               >Search</button>
               <button class="button--style-alt" @click="eatFood">Eat</button>
                <button
                    @click="isPrayDisabled"
                    :disabled="this.$store.state.praydisabled" 
                    :class="{ disabled: this.$store.state.praydisabled }"
                    class="button--style-alt">
                    Pray
                </button>
                <router-link to="/inventory">
                    <button class="button--style-alt routerlink">Bag
                    </button>
                </router-link>
       </div>
    </div>
</template>

<script>
import { lifeBus } from './../../main.js';
import { searchBus } from './../../main.js';

export default {
  name: 'playeractions',
  props:['playerbonuses', 'playerstatus'],
  data () {
    return {
      
    }
  },
    methods:{
        eatFood() {
            lifeBus.$emit('newDamage', {'damage': 5, 'isFood': true});
        },
        searchRoom() {
            searchBus.$emit('searchConducted', {'isSearched': true});
        },
        updateHealth() {
            //temp: to be removed: randomize a damage value from monster hit
             this.$store.state.monster.monsterHitDamage = Math.floor(Math.random() * 6) + 1;
             //update the lifeBus listeners
             lifeBus.$emit('newDamage', {'damage': this.$store.state.monster.monsterHitDamage, 'isFood': false});
             //here we need to know the damage to apply to hero after armor and bonuses are factored in
             this.$store.state.adjustedDamage = this.$store.state.newDamage - (this.playerstatus.effects.armor + this.playerbonuses);
             //sometimes the adjustment is a negative value. This equates to 0 damage.
             if(this.$store.state.adjustedDamage < 0){
                 this.$store.state.adjustedDamage = 0;
             }
             console.log("monster damage:", this.$store.state.monster.monsterHitDamage)
             console.log('adjusted damage to hero:', this.$store.state.adjustedDamage);
             this.updateMessage();
             
             
        },
        updateMessage(){
            //we need to concatonate the status message before sending to the store
            var message =  this.$store.state.monster.monstername + " hits " + this.$store.state.name + " for " + this.$store.state.adjustedDamage + " damage!"
            this.$store.commit('updateTurnsLog', {message, isPlayer:true})
        },
        //toggle praydisabled on the pray button
        isPrayDisabled: function(){
            this.startPrayTimer();
            return this.$store.state.praydisabled = !this.$store.state.praydisabled;
        },
        //3600000 is the equal to 1 hour so we can disable the pray button for an hour between use
        startPrayTimer: function(){
            setTimeout(() => {
                this.$store.state.praydisabled = false;
            }, 3600000)
        }
    }
}
</script>
<style scoped>

.col-6{
    text-align: center;
}

.wrap--playeractions{
    background-color:#3f3e3f;
    margin-top:7px;
    padding:0 15px;
}

a,button, html [type="button"], [type="reset"], [type="submit"]{
      background-color: white;
      border-color: #333333;
      color: #828282;
      font-size: 1px;
      font-weight: 700;
      margin:0 0 10px 0;
      outline: none;
      margin-bottom:0;
      
          box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

a,button{
    display: block;
    text-decoration: none;
    background: #424242;
    color: #e0e0e0;
    font-weight: bold;
    width: 33.3333%;
    height: 50px;
    line-height: 30px;
    border-radius: 0;
    text-align: center;
    overflow: hidden;
    transition: .4s;
    outline: none;
    cursor: pointer;
    position:relative;
    text-shadow: 1px 1px #1b1b1b;
}

button.routerlink{
    width:100%;
}

a, .button--style-alt{
    font-size:17px;
  }

a:hover, button:hover{
    outline: none;
    background: #545454;
}

button:active{
background-color: #525252;
    border:transparent;
    outline: none;
    z-index:100;
    position:relative;
}


button:disabled, button.disabled{
    border: solid 2px rgb(56, 58, 55);
    background: #424242;
    color: #827d7d;
}


.flex--buttons{
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.attack{
    position:absolute;
    z-index:200;

}

img{
    height:20px;
    width:auto;
}
    
</style>