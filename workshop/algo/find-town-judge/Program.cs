using System;

namespace Algo
{
    public class Program
    {
        public static void Main(string[] args)
        {
          Console.WriteLine(FindJudge(3, new int[][] { new int[] {1,3}, new int[] {2,3}}));
        }
        public static int FindJudge(int N, int[][] trust)
        {
          int[] arr = new int[N + 1];
          foreach (int[] t in trust)
          {
            arr[t[0]]--;
            arr[t[1]]++;
          }
          for (int i = 0; i <= N; i++)
          {
            if (arr[i] == (N - 1)) {
              return i;
            }
          }
          return -1;
        }
        [Fact]
        public static void validate_Solution()
        {
          Assert.Equal(3, FindJudge(3, new int[][] { new int[] {1,3}, new int[] {2,3}}));
        }
    }
}
