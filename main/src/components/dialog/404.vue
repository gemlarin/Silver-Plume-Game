
        <template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>404 OOPS</h1>
                    <hr>
                    <p>Sorry Partner. There is nothing here.</p>
                    <div class="options-nav">
                        <router-link to="/intro_2">
                            <button type="button" class="btn btn-primary btn-lg btn-block">This is damn interesting sailor! Tell me more!
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
        },
        created(){
            this.$store.state.disableAllInputs = true;
        },
        beforeRouteLeave (to, from, next) {
            this.$store.state.disableAllInputs = false;
            //this.$store.state.roomsVisited.push(this.roomID);
            next()
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
        color:#929292;
    }

</style>