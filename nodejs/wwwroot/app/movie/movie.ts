export interface MovieType {
    id: number;
    title: string;
    rating: number;
    year: number;
}

export class Movie implements MovieType {
    title: string;
    rating: number;
    year: number;
    id: number;
    
    /**
     * Movie model
     */
    constructor(id: number, title: string, rating: number, year: number) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.year = year;       
    }
    
    increaseRating(event: Event) {
        event.stopPropagation();
        
        if (this.rating < 5) {
            this.rating += 1;
        }
    }
    
    decreaseRating(event: Event) {
        event.stopPropagation();
        
        if (this.rating > 1) {
            this.rating -= 1;
        }
    }
    
    isGood() {
        return this.rating > 3;
    }
    
    isBad() {
        return this.rating < 3
    }
}