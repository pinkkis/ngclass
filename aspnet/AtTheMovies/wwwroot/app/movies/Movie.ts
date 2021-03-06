
export interface MovieType {
    id: number,
    title: string, 
    rating: number,
    length: number
}

export class Movie implements MovieType {
    
    constructor(public id: number,
                public title: string, 
                public rating: number,
                public length: number) {
    }
    
    increaseRating() {
        if(this.rating < 5) {
           this.rating +=1;
        }
        else{
            this.rating = 1;
        }
    }
    
    decreaseRating() {
        if(this.rating > 1) {
            this.rating -= 1;
        }
        else{
            this.rating = 5;
        }
    }
    
    isGood() {
        return this.rating > 3;
    }
    
    isBad() {
        return this.rating < 3;
    }
    
}