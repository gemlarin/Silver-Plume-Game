<template>
    <div class="wrap dialog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>How to Play</h1>
                    <hr>
                        <div class="row">
                            <div class="col-12">
                                <h2>Game instructions:</h2>
                                
                                <h3>The Interface</h3>
                                <ul>
                                    <li><span>Name:</span> This is the name you assigned your avatar at the beginning of gameplay.</li>
                                    <li>Guardian: Your guardian is your choice. Your guardian watches over your progress lending advice and offering healing. Your guardian is usually quite busy, so don't expect assistance more than once every game day (1 hour cooldown)</li>
                                    <li>Status: Your heros surrent physical status. Bonuses and banes applied are listed below the status.</li>
                                    <li>Weapon: The weapon you are currently weilding. It's damage rating is listed next to the weapon name.</li>
                                    <li>Shield: The shield you are currently holding, plus its armore rating.</li>
                                    <li>Armor: The armor you are currently holding, plus its armore rating.</li>
                                    <li>Armor Rating: Your combined armor rating includes all armor ratings plus any bonuses or banes applied to your player status.</li>
                                    <li>Attack Rating: Your combined attack rating includes your weapon rating plus any bonuses or banes applied to your player status.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
  name: 'playerinstructions2',
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
ul li {
    font-family: 'Sura', serif;
    color:#5f5f5f;
    font-size:1.7em;
}
span{
    font-weight:700;
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

.field-wrap{
    margin-top:30px;
}
</style>