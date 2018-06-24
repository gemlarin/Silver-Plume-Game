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
                    <p v-if="showText == true">{{ userMessage }}</p>
                    <div class="options-nav">
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
    export default {
        name: 'p_12',
            data () {
                return {
                    roomID:'p_12',
                    searchDifficulty:1,
                    //do not set both isHiddenItems and isHiddenOption to true.. Can only have one per page.
                    isHiddenItems:true,//set to false if the room has no hidden items
                    isHiddenOption:false,//set to false if the room has hidden path options
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
                    failText:'Nothing of interest was found. Try again?',//message to user if search fails
                    userMessage:'',//initializer leave string empty
                    vut:'no'
                }
            },
            metaInfo: {
                titleTemplate: '%s - The Valley'
            },
            
            beforeRouteLeave (to, from, next) {
                // if you found the hidden object/option this visit to this room, send the roomID down the pipe to lock further search attempts.
                if(this.hiddenItem.foundItem == true){
                    this.$store.commit('roomVisited', this.roomID);
                }
                //this.$store.state.roomsVisited.push(this.roomID);
                next()
            },

            created() {
                //if room has either hidden items, or hidden options allow setup for item/option search to continue
                if(this.isHiddenItems || this.isHiddenOption){
                //allow the success text to be revealed. It will be an empty <p> until populated later below
                this.showText = true;
                //if this room has not previously been visited then allow hidden item/object setup to continue
                //this room ID is pushed to roomsVisited array in beforeRouteLeave if foundItem is true
                    if(!this.$store.state.roomsVisited.includes(this.roomID)){
                        //Attach to the searchBus. searchConducted is triggered from playeractions.vue
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
                                        this.userMessage = this.hiddenItem.revealText;
                                    }
                                    //if it is a hidden option, vs. a hidden item, proceed
                                    if(this.isHiddenOption){
                                        //allow the hidden option(s) button(s) to be revealed
                                        this.hiddenOption.revealOption = true;
                                        //set the text for message that is revealed
                                        this.userMessage = this.hiddenOption.revealText;
                                    }
                                    console.log('found');
                                }//end of 1 rolled closure
                                //else, if nothing was found this search
                                else{
                                    console.log('notfound')
                                    //set the user message to the failText
                                    this.userMessage = this.failText;
                                }
                            }//end of if found item closure
                        })//end of searchBus closure
                    }//end of if room never visited closure
                    //these will automatically run on room load if the room has never been visited 
                    //USE FOR ROOM LOAD SETUP BELOW HERE
                    //if the rooms hiddent stuff has been found
                    if(this.$store.state.roomsWithItemsFound.includes(this.roomID)){
                        //item already found in room. Diable the search button
                        this.$store.commit('enableSearch', false);
                        this.userMessage = "This room has been thouroughly searched";
                    }else{
                        //item not yet found in room. Enable the search button
                        this.$store.commit('enableSearch', true);
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
</style>