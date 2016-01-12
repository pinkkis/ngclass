import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MovieData} from "./movie-data";
import {RatingPipe} from "./rating-pipe";

@Component({
    selector: "movie-list",
    templateUrl: "/app/movie/list.html",
    directives: [ROUTER_DIRECTIVES],
    pipes: [RatingPipe]
})
export class List {
    movies: Array<Movie> = [];
    
    /**
     * Movie List component
     */
    constructor(movieData: MovieData) {
        //this.movies = 
        movieData
            .getAll()
            .subscribe(
                (movies) => this.movies = movies, 
                (response) => console.log('error', response));
        
    }
}