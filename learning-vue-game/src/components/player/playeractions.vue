<template>
    <div class="wrap--playeractions">
       <div class="row flex--buttons">
                <!-- Attack button  -->
               <button 
                class="button--style-alt" 
                @click="updateHealth"
                :disabled="!this.$store.state.attackEnabled || this.$route.path == '*' || this.$store.state.disableAllInputs"
                :class="{ disabled: !this.$store.state.attackEnabled || this.$route.path == '*' || this.$store.state.disableAllInputs }"
                >
                Attack
                </button>
               <!-- Magic button -->
               <button 
                class="button--style-alt"
                :disabled="this.$route.path == '' || this.$route.path == '/' || this.$store.state.disableAllInputs"
                :class="{ disabled: this.$route.path == '' || this.$route.path == '/' || this.$store.state.disableAllInputs }"
                >
                Magic
               </button>
                <!-- Search button -->
               <button 
                class="button--style-alt" 
                @click="searchRoom"
                :disabled="!this.$store.state.searchEnabled || this.$route.path == '/inventory' || this.$store.state.disableAllInputs"
                :class="{ disabled: !this.$store.state.searchEnabled ||this.$route.path == '/inventory' || this.$store.state.disableAllInputs }">
                Search
               </button>
               <!-- Eat button -->
               <button class="button--style-alt" 
               @click="eatFood"
               :disabled="this.$route.path == '' || this.$route.path == '/' || this.$store.state.disableAllInputs || this.$store.state.food  === 0 ||this.$store.state.currentHealth === 20"
                :class="{ disabled: this.$route.path == '' || this.$route.path == '/' || this.$store.state.disableAllInputs || this.$store.state.food === 0 ||this.$store.state.currentHealth === 20
                }"
               >
               Eat
               </button>
                <!-- Pray button -->
                <!-- disabled whnever $store returns praydisabled or when /inventory view is loaded -->
                <button
                    @click="isPrayDisabled"
                    :disabled="this.$store.state.praydisabled || this.$route.path == '/inventory' || this.$store.state.currentHealth == 20 || this.$store.state.disableAllInputs" 
                    :class="{ disabled: this.$store.state.praydisabled || this.$route.path == '/inventory' || this.$store.state.disableAllInputs }"
                    class="button--style-alt">
                    Pray
                </button>
                <!-- Bag / Inventory button -->
                <router-link to="/inventory">
                    <button 
                    :disabled="this.$route.path == '/inventory' || this.$store.state.disableAllInputs"
                    :class="{ disabled: this.$route.path == '/inventory' || this.$store.state.disableAllInputs}"
                    class="button--style-alt routerlink">
                    Bag
                    </button>
                </router-link>
       </div>
    </div>
</template>

<script>
import { lifeBus } from './../../main.js';
import { searchBus } from './../../main.js';
import { healBus } from './../../main.js';

