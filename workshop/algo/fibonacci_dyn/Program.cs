using System;
using System.Collections.Generic;

namespace Fibonacci {
  class Program 
  {
    static void Main(string[] args)
    {
      foreach (var digit in Generate(41))
      {
        Console.WriteLine(digit);
      }
    }
    private Dictionary<int, int> _cache = new Dictionary<int, int>();
    private int Fib(int n) => n < 2 ? n : FibValue(n - 1) + FibValue(n - 2);
    private int FibValue(int n)
    {
      if (!_cache.ContainsKey(n))
      {
        _cache.Add(n, Fib(n));
      }
      return _cache[n];
    }
    public IEnumerable<int> Generate(int n)
    {
      for (int i = 0; i < n; i++)
      {
        yield return FibValue(i);
      }
    }
  }
}