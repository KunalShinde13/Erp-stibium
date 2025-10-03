import java.io.*;

public class ExceptionExample4 {
    public static void main(String[] args) {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader("test.txt")); 
            String line = br.readLine();
            System.out.println("File content: " + line);
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        } finally {
            try {
                if (br != null) {
                    br.close(); 
                }
            } catch (IOException e) {
                System.out.println("Error closing file!");
            }
            System.out.println("Finally block executed (file handling).");
        }
    }
}
