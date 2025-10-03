public class ExceptionExample1 {
    public static void main(String[] args) {
        try {
            int a = 10, b = 0;
            int c = a / b;  // ArithmeticException
            System.out.println("Result: " + c);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed!");
        } finally {
            System.out.println("Finally block executed ✅");
        }
    }
}
