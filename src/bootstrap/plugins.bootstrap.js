import Vue from "vue";
import HttpService from "../services/http.service";
import FormDataService from "../services/form-data.service";
import HandlerService from "../services/handler.service";
import JWT from "../services/jwt-token.service";
import {
    ButtonPlugin, CardPlugin,
    OverlayPlugin,
    CollapsePlugin,
    FormFilePlugin,
    PaginationPlugin,
    FormCheckboxPlugin,
    FormPlugin, FormGroupPlugin,
    FormInputPlugin, NavbarPlugin, NavPlugin, FormTextareaPlugin,
    FormDatepickerPlugin, TabsPlugin,
    TablePlugin,
    ListGroupPlugin, LayoutPlugin, ModalPlugin, InputGroupPlugin, FormRadioPlugin, SidebarPlugin
} from "bootstrap-vue";
const VueInputMask = require('vue-inputmask').default;

Vue.use(VueInputMask);
Vue.use(HttpService);
Vue.use(FormDataService);
Vue.use(HandlerService);
Vue.use(JWT);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(ListGroupPlugin);
Vue.use(InputGroupPlugin);
Vue.use(CollapsePlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(TabsPlugin);
Vue.use(TablePlugin);
Vue.use(FormFilePlugin);
Vue.use(PaginationPlugin);
Vue.use(OverlayPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(SidebarPlugin);
