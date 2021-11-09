public class Monitor {
    private static String monitorsize;
    private static String color;
    private static String power;

    public Monitor(String n, String h, String b){
        monitorsize = n;
        color = h;
        power = b;
    }
    public String getMonitorsize(){return monitorsize;}
    public String getColor(){return color;}
    public String getPower(){return power;}

    public static void turnOn(){
        System.out.println("Turning on the moniter.");
    }
    public static void printlnfo(){
        System.out.println("The spec of the moniter");
        System.out.printf("Size: %s\nColor: %s\npower: %s\n",monitorsize,color,power);
    }
}
