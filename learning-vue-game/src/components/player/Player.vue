<template>
    <div id="playercard">
        <div class="card">
            <div class="card--section-header">
                <div class="row no-gutters">
                    <div class="col-6 col-sm-6 col-md-6">
                        <appPlayerhealth
                            :playerbonuses="bonuses"
                            :playerstatus="this.$store.state.holdstat"
                        ></appPlayerhealth>
                    </div>
                    <div class="col-6 col-md-6 col-sm-6">
                        <appPlayerfood></appPlayerfood>
                        <appPlayergold></appPlayergold>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-sm-6 col-md-6">
                         <appPlayermana></appPlayermana>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <appPlayerstatus></appPlayerstatus>
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
                    <appPlayerstats>
                    </appPlayerstats>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <appPlayeractions
                      :playerbonuses="bonuses"
                      :playerstatus="this.$store.state.holdstat">
                    </appPlayeractions>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <appPlayeractionsupdater></appPlayeractionsupdater>
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
import playeractionsupdater from './playersactionupdater'

export default {
    name: 'Dante',
    data: function(){
        return{
            status:2
        }
    },
    computed: {
        bonuses: function () {
            return this.$store.state.armor.bonus + this.$store.state.shield.bonus 
        }  
    },
    created: function () {
        //Need to initialize the hero values
        this.$store.state.armorrating = this.$store.state.status.normal.effects.armor + this.$store.state.shield.bonus + this.$store.state.armor.bonus;
        this.$store.state.attackrating = this.$store.state.weapon.bonus + this.$store.state.status.normal.effects.attack
        //init the staus as normal when game firsl loads
        this.$store.commit('updateStatus', this.$store.state.activestatus)

    },
    methods:{
        //TO:DO add a method that is triggered by the statusBus which first sets the status number and then calls updateStatus
        //Important: set the activestatus before calling updatestatus
       updateStatus(){
           this.$store.commit('updateStatus', 'poisoned')
       }
    },

    components: {
        appPlayerhealth:   playerhealth,
        appPlayermana:     playermana,
        appPlayerfood:     playerfood,
        appPlayergold:     playergold,
        appPlayerstatus:   playerstatus,
        appPlayerstats:    playerstats,
        appPlayeractions:  playeractions,
        appPlayeractionsupdater:  playeractionsupdater
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
        border:8px solid #2f2f2f;
        background-color:#2f2f2f;
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


