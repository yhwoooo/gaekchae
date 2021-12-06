import java.util.*;
import java.io.*;

public class Homework9 {
    final static String filePath = "id.txt";
    public static void main(String[] args) {

            Map<String, String> login = getFile();
            for(Map.Entry<String, String> entry : login.entrySet()){
                System.out.println(entry.getKey() + " => " + entry.getValue());
            }
            String id;
            String pass;
            Scanner sc = new Scanner(System.in);
            while(true) {
                System.out.println("id와 password를 입력해주세요.");
                System.out.print("id : ");
                id = sc.nextLine();
                id = id.trim();
                if(login.get(id) == null) {
                    System.out.println("입력하신 id는 존재하지 않습니다. 다시 입력해주세요.");
                    System.out.println();
                    continue;
                }
                System.out.print("password : ");
                pass = sc.nextLine();
                pass = pass.trim();
                if(login.get(id).equals(pass)) {
                    System.out.println("id와 비밀번호가 일치합니다.");
                    break;
                }
                System.out.println("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
                System.out.println();
                continue;
            }
            sc.close();
    }
    public static Map<String, String> getFile() {
        Map<String, String> mapFileContents = new HashMap<String, String>();
        BufferedReader br = null;
        try {
            File file = new File(filePath);
            br = new BufferedReader(new FileReader(file));
            String line = null;

            while ((line = br.readLine()) != null) {
                String[] parts = line.split(":");
                String id_key = parts[0].trim();
                String pass_value = parts[1].trim();
                if (!id_key.equals("") && !pass_value.equals(""))
                    mapFileContents.put(id_key, pass_value);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (Exception e) {
                }
                ;
            }
        }
        return mapFileContents;
    }
}
