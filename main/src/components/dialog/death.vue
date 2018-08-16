<template>
    <div class="wrap dialog">
        <form><input type="text" hidden></form>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Dead</h1>
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    <hr>
                        <ul>
                            <li v-for="(value, index) in                this.$store.state.playerInventory"
                                :key="index"
                                v-bind:id="value.itemID">
                                {{value.item}} <button type="button" class="btn btn-primary btn-small" @click="useItem(index, value.itemID)"> Use </button>
                            </li>
                        </ul>
                        <div class="player--worn-items">
                            <!-- weapon data -->
                            <p>{{ this.$store.state.weapon.type }} {{ this.$store.state.weapon.itemname }}
                                <span> | Damage:  {{ this.$store.state.weapon.minDamage }} - 
                             {{ this.$store.state.weapon.maxDamage }} 
                                    <span v-show="!this.$store.state.weapon.bonus == ''">, Bonus: {{ this.$store.state.weapon.bonus }}</span>
                                </span>
                            </p>
                            <!-- shield data -->
                             <p>{{ this.$store.state.shield.type }} {{ this.$store.state.shield.itemname }}
                                <span> | Defense: +{{this.$store.state.shield.protection }}
                                    <span v-show="!this.$store.state.shield.bonus == ''">, Bonus: {{ this.$store.state.shield.bonus }}</span>
                                </span>
                            </p>
                            <p>{{ this.$store.state.armor.type }} {{ this.$store.state.armor.itemname }}
                                <span> | Defense: +{{this.$store.state.armor.protection }}
                                    <span v-show="!this.$store.state.armor.bonus == ''">, Bonus: {{ this.$store.state.armor.bonus }}</span>
                                </span>
                            </p>
                            <ul>
                                <li
                                v-for="(value, index) in this.$store.state.playerItemsWorn"
                                :key="index">
                                {{value}} 
                                </li>
                            </ul>
                        </div>
                
                    <div class="options-nav"> 
                        <button type="button" @click="goback" class="btn btn-close btn-block">Close bag
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
        name: 'death',
        data () {
            return {
                itemUsed:''
            }
        },
        methods:{
         
        }
    }
</script>
<style scoped>
  
span{
    color:#9b9999;
}  
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
    font-size:2em;
}
ul{
    margin-bottom:30px;
}
ul li {
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
    font-size:2em;
    margin:0;
    display:block;
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




</style>