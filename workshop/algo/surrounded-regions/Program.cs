// https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1?view=netframework-4.8
// uses Queue<T> Class -> represents a first-in first-out collection of objects

using System;
using System.Collections.Generic;
using System.Linq;

namespace Algo
{
    public class Program
    {
        public static void Main(string[] args)
        {
          Console.WriteLine("SurroundedRegions");
        }
        public static void SurroundedRegions(char[][] board) 
        {

          if (board == null || board.Length == 0)
            return;
          
          for (int x = 0; x < board.Length; x++)
          {
            DepthFirst(board, x, 0);
            DepthFirst(board, x, board[0].Length - 1);
          }
          for (int y = 0; y < board[0].Length; y++)
          {
            DepthFirst(board, 0, y);
            DepthFirst(board, board.Length - 1, y);
          }
          for (int x = 0; x < board.Length; x++)
          {
            for (int y = 0; y < board[0].Length; y++)
            {
              if (board[x][y] == 'O')
                board[x][y] = 'X';
              if (board[x][y] == '-')
                board[x][y] = 'O';
            }
          }
        }
        private void DepthFirst(char[][] board, int x, int y)
        {
          if (IsOutside(board.Length,board[0].Length, x, y))
            return;
          if (board[x][y] != 'O')
            return;
          board[x][y] = '-';
          DepthFirst(board, x + 1, y);
          DepthFirst(board, x - 1, y);
          DepthFirst(board, x, y + 1);
          DepthFirst(board, x, y - 1);
        }
        private bool IsOutside(int b, int r, int x, int y)
        {
          return x < 0 || x >= b || y < 0 || y >= r;
        }
    }
}
