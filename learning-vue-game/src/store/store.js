import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
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
        //holdstat is the selected status object
        holdstat:{},
        maxhealth:20,
        newDamage: 0,
        currentHealth:20,
        newMana: 20,
        currentMana: 20,
        usedMana: 0
    },
    mutations:{
        updateName (state, name) {
            state.name = name
        },
        updateDiety (state, guardian) {
            state.guardian = guardian
        }
    },
    getters:{
       
    }
})