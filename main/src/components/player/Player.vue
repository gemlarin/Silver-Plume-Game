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
                          <div class="dinge"></div>
                            <img class="avatar" :src="require('./../../assets/player-knight.svg')" />
                        </div>
                    </div><!-- /.card--section-avatar -->
                </div>
                <div class="col-md-7 col-sm-7">
                    <appPlayerstats>
                    </appPlayerstats>
                    <div class="button--wrapper">
                        <div class="go-wide" @click="openMap">Map</div>

                        <div class="go-wide journal"  @click="openJournal">Journal</div>
                    </div>
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
           <button @click="updateStatus" :class="{ active: isActive }">Update Status</button>
            <button @click="openJournal">Journal</button>
    </div><!-- /#playercard -->
 
</template>

<script>
import playerhealth from "./playerhealth";
import playermana from "./playermana";
import playerfood from "./playerfood";
import playergold from "./playergold";
import playerstatus from "./playerstatus";
import playerstats from "./playerstats";
import playeractions from "./playeractions";
import playeractionsupdater from "./playersactionupdater";
import "./../../assets/player-knight.svg";
import "./../../assets/map-button-bg.png";
import "./../../assets/map-button-bg-hover.png";

export default {
  name: "Dante",
  data: function() {
    return {
      status: 2,
      isActive: false,
      isJournalActive:false
    };
  },
  computed: {
    bonuses: function() {
      return (
        this.$store.state.armor.protection + this.$store.state.shield.protection
      );
    }
  },
  mounted: function() {},
  beforeDestroy: function() {
     // this.isJournalActive = false;
     // this.isActive = false;
  },
  created: function() {
    //Need to initialize the hero values

    //Need to initialize the hero values
    this.$store.state.armorrating =
      this.$store.state.status.normal.effects.armor +
      this.$store.state.shield.protection +
      this.$store.state.armor.protection;
    this.$store.state.attackrating =
      this.$store.state.weapon.maxDamage +
      this.$store.state.status.normal.effects.attack;
    //init the staus as normal when game firsl loads
    this.$store.commit("updateStatus", "normal");
  },
  methods: {
    //TO:DO add a method that is triggered by the statusBus which first sets the status number and then calls updateStatus
    //Important: set the activestatus before calling updatestatus
    updateStatus() {
      this.$store.commit("updateStatus", "drunk");
    },
    openJournal() {
        this.$router.push("journal");
    },
    openMap() {
       this.$router.push("map");     
    },
  },

  components: {
    appPlayerhealth: playerhealth,
    appPlayermana: playermana,
    appPlayerfood: playerfood,
    appPlayergold: playergold,
    appPlayerstatus: playerstatus,
    appPlayerstats: playerstats,
    appPlayeractions: playeractions,
    appPlayeractionsupdater: playeractionsupdater
  }
};
</script>

<style scoped lang="scss">
#playercard {
  padding: 10px;
}

.button--wrapper {
  display: flex;
}

.dinge{
  display:block;
  background-color:#636363;
  opacity:.6;
  height:100%;
  width:100%;
  position:absolute;
  z-index:200;
  top:0;
}

.go-wide {
  display: flex;
  margin-left: 8px;
  height: 53px;
  text-shadow: 1px 1px #1b1b1b;
  font-size: 14px;
  justify-content: center;
  flex-grow: 1;
  flex-wrap: nowrap;
  align-items: center;
  //background: url(./../../assets/map-button-bg.png) no-repeat center center;
  color: #bbbbbb;
  //-webkit-background-size: cover;
  //-moz-background-size: cover;
  //-o-background-size: cover;
   background-size: 300px;
  background-color: #3f3e3f;
  cursor: pointer;
  transition: 0.4s;
}
.go-wide:hover {
  color: #fff;
}

.go-wide:active {

  color: #7fce1e;
  
}

.journal{
    color: #bbbbbb;
    //background: url(./../../assets/journal-button-bg.png) no-repeat center center;
    background-size: 290px;
}
.card {
  height: 100%;
  display: flex;
  border: 8px solid #2f2f2f;
  background-color: #2f2f2f;
  position: relative;
}
.card--section-header {
  background-color: #3f3e3f;
  width: 100%;
  min-height: 90px;
  margin-bottom: 7px;
}
.card--section-avatar {
  overflow: hidden;
  //background-color: #4a4a4a;
   background: url(./../../assets/playerbackground.gif) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.temp {
  position: absolute;
  z-index: 100;
}

.wrap-avatar {
  height: 200px;
  img {
    position:relative;
    z-index:200;
  }
}
.avatar {
  height: 230px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>


