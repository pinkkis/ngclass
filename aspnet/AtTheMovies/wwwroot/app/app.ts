import {Component} from "angular2/core";
import {List} from "./movies/list";
import {About} from "./about/about";
import {Detail} from "./movies/detail";
import {Edit} from "./movies/edit";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import "rxjs/add/operator/map";

@Component({
    selector: "movie-app",    
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", component:List, name: "List", useAsDefault:true},
    { path: "/about", component:About, name:"About"},
    { path:"/detail/:id", component:Detail, name:"Detail"},
    { path: "/edit/:id", component: Edit, name: "Edit"}
])
export class MovieApp {
    public title: string = "At The Movies!";
    public today: Date = new Date();
}