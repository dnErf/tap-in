using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Algo
{
    public class Program
    {
        public static void Main(string[] args)
        {
          Console.WriteLine(LeastInterval(new char[] {'A', 'A', 'A', 'B', 'B', 'B'}, 2));
        }
        public static int LeastInterval(char[] tasks, int n) {
          var store = new Dictionary<char,int>();
          var interval = 0;
          foreach (var t in tasks) {
            if (store.ContainsKey(t))
              store[t]++;
            else
              store[t] = 1;
          }
          while (store.Any()) {
            var sortedTasks = store.OrderByDescending(t => t.Value)
              .Select(t => t.Key)
              .ToArray();
            for (var i = 0; i < n + 1; i++) {
              if (i >= sortedTasks.Length) {
                if (!store.Any())
                  break;
              }
              else {
                var task = sortedTasks[i];
                store[task]--;
                if (store[task] == 0) {
                  store.Remove(task);
                }
              }
              interval++;
            }
          }
          return interval;
        }
        [Fact]
        public static void validate_Solution()
        {
          Assert.Equal(8, LeastInterval(new char[] {'A', 'A', 'A', 'B', 'B', 'B'}, 2));
        }
    }
}
