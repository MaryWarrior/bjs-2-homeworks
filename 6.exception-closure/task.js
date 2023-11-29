function parseCount(value){
    $parsValue = Number.parseFloat(value);
    if(Number.isNaN($parsValue)){
        throw new Error("Невалидное значение");
    } else return $parsValue;
}

function validateCount(value){
    try{
        return parseCount(value);
    } catch (error){
        return error;
    }
}

class Triangle{
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter(){
        return (this.sideA + this.sideB + this.sideC);
    }

    get area(){
        const p = this.perimeter / 2;
        return Number(((p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) ** 0.5).toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch(error) {
        return{
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}