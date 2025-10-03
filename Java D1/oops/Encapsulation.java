class Student {
    private String name;
    private int age;

    // getter for name
    public String getName() {
        return name;
    }
    // setter for name
    public void setName(String name) {
        this.name = name;
    }

    // getter for age
    public int getAge() {
        return age;
    }


    // setter for age
    public void setAge(int age) {
        if (age > 0) {  // validation
            this.age = age;
        } else {
            System.out.println("Age must be positive!");
        }
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Student s1 = new Student();
       
        s1.setName("Kunal");
        s1.setAge(21);

        System.out.println("Student Name: " + s1.getName());
        System.out.println("Student Age: " + s1.getAge());
    }
}
