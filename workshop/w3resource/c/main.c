// https://www.w3resource.com/c-programming-exercises

#include <stdio.h>

main(void) {
  printf("%d", ba1(2,2)); // 12
  printf("%d", ba2(51)); // 0
  printf("%d", ba3(20, 25)); // 0
  printf("%d", ba3(20, 30)); // 1
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

// 3 method to check 2 given integers
// return true, if one of them is 30 or if their sum is 30
int ba3(int x, int y) {
  return x == 30 || y == 30 || (x + y == 30);
}
