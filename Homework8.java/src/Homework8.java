import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Scanner;

class Homework8 {


    public static void main(String[] args){
        Map<String, String> login = new HashMap<>();
        String in;
        String pass;
        login.put("myid", "mypass");
        login.put("myid2","mypass2");
        login.put("myid3","mypass3");

        do{
            System.out.println("id와 password를 입력해주세요.");
            Scanner sc = new Scanner(System.in);
            System.out.print("id : ");
            in = sc.next();
            for(String word : login.keySet()){
                if(login.containsKey(in)){
                    System.out.print("password : ");
                    pass = sc.next();
                    for(String word : login.values()){
                        if(login.containsKey(pass)){
                            System.out.println("id와 password가 일치합니다.");
                            break;
                        }
                    }
                    System.out.println("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
                }

            }
        }while(true);


    }
}
