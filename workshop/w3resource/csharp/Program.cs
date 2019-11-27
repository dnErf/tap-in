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
      Console.WriteLine(ba4(90)); // true
      Console.WriteLine(ba4(89)); // false
      Console.WriteLine(ba5("if else")); // if else
      Console.WriteLine(ba5("else")); // if else
      Console.WriteLine(ba6("Python", 4)); // Pythn
      Console.WriteLine(ba7("abcd")); // dbca
      Console.WriteLine(ba8("JS")); // JSJSJSJS
      Console.WriteLine(ba8("a")); // a
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
    static bool ba4(int x)
    {
      // method to check a given integer and return true if it is within 10 of 100 or 200
      if (Math.Abs(x - 100) <= 10 || Math.Abs(x - 200) <= 10)
        return true;
      return false;
    }
    static string ba5(string s)
    {
      // method to create a new string where 'if' is added to the from of a given string
      // if the string already begins with 'if', return the string unchanged
      if (s.Length > 2 && s.Substring(0, 2).Equals("if"))
      {
        return s;
      }
      return "if " + s;
    }
    static string ba6(string str, int  n)
    {
      // method to remove the character in a given position of a given string
      // the given position will be in the range 0 ... string length - 1 inclusive
      return str.Remove(n, 1);
    }
    static string ba7(string str)
    {
      // method to exchange the first and last characters in a given string and return the new string
      return str.Length > 1
        ? str.Substring(str.Length - 1) + str.Substring(1, str.Length - 2) + str.Substring(0, 1) : str;
    }
    static string ba8(string str)
    {
      // method that creates a new string which is 5 copies of the 2 front characters of a given string
      // if the given string length is less than 2 return the original string
      return str.Length < 2 ? str : str.Substring(0, 2) + str.Substring(0, 2) + str.Substring(0, 2) + str.Substring(0, 2);
    }
  }
}
