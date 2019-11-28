// https://www.w3resource.com/c-programming-exercises

#include <stdio.h>

main(void) {
  printf("%d", ba1(2,2)); // 12
  printf("%d", ba2(51)); // 0
}

// 1 method that computes the sum of the two given integer values
// if the two values are the same, then return triple their sum
int ba1(int x, int y) {
  return x == y ? (x + y) * 3 : x + y;
}

// 2 method to get the absolute differene between n and 51
// if n is greater than 51 return triple the absolute difference
int ba2(int n) {
  const int x = 51;
  if (n > x) {
    return (n - x) * 3;
  }
  return x - n;
}
