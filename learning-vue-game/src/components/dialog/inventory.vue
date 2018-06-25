<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Inventory</h1>
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    <hr>
                        <ul 
                        v-for="(value, index) in this.$store.state.playerInventory"
                        :key="index"
                        >
                            <li v-bind:id="value.itemID">
                                {{value.item}} <button type="button" class="btn btn-primary btn-small" @click="useItem(index, value.itemID)"> Use </button>
                            </li>
                        </ul>
                
                    <div class="options-nav"> 
                        <button type="button" @click="goback" class="btn btn-primary btn-close btn-block">Close bag
                        </button>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    import { lifeBus } from './../../main.js';
    import { healBus } from './../../main.js';
    export default {
        name: 'inventory',
        data () {
            return {
                itemUsed:''
            }
        },
        methods:{
            //allows us to return to the previous view when the inventory is closed
            goback: function(){
                this.$router.go(-1);
            },
            useItem: function(index, item){
                console.log('index: ' + index)
                console.log('removeitem: ' + item)
                this.$store.commit('itemUsed', index);


                switch (item) {
                case 'gp':
                    healBus.$emit('playerHeal', 5);
                    var message =  this.$store.state.name + " is healed for 5 points!";
                    this.$store.commit('updateTurnsLog', {message, isPlayer:true, isHeal:true})
                    break;
                    case 'rp':
                    healBus.$emit('playerHeal', 10);
                    var message =  this.$store.state.name + " is healed for 10 points!";
                    this.$store.commit('updateTurnsLog', {message, isPlayer:true, isHeal:true})
                    break;
                case 'Papayas':
                    console.log('Mangoes and papayas are $2.79 a pound.');
                    // expected output: "Mangoes and papayas are $2.79 a pound."
                    break;
                default:
                    console.log('Sorry, we are out of ');
                }
            }
        }
    }
</script>
<style scoped>
  
a{
    text-decoration: none;
    outline: none;
}
img{
    height:50px;
    width:auto;
    position:absolute;
    right:20px;
    top:-10px;
    opacity:.3;
}
p{
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
}
ul li {
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
    font-size:2em;
}
h1{
    color:#ab4646;
}
label{
  font-family: 'Kurale', serif;
  font-size:15px;
  color:#ab4646;
}

input{
  font-family: 'Zilla Slab', serif;
  width:100%;
  height:40px;
  font-size:18px;
  padding-left:10px;
  color:#333;
  border-radius:3px;
  border:1px solid #dddddd;
}  

.hline{
    display:relative;
}

.field-wrap{
    margin-top:30px;
}
button.btn-small{
    font-family: 'Kurale', serif;
    font-size:13px;
    padding:3px 15px;
    position:relative;
    margin-left:10px;
    top:3px;
}

button.btn-close{
    width:auto;
    padding: 3px 20px;
    background-color:#333;
    background:#333;
    color:#fff;
    position:absolute;
    right:15px;
    top:70px
}
button:hover, html [type="button"]:hover{
    background-color:rgb(75, 74, 74);
    background:rgb(75, 74, 74)
}

</style>