<template>
    <div class="wrap-stats">
        <h5>Name: <span class="font--mod-bold">{{ this.$store.state.name }}</span></h5>
        <h5>Guardian: <span class="font--mod-bold">{{ this.$store.state.guardian }}</span></h5>
        <br>
        <h5>Weapon: <span class="font--mod-bold">{{ this.$store.state.weapon.type }} {{ this.$store.state.weapon.itemname }} <span class="emphasize" :v-show="this.$store.state.weapon.bonus"> +{{ this.$store.state.weapon.bonus}}</span></span></h5>
        <h5>Shield: <span class="font--mod-bold">{{ this.$store.state.shield.type }} {{ this.$store.state.shield.itemname }}<span class="emphasize" :v-if="this.$store.state.shield.bonus"> +{{ this.$store.state.shield.bonus}}</span></span></h5>
        <h5>Armor: <span class="font--mod-bold">{{ this.$store.state.armor.type }} {{ this.$store.state.armor.itemname }}<span class="emphasize" :v-if="this.$store.state.armor.bonus"> +{{ this.$store.state.armor.bonus}}</span></span></h5>
        <h5>Armor Rating: <span class="font--mod-bold emphasize"> +{{ this.$store.state.armorrating }}</span></h5>
        <h5>Attack Rating: <span class="font--mod-bold emphasize"> +{{ this.$store.state.attackrating }}</span></h5>

    </div>
</template>

<script>

export default {
  name: 'playerstats',
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