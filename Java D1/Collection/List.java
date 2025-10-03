import java.util.*;  // Import collection classes

public class List {
    public static void main(String[] args) {
        // ArrayList Example
        List<String> names = new ArrayList<>();
        names.add("Kunal");
        names.add("Amit");
        names.add("Kunal"); // duplicate allowed
        System.out.println("ArrayList: " + names);

        // LinkedList Example
        List<Integer> numbers = new LinkedList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        System.out.println("LinkedList: " + numbers);

        // Vector Example
        Vector<String> vec = new Vector<>();
        vec.add("Java");
        vec.add("Python");
        System.out.println("Vector: " + vec);

        // Stack Example
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println("Stack: " + stack);
        stack.pop();
        System.out.println("After Pop: " + stack);
    }
}
