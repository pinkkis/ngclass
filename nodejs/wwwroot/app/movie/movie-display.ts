import {Component, OnInit,Input, Output, EventEmitter} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RatingPipe} from "./rating-pipe";
import {Movie, MovieType} from "./movie";

@Component({
    selector: "movie-display",
    templateUrl: "/app/movie/movie-display.html",
    directives: [ROUTER_DIRECTIVES],
    pipes: [RatingPipe]
})
export class MovieDisplay implements OnInit {
    @Input('movie') movie: MovieType;
    @Output() editMovie: EventEmitter<{}> = new EventEmitter();
    
    ngOnInit() {
        console.log('component init');
    }
    
    edit() {
        this.editMovie.emit({id: this.movie.id});
    }
}