<template>
    <div class="wrap--playeractions">
       <div class="row">
           <div class="col-4">
               <button class="button--style-alt"><div class="attack"><img class="avatar" :src="require('./../../assets/player-button-attack.svg')" /></div>Attack</button>
               <button class="button--style-alt">Magic</button>
               
           </div>
           <div class="col-4">
               <button class="button--style-alt">Search</button>
               <button class="button--style-alt">Eat</button>
           </div>
            <div class="col-4">
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
    height:241px;
    margin-top:7px;
    padding:25px;
}
   
p{
    font-size:14px;

}

button{
    display: block;
    text-decoration: none;
    background: #424242;
    color: #e0e0e0;
    font-weight: bold;
    width: 100%;
    height: 45px;
    font-size: 12px;
    line-height: 30px;
    border-radius: 5px;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 0px 0px 5px rgb(79, 79, 79);
    border: solid 2px rgb(106, 191, 52);
    transition: .4s;
    margin: 0 auto 10px auto;
    margin-bottom:20px;
    outline: none;
    cursor: pointer;
    position:relative;
}

button:hover{
    outline: none;
    border: solid 2px rgb(100, 245, 8);
}

button:active{
    border: solid 2px #4c4c4c;
    box-shadow: 0px 0px 0px 5px #5f5f5f;
    outline: none;
}

button.disabled{
    box-shadow: 0px 0px 0px 5px rgb(74, 74, 74);
    border: solid 2px rgb(56, 58, 55);
    background: #424242;
    color: #827d7d;
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