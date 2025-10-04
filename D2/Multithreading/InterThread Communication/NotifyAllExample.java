class SharedAll {
    synchronized void waitForSignal() {
        System.out.println(Thread.currentThread().getName() + " waiting...");
        try {
            wait();
        } catch (InterruptedException e) {}
        System.out.println(Thread.currentThread().getName() + " resumed after notifyAll()");
    }
    synchronized void sendSignal() {
        System.out.println("Notifier sending signal to ALL waiting threads...");
        notifyAll(); 
    }
}
public class NotifyAllExample {
    public static void main(String[] args) throws InterruptedException {
        SharedAll shared = new SharedAll();
        Thread t1 = new Thread(shared::waitForSignal, "Thread-A");
        Thread t2 = new Thread(shared::waitForSignal, "Thread-B");
        Thread t3 = new Thread(shared::waitForSignal, "Thread-C");
        t1.start();
        t2.start();
        t3.start();
        Thread.sleep(2000);
        shared.sendSignal();
    }
}
