// https://www.w3resource.com/c-programming-exercises

#include <stdio.h>
#include <stdlib.h> //

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

// 7 method to check 2 given integers whether either of them is in the range 100..200 inclusive
int ba7(int x, int y)
{
  return (x >= 100 && x <= 200) || (y >= 100 && y <= 200);
}

// 10 method to check  which number nearest to the value 100 among two given integers
// return 0 if the two numbers are equal
int ba10(int x, int y)
{
  int n = 100
  int v1 = abs(x - n);
  int v2 = abs(y - n);
  return v1 == v2 ? 0 : (v1 < v2 ? x : y);
}

// 13 method to check if two given non-negative integers have the same last digit
int ba13(int x, int y)
{
  return abs(x % 10) == abs(y % 10);
}

// 14 method to check whether the sequence of numbers 1,2,3 appears in a given array of integers
int ba14(int nums[], int arr_size)
{
  for (int i = 0; i  < arr_size - 1; i++)
  {
    if (nums[i] && nums[i + 1] == 2 && nums[i + 2] == 3)
      return 1;
  }
  return 0;
}

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
  printf("%d", ba7(100, 199)); // 1
  printf("%d", ba7(250, 300)); // 0
  printf("%d", ba10(95, 95)); // 0
  printf("%d", ba10(99, 70)); // 99
  printf("%d", ba13(123, 456)); // 0
  printf("%d", ba13(12, 512)); // 1
  // -
  // ba14
  int arr_size;
  int arr1[] = {1,1,2,3,1};
  arr_size = sizeof(arr1)/sizeof(arr1[0]);
  printf("%d", ba14(arr1, arr_size)); // 1
  // -
}
