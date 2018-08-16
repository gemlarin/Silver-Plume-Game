<template>
    <div class="wrap-stats">
        <h5>Name: <span class="font--mod-bold font--mod-size-large color--offwhite">{{ this.$store.state.name }}</span></h5>
        <h5>Guardian: <span class="font--mod-bold color--offwhite">{{ this.$store.state.guardian }}</span></h5>
        <br>
        
        
        <h5>Armor Rating: <span class="font--mod-bold emphasize"> +{{ this.totalarmorbonus }}</span></h5>
        <h5>Attack Damage: <span class="font--mod-bold emphasize"> {{ this.$store.state.weapon.minDamage }} - {{ getMaxDamage }}</span></h5>

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
             return this.$store.state.shield.protection + this.$store.state.armor.protection + this.$store.state.holdstat.effects.armor;
         },
         getMaxDamage: function () {
             return this.$store.state.weapon.maxDamage + this.$store.state.attackRatingBonus + this.$store.state.holdstat.effects.attack
         }
    }
}
</script>
<style scoped>
    .wrap-stats{
        background-color: #3f3e3f;
        height:140px;
        margin-left:7px;
        margin-bottom:7px;
        padding:20px;
        padding-top:15px;
    }
    .emphasize{
        color:#c0e229;
    }
    .font--mod-size-large{
        font-size:1.4em;
    }

    h5{
        font-size:14px;
        color:rgb(168, 168, 168);
    }

    span{
        color:rgb(184, 184, 184);
    }

    .color--offwhite{
        color:#e4e6d7
    }
</style>