/**
 * Problem : https://leetcode.com/problems/task-scheduler/
 */

/**
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 */

console.log (
  leastInterval(
    ['A','A','A','B','B','B'],
    2
  )
);

function leastInterval(tasks, n) {
  let
    store = {}, maxCount = 0, countMaxFreq = 0, task
  ;
  /**
   * FL -> store = {A:1}, maxCount = 1, countMaxFreq = 1
   * LL -> store = {A:3,B:3}, maxCount = 3, countMaxFreq = 2
   */
  for (task of tasks) {
    store[task] = (store[task] || 0) + 1
    if (store[task] === maxCount) {
      countMaxFreq += 1
    }
    else if (store[task] > maxCount) {
      maxCount = store[task]
      countMaxFreq = 1
    }
  }
  let
    availableTasks = tasks.length - maxCount * countMaxFreq,
    emptySlots = (maxCount - 1) * (n - (countMaxFreq - 1)),
    idles = Math.max(0, emptySlots - availableTasks)
  ;
  /**
   * availableTasks = 0, emptySlots = 2, idles = 2
   */
  return tasks.length + idles
}