import PageNotFound from './components/gamedata/404.vue'
import PlayerInit from './components/player/playerinit.vue'
import Instructions from './components/player/playerinstructions.vue'
import Instructions2 from './components/player/playerinstructions2.vue'
import Intro   from './components/dialog/intro/intro.vue'
import Intro2  from './components/dialog/intro/intro2.vue'
import Intro3  from './components/dialog/intro/intro3.vue'
import P11     from './components/dialog/chapter_one/p_11.vue'
import P12     from './components/dialog/chapter_one/p_12.vue'

export const routes = [
    { path: '*', component: PageNotFound },
    { path: '/init', component: PlayerInit},
    { path: '/instructions', component: Instructions },
    { path: '/instructions2', component: Instructions2 },
    { path: '', component: Intro},
    { path: '/intro_2', component: Intro2},
    { path: '/intro_3', component: Intro3},
    { path: '/p_11', component: P11},
    { path: '/p_12', component: P12}
];