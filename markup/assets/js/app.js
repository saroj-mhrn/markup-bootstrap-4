import './global.js'
import 'bootstrap'

import * as Helper from './classes/Helpers'

$(document).ready(function($){
    Helper.MobileNav();
    Helper.OpenClose();
    Helper.Tabs();
});