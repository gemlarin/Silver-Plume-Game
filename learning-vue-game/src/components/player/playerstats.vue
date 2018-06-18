<template>
    <div class="wrap-stats">
        <h5>Name: <span class="font--mod-bold">{{ playername }}</span></h5>
        <h5>Guardian: <span class="font--mod-bold">{{ playerguardian }}</span></h5>
        <br>
        <h5>Weapon: <span class="font--mod-bold">{{ playerweapon.type }} {{ playerweapon.itemname }} <span class="emphasize" :v-show="playerweapon.bonus"> +{{ playerweapon.bonus}}</span></span></h5>
        <h5>Shield: <span class="font--mod-bold">{{ playershield.type }} {{ playershield.itemname }}<span class="emphasize" :v-if="playershield.bonus"> +{{ playershield.bonus}}</span></span></h5>
        <h5>Armor: <span class="font--mod-bold">{{ playerarmor.type }} {{ playerarmor.itemname }}<span class="emphasize" :v-if="playerarmor.bonus"> +{{ playerarmor.bonus}}</span></span></h5>
        <h5>Armor Rating: <span class="font--mod-bold emphasize"> +{{ playerarmorrating }}</span></h5>
        <h5>Attack Rating: <span class="font--mod-bold emphasize"> +{{ playerattackrating }}</span></h5>

    </div>
</template>

<script>

export default {
  name: 'playerstats',
  props: ['playername', 'playerguardian', 'playerweapon', 'playershield', 'playerarmor', 'playergold', 'playerfood', 'playerarmorrating', 'playerattackrating'],
  data () {
    return {
        
    }
  },
     computed: {
         totalarmorbonus: function () {
             return this.playerarmorbonus + this.playerarmor.bonus + this.playershield.bonus;
         }
     }
}
</script>
<style scoped>
    .wrap-stats{
        background-color: #3f3e3f;
        height:200px;
        margin-left:7px;
        padding:20px;
    }
    .emphasize{
        color:#c0e229;
    }
    h5{
        font-size:14px;
        color:rgb(168, 168, 168);
    }

    span{
        color:rgb(184, 184, 184);
    }

</style>