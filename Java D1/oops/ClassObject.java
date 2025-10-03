// class and object 
class Car {
    String brand;
    int year;
    void displayInfo() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}
public class ClassObject {
    public static void main(String[] args) {
        Car car1 = new Car();  
        car1.brand = "Tesla";
        car1.year = 2025;
        car1.displayInfo();

        Car car2 = new Car();
        car2.brand = "BMW";
        car2.year = 2023;
        car2.displayInfo();
    }
}
