// https://www.w3resource.com/c-programming-exercises

#include <stdio.h>
#include <stdlib.h> //

main(void) {
  printf("%d", ba1(2,2)); // 12
  printf("%d", ba2(51)); // 0
  printf("%d", ba3(20, 25)); // 0
  printf("%d", ba3(20, 30)); // 1
  printf("%d", ba4(90)); // 1 
  printf("%d", ba4(89)); // 0
  printf("%d", ba5(12)); // 1
  printf("%d", ba5(37)); // 0
  printf("%d", ba6(2, 120)); // 0
  printf("%d", ba6(-1, 120)); // 1
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

// 4  method to check a given integer if it is within 10 of 100 or 200
int ba4(int x) {
  if (abs(x - 100) <= || abs(x - 200) <= 10)
    return 1;
  return 0;
}

// 5 method to check if a given positive number is a multiple of 3 or a multiple of 7.
int ba5(n) {
  return n % 3 == 0 || n % 7 == 0;
}

// 6 method to check if one given temperatures is less than 0 and the other is greater than 100
int ba6(int temp1, int temp2)
{
  return temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100;
}
