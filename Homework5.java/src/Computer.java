public class Computer {
    private static String cpu;
    private static String memory;
    private static String hd;
    private static String color;
    private static String power;

    public Computer(String a, String b, String c, String d, String f){
        cpu = a;
        memory = b;
        hd = c;
        color = d;
        power = f;
    }
    public String getCpu(){return cpu;}
    public String getMemory(){return memory;}
    public String getHd(){return hd;}
    public String getColor(){return color;}
    public String getPower(){return power;}

    public static void turnOn(){
        System.out.println("Turning on the computer.");
    }
    public static void printlnfo(){
        System.out.println("The spec of the computer");
        System.out.printf("CPU: %s\nMemory: %s\nHDD: %s\nColor: %s\nPower: %s\n", cpu,memory,hd,color,power);
    }
}
