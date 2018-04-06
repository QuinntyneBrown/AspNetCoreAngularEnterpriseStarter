"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var olympic_winners_page_component_1 = require("./olympic-winners/olympic-winners-page.component");
exports.ROUTES = [
    {
        path: '',
        component: olympic_winners_page_component_1.OlympicWinnersPageComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.ROUTES.slice(), { useHash: false });
//# sourceMappingURL=app-routing.module.js.map