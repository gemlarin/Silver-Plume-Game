<template>
    <div class="wrap">
    <div class="ornament--left"><img class="avatar" :src="require('./../../assets/left-ornament.svg')" /></div>
    <router-view></router-view>
    <div class="ornament--right"><img class="avatar" :src="require('./../../assets/right-ornament.svg')" /></div>
    </div>
</template>

<script>
    export default {
        name: 'dialog',
            data () {
                return {

                }
            }
    }
</script>
<style scoped>
    .wrap{
        position:relative;
    }
    .ornament--left{
        position: absolute;
        height: auto;
        width: 25px;
        z-index: 200;
        left: -20px;
        opacity: 1;
        top:40%;

    }

    .ornament--right{
        position:absolute;
        height:auto;
        width: 25px;
        z-index: 200;
        bottom:0px;
        opacity: 1;
        right:5px;
        top:40%;
    }
</style>