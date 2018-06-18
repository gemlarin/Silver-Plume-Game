<template>
<div class="wrap">
   <img class="teardrop" :src="require('./../../assets/player-raindrop-mana.svg')" />
  
   <div class="bar">
      <label>{{ this.$store.state.currentMana }} / 20</label>
      
      <div class="bar--bottom"><div class="bar--top" v-bind:style="{ width: this.$store.state.currentMana * 5  + 'px' }"></div></div>
    </div>
    
</div>
 
</template>

<script>
import { manaBus } from './../../main.js';
export default {
  name: 'playermana',
  data () {
    return {
 
    }
  },  
  created(){
    manaBus.$on('usedMana', (data) =>{
        this.$store.state.usedMana = data;
        this.$store.state.currentMana = this.$store.state.currentMana - this.$store.state.usedMana;
        if(this.$store.state.currentMana > 20){
            this.$store.state.currentMana = 20;
        }
        if(this.$store.state.currentMana < 0){
            this.$store.state.currentMana = 0;
        }
    })
  },
}
</script>
<style scoped>

  .wrap{
    text-align: left;
    margin-top: 0;
    margin-left: 10%;
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
    background-color:#2283f0;
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
    overflow:hidden;
    top:0;
    left:0;
    z-index:5;
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