export default {
  name: 'playeractions',
  props:['playerbonuses', 'playerstatus'],
  data () {
    return {
      healFor:0,
      maxHeal:0,
      playerHitDamage:0;
    }
  },
    methods:{
        updateStatus(stat){
           this.$store.commit('updateStatus', stat)
       },
        eatFood() {
            //when passing isFood:true to the lifeBus, the result is healing instead of harm
          
            if(this.$store.state.activestatus == 'poisoned'){
                this.updateStatus('normal');
                var message = "Eating has cured your poison, but no health was gained";
                this.$store.commit('updateTurnsLog', {message, isHeal:true})
                //update the message update panel
                //this.updateMessage(message);
            }else{
                if(this.$store.state.food > 0 ){
                    lifeBus.$emit('newDamage', {'damage': 5, 'isFood': true});
                }
                this.$store.commit('eatFood', {eat:true});
                var message = "The food was nourishing. You have gained 5 health!";
                this.$store.commit('updateTurnsLog', {message, isHeal:true})
            }
            

            
        },
        searchRoom() {
            //emitted to the individual dialogue page views
            searchBus.$emit('searchConducted', {'isSearched': true});
        },
        updateHealth() {
            this.monsterAttack();
            
            //evaluate the remaining monster damage
            this.$store.status.monsterRemainingHealth = this.$store.status.monsterRemainingHealth - this.playerHitDamage;

            if(){
                this.$store.status.monsterRemainingHealth <=0{
                    //this guy is toast Batman!
                }
            }

            //let the user know how the enemy looks after each blow
            let currentMonsterHealth = this.$store.status.monsterRemainingHealth;
            let levelFour = this.$store.status.monster.monsterHealth;
            let levelThree = this.$store.status.monster.monsterHealth * .75;
            let levelTwo = this.$store.status.monster.monsterHealth * .5;
            let levelOne = this.$store.status.monster.monsterHealth * .25;
            let levelZero = 0;
            switch(currentMonsterHealth) {
                case levelFour:
                    code block
                    break;
                case n:
                    code block
                    break;
                default:
                    code block
            }

            
            //update the message update panel
            //this.updateMessage(message);

            //Generate the player attack damage and send it down the pipe
            //generate message for updater
            //
            //if you kill the monster, add the current room to the roomsWithMonstersSlain
        },
        //Generate monster attack damage and send it down the pipelines
        monsterAttack(){
            this.$store.state.monster.monsterHitDamage = Math.floor(Math.random() * this.$store.state.maxMonsterHitDamage) + 1;
            //emitted to bus. listeners: playerhealth.vue
            //sending isFood:true will heal. isFood:false causes damage
            lifeBus.$emit('newDamage', {'damage':                   this.$store.state.monster.monsterHitDamage, 'isFood': false});//just send the calculated monster damage down the bus. playerhealth.vue will handle armor and bonus adjustments to damage
            //create the monster hits player turns log message
            var message =  this.$store.state.monster.monstername + " hits " + this.$store.state.name + " for " + this.$store.state.adjustedDamage + " damage!";
            this.$store.commit('updateTurnsLog', {message, isPlayer:false});

        },
        //look at you! You killed the lil bugger! Now do stuff!
        monsterDead(){
            var message =  this.$store.state.monster.monstername;
            this.$store.commit('updateTurnsLog', {message, isPlayer:false});
        },
        //toggle praydisabled on the pray button
        isPrayDisabled(){
            //lock the button for XXXXXX ms.
            this.startPrayTimer();
            //get your max health value then run number generator. 
            this.maxHeal = this.$store.state.maxhealth -
                this.$store.state.currentHealth;
            //constrain this.maxHeal to $state maxHealOnPray or less    
            if(this.maxHeal > this.$store.state.maxHealOnPray)   {
                this.maxHeal = this.$store.state.maxHealOnPray;
            } 
            //get a randowm number between your max and min heal values
            this.healFor = Math.floor(Math.random() * this.maxHeal) + 3  
            //send off the healing amount to the playerhealth.vue component
            healBus.$emit('playerHeal', this.healFor);
            //update the status output display
            let message =  this.$store.state.guardian + " heard your prayer and has blessed you with " + this.healFor + " health. He will not answer again for awhile.";
            this.$store.commit('updateTurnsLog', {message, isPlayer:true, isHeal:true})
            //lock the prayer button on true.
            return this.$store.state.praydisabled = !this.$store.state.praydisabled;
        },
            //3600000 is the equal to 1 hour so we can disable the pray button for an hour between use
        startPrayTimer(){
            setTimeout(() => {
                this.$store.state.praydisabled = false;
            }, this.$store.state.prayerTimer)
        }
    }
}
</script>
<style scoped>

.col-6{
    text-align: center;
}

.wrap--playeractions{
    background-color:#313131;
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
    border: solid 2px#313131;
    background: #353535;
    color: #5a5a5a;
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