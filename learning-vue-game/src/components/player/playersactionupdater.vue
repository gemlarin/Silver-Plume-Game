<template>
    <div class="wrap--playeractionsupdater">
      <div class="row log">
          <div class="col-12 columns">
              <ul>
                  <li 
                  v-for="(turn,index) in this.$store.state.turns"
                  :key="index"
                  :class="{'player-turn': turn.isPlayer,'monster-turn': !turn.isPlayer}">
                  {{ turn.message }}
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'playersactionupdater',
  data () {
    return {
  
    }
  }
}
</script>
<style scoped>

.col-6{
    text-align: center;
}

li{
    font-family: 'Kurale', serif;
    display:block;
    color:#fff;
    font-size:14px;
    white-space:normal;
    margin-bottom:10px;
    line-height:1.2em;
}

.log{
    height:140px;
    margin-top:15px;
    padding-left:30px;
    overflow:scroll;
}

.wrap--playeractionsupdater{
    background-color:#3f3e3f;
    margin-top:7px;
    padding:10px 15px;
    height:200px;
     overflow:scroll;
}
   
p{
    font-size:14px;

}


img{
    height:20px;
    width:auto;
}

.log ul .player-turn{
    color:orange;
}

.log ul .monster-turn{
    color:red;
}
    
</style>