class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;

    void display() {
        System.out.println("Child x = " + x);      
        System.out.println("Parent x = " + super.x);   
    }
}

public class VariableShadowing {
    public static void main(String[] args) {
        Child c = new Child();
        c.display();
    }
}
