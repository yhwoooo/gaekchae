import java.util.*;

public class Gcd {
    static int gcd(int m, int n) {
            if (m == 0)
                return m;
            else if (m % n == 0)
                return n;
            else {
                m = m % n;
                return gcd(n, m);
            }
    }
    public static void main(String[] args){
        Scanner a = new Scanner(System.in);
        int i, j, res, temp=0;
        System.out.print("두 수를 입력하세요: ");
        i = a.nextInt();
        j = a.nextInt();
        if(i<j) {
            temp = i;
            i = j;
            j = temp;
        }
        res = gcd(i, j);
        System.out.printf("두수의 최대공약수는 %d입니다.", res);
    }
}
