# วิธีแปลงคะแนนเป็นเกรดโดยใช้ภาษาJAVA

เริ่มจากการสร้างให้Codeอ่านค่าที่เราพิมพ์ลงไปก่อน
แล้วเราต้องสร้างเงื่อนไขขึ้นมาว่าคะแนนเท่าไหร่เป็นเกรดอะไร
โดยที่เราให้ค่าทั้งหมดเป็นFก่อน 
แล้วเราสร้างเงื่อนไขเพิ่มเติมสำหรับคะแนนที่ต้องการให้เป็นเกรด


void main()
{
    var input = new Scanner(System.in); 
    System.out.print("Enter score: ");
    var Score = input.nextDouble();
    var result = 'F';
      if (Score >= 50) result = 'D';
      if (Score >= 55) result = 'D+';
      if (Score >= 60) result = 'C';
      if (Score >= 65) result = 'C+';
      if (Score >= 70) result = 'B';
      if (Score >= 75) result = 'B+';
      if (Score >= 80) result = 'A';
      if (Score >= 85) result = 'A+';
    System.out.println("Your grade is " + result);
}