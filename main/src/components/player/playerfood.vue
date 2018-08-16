<template>
<div class="wrap">
    <img class="food" :src="require('./../../assets/player-food.svg')" />
    <label>{{ this.$store.state.food }}</label>
</div>
</template>

<script>

export default {
  name: 'playerfood',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
    .food{
        height:22px;
        width:auto;
        display:inline-block;
        position:absolute;
        left:-10px;
        top:-2px;
    }
    .wrap{
        width:auto;
        text-align:left;
        margin-left:10px;
        margin-top:22px;
        position:relative;
    }
    label{
        font-size:14px;
        position:absolute;
        left:14px;
        top:0;
    }
</style>

