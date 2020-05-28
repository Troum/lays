import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEnvelope, faPhone, faTimes, faMinus, faPlus, faChevronUp,
    faPlay, faPauseCircle, faChalkboard, faArrowsAltH, faUser, faCamera, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faEnvelope, faPhone,
    faFacebookF, faInstagram,
    faTelegramPlane, faTimes, faMinus, faPlus, faCaretDown,
    faPlay, faPauseCircle, faUser, faCamera,
    faChalkboard, faChevronUp, faArrowsAltH);
