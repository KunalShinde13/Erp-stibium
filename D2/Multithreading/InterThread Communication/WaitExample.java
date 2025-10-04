class SharedResource {
    private boolean dataReady = false;
    synchronized void consume() {
        System.out.println("Consumer trying to consume...");
        while (!dataReady) {
            try {
                System.out.println("No data. Consumer waiting...");
                wait(); // wait until producer notifies
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Consumer got the data!");
        dataReady = false;
    }
    synchronized void produce() {
        System.out.println("Producer producing data...");
        dataReady = true;
        notify(); // wake up consumer
    }
}
public class WaitExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();
        Thread consumer = new Thread(() -> resource.consume());
        Thread producer = new Thread(() -> {
            try { Thread.sleep(2000); } catch (InterruptedException e) {}
            resource.produce();
        });
        consumer.start();
        producer.start();
    }
}
