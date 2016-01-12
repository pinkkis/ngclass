import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MovieData} from "./movie-data";
import {RatingPipe} from "./rating-pipe";
import {Router} from "angular2/router";
import {MovieDisplay} from "./movie-display";

@Component({
    selector: "movie-list",
    templateUrl: "/app/movie/list.html",
    directives: [ROUTER_DIRECTIVES, MovieDisplay],
    pipes: [RatingPipe]
})
export class List {
    movies: Array<Movie> = [];
    
    /**
     * Movie List component
     */
    constructor(movieData: MovieData, private router: Router) {
        this.router = router;

        movieData
            .getAll()
            .subscribe(
                (movies) => this.movies = movies,
                (response) => console.log('error', response));

    }

    editMovie(id: number) {
        this.router.navigate(['Edit', { id: id }]);
    }
}