<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: The Hooded Figure</h1>
                    <hr>
                    <p>
                        A farmer on the edge of town spotted a hooded figure fleeing the city shortly after the King noticed the Plume missing. The King provides you with a bag containing some bread and cheese, a flask of wine, a corked bottle with a red solution in it, a modest amount of coin, basic armor and a steel sword. You think to ask for a bit more coin for the difficulty, but the King has already been surrounded by his mass of advisors.</p>
                        
                        <p>You should probably get going.</p>
             
                    <div class="options-nav">
                        <router-link to="/p_11">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Head to the location that the hooded figure was last spotted.
                            </button>
                        </router-link>
                        <router-link to="/p_13">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Wait for the advisors to clear and ask for more coin.
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    export default {
        name: 'intro3',
            data () {
                return {

                }
            }
    }
</script>
<style scoped>
   
    a{
        text-decoration: none;
        outline: none;
    }
    p{
        font-family: 'Sura', serif;
        color:#5f5f5f;
    }
    h1{
        color:#ab4646;
    }


</style>