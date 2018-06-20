<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Heros First Big Decision.</h1>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                    <p>
                        There are only two ways that the theif could have escaped the Valley of the Kings Castle. The high craggy trail, and the graceful sloping valley floor. Maybe some people along the way saw something. Be sure to ask around and search for clues. The fate of world peace depends on your success.
                    </p>
                    <p class="hidden">You notice a cave enterance</p>
                    <div class="options-nav">
                        <router-link to="/p_13">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Take the high path through the crags.
                            </button>
                        </router-link>
                        <router-link to="/p_14">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Take the leisurely stroll through the sloping valley.
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
        name: 'p_12',
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