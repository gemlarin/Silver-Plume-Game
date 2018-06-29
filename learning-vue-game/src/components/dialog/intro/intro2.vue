<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: Enter the Hero!</h1>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <hr>
                    <p>
                        The King needed a hero. And not just any strapping young adreneline junkie would do. The list of requierments was long. But most importantly, the mind needed to match the brawn as the Plume thief was likely to have stuck it in his or her cap already! The trip would be frought with danger best avoided by your superior wit.
                    </p>
                    <p>
                        Is it just an old lady, or something far more nefarious? What is that glint in the back of that spider infested  cavern? That sure is an interesting looking potion! 
                    </p>
                        <p>Trepidation may equal safety -- or it may mean missed opportunity! These decisions are yours to make Sir Dante! </p>
                    <p>
                        So, step forth young hero and accept the challenge of the missing mythical Silver Plume!
                    </p>
             
                    <div id="options-nav">
                        <router-link to="/intro_3">
                            <button type="button" class="btn btn-primary btn-lg btn-block">I will return with the Silver Plume or not at all!
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
        name: 'intro2',
                data () {
                return {
                    canFleeRoom:false,
                    overworldMapToDisplay:'overlandmap_p10.png'
                }
            },
            created(){
                this.$store.commit('setOverworldMap', this.overworldMapToDisplay);
                this.$store.state.disableAllInputs = true;
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