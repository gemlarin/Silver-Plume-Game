<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Valley.</h1>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                     <p v-if="showText == true">{{ userMessage }}</p>
                    <div class="options-nav">
                        <router-link to="/p_12">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Approach the mouth of the valley.
                            </button>
                        </router-link>
                        <router-link 
                            to="/p_12"
                            v-if="revealOption"
                            >
                            <button type="button" class="btn btn-primary btn-lg btn-block">Approach the mouth of the valley.
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
        name: 'p_11',
            data () {
                return {
                    roomID:'p_11',
                    searchDifficulty:1,
                    hiddenItem:{
                        isHiddenItems:true,
                        itemName:'Green Potion',
                        itemID:'gp',
                        revealText:'You found a green potion!',
                        foundItem:false
                    },
                    isHiddenOption :true,
                    revealOption :false,
                    showText:false,
                    failText:'Nothing of interest was found. Try again?',
                    userMessage:'',
                    vut:'no'
                }
            },
            
            beforeRouteLeave (to, from, next) {
                // just use `this`
                if(this.hiddenItem.foundItem == true){
                   
                    this.$store.commit('roomVisited', this.roomID);
                }
                
                //this.$store.state.roomsVisited.push(this.roomID);
                next()
            },

            created() {

                //if this room has not previously been visited then allow setup
                
                if(!this.$store.state.roomsVisited.includes(this.roomID)){
                    searchBus.$on('searchConducted', (data) =>{
                    let successInt = Math.floor(Math.random() * (this.searchDifficulty - 0 + 1)) + 0;
                    //this.$store.commit('itemFound', this.hiddenItem.itemName);
                    if(this.hiddenItem.foundItem == false){
                        if(successInt == 1){
                        this.hiddenItem.foundItem = true;
                        //listener is located in App.vue
                        itemBus.$emit('newItem', {'item': this.hiddenItem.itemName, 'itemID':this.hiddenItem.itemID});
                        //let message = this.hiddenItem.revealText
                        this.revealOption = data.isSearched;
                        this.showText = true;
                        this.userMessage = this.hiddenItem.revealText;
                        console.log('found')
                     
                    }else{
                      
                        //this.revealOption = data.isSearched;
                        this.showText = true;
                        console.log('notfound')
                        this.userMessage = this.failText;
                    
                    }
                    }
                })
            
                if(this.hiddenItem.isHiddenItems){

                //Boolean: Does the search reveal items in this room? Set global state.
                this.$store.state.searchRoom.hiddenitems =
                this.hiddenItem.isHiddenItems;

                this.$store.state.currentRoom = this.roomID;

                //Boolean: Does this room have hidden path options? Set global state.
                this.$store.state.searchRoom.hiddenoptions = this.isHiddenObject;

                //String: What text do you want to use in the output when item is found? Set global state.
                this.$store.state.searchRoom.hiddencontent.item.text = this.hiddenItem.revealText;

                //String: What is the name of the item hidden in this room? Set global state.
                this.$store.state.searchRoom.hiddencontent.item.text = this.hiddenItem.itemName;
            }

            //Boolean: If the room has hidden options
            if(this.isHiddenOption){
                this.$store.state.searchRoom.hiddenoptions = this.isHiddenOption;
            }  
        }
        //push room id to state if its not already in there

            
               
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