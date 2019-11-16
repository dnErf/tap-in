using System;

namespace csharp
{
  class Program
  {
    static void Main(string[] args)
    {
      // examples 
      // basic algorithm
      Console.WriteLine(ba1(3, 2)); // 5
      Console.WriteLine(ba1(2, 2)); // 12
      Console.WriteLine(ba2(30)); // 21
      Console.WriteLine(ba2(51)); // 0
      Console.WriteLine(ba3(20, 30)); // true
      Console.WriteLine(ba3(20, 25)); // false
      Console.ReadLine();
    }
    static int ba1(int x, int y)
    {
      // method that compute the sum of the two given integer values.
      // if the two values are the same, then return triple their sum.
      return x == y ? (x + y) * 3 : x + y;
    }
    static int ba2(int n)
    {
      // method to get the absolute difference between n and 51
      // if n is greater than 51 return triple tha absolute difference
      const int x = 51;
      if (n > x)
      { 
        return (n - x) * 3;
      }
      return x - n;
    }
    static bool ba3(int x, int y)
    {
      // method to check two given integers
      // return true if one of them is 30 or if their sum is 30
      return x == 30 || y == 30 || (x + y == 30);
    }
  }
}
