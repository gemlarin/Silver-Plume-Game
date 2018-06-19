<template>
<div class="wrap">
   <img class="teardrop" :src="require('./../../assets/player-raindrop-life.svg')" />
  
   <div class="bar">
      <label>{{ this.$store.state.currentHealth }} / {{ basehealth }}</label>
      <div class="bar--bottom"><div class="bar--top" v-bind:style="{ width: this.$store.state.currentHealth * 5  + 'px' }"></div></div>
    </div>
    
</div>
 
</template>

<script>
import { lifeBus } from './../../main.js';
import { healBus } from './../../main.js';
export default {
  name: 'playerhealth',
  data () {
    return {

    }
  },  
  props:['playerbonuses', 'playerstatus'],
  computed:{
    //determine if basehealth mod exists, if not, set to maxhealth
    basehealth: function(){
       if(this.$store.state.holdstat.effects.basehealth){
         var temphealth = this.$store.state.holdstat.effects.basehealth
         if(this.$store.state.currentHealth >= temphealth){
            this.$store.state.currentHealth = temphealth;
         }
         return temphealth
       }
       else{
         return this.$store.state.maxhealth;
       }
    }
  },
  created(){
    //need to set the base stats on load
    lifeBus.$on('newDamage', (data) =>{
      this.$store.state.newDamage = data;
      this.$store.state.currentHealth = this.$store.state.currentHealth - (this.$store.state.newDamage - this.playerstatus.effects.armor) + this.playerbonuses;
      if(this.$store.state.currentHealth > this.$store.state.maxhealth){
        this.$store.state.currentHealth = this.$store.state.maxhealth;
      }
      if(this.$store.state.currentHealth < 0){
        this.$store.state.currentHealth = 0;
      }
    }),
    healBus.$on('playerHeal', (data) =>{
      this.$store.state.currentHealth = this.$store.state.currentHealth + data;
      if(this.$store.state.currentHealth > this.playerstatus.effects.basehealth){
        this.$store.state.currentHealth = this.playerstatus.effects.basehealth;
      }
    })
  },
}
</script>
<style scoped>

  .wrap{
    text-align:left;
    margin-top:5px;
    margin-left:10%;
    height:40px;
  }
  .bar{
    position:relative;
    margin:30px 0 20px 0;
    display:inline-block;
  }
  .bar--top{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width:100px;
    height:5px;
    background-color:red;
    position:absolute;
    top:0;
    left:0;
    z-index:10;
  }
  .bar--bottom{
    border-radius:4px;
    width:100px;
    height:5px;
    background-color:#f5f5f5;
    position:absolute;
    top:0;
    left:0;
    z-index:5;
    overflow:hidden;
  }
  label{
    display:inline-block;
    position: absolute;
    top: -20px;
    font-size:14px;
    width:50px;
  }
  .teardrop{
    height:25px;
    width:auto;
    text-align:left;
    display:inline-block;
    margin-top:-40px;
    margin-right:3px;
  }
</style>

