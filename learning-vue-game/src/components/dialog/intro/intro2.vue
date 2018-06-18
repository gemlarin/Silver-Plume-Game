<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Intro: Enter the Hero!</h1>
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
             
                    <div class="options-nav">
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