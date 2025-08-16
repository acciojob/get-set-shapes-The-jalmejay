//complete this code
class Rectangle {
	constractor(width,height){
		this._width;
		this._height;
	}
	get width(){
		return this._width;
	}
	get heigth(){
		return this.heigth;
	}

	getArea(){
		return (this._heigth*this._width);
	}
}

class Square extends Animal {
	constractor(width,heigth){
		super(width,heigth)
	}
	getPerimeter(){
		return (4*this.width)
	}
}
// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
