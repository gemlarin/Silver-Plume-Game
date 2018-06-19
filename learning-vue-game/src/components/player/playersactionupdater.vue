<template>
    <div class="wrap--playeractionsupdater">
      <div class="row log">
          <div class="col-12 columns">
              <ul>
                  <li v-for="turn in this.$store.state.turns"> > {{ turn }}</li>
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
  },
  computed: {
        
    },
    methods:{
       
    }
}
</script>
<style scoped>

.col-6{
    text-align: center;
}

li{
    font-family: 'Sura', serif;
    display:block;
    color:#fff;
    font-size:14px;
    white-space:normal;
    margin-bottom:10px;
    line-height:1.2em;
}

.log{
    height:170px;
    padding-top:20px;
}

.wrap--playeractionsupdater{
    background-color:#3f3e3f;
    margin-top:7px;
    padding:0 15px;
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
    
</style>