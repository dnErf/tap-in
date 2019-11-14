using System;

namespace csharp
{
  class Program
  {
    static void Main(string[] args)
    {
      // examples 
      Console.WriteLine(e1(3, 2)); // 5
      Console.WriteLine(e1(2, 2)); // 12
      Console.WriteLine(e2(30)); // 21
      Console.WriteLine(e2(51)); // 0
      Console.ReadLine();
    }
    static int e1(int x, int y)
    {
      // method that compute the sum of the two given integer values.
      // if the two values are the same, then return triple their sum.
      return x == y ? (x + y) * 3 : x + y;
    }
    static int e2(int n)
    {
      const int x = 51;
      if (n > x)
      { 
        return (n - x) * 3;
      }
      return x - n;
    }
  }
}
