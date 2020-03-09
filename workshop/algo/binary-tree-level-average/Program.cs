// https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1?view=netframework-4.8
// uses Queue<T> Class -> represents a first-in first-out collection of objects

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
          Console.WriteLine("hello");
        }
        public static IList<double> AverageOfLevels(TreeNode root) {

          var result = new List<double>();
          var queue = new Queue<TreeNode>();

          queue.Enqueue(root);

          while(queue.Count > 0)
          {

            int count = queue.Count;
            double sum = 0;
            int index = 0;

            for (index = 0; index < count; index++)
            {

              var node = queue.Dequeue();

              sum += node.val;

              if (node.left != null)
                queue.Enqueue(node.left);
              if (node.right != null)
                queue.Enqueue(node.right);

            }

            result.Add(sum / count);

          }

          return result;

        }
        public class TreeNode {
          public int val;
          public TreeNode left;
          public TreeNode right;
          public TreeNode (int x) { val = x; }
        }
        [Fact]
        public static void validate_Solution()
        {
          
        }
    }
}
