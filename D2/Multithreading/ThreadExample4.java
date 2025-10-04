//Thread Pool
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadExample4 {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.execute(() -> {
                System.out.println("Task " + taskId + " running by " + Thread.currentThread().getName());
            });
        }

        executor.shutdown();
    }
}
