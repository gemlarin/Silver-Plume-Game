<template>
    <div class="wrap">
        <p>Status: <span class="emphasize">{{this.$store.state.holdstat.imparement}}</span></p>
        <br />
        <div class="effects" :key="index" v-for="(value, key, index) in this.$store.state.holdstat.effects">
        {{ key }}: <span class="emphasize">{{ value }}</span>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'playerstatus',
    data () {
        return {

        }
    }
    }
</script>
<style scoped>
    p{
        font-size:14px;   
        line-height:1em;
        display:inline;
    }
    .wrap{
        margin-top:12px;
    }
     .emphasize{
        color:#37dd16;
    }
    .effects{
        display:inline;
    }
</style>