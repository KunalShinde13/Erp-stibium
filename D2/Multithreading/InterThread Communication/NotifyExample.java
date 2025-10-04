class Shared {
    synchronized void printMessage(String message) {
        System.out.println(Thread.currentThread().getName() + " waiting...");
        try {
            wait(); // all threads wait
        } catch (InterruptedException e) {}
        System.out.println(Thread.currentThread().getName() + " received: " + message);
    }
    synchronized void sendNotification() {
        System.out.println("Notifier sending signal to ONE thread...");
        notify(); // wakes up only one thread
    }
}
public class NotifyExample {
    public static void main(String[] args) throws InterruptedException {
        Shared shared = new Shared();
        Thread t1 = new Thread(() -> shared.printMessage("Hello"), "Thread-1");
        Thread t2 = new Thread(() -> shared.printMessage("Hi"), "Thread-2");
        t1.start();
        t2.start();
        Thread.sleep(2000);
        shared.sendNotification();
    }
}
