<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Heros First Big Decision.</h1>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                    <p>
                        There are only two ways that the theif could have escaped the Valley of the Kings Castle. The high craggy trail, and the graceful sloping valley floor. Maybe some people along the way saw something. Be sure to ask around and search for clues. The fate of world peace depends on your success.
                    </p>
                    <transition name="fade" mode="out-in">
                        <p v-if="showText == true">{{ userMessage }}</p>
                    </transition>
                    <transition name="fade" mode="out-in">
                    <p v-if="showMonsterText == true">{{ monster.monsterText }}</p>
                    </transition>
                    <div id="options-nav" :class="{disabled:!isNavActive}">
                        <router-link to="/p_11">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Take the high path through the crags.
                            </button>
                        </router-link>
                        <router-link to="/p_14">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Take the leisurely stroll through the sloping valley.
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    import { searchBus } from './../../../main.js';
    import { itemBus } from './../../../main.js';
    import { slayBus } from './../../../main.js';
    export default {
        name: 'p_12',
            data () {
                return {
                    roomID:'p_12',
                    searchDifficulty:1,
                    //do not set both isHiddenItems and isHiddenOption to true.. Can only have one per page.
                    canFleeRoom:false,
                    isHiddenItems:true,//set to false if the room has no hidden items
                    isHiddenOption:false,//set to false if the room has hidden path options
                    hasMonster:false, //set to false if no monster in room
                    monster:{
                        monsterHitDamage:4,
                        monsterHealth:10,
                        monsterName:'Sailor',
                        monsterText:'A large drunken Sailor is blocking the way. You can probably take him.',
                        monsterDiedText:'The oddly obese Sailor slump forward, and falls to the ground. You are the victor!',
                        monsterDeadtext:'There is an obese Sailor dead on the ground.'
                    },
                    hiddenItem:{
                        itemName:'Red Potion',
                        itemID:'rp',
                        revealText:'You found a red potion!',
                        foundItem:false//initializer leave set to false.
                    },
                    hiddenOption:{
                        revealOption :false,//initializer leave set to false.
                        revealText:'You discovered a small pathway behind a brush.'
                    },
                    showText:false,//initializer leave set to false. 
                    showMonsterText:false,//initializer leave set to false. 
                    failText:'Nothing of interest was found. Try again?',//message to user if search fails
                    userMessage:''
                }
            },
            metaInfo: {
                titleTemplate: '%s - The Valley'
            },
            computed: {

                isNavActive: function () {
                return this.$store.state.roomsWithMonstersSlain.includes(this.roomID) || !this.hasMonster;
                }
            },
            beforeRouteLeave (to, from, next) {
                // if you found the hidden object/option this visit to this room, send the roomID down the pipe to lock further search attempts.
              
                searchBus.$off('searchConducted');
                if(this.hiddenItem.foundItem == true){
                    this.$store.commit('roomVisited', this.roomID);
                }
                //this.$store.state.roomsVisited.push(this.roomID);
                next()
            },

            created() {

                //total bug fix. shadddup......
                //would have to do too much refactoring the contents of the 
                //{this.isHiddenItems || this.isHiddenOption} closure below 
                //to include this check inside of a single searchBus.$on. by 
                //the time this bug was discovered. Fix it if you think you can!!!
                this.$store.commit("eatFood", { eat: true });

                this.$store.commit('canFleeRoom', this.canFleeRoom);

                if(!this.isHiddenItems && !this.isHiddenOption){
                    searchBus.$on('searchConducted', (data) =>{
                        this.showText = false
                        this.userMessage = this.failText; 
                        this.showText = true;
                    });
                //TO:DO attach to a monsterKilled bus that hides the monester text
                }
                //connect to the slayBus to listen for monster death
                slayBus.$on('lifeStatus', (isSlain) =>{
                    this.showMonsterText = false;
                    this.monster.monsterText = this.monster.monsterDiedText;
                    this.showMonsterText = true;
                })
                this.$store.state.currentRoom = this.roomID;
                //initially enable the attack button, then disable if any below checks are true
                this.$store.state.attackEnabled = true;
                //set up the monster if there is one in the room and it has not been slain
                if(!this.$store.state.roomsWithMonstersSlain.includes(this.roomID) && this.hasMonster){
                    //load up the monster $State

                    this.$store.commit('setMonster', this.monster);
             
                    this.$store.state.maxMonsterHitDamage = this.monster.monsterHitDamage;
                    this.$store.state.monsterRemainingHealth = this.monster.monsterHealth;
                    this.showMonsterText = false;
                    this.userMessage = this.monster.monsterText;
                    this.showMonsterText = true;
                    
                }
                //set up the room if the monster was previously slain
                if(this.$store.state.roomsWithMonstersSlain.includes(this.roomID) && this.hasMonster){
                   
                    this.showMonsterText = false;
                    this.monster.monsterText = this.monster.monsterDeadtext;
                    this.showMonsterText = true;
                }
                //need to lock attack button if no monster is enabled for this room
                if(!this.hasMonster){
                    this.$store.state.attackEnabled = false;
                }
                //need to lock attack button if monster has been slain in this room
                if(this.$store.state.roomsWithMonstersSlain.includes(this.roomID)){
                    this.$store.state.attackEnabled = false;
                }
                
                //if room has either hidden items, or hidden options allow setup for item/option search to continue
                //Note: this has a bug fix above to attach the searchBus to allow for a default message if room has no hidden contents.
                if(this.isHiddenItems || this.isHiddenOption){
                
                //if this room has not previously been visited then allow hidden item/object setup to continue
                //this room ID is pushed to roomsVisited array in beforeRouteLeave if foundItem is true
                    if(!this.$store.state.roomsVisited.includes(this.roomID)){
                        //Attach to the searchBus. searchConducted is triggered from playeractions.vu
                        searchBus.$on('searchConducted', (data) =>{
                            //if the item has not been found yet in this room then let the search proceed
                            if(this.hiddenItem.foundItem == false){
                                //determine if the search was a success or not. 
                                //Higher search difficulty = less chance of rolling a 1 to reveal the items!
                                let successInt = Math.floor(Math.random() * (this.searchDifficulty - 0 + 1)) + 0;
                                //awesome. you rolled a 1. 
                                if(successInt == 1){
                                    //let the global $store know that the items/objects have been found in this room
                                    this.$store.commit('roomsWithItemsFound', this.roomID);
                                    this.$store.commit('enableSearch', false);
                                    //you found the object, stop additional attempts by setting foundItem to true
                                    //this is a powerful setting and has major impacts if set anywhere but here
                                    this.hiddenItem.foundItem = true;
                                    //boolean: if the room has hidden items vs. hidden options, proceed
                                    if(this.isHiddenItems ){
                                        //listener is located in App.vue
                                        //send the items you found down the pipline to get stored in your global found items array.
                                        itemBus.$emit('newItem', {'item': this.hiddenItem.itemName, 'itemID':this.hiddenItem.itemID});
                                        //set the text for message that is revealed
                                        this.showText = false;
                                        this.userMessage = this.hiddenItem.revealText;
                                        this.showText = true;
                                    }
                                    //if it is a hidden option, vs. a hidden item, proceed
                                    if(this.isHiddenOption){
                                        //allow the hidden option(s) button(s) to be revealed
                                        this.hiddenOption.revealOption = true;
                                        //set the text for message that is revealed
                                        this.showText = false;
                                        this.userMessage = this.hiddenOption.revealText;
                                        this.showText = true;
                                    }
                                    console.log('found');
                                }//end of 1 rolled closure
                                //else, if nothing was found this search
                                else{
                                    console.log('notfound')
                                    //set the user message to the failText
                                    this.showText = false
                                    this.userMessage = this.failText; 
                                    this.showText = true;
                                }
                            }//end of if found item closure
                        })//end of searchBus closure
                    }//end of if room never visited closure
                    //these will automatically run on room load if the room has never been visited 

                    //-------USE FOR ROOM LOAD SETUP BELOW HERE--------
                    //if the rooms hiddent stuff has been found
                    if(this.$store.state.roomsWithItemsFound.includes(this.roomID)){
                        //item already found in room. Diable the search button
                        this.hiddenOption.revealOption = true;
                        this.$store.commit('enableSearch', false);
                        this.showText = false
                        this.userMessage = "This room has been thouroughly searched";
                        this.showText = true;
                        
                    }else{
                        //item not yet found in room. Enable the search button
                        this.$store.commit('enableSearch', true);
                    }
                    if(!this.$store.state.roomsWithMonstersSlain.includes(this.roomID) && this.hasMonster){
                        this.$store.commit('enableSearch', false);
                    }
                    
                }//end of this.isHiddenItems || this.isHiddenOption closure
            }  //end of created() closure 
}//end of export default
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
    font-size:1.7em;
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
  font-family: 'Sura', serif;
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


.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


.fade-enter-active {
  transition: opacity 1s ease-out;
}
.fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to
{
  opacity: 0;
}
</style>