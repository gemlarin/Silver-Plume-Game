<template>
    <div id="playercard">
        <div class="card">
            <div class="card--section-header">
                <div class="row no-gutters">
                    <div class="col-6 col-sm-6 col-md-6">
                        <appPlayerhealth
                            :playerbonuses="bonuses"
                            :playerstatus="holdstat"
                        ></appPlayerhealth>
                    </div>
                    <div class="col-6 col-md-6 col-sm-6">
                        <appPlayerfood
                            :playerfood="food"
                        ></appPlayerfood>
                        <appPlayergold
                            :playergold="gold">
                        </appPlayergold>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-sm-6 col-md-6">
                         <appPlayermana></appPlayermana>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <appPlayerstatus
                            :playerStatus="holdstat"
                        ></appPlayerstatus>
                    </div>
                </div>
            </div>
     
            <div class="row no-gutters">
                <div class="col-sm-5 col-md-5">
                    <div class="card--section-avatar">
                        <div class="wrap-avatar">
                            <img class="avatar" :src="require('./../../assets/player-knight.svg')" />
                        </div>
                    </div><!-- /.card--section-avatar -->
                </div>
                <div class="col-md-7 col-sm-7">
                    <appPlayerstats 
                        :playername="name" 
                        :playerguardian="guardian" 
                        :playerweapon="weapon" 
                        :playershield="shield" 
                        :playerarmor="armor"
                        :playerarmorrating="armorrating"
                        :playerattackrating="atttackrating"
                        >
                    </appPlayerstats>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <appPlayeractions></appPlayeractions>
                </div>
            </div>
        </div><!-- /.card -->
        <br><br>
           <button @click="updateStatus">Update Status</button>
    </div><!-- /#playercard -->
 
</template>

<script>

import playerhealth  from './playerhealth'
import playermana    from './playermana'
import playerfood    from './playerfood'
import playergold    from './playergold'
import playerstatus  from './playerstatus'
import playerstats   from './playerstats'
import playeractions from './playeractions'

export default {
    name: 'Dante',
    data: function(){
        return{
            armorrating: "",
            atttackrating:"",
            name: 'Dante',
            guardian: "Rah'tesh",
            weapon: {
                type:"Steel",
                itemname:"Sword",
                bonus:1
            },
            shield: {
                type:"Steel",
                itemname:"Shield",
                bonus:1
            },
            armor: {
                type:"Silver",
                itemname:"Armor",
                bonus:1
            },
            status: {
                normal: {
                    imparement:"normal",
                    effects:{
                        basehealth:20,
                        armor:0,
                        attack:0
                    }
                },
                one: {
                    imparement:"drunk",
                    length:10,
                    effects:{
                        basehealth:20,
                        armor:1,
                        attack:-1
                    }
                },
                two: {
                    imparement:"poisoned",
                    length:3000,
                    effects:{
                        basehealth:15,
                        armor:0,
                        attack:-1
                    }
                },
                three: {
                    imparement:"dizzy",
                    length:10,
                    effects:{
                        basehealth:20,
                        armor:-1,
                        attack:-1
                    }
                }
            },
            food: 4,
            gold:25,
            //activestatus is the selected status modifier
            activestatus:2,
            //holdstat is the selected status object
            holdstat:{}
            
        }
    },
    created: function () {
        //set status to normal on init
        this.armorrating = this.status.normal.effects.armor + this.shield.bonus + this.armor.bonus;
        this.atttackrating = this.weapon.bonus + this.status.normal.effects.attack
        this.holdstat = this.status.normal
    },
    methods:{
        //TO:DO add a method that is triggered by the statusBus which first sets the status number and then calls updateStatus

        //update the player status - must set new activestatus before calling
        updateStatus: function(){
            //normal modifier
           if(this.activestatus === 0){
               this.armorrating = this.status.normal.effects.armor + this.shield.bonus + this.armor.bonus;
               this.atttackrating = this.weapon.bonus + this.status.normal.effects.attack
               this.holdstat = this.status.normal
           }
           //drunk modifier
           if(this.activestatus === 1){
               this.armorrating= this.status.one.effects.armor + this.shield.bonus + this.armor.bonus;
               this.atttackrating = this.weapon.bonus + this.status.one.effects.attack
               this.holdstat = this.status.one
           }
           //poisoned modifier
           if(this.activestatus === 2){
               this.armorrating = this.status.two.effects.armor + this.shield.bonus + this.armor.bonus;
               this.atttackrating = this.weapon.bonus + this.status.two.effects.attack
               this.holdstat = this.status.two
           }
           //dizzy modifier
           if(this.activestatus === 3){
               this.armorrating = this.status.three.effects.armor + this.shield.bonus + this.armor.bonus;
               this.atttackrating = this.weapon.bonus + this.status.three.effects.attack
               this.holdstat = this.status.three
           }
              
        }
    },
    computed: {
 
        bonuses: function () {
            return this.armor.bonus + this.shield.bonus 
        }
    },
    components: {
        appPlayerhealth:   playerhealth,
        appPlayermana:     playermana,
        appPlayerfood:     playerfood,
        appPlayergold:     playergold,
        appPlayerstatus:   playerstatus,
        appPlayerstats:    playerstats,
        appPlayeractions:  playeractions
    },
}
</script>

<style scoped>
    #playercard{
        padding:10px;
    }
    .card{
        height:100%;
        display:flex;
        border:8px solid #ffffff;
        background-color:#ffffff;
        position:relative;

    }
    .card--section-header{
        background-color:#3f3e3f;
        width:100%;
        min-height:90px;
        margin-bottom:7px;
    }
    .card--section-avatar{
        overflow:hidden;
        background-color:#4a4a4a;
    }

    .wrap-avatar{
        height:200px;
    }
    .avatar{
        height:230px;
        padding-top:10px;
        padding-left:10px;
        padding-right:10px;
    }
</style>


