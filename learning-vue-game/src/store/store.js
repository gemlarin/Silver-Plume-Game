import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        turns:[{
            isPlayer:true,
            message:''
        }],
        armorrating: "",
        attackrating:"",
        hitValNoBonuses:0,//set inside player actions when player attacks
        attackRatingBonus:0, //benefits from using potions and items found
        name: 'Sir Dante',
        disableAllInputs:false,
        playersex:'male',//not used right now
        guardian: "Rahtesh",
        weapon: {
            type:"Steel",
            itemname:"Sword",
            bonus:"",
            maxDamage:2,
            minDamage:1
        },
        shield: {
            type:"Steel",
            itemname:"Shield",
            protection:1,
            bonus:""
        },
        armor: {
            type:"Silver",
            itemname:"Armor",
            protection:1,
            bonus:""
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
            drunk: {
                imparement:"drunk",
                length:10,
                effects:{
                    basehealth:20,
                    armor:1,
                    attack:-1
                }
            },
            poisoned: {
                imparement:"poisoned",
                length:3000,
                effects:{
                    basehealth:15,
                    armor:0,
                    attack:-1
                }
            },
            dizzy: {
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
        activestatus:'normal',
        //holdstat is the selected status object. It contains the current status effects and impairment
        holdstat:{},
        maxhealth:20, //max health allowed
        newDamage: 0, //amount of incoming damage
        currentHealth:20, //self explainatory
        adjustedDamage:0, //incoming damage after armor and mods
        condition:'none', //status condition
        praydisabled: false, //pray toggle
        newMana: 20, //starting mana
        currentMana: 20, //self explainatory
        foundItem:false,//if the item in the room is found or not
        usedMana: 0, //amount of mana used by spell
        minHealOnPray:3, //the minimum amount that you can heal on pray
        maxHealOnPray:10, //the minimum amount that you can heal on pray
        prayerTimer:3600000, //prayer cooldown time
        monster:{
            monsterHitDamage:4,
            monsterHealth:10,
            monstername:'Bubba',
            monsterTest:'',
            monsterDiedText:'',
            monsterDeadtext:''
        },
        maxMonsterHitDamage:0,
        currentOverlandMap:'',
        monsterRemainingHealth:0,
        attackEnabled:false, //if the atttack button is enabled or not
        playerInventory:[],//items that are usable via activation
        playerItemsWorn:[],//items that the player has on. Set in Player.vue
        itemUsed:'',
        //new rooms visited are pushed automatically from the page view if the hidden stuff has been found from within that component file.
        roomsVisited:[],//all of the rooms that have been visited
        roomsWithItemsFound:[],//the rooms that items have been found inside of already
        roomsWithMonstersSlain:[], //the rooms that the monster has been slain in
        journalEntries:[],//pushing in the text from 
        currentRoom:'',//the room you are currently in
        //searchRoom state data is set automatically from the page view as soon as the page loads
        canFleeRoom:false,
        searchEnabled:true,
        searchRoom:{
            //if this room actually contains any items
            hiddenitems: false,
            //if alt options are revealed upon search
            hiddenoptions: true,
            //the content of this room
            hiddencontent: {
                //the hidden item object
                item:{
                    name:'',
                    text:''
                }
            }
            
        }
    },
    mutations:{
        setOverworldMap(state, mapid){
            state.currentOverlandMap = mapid;
        },
        journalEntry(state, entry){
            state.journalEntries.push(entry);
        },
        itemUsed(state, index){
            state.playerInventory.splice(index, 1);
        },
        itemFound(state, item){
            state.playerInventory.push(item);
        },
        itemWorn(state, item){
            state.playerItemsWorn.push(item);
        },
        canFleeRoom(state, data){
            state.canFleeRoom = data;
        },
        eatFood(state, eat){
            if(state.food > 0 && eat){
                state.food = state.food -1
            }
        },
        roomVisited(state, room){
            state.roomsVisited.push(room);
        },
        roomsWithItemsFound(state, room){
            state.roomsWithItemsFound.push(room);
        },
        roomsWithMonstersSlain(state, room){
            state.roomsWithMonstersSlain.push(room);
        },
        enableSearch(state, val){
            state.searchEnabled = val;
        },
        setMonster(state, monster){
            var monsterPayload = monster;
            state.monster.monsterHitDamage = monsterPayload.monsterHitDamage;
            state.monster.monsterHealth = monsterPayload.monsterHealth;
            state.monster.monsterName = monsterPayload.monsterName;
            state.maxMonsterHitDamage = monsterPayload.monsterHitDamage;
            state.monster.monsterText = monsterPayload.monsterText;
            state.monster.monsterDiedText = monsterPayload.monsterDiedText; 
            state.monster.monsterDeadtext = monsterPayload.monsterDeadtext;
            console.log("HAS____MONSTER____!!!");
            console.log("monsterHitDamage",state.monster.monsterHitDamage);
            console.log("monsterHealth",state.monster.monsterHealth);
            console.log("monstername",state.monster.monsterName);
        },
        updateStatus(state, status){
            //normal modifier
            state.activestatus = status;

           if(state.activestatus === 'normal'){
            
               state.armorrating = state.status.normal.effects.armor + state.shield.protection + state.armor.protection;
               state.attackrating = state.weapon.maxDamage + state.status.normal.effects.attack
               state.holdstat = state.status.normal
           }
           //drunk modifier
           if(state.activestatus === 'drunk'){
               state.armorrating= state.status.drunk.effects.armor + state.shield.protection + state.armor.protection;
               state.attackrating = state.weapon.protection + state.status.drunk.effects.attack
               state.holdstat = state.status.drunk
           }
           //poisoned modifier
           if(state.activestatus === 'poisoned'){
               state.armorrating = state.status.poisoned.effects.armor + state.shield.protection + state.armor.protection;
               state.attackrating = state.weapon.protection + state.status.poisoned.effects.attack
               state.holdstat = state.status.poisoned
           }
           //dizzy modifier
           if(state.activestatus === 'dizzy'){
               state.armorrating = state.status.dizzy.effects.armor + state.shield.protection + state.armor.protection;
               state.attackrating = state.weapon.protection + state.status.dizzy.effects.attack
               state.holdstat = state.status.dizzy
           }
              
        },

        updateName (state, name) {
            state.name = name
        },
        updateDiety (state, guardian) {
            state.guardian = guardian
        },
        updateTurnsLog (state, text) {
            state.turns.push(text);
        },
        updateArmorRating (state, armorrating) {
            state.armorrating = armorrating;
        },
        updateAttackRating (state, attackrating) {
            state.armorrating = attackrating;
        }
        
    },
    getters:{
       
    }
})