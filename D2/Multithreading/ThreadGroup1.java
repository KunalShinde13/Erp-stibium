class MyThread extends Thread {
    MyThread(ThreadGroup group, String name) {
        super(group, name);
    }
    public void run() {
        System.out.println(Thread.currentThread().getName() + " is running...");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(Thread.currentThread().getName() + " interrupted!");
        }
    }
}
public class ThreadGroup1 {
    public static void main(String[] args) {
        ThreadGroup group = new ThreadGroup("MyGroup");

        MyThread t1 = new MyThread(group, "Thread-1");
        MyThread t2 = new MyThread(group, "Thread-2");
        MyThread t3 = new MyThread(group, "Thread-3");

        t1.start();
        t2.start();
        t3.start();
        
        System.out.println("Thread Group Name: " + group.getName());
        group.list();
    }
}
