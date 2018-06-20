<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Valley.</h1>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                    <p>
                        
                    </p>
                    <div class="options-nav">
                        <router-link to="/p_12">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Approach the mouth of the valley.
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
        name: 'p_11',
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