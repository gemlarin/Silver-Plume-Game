
        <template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: The Kings Stolen Plume</h1>
                    <hr>
                    <p>This is the story of Dante, a strapping young Knight sent forth by King Fedora to locate and return to him the Silver Plume; a hat quill made of brilliant silver and enchanted with the magic of wisdom. By attaching the Plume to any hat (especially a fedora) the wearer will be granted the Wisdom of the Kings.</p>
                    <p>The Silver Plume had brought a great peace to the lands of Hattop and its value is unmeasurable. The Plume had been passed down from King to King to grant him the great wisdom required to rule and appease a diverse populace. Without it, Hattop will certainly fall into war as the King will be unable to conceive of peaceful solutions to everyday disputes.</p>
                    <p>Not that King Fedora is a dolt without it. Rather, the King will have to rely on the wits of the common mans brain, which history has shown to have tragic consequences for the people.</p>
                    <div class="options-nav">
                        <router-link to="/intro_2">
                            <button type="button" class="btn btn-primary btn-lg btn-block">This is damn interesting friend! Tell me more!
                            </button>
                        </router-link>
                        <router-link to="/p_11">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Enough! I've naught all day for this! Let's get moving!
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