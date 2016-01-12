import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {List} from "./movie/list";
import {About} from "./about/about";
import {Movie} from './movie/movie';
import {Detail} from "./movie/detail";
import {Edit} from "./movie/edit";
import "rxjs/add/operator/map";

@Component({
    selector: 'movie-app',
    templateUrl: '/app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", name: "List", component: List, useAsDefault: true },
    { path: "/about", name: "About", component: About },
    { path: "/detail/:id", name: "Detail", component: Detail },
    { path: "/edit/:id", name: "Edit", component: Edit },
])
export class MovieApp {
    /**
     * Main app
     */
    title: string;
    today: Date;

    constructor() {
        this.title = "At the Movies";
        this.today = new Date();
    }
}