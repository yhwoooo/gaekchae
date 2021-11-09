public class PersonalComputer {
    private Computer computer;
    private Monitor monitor;
    PersonalComputer(Computer computer, Monitor moniter){
        this.computer = computer;
        this.monitor = moniter;
    }
    public static void main(String[] args){
        PersonalComputer pc = new PersonalComputer(
                new Computer("Core i7 ","16GB ","2TB ","흰색","500W"),
                new Monitor("24인치","검은색","45W"));
        Computer.turnOn();
        Monitor.turnOn();
        Computer.printlnfo();
        Monitor.printlnfo();
    }
}
