using System;

namespace Fibonacci
{
  class Program
  {
    static void Main(string[] args)
    {
      for (int i = 1; i < 41; i++)
      {
        Console.WriteLine("{0}", nthFibonacci(i));
      }
    }
    static int nthFibonacci(int n)
    {
      if (n <= 2) {
        return 1;
      }
      return nthFibonacci(n - 1) + nthFibonacci(n + 2);
    }
  }
}
