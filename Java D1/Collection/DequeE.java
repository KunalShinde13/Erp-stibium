import java.util.*;

public class Deque{
    public static void main(String[] args) {
        // PriorityQueue 
        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(30);
        pq.add(10);
        pq.add(20);
        System.out.println("PriorityQueue: " + pq);
        System.out.println("Poll: " + pq.poll());
        System.out.println("After Poll: " + pq);

        // ArrayDeque 
        Deque<String> dq = new ArrayDeque<>();
        dq.add("First");
        dq.add("Second");
        dq.addFirst("Zero");
        System.out.println("ArrayDeque: " + dq);
    }
}
