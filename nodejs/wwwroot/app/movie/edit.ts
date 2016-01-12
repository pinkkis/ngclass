import {Component, OnInit} from "angular2/core";
import {FORM_DIRECTIVES, AbstractControl, Control, NgForm, FormBuilder, ControlGroup} from "angular2/common";
import {Router, RouteParams} from "angular2/router";
import {Movie} from "./movie";
import {MovieData} from "./movie-data";

@Component({
    selector: "movie-edit",
    templateUrl: "/app/movie/edit.html",
    directives: [FORM_DIRECTIVES]
})
export class Edit implements OnInit{
    
    id: number;
    title: Control;
    rating: Control;
    year: Control;
    
    movie: Movie;
    editForm: ControlGroup;
    result: any;
    
    /**
     * Edit form component
     */
    constructor(params: RouteParams, private movieData: MovieData, private router: Router, builder: FormBuilder) {
        this.movieData = movieData;
        
        this.editForm = builder.group({
            id: [-1],
            title: [""],
            rating: [1],
            year: [1999]
        });
        
        this.title = this.editForm.controls['title'] as Control;
        this.rating = this.editForm.controls['rating'] as Control;
        this.year = this.editForm.controls['year'] as Control;
        this.id = parseInt(params.get("id"));

    }
    
    ngOnInit() {
        this.movieData
            .getById(this.id)
            .subscribe(
                (m) => {
                    this.title.updateValue(m.title);
                    this.rating.updateValue(m.rating);
                    this.year.updateValue(m.year);
                },
                (e) => console.log('error', e));
    }
    
    submit() {
        let mov = new Movie(this.id, this.title.value, this.rating.value, this.year.value);
        
        this.movieData
            .update(mov)
            .subscribe(
                () => {
                    this.router.navigate(['Detail', {id: this.id}]);
                },
                error => console.log(error)
            )
        
    }
}