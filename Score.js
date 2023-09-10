void main()
{
  
    var input = new Scanner(System.in); 
    System.out.print("Enter score: ");  //ให้เขียนคะแนน
    var Score = input.nextDouble();
    var result = 'F';               //แปลงให้ค่าเป็นF
      if (Score >= 50) result = 'D';  //แปลงให้คะแนนมากกว่าหรือเท่ากับ50เป็น D
      if (Score >= 55) result = 'D+'; //แปลงให้คะแนนมากกว่าหรือเท่ากับ55เป็น D+
      if (Score >= 60) result = 'C';  //แปลงให้คะแนนมากกว่าหรือเท่ากับ60เป็น C
      if (Score >= 65) result = 'C+'; //แปลงให้คะแนนมากกว่าหรือเท่ากับ65เป็น C+
      if (Score >= 70) result = 'B';  //แปลงให้คะแนนมากกว่าหรือเท่ากับ70เป็น B
      if (Score >= 75) result = 'B+'; //แปลงให้คะแนนมากกว่าหรือเท่ากับ75เป็น B+
      if (Score >= 80) result = 'A';  //แปลงให้คะแนนมากกว่าหรือเท่ากับ80เป็น A
      if (Score >= 85) result = 'A+'; //แปลงให้คะแนนมากกว่าหรือเท่ากับ85เป็น A+
    System.out.println("Your grade is " + result);

}
