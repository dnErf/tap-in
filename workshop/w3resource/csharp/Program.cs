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
      Console.WriteLine(ba9("Red")); // dRedd
      Console.WriteLine(ba10(12)); // true
      Console.WriteLine(ba10(37)); // false
      Console.WriteLine(dtTypeEx1("abc")); // cba

      Console.ReadLine();

      dtTypeEx2('*');
      dtTypeEx3();
      dtTypeE4();
      dtTypeE5();

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
    static string ba9(string str)
    {
      // method to create a new string with the last char added at the front and back of a given string of length 1 or more
      var s = str.Substring(str.Length - 1);
      return s + str + s;
    }
    static bool ba10(int n)
    {
      // method to check if a given positive number is a multiple of 3 or a multiple of 7
      return n % 3 == 0 || n % 7 == 0;
    }
    static string dtTypeEx1(string s)
    {
      // from https://www.dotnetperls.com/reverse-string
      // simillar to data type excercise 1
      // a method that receives a string and returns the string with its letters in reversed
      char[] arr = s.ToCharArray();
      Array.Reverse(arr);
      return new string(arr);
    }
    static void dtTypeEx2(char s)
    {
      /* method that takes a character then display a reverse triangle wit the given width

        ***
        **
        *

      */
      int width = 3;
      int height = width;
      for (int row = 0; row < height; row++) {
        for (int column = 0; column < width; column++) {
          Console.Write(s);
        }
        Console.WriteLine();
        width--;
      }
    }
    static void dtTypeEx3()
    {
      // method that takes userid and passowrd as input
      // after 3 wrong attempts, user will be rejected
      string username, password;
      int ctr = 0, dd = 0;
      Console.Write("check username and password");
      Console.Write("\ndefault username and password is : username and password");
      do {
        Console.Write("input a username");
        username = Console.ReadLine();
        Console.Write("input a password");
        password = Console.ReadLine();
        if (username == "username" && password == "password")
        {
          dd = 1;
          ctr = 3;
        } else {
          dd = 0;
          ctr++;
        }
      } while (
        (username != "username" || password != "password") 
        && (ctr != 3)
      ); 
      if (dd == 0)
      {
        Console.Write("\nlogin attemp more than three times. lry again later");
      }
      if (dd == 1)
      {
        Console.Write("\npassword entered successfully");
      }
    }
    static void dtTypeE4()
    {
      // program that takes two numbers as input and perform  an operation(+,-,*,/) on them and displays the result of that operation
      int  x, y;
      char operation;
      Console.Write("input first number : ");
      x = Convert.ToInt32(Console.ReadLine());
      Console.Write("input operation: ");
      operation = Convert.ToChar(Console.ReadLine());
      Console.Write("input second number: ");
      y = Convert.ToInt32(Console.ReadLine());
      if (operation == '+')
        Console.WriteLine("{0} + {1} = {2}", x, y, x + y);
      else if (operation == '-')
        Console.WriteLine("{0} - {1} = {2}", x, y, x - y);
      else if ((operation == 'x') || (operation == '*'))
        Console.WriteLine("{0} * {1} = {2}", x, y, x * y);
      else if (operation == '/')
        Console.WriteLine("{0} * {1} = {2}", x, y, x * y);
      else
        Console.WriteLine("wrong character");
    }
    static void dtTypeE5()
    {
      // method that takes the radius of a circle as input and calculate the perimeter and area of the circle
      double r, per_cir;
      double PI = 3.14;
      Console.WriteLine("Input the radius of the circle : ");
      r = Convert.ToDouble(Console.ReadLine());
      per_cir = 2  * PI *  r;
      Console.WriteLine("Perimeter of Circle : {0}", per_cir);
      Console.Read();
    }
  }
}
