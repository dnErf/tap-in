using System;

namespace guess
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Guess the number!");
      Console.WriteLine("Please input your guess");
      string guess = Console.ReadLine().ToString();
      Console.WriteLine("You guessed: " + guess);
    }
  }
}
