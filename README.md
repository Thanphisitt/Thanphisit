# Not
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