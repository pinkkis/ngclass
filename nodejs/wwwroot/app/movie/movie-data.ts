import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Movie, MovieType} from "./movie";

let componentBaseUrl = '/api/movies';

@Injectable()
export class MovieData {
    /**
     * Movie Data service
     */
    private movies: Array<MovieType> = [];
    componentBaseUrl: string;
    
    constructor(private http: Http) {
        this.http = http;
    }
    
    update(movie: MovieType) {
        let options = new RequestOptions();
        options.headers = new Headers();
        
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Accept', 'application/json');
        
        return this.http.put(`${componentBaseUrl}`, JSON.stringify(movie), options);
    }
    
    getAll() {
        return this.http.get(`${componentBaseUrl}`)
            .map(response => response.json())
            .map(json => 
                json.map(m => 
                    new Movie(m.id, m.title, m.rating, m.year)));
    }
    
    getById(id: number) {
        return this.http.get(`${componentBaseUrl}/${id}`)
            .map(response => response.json())
            .map(data => {
                let movie = new Movie(data.id, data.title, data.rating, data.year);
                return movie;
            });
    }
}