
        <template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: The Kings Stolen Plume</h1>
                    <hr>
                    <img class="teardrop" :src="require('./../../../assets/lion-crest.png')" />
                    <p>This is the story of Dante, a strapping young Knight sent forth by King Fedora to locate and return to him the Silver Plume; a hat quill made of brilliant silver and enchanted with the magic of wisdom. By attaching the Plume to any hat (especially a fedora) the wearer will be granted the Wisdom of the Kings.</p>
                    <p>The Silver Plume had brought a great peace to the lands of Hattop and its value is unmeasurable. The Plume had been passed down from King to King to grant him the great wisdom required to rule and appease a diverse populace. Without it, Hattop will certainly fall into war as the King will be unable to conceive of peaceful solutions to everyday disputes.</p>
                    <p>Not that King Fedora is a dolt without it. Rather, the King will have to rely on the wits of the common mans brain, which history has shown to have tragic consequences for the people.</p>
                    <div id="options-nav">
                        <router-link to="/intro_2">
                            <button type="button" class="btn btn-primary btn-lg btn-block">This is damn interesting friend! Tell me more!
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
        name: 'intro',
            data () {
                return {
                    canFleeRoom:false
                }
            },
            created(){
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