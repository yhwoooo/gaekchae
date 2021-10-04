import java.util.Scanner;

public class Homework2 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        for(int i = 0; i <=2; i++) {
            int n = sc.nextInt();
            System.out.println("학생의 학번,이름,전공,전화번호를 입력하세요:" + n);
            String s = sc.next();
            System.out.println(s);
            String s1 = sc.next();
            System.out.println(s1);
            int n1 = sc.nextInt();
            System.out.println(n1);
        }
    }
}
