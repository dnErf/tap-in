using System;

namespace guess
{
  class Program
  {
    enum Comparison {
      LessThan = -1, Equal = 0, GreaterThan = 1
    }
    static void Main(string[] args)
    {
      Tuple<string, bool> result;
      int guess_number;
      var rand = new Random();
      int secret_number = rand.Next(1, 101);
      Console.WriteLine("Guess the number!");
      Console.WriteLine($"The secret number is : {secret_number}");
      while (true) {
        Console.WriteLine("Please input your guess");
        if (!int.TryParse(Console.ReadLine().ToString().Trim(), out guess_number)) {
          Console.WriteLine("Sorry your guees is not valid");
          break;
        }
        Console.WriteLine("Your guess is : {0}", guess_number);
        result = (Comparison) guess_number.CompareTo(secret_number) switch
        {
          Comparison.LessThan => Tuple.Create("too small!", false),
          Comparison.GreaterThan => Tuple.Create("too big!", false),
          Comparison.Equal => Tuple.Create("nice, you win!", true),
          _ => Tuple.Create("can't understand your guess sorry", false)
        };
        Console.WriteLine(result.Item1);
        if (result.Item2) {
          break;
        }
        // without tuple
        // if ((Comparison) guess_number.CompareTo(secret_number) == Comparison.Equal) {
        //   break;
        // }
      }
    }
  }
}
