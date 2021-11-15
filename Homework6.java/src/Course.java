public class Course {
    public String code;
    public String name;
    public Course(String n, String s){
        code = n;
        name = s;
    }

    public Course() {
    }

    public String getCode(){return code;}
    public String getName(){return name;}

}
