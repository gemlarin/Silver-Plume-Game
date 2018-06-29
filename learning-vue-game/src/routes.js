import PageNotFound from './components/gamedata/404.vue'
import Inventory from './components/dialog/inventory.vue'
import PlayerInit from './components/player/playerinit.vue'
import Map from './components/gamedata/map.vue'
import Instructions from './components/player/playerinstructions.vue'
import Instructions2 from './components/player/playerinstructions2.vue'
import Intro from './components/dialog/intro/intro.vue'
import Intro2 from './components/dialog/intro/intro2.vue'
import Intro3 from './components/dialog/intro/intro3.vue'
import P11 from './components/dialog/chapter_one/the_valley_p_11.vue'
import P12 from './components/dialog/chapter_one/the_heros_big_decision_p_12'

export const routes = [
    { path: '*/index.html', component: PlayerInit },
    { path: '*', component: PageNotFound },
    { path: '/inventory', component: Inventory },
    { path: '/', component: PlayerInit},
    { path: '', component: PlayerInit},
    { path: '/map', component: Map },
    { path: '/instructions', component: Instructions },
    { path: '/instructions2', component: Instructions2 },
    { path: '/intro_1', component: Intro},
    { path: '/intro_2', component: Intro2},
    { path: '/intro_3', component: Intro3},
    { path: '/the_valley_p_11', component: P11},
    { path: '/the_heros_big_decision_p_12', component: P12}
];