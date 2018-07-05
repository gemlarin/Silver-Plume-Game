<template>
    <div class="wrap dialog">
        <form><input type="text" hidden></form>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Journal</h1>
                    <img class="teardrop" :src="require('./../../assets/lion-crest.png')" />
                    <hr>
                        <ul>
                            <li v-for="(value, index) in                this.$store.state.journalEntries"
                                :key="index">
                                <h3>{{value.journalEntryTitle}}</h3>
                                <p>{{value.journalText}}</p>
                            </li>
                        </ul>
                    <div class="options-nav"> 
                        <button type="button" @click="goback" class="btn btn-close btn-block">Close Journal
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
  
span{
    color:#9b9999;
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
    font-family: 'Kurale', serif;
    color:#5f5f5f;
    font-size:.8em;
    max-width:550px;
}
h3{
    font-size:.7em;
}
ul{
    margin-bottom:30px;
}
ul li {
    font-family: 'Zilla Slab', serif;
    color:#5f5f5f;
    font-size:2em;
    margin:0;
    display:block;
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
  font-family: 'Zilla Slab', serif;
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


button.btn-close{
    width:auto;
    padding: 3px 20px;
    background-color:#333;
    background:#333;
    color:#fff;
    position:absolute;
    right:15px;
    top:70px
}
button:hover, html [type="button"]:hover{
    background-color:rgb(75, 74, 74);
    background:rgb(75, 74, 74)
}

</style>