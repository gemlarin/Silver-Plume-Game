

<template>

    <div class="row">
        <div class="col-12">
            <button style="position:relative;z-index:300" @click="hideHiddenDoor('secretdoor_p12')">hide secret</button>
            <button style="position:relative;z-index:300" @click="showHiddenDoor('secretdoor_p12')">show secret</button>
            <button style="position:relative;z-index:300" @click="openDoor('door_horizontal_p11')">Open Door</button>
            <button style="position:relative;z-index:300" @click="closeDoor('door_horizontal_p11')">Close Door</button>

            <div id="scaling-svg-container">
                    <svg version="1.1" id="scaling-svg" class="scaling-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 800 650" style="enable-background:new 0 0 800 650;" xml:space="preserve">
                    <rect id="p_11" x="177" y="560" class="st0" width="50" height="50"/>
                    <rect id="p_12" x="177" y="510" class="st0 active-room" width="50" height="50"/>
                    <rect id="door_horizontal_p11" x="194" y="557.5" width="16" height="5"/>
                    <path id="secretdoor_p12" d="M223.2,537c0.7,0.4,1.7,0.8,2.8,0.8c1.6,0,2.6-0.9,2.6-2.1c0-1.1-0.7-1.8-2.3-2.4c-2-0.7-3.2-1.7-3.2-3.5
                        c0-1.9,1.6-3.3,4-3.3c1.3,0,2.2,0.3,2.7,0.6l-0.4,1.3c-0.4-0.2-1.2-0.6-2.3-0.6c-1.7,0-2.3,1-2.3,1.8c0,1.1,0.7,1.7,2.4,2.4
                        c2.1,0.8,3.1,1.8,3.1,3.6c0,1.9-1.4,3.5-4.3,3.5c-1.2,0-2.5-0.3-3.1-0.8L223.2,537z"/>
                    <rect id="door_verticle_p12" x="169" y="531.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 711 357)" width="16" height="5"/>
                    </svg>
            </div>
            
        </div>
    </div>
</template>

<script>
    import { TimelineLite, CSSPlugin, AttrPlugin }  from './../../../node_modules/gsap/all.js';
    import { searchBus } from './../../main.js';
    import { itemBus } from './../../main.js';
    import { slayBus } from './../../main.js';

    export default {
        name: 'mapview',
        data () {
            return {
               isHiddenDoorFound:true
            }
        },
        computed:{
      
        },
        
    
        methods:{
            p_11(){
                var tl = new TimelineLite();
                tl.to("#p_11", 1, {attr:{stroke:'red'}})
            },

            //hide hidden doors
            hideHiddenDoor(div) {
                var element = document.getElementById(div);
                // Instead of .addClass("newclass")
                element.setAttribute("class", "doorHidden");
            },
            //show hidden doors
            showHiddenDoor(div) {
                var element = document.getElementById(div);
                // Instead of .addClass("newclass")
                element.removeAttribute("class", "doorHidden");
            },
            closeDoor(div) {
                 var door = document.getElementById("door_horizontal_p11"); 
                door.style.fill="black";
            },
             openDoor(div) {
                var door = document.getElementById("door_horizontal_p11"); 
                door.style.fill="white";
            }

            
        }
    }

</script>
<style scoped>
    .st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10};
    #scaling-svg-container {
    position: relative; 
    height: 0; 
    width: 100%; 
    padding: 0;
    padding-bottom: 100%; 
    /* override this inline for aspect ratio other than square */
    }
    #scaling-svg {
        position: absolute;
        max-height:660px ;
        width:auto;
        left: 0; 
        top: 0;
        }

   #map-wrap{
        position: relative; 
        height: 0; 
        width: 100%; 
        padding: 0;
        padding-bottom: 100%; 
   }
   .active-room{
       fill:rgb(204, 241, 135);
       stroke:black;
   }
 
    #p_11{
        fill:white;
    }

    #p_11:hover{
        fill:rgb(230, 200, 102);
        stroke:black;
    }

    /*doors*/

    #secretdoor_p12{
        display:initial;
    }

    .doorHidden{
        display:none !important;
    }
    .doorShown{
        display:initial !important;
    }
    .doorClosed{
        fill:black;
    }

    .doorOpen{
         fill:red;
        stroke:red;
    }

</style>