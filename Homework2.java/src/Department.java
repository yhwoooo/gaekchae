import java.util.ArrayList;
import java.util.Scanner;

public class Department{
        Scanner s = new Scanner(System.in);
        Student[] st = new Student[3];

        void run(){
            Student st = null;
            for(int i =0; i<3; i++){
                st.read(s);

            }
            for(int j=0; j<3; j++){
                st.print();
            }
            for(int k=0; k<3; k++){
                System.out.printf("첫번째 학생: %s", st[k]);
            }
        }
        public static void main(String args[]){
            Department dept = new Department();
            dept.run();
        }

}
