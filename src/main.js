import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'

// import FullCalendar from 'vue-full-calendar'
// Vue.use(FullCalendar)
// import 'fullcalendar/dist/fullcalendar.css'
import { setupCalendar } from 'v-calendar';



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, 
    faCartShopping, 
    faChartSimple, 
    faUser, 
    faLock, 
    faBell, 
    faMoon, 
    faCircleInfo, 
    faEllipsisVertical,
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faCartShopping, faChartSimple, faUser, faLock, faBell, faMoon, faCircleInfo, faEllipsisVertical,faAngleDown)


createApp(App).use(setupCalendar, {})
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
