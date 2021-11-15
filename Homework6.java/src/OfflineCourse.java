class OfflineCourse extends Course{
    public OfflineCourse(String code, String name){
        this.code = code;
        this.name = name;
    }
    @Override
    public String toString(){
        String msg = "Code: " + code + ", Name: " + name + ", Type: Offline";
        return msg;
    }
}
