function rectangle(width,height,color){
    width = Number(width);
    height = Number(height);
    color = color.charAt(0).toUpperCase() + color.slice(1);
    return {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    };
}
let rect = rectangle(4,5,'red');
console.log(rect)
console.log(rect.calcArea())
