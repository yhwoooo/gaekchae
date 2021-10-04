import java.util.Scanner;
public class Student {
    int studentID;
    String name;
    String major;
    int phone;

    void read(Scanner s) {
        studentID = s.nextInt();
        name = s.next();
        major = s.next();
        phone = s.nextInt();
    }
    void print(){
        System.out.printf("학생의 학번,이름,전공,전화번호를 입력하세요:%d %s %s %d",studentID,name,major,phone);
        System.out.println();
    }
}

