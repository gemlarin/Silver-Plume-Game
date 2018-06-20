<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Inventory</h1>
                    <hr>
                   
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                
                    <div class="options-nav"> 
                        <button type="button" @click="goback" class="btn btn-primary btn-lg btn-block">Close bag
                        </button>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    export default {
        name: 'inventory',
            data () {
                return {
            
                }
            },
            methods:{
                //allows us to return to the previous view when the inventory is closed
                goback: function(){
                    this.$router.go(-1);
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