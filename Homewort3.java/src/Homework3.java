import java.util.*;

public class Homework3 {
    public static void main(String[] args) {
        int i;
        int[] min = new int[1];
        int[] max = new int[1];
        Scanner scanner = new Scanner(System.in);
        System.out.print("몇개의 수를 입력할 예정인가요? ");
        i = scanner.nextInt();
        int[] arr = new int[i];
        System.out.print("수를 입력하세요: ");
        for(int j=0; j<i; j++){
            arr[j] = scanner.nextInt();
        }
        min[0] = arr[0];
        max[0] = arr[0];
        for(int k=0; k<i; k++) {
            if (min[0] > arr[k]) {
                min[0] = arr[k];
            }
            if (max[0] < arr[k]) {
                max[0] = arr[k];
            }
        }
        System.out.printf("최대값: %d\n최소값: %d\n", max[0], min[0]);
    }
}
