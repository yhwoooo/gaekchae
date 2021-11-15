class OnlineCourse extends Course{
    public OnlineCourse(String e, String f){
        code = e;
        name = f;
    }
    @Override
    public String toString(){
        String msg = "Code: " + code + ", Name: " + name + ", Type: Online";
        return msg;
    }
}
