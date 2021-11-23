public class InkjetPrinter extends Printer{

    int printedCount = 0;
    public InkjetPrinter(String model,  int availableCount){
        this.model = model;
        this.availableCount = availableCount;
    }

    @Override
    public boolean print(){
        while(availableCount != 0){
            printedCount += 1;
            availableCount -= 1;

        }
        printedCount += 1;
        System.out.println(model + ": "+ printedCount + "매째 인쇄 실패_ 잉크 부족.");

        return false;
    }
}
