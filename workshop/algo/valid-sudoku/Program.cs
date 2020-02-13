// https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=netframework-4.8

using System; 

namespace csharp
{
  class Program
  {
    static void Main(string[] args)
    { }
    public bool is_valid_sedoku(char[][] board)
    {
      HashSet<string> seen = new HashSet<string>(); // guaranteed to not have duplicate elements and it will return false
      for (var x = 0; x < 9; x++)
      {
        for (var y = 0; y < 9; y++)
        {
          var current_val = board[x][y];
          if (
            !seen.Add(current_val + " found in row " + x)
            || !seen.Add(current_val + " found in column " + y)
            || !seen.Add(current_val + " found in sub box " + x/3 + y/3)
          )
            return false;
        }
      }
      return true;
    }
  }
}