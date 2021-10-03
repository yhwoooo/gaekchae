import java.util.Scanner;

public class Homework1 {
    public static void main(String[] args) {
        int j = 0;
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 5; i++) {
            int s = sc.nextInt();
            System.out.println("정수를 입력하세요:" + s);
            j += s;
            System.out.printf("현재까지 입력된 정수의 합은 %d입니다.\n", j);
        }
    }
}
