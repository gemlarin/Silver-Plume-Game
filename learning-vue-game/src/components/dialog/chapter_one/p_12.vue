<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>The Heros First Big Decision.</h1>
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
    p{
        font-family: 'Sura', serif;
        color:#5f5f5f;
    }
    h1{
        color:#ab4646;
    }


</style>