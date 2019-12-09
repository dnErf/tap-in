using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Xunit;

namespace aoc
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int[] inp = File.ReadAllLines("src/_input.txt").Select(int.Parse).ToArray();
            Console.WriteLine(ProblemOne(inp));
            Console.WriteLine(ProblemTwo(inp));
        }
        private static int ProblemOne(IEnumerable<int> inp) => inp.Sum(w => w / 3 - 2);
        private static int ProblemTwo(IEnumerable<int> inp)
        {
          int CalculatedWeight(int w)
          {
            var requiredFuel = w / 3 - 2;
            if (requiredFuel <= 0)
              return 0;
            return requiredFuel + CalculatedWeight(requiredFuel);
          }
          return inp.Sum(CalculatedWeight);
        }
        [Fact]
        public static void validate_ProblemOne()
        {
          Assert.Equal(2, ProblemOne(new[] {12}));
        }
        [Fact]
        public static void validate_ProblemTwo()
        {
          Assert.Equal(966, ProblemTwo(new[] {1969}));
        }
    }
}
