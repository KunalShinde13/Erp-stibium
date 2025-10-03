
abstract class Shape {
    abstract double calculateArea();

    void displayMessage() {
        System.out.println("This is a shape calculator");
    }
}

// Rectangle class
class Rectangle extends Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double calculateArea() {
        return length * width;
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return 3.1416 * radius * radius;
    }
}

public class ShapeCalculator {
    public static void main(String[] args) {
        Shape rect = new Rectangle(10, 5);
        Shape circ = new Circle(7);

        rect.displayMessage();
        System.out.println("Rectangle area: " + rect.calculateArea());

        circ.displayMessage();
        System.out.println("Circle area: " + circ.calculateArea());
    }
}
