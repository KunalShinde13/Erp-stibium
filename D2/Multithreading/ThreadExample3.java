//Anonymous Inner Class
public class ThreadExample3 {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            System.out.println("Anonymous thread running");
        });
        t1.start();
    }
}
