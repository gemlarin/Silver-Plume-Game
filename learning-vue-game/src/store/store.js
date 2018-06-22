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
        name: 'Sir Dante',
        playersex:'male',
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
        monster:{
            monsterHitDamage:4,
            monsterHealth:10,
            monstername:'Sailor'
        },
        playerInventory:[],
        //new rooms visited are pushed automatically from the page view as soon as the page loads
        roomsVisited:[],
        currentRoom:'',
        //searchRoom state data is set automatically from the page view as soon as the page loads
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
        itemFound(state, item){
            state.playerInventory.push(item);
        },
        roomVisited(state, room){
            state.roomsVisited.push(room);
        },
        updateStatus(state, status){
            //normal modifier
            state.activestatus = status;

           if(state.activestatus === 0){
               state.armorrating = state.status.normal.effects.armor + state.shield.bonus + state.armor.bonus;
               state.attackrating = state.weapon.bonus + state.status.normal.effects.attack
               state.holdstat = state.status.normal
           }
           //drunk modifier
           if(state.activestatus === 1){
               state.armorrating= state.status.one.effects.armor + state.shield.bonus + this.$store.state.armor.bonus;
               state.attackrating = state.weapon.bonus + state.status.one.effects.attack
               state.holdstat = state.status.one
           }
           //poisoned modifier
           if(state.activestatus === 2){
               state.armorrating = state.status.two.effects.armor + state.shield.bonus + state.armor.bonus;
               state.attackrating = state.weapon.bonus + state.status.two.effects.attack
               state.holdstat = state.status.two
           }
           //dizzy modifier
           if(state.activestatus === 3){
               state.armorrating = state.status.three.effects.armor + state.shield.bonus + state.armor.bonus;
               state.attackrating = state.weapon.bonus + state.status.three.effects.attack
               state.holdstat = state.status.three
           }
              
        },

        updateName (state, name) {
            state.name = name
        },
        updateDiety (state, guardian) {
            state.guardian = guardian
        },
        updateTurnsLog (state, text) {
            state.turns.unshift(text);
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