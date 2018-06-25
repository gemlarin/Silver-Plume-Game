<template>
    <div class="wrap--playeractionsupdater">
      <div class="row log" id="log">
          <div class="col-12 columns">
              <ul>
                  <li 
                  v-for="(turn,index) in this.$store.state.turns"
                  :key="index"
                  :class="{'player-turn': turn.isPlayer,'monster-turn': turn.isMonster,'heal-turn': turn.isHeal, 'monster-health-turn': turn.isDeath, 'magic-turn': turn.isMagic, 'alert-turn': turn.isAlert}">
                  {{ "> " + turn.message }}
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
        displayTurnsArray: this.$store.state.turns
    }
  },
  methods:{
      blink(){
          var myVar = setInterval(myTimer, 1000);
            function myTimer() {
                var d = new Date();
                document.getElementById("demo").innerHTML = d.toLocaleTimeString();
            }
      },
      updateScroll(){
   
        var out = document.getElementById("log");
        
        //TODO see if you can fix this
        //ensure that the full tick update has completed before moving scroll position. Hacky but works.
        setTimeout(function() {
                var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;// allow 1px inaccuracy by adding 1
                if(!isScrolledToBottom){
                    out.scrollTop = out.scrollHeight - out.clientHeight;
                }
        }, 100);      
    }
  },
  watch: {
    displayTurnsArray: {
      handler: function (after, before) {
        // Return the object that changed
        let changed = after.filter( function( p, idx ) {
          return Object.keys(p).some( function( prop ) {
            return p[prop] !== before[idx][prop];
          })
        })
        // Log it
        console.log("changed");
            this.updateScroll()
      },
      deep: true
    }
  }
}
</script>
<style scoped>

.col-6{
    text-align: center;
}

li{
    font-family: 'Zilla Slab', serif;
    display:block;
    color:#fff;
    font-size:15px;
    white-space:normal;
    margin-bottom:10px;
    line-height:1.2em;
}

.log{
    height:160px;
    margin-top:15px;
    padding-left:15px;
    overflow:scroll;
}

.wrap--playeractionsupdater{
    background-color:#2b2b2b;
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

.log ul .alert-turn{
    font-family: 'Zilla Slab', serif;
    color:#f18829;
    font-weight:700;
}

.log ul .magic-turn{
    font-family: 'Zilla Slab', serif;
    color:#ecafff;
    
}

.log ul .monster-turn{
    font-family: 'Zilla Slab', serif;
    color:#ff3573;
    font-weight:700;

}

.log ul .player-turn{
    font-family: 'Zilla Slab', serif;
    color:rgb(40, 245, 40);
    font-weight:700;
}

.log ul .heal-turn{
    font-family: 'Zilla Slab', serif;
    color:rgb(59, 207, 200);
    font-weight:700;
}

.log ul .monster-health-turn{
    color:#d8d2ce
}
    
</style>