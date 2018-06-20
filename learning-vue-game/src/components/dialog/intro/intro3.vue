<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: The Hooded Figure</h1>
                     <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
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
img{
    height:50px;
    width:auto;
    position:absolute;
    right:20px;
    top:-10px;
    opacity:.3;
}
p{
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
}
ul li {
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
    font-size:1.7em;
}
h1{
    color:#ab4646;
}
label{
  font-family: 'Kurale', serif;
  font-size:15px;
  color:#ab4646;
}

input{
  font-family: 'Sura', serif;
  width:100%;
  height:40px;
  font-size:18px;
  padding-left:10px;
  color:#333;
  border-radius:3px;
  border:1px solid #dddddd;
}  

.hline{
    display:relative;
}

.field-wrap{
    margin-top:30px;
}


</style>