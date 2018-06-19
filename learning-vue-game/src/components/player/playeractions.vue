<template>
    <div class="wrap--playeractions">
       <div class="row flex--buttons">
       
               <button class="button--style-alt"><div class="attack"><img class="avatar" :src="require('./../../assets/player-button-attack.svg')" /></div>Attack</button>
               <button class="button--style-alt">Magic</button>

   
               <button class="button--style-alt">Search</button>
               <button class="button--style-alt">Eat</button>
       
                <button
                    @click="isPrayDisabled"
                    :disabled="praydisabled" 
                    :class="{ disabled: praydisabled }"
                    class="button--style-alt">
                    Pray
                </button>
                <button disabled class="button--style-alt">Bag</button>
          
       </div>
    </div>
</template>

<script>

export default {
  name: 'playeractions',
  data () {
    return {
        condition:'none',
        praydisabled: false
    }
  },
  computed: {
        
    },
    methods:{
        isPrayDisabled: function(){
            this.startPrayTimer();
            return this.praydisabled = !this.praydisabled;
        },
        startPrayTimer: function(){
            setTimeout(() => {
                this.praydisabled = false;
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
   
p{
    font-size:14px;

}

button, html [type="button"], [type="reset"], [type="submit"]{
      background-color: white;
      border-color: #333333;
      color: #828282;
      font-size: 16px;
      font-weight: 700;
      margin:0 0 10px 0;
      outline: none;
      margin-bottom:0;
      
          box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

button{
    display: block;
    text-decoration: none;
    background: #424242;
    color: #e0e0e0;
    font-weight: bold;
    width: 33.3333%;
    height: 70px;
    line-height: 30px;
    border-radius: 0;
    text-align: center;
    overflow: hidden;
    transition: .4s;
    outline: none;
    cursor: pointer;
    position:relative;
}


button:hover{
    outline: none;
    background: #545454;
}

button:active{

    outline: none;
}

button.disabled{

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