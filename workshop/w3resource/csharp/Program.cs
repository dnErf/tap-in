using System;

namespace csharp
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(e1(3, 2));
      Console.WriteLine(e1(2, 2));
      Console.ReadLine();
    }
    static int e1(int x, int y)
    {
      // method that compute the sum of the two given integer values.
      // if the two values are the same, then return triple their sum.
      return x == y ? (x + y) * 3 : x + y;
    }
  }
}
