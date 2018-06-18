<template>
  <div id="app">
      <div class="row">
        <div class="col-md-5">
          <appPlayer v-show='isOpen'></appPlayer>
          <button class="btn btn-primary" @click="updateHealth">HIT</button>
          <button class="btn btn-primary" @click="updateMana">MANA</button>
          <button class="btn btn-primary" @click="updateHeal">HEAL</button>
          <button class="btn btn-primary" @click='toggle()'>Open/Close</button>
        </div>
        <div class="col-md-7">
          <appDialog></appDialog>
        </div>
      </div>
  </div>
</template>

<script>
import { lifeBus } from './main.js';
import { manaBus } from './main.js';
import { healBus } from './main.js';
import Player      from './components/player/Player'
import DialogBox   from './components/dialog/Dialogbox'


export default {
  name: 'app',
  image: require('./assets/player-knight.svg'),
  data () {
    return {
      isOpen:true,
      playerdamage:4,
      playermana:2,
      heal:5,
      message:"hi"
      
    }
  },
  components: {
    appPlayer: Player,
    appDialog: DialogBox,
  },
  methods:{
     toggle(){
        this.isOpen = !this.isOpen
      },
     updateHealth() {
       lifeBus.$emit('newDamage', this.playerdamage)
     },
     updateMana() {
       manaBus.$emit('usedMana', this.playermana)
     },
     updateHeal() {
       healBus.$emit('playerHeal', this.heal)
     }
  },
  computed:{
  
  },
  metaInfo: {
     meta: [
      { title: 'Kickbutt App'},
      { titleTemplate: '%s | My Awesome Webapp'},
      { charset: 'utf-8' },
      { name: 'description', content: 'foo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'keywords', content: 'this, that, somethingelse'}
    ]
    }
}
</script>

<style lang="scss">

$text-color-light:lightgrey;


#app {
   @import url("https://fonts.googleapis.com/css?family=Kurale|Sura");
  font-family: 'Kurale', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color-light;
  overflow-x:hidden;
  //background-image: url("./assets/pattern-tan-bg.jpg");
  //background-repeat: repeat;
  width:100vw;
  height:100vh;
  padding:40px;
}

html{
  font-size: 62.5%;
}
.card{
  border-radius:0;
}
.wrap.dialog{
  padding: 30px 20px 20px 15px;
  margin: 10px 20px 0 0;
  position:relative;

  //background-color: #f3f2f0;
  //  border-radius: 15px;
}


p{
  font-size:1.7rem;
  display:block;
}

h1, h2 {
  font-weight: normal;
  font-size:2.7em;
  margin-bottom:20px;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.options-nav{
  margin-top:40px;
}

.font--mod-bold{
  font-weight:bold;
}

.wrap.dialog{
  background-color:white;
}

.btn-primary:hover{
  color: #828282;
      border-color: #dedede;
}

button, html [type="button"], [type="reset"], [type="submit"]{
      background-color: white;
      border-color: #dedede;
      color: #828282;
      font-size: 16px;
      font-weight: 700;
      margin:0 0 10px 0;
      outline: none;
  }

  .btn{
    white-space: normal;
  }

  .btn-primary:focus, .btn-primary.focus {
      box-shadow:none;
  }

  .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
      box-shadow: none;
      border-color:#dedede
  }

  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
      outline: none;
      border-color: #dedede !important;
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,eaeaea+10,ffffff+91,e2e2e2+100 */
      box-shadow: none;
      color:#828282;
      border-color: #dedede !important;
      background: #ffffff; /* Old browsers */
      background: -moz-linear-gradient(top, #ffffff 0%, #eaeaea 10%, #ffffff 91%, #e2e2e2 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #ffffff 0%,#eaeaea 10%,#ffffff 91%,#e2e2e2 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, #ffffff 0%,#eaeaea 10%,#ffffff 91%,#e2e2e2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e2e2e2',GradientType=0 ); /* IE6-9 */
    }

  button:hover, html [type="button"]:hover, [type="reset"]:hover, [type="submit"]:hover{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,f7f7f7+10,ffffff+91,efefef+100 */
      background: #ffffff; /* Old browsers */
      background: -moz-linear-gradient(top, #ffffff 0%, #f7f7f7 10%, #ffffff 91%, #efefef 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #ffffff 0%,#f7f7f7 10%,#ffffff 91%,#efefef 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, #ffffff 0%,#f7f7f7 10%,#ffffff 91%,#efefef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=0 ); /* IE6-9 */
    }

</style>
