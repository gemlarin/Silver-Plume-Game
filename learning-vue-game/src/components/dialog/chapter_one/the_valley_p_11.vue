<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Valley.</h1>
                    <form><input type="text" hidden></form>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                    <p>You make your way towards the Capital gates, meandering through its many cobblestone throughfares and narrow lanes.  </p>
                    <p v-if="this.isFirstVisitOnly">You pass a young girl yelling at an old man selling flowers. "No, you stupid old fart. I asked for the pink one, not the green one! I want the PINK one!"</p>
                    <p v-if="this.isFirstVisitOnly">You shake your head in disbelief and carry on towards the West Gate a short distance ahead. As you approach the gate, an oddly obese elf in dark clothing approaches. "There you are! Stop! You will not pass through this gate."</p>
                    <p v-if="this.isFirstVisitOnly">In an attempt to avoid an altercation you try to sidestep around the pointy eared slob, but he grabs you by the shirt. "I said, stop. Your journey ends here.</p>
                    <p v-if="this.isFirstVisitOnly">Looks like you are going to have to teach this elf some manners.</p>
                    <transition name="fade" mode="out-in">

                    <p class="highlight" v-if="showMonsterText == true">{{ monster.monsterText }}</p>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <p v-if="showText == true">{{ userMessage }}</p>
                    </transition>

                    <div id="options-nav" :class="{disabled:!isNavActive}">
                        <router-link to="/the_heros_big_decision_p_12">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Approach the mouth of the valley.
                            </button>
                        </router-link>

                        <transition name="fade">
                            <div class="option--hidden-container" v-if="hiddenOption.revealOption">
                                <router-link to="/the_heros_big_decision_p_12">
                                    <button type="button" class="btn btn-primary btn-lg btn-block">This is a hidden option. 
                                    </button>
                                </router-link>
                            </div><!-- option--hidden-container -->
                        </transition>
                    </div><!-- options-nav -->
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
import { mapBus } from "./../../../main.js";
import { searchBus } from "./../../../main.js";
import { itemBus } from "./../../../main.js";
import { slayBus } from "./../../../main.js";
export default {
  name: "the_valley_p_11",
  data() {
    return {
      roomID: "p_11", //****** needs to emmitt to parent******//
      searchDifficulty: 1,
      overworldMapToDisplay: "overlandmap_p10.png", //****** needs to emit to parent******//
      //do not set both isHiddenItems and isHiddenOption to true.. Can only have one per page.
      canFleeRoom: true, //****** needs to emit to parent******//
      isFirstVisitOnly: true, //dont touch this. Test against this for text that you only want displayed on a first visit to the room.
      isHiddenItems: true, //set to false if the room has no hidden items //****** needs to emmitt to parent******//
      isHiddenOption: false, //set to false if the room has hidden path options //****** needs to emmitt to parent******//
      hasMonster: true, //set to false if no monster in room
      monster: {
        monsterHitDamage: 4,
        monsterHealth: 10,
        monsterName: "Fat Elf",
        monsterText:
          "A obese elf block your way. You should be able to take him.",
        monsterDiedText:
          "The fat Elf slumps forward, gasps a bit of blood, and falls to the ground dead.",
        monsterDeadtext:
          "There is an obese Elf dead on the ground. A crowd has gathered."
      },
      hiddenItem: {
        itemName: "Folded Note",
        itemID: "fn",
        revealText: "You found a folded note in the dead Elf shirt pocket!",
        foundItem: false //initializer leave set to false.
      },
      hiddenOption: {
        revealOption: false, //initializer leave set to false.
        revealText: "You discovered a small pathway behind a brush."
      },
      showText: false, //initializer leave set to false.
      showMonsterText: false, //initializer leave set to false.
      searchDoneMsg: "This area has been thouroughly searched.",
      failText: "Nothing of interest was found. Try again?", //message to user if search fails
      userMessage: "" //initializer. leave blank
    };
  },
  metaInfo: {
    titleTemplate: "%s - The Valley"
  },
  //xxxxxxxxxxxxxxxxxxxxxxxxxxx
  //WARNING: END OF USER DEFINED OPTIONS
  //DO NOT EDIT CODE BEYOND HERE
  //xxxxxxxxxxxxxxxxxxxxxxxxxxx
  computed: {
    isNavActive: function() {
      return (
        this.$store.state.roomsWithMonstersSlain.includes(this.roomID) ||
        !this.hasMonster
      );
    }
  },
  methods: {
    checkIfVisited() {
      //if this room has not previously been visited then allow hidden item/object setup to continue
      if (!this.$store.state.roomsVisited.includes(this.roomID)) {
        this.roomNotVisited();
      }
    },
    updateStoryMessaging(usermessage, messagetype){
        if(messagetype == "user"){
          this.showText = false;
          this.userMessage = usermessage;
          this.showText = true;
        }
        if(messagetype == "monster"){
            this.showMonsterText = false;
            this.monster.monsterText = usermessage;
            this.showMonsterText = true;
        }
        else if(messagetype != "monster" && messagetype != "user"){
            console.error("You need to pass a message string of type monster or user");
        }
    },
    checkForHidden() {
      if (!this.isHiddenItems && !this.isHiddenOption) {
        searchBus.$on("searchConducted", data => {
            this.updateStoryMessaging(this.failText, "user");
        });
      }
      //if room has either hidden items, or hidden options allow setup for item/option search to continue
      if (this.isHiddenItems || this.isHiddenOption) {
        if(this.isHiddenItems && this.isHiddenOption){
          console.error('You can have hidden item or hidden option in room, but not both. Disable one option.');
          this.checkIfVisited();
          this.initRoom();
        }
      }
    },
    checkIfMonsterSlain() {
      if (
        !this.$store.state.roomsWithMonstersSlain.includes(this.roomID) &&
        this.hasMonster
      ) {
        //load up the monster $State
        this.initMonster();
      }
      //set up the room if the monster was previously slain
      if (
        this.$store.state.roomsWithMonstersSlain.includes(this.roomID) &&
        this.hasMonster
      ) {
        this.isFirstVisitOnly = false;
        this.updateStoryMessaging(this.monster.monsterDeadtext, "monster");
      }
      //need to lock attack button if monster has been slain in this room
      if (this.$store.state.roomsWithMonstersSlain.includes(this.roomID)) {
        this.$store.state.attackEnabled = false;
      }
    },
    roomNotVisited() {
      //Attach to the searchBus. searchConducted is triggered from playeractions.vue when user clicks the search button
      searchBus.$on("searchConducted", data => {
        //if the item has not been found yet in this room then let the search proceed
        if (this.hiddenItem.foundItem == false) {
          //determine if the search was a success or not.
          //Higher search difficulty = less chance of rolling a 1 to reveal the items!
          let successInt =
            Math.floor(Math.random() * (this.searchDifficulty - 0 + 1)) + 0;
          //awesome. you rolled a 1.
          if (successInt == 1) {
            //let the global $store know that the items/objects have been found in this room
            this.$store.commit("roomsWithItemsFound", this.roomID);
            this.$store.commit("enableSearch", false);
            //you found the object, stop additional attempts by setting foundItem to true
            this.hiddenItem.foundItem = true;
            //boolean: if the room has hidden items vs. hidden options, proceed
            if (this.isHiddenItems) {
              //listener is located in App.vue
              //send the items you found down the pipline to get stored in your global found items array.
              itemBus.$emit("newItem", {
                item: this.hiddenItem.itemName,
                itemID: this.hiddenItem.itemID
              });
              //set the text for message that is revealed
              this.updateStoryMessaging(this.hiddenItem.revealText, "user");
            }
            //if it is a hidden option, vs. a hidden item, proceed
            if (this.isHiddenOption) {
              //allow the hidden option(s) button(s) to be revealed
              this.hiddenOption.revealOption = true;
              //set the text for message that is revealed
              this.updateStoryMessaging(this.hiddenOption.revealText, "user");
            }
            //console.log("found");
          } else {
            //end of 1 rolled closure
            //else, if nothing was found this search
            //console.log("notfound");
            this.updateStoryMessaging(this.failText, "user");
          }
        } //end of if found item closure
      }); //end of searchBus closure
    },
    initRoom() {
      //-------USE FOR FINAL ROOM LOAD SETUP BELOW HERE--------
      if (this.$store.state.roomsWithItemsFound.includes(this.roomID)) {
        this.isFirstVisitOnly = false;
        //prevent hidden option from showing when hidden option is disabled in the options.
        if(this.isHiddenOption){
          this.hiddenOption.revealOption = true;
        }
        this.$store.commit("enableSearch", false);
        this.updateStoryMessaging(this.searchDoneMsg, "user");
      } else {
        this.$store.commit("enableSearch", true);
      }
      if (
        !this.$store.state.roomsWithMonstersSlain.includes(this.roomID) &&
        this.hasMonster
      ) {
        this.$store.commit("enableSearch", false);
      }
    },
    initSlaybus() {
      slayBus.$on("lifeStatus", isSlain => {
        this.updateStoryMessaging(this.monster.monsterDiedText, "monster");
      });
    },
    initMonster() {
      this.$store.commit("setMonster", this.monster);
      this.$store.state.maxMonsterHitDamage = this.monster.monsterHitDamage;
      this.updateStoryMessaging(this.monster.monsterText, "monster");
      this.$store.state.monsterRemainingHealth = this.monster.monsterHealth;
      this.$store.state.monster.monstername = this.monster.monsterName;
    },
    enableAttack() {
      //initially enable the attack button, then disable if room still has live monster
      this.$store.state.attackEnabled = true;
    },
    enableFlee() {
      this.$store.commit("canFleeRoom", this.canFleeRoom);
    },
    disableAllInputs() {
      this.$store.state.disableAllInputs = false;
    },
    setRoomMap() {
      this.$store.commit("setOverworldMap", this.overworldMapToDisplay);
    },
    setRoomId() {
      this.$store.state.currentRoom = this.roomID;
    }
  },
  beforeRouteLeave(to, from, next) {
    // if you found the hidden object/option this visit to this room, send the roomID down the pipe to lock further search attempts.
    searchBus.$off("searchConducted");
    if (this.hiddenItem.foundItem == true) {
      this.$store.commit("roomVisited", this.roomID);
    }
    next();
  },
  created() {
    this.$store.state.attackEnabled = false;
    this.setRoomMap();
    this.disableAllInputs();
    this.enableFlee();
    this.checkForHidden();
    this.initSlaybus();
    this.setRoomId();
    this.enableAttack();
    this.checkIfMonsterSlain();
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  outline: none;
}
img {
  height: 50px;
  width: auto;
  position: absolute;
  right: 20px;
  top: -10px;
  opacity: 0.3;
}
p {
  font-family: "Zilla Slab", serif;
  color: #5f5f5f;
}
ul li {
  font-family: "Zilla Slab", serif;
  color: #5f5f5f;
  font-size: 1.7em;
}
h1 {
  color: #ab4646;
}
label {
  font-family: "Kurale", serif;
  font-size: 15px;
  color: #ab4646;
}

input {
  font-family: "Sura", serif;
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  color: #333;
  border-radius: 3px;
  border: 1px solid #dddddd;
}

.hline {
  display: relative;
}

.field-wrap {
  margin-top: 30px;
}

.fade-enter-active {
  transition: opacity 1s ease-out;
}
.fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>