class PrintEditionItem{
    constructor(name, releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }


    fix() {
        this.state = this._state * 1.5;
    }

    set state(value){
        if(value < 0){
            this._state = 0;
            return;
        } 
        if(value > 100){
            this._state = 100;
            return;
        } 
        this._state = value;
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate,pagesCount){
        super(name, releaseDate,pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author,name, releaseDate,pagesCount){
        super(name, releaseDate,pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author,name, releaseDate,pagesCount){
        super(author,name, releaseDate,pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author,name, releaseDate,pagesCount){
        super(author,name, releaseDate,pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author,name, releaseDate,pagesCount){
        super(author,name, releaseDate,pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName){
        let book = this.findBookBy('name', bookName);
        if(book){
            this.books.splice(this.books.indexOf(book),1);
            return book;
        } else return null;
    }
}

class Student {
    constructor(name){
        this.name = name;
        this.marks = ({});
    }

    addMark(mark, subject){
       if(mark < 2 || mark > 5){
        console.error("Оценка должна быть  быть не меньше 2 и не больше 5");
        return;
       }

       if(!this.marks[subject]){
        this.marks[subject] = [];
       }

       this.marks[subject].push(mark);
    }

    getAverageBySubject(subject){
        if(!this.marks[subject]){
            console.error("По введеному предмету нет оценок");
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        const average = sum / this.marks[subject].length;
        console.log('Средний бал по предмету '+ subject + ' составляет ' + average);
        return average;
    }

    getAverage(){
        const subject = Object.keys(this.marks);

        if(subject.length == 0){
            console.log("Нет оценок по предметам для подсчета среднего");
            return 0;
        }

        const totalSum = subject.reduce((acc,subject) => {
            return acc + this.getAverageBySubject(subject);
        },0);

        const totalAverage = totalSum / subject.length;
        console.log('Средний бал по всем предметам '+ totalAverage);
        return totalAverage;
    }
}