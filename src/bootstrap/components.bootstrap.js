import Vue from "vue";
import NavigationComponent from "../components/NavigationComponent";
import ModalComponent from "../components/ModalComponent";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import CheckModal from "../components/CheckModal";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";

Vue.component('navigation-component', NavigationComponent);
Vue.component('modal-component', ModalComponent);
Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
Vue.component('check-modal', CheckModal);
Vue.component('success-modal', SuccessModal);
Vue.component('error-modal', ErrorModal);
