// import { ListNode } from './ListNode';
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
  }
}

function twoSum(numbers: number[] = [2, 7, 11, 15], target: number = 9) {
  const numberMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const diff = target - numbers[i];
    if (numberMap.has(diff)) {
      console.log([numberMap.get(diff), i]);
    }
    numberMap.set(number, i);
  }
}

function longestSubstring(s: string): number {
  console.log('aabcbba')
  const set = new Set<string>()
  let maxLen = 0
  let left = 0
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
  if (l1 || l2) {
    const next1 = getNextNode(l1)
    const next2 = getNextNode(l2)
    const sum = getNodeValue(l1) + getNodeValue(l2) + carry
    const nextCarry = sum >= 10 ? 1 : 0
    
    return new ListNode(sum % 10, addTwoNumbers(next1, next2, nextCarry))
  } else if (carry) { 
    return new ListNode(1) 
  }
  
  return null
}

function getNodeValue(node: ListNode | null): number {
  return node && node.val ? node.val : 0
}

function getNextNode(node: ListNode | null): ListNode | null {
  return node && node.next ? node.next : null
}

function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while(left <= right){
    let mid = left + Math.floor((right - left) / 2);
    if(nums[mid] === target){
      return mid;
    }else if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] < target){
      left = mid + 1;
    }
  }
  return -1;
};

function searchRotated(nums: number[], target: number): number {
  const len = nums.length
  let low = 0
  let high = len - 1
  while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (nums[mid] === target) return mid
      if (nums[low] <= nums[mid]) {
          if (target >= nums[low] && target <= nums[mid]) {
              high = mid - 1
          } else {
              low = mid + 1
          }
      }

      if (nums[mid] <= nums[high]) {
          if (target >= nums[mid] && target <= nums[high]) {
              low = mid + 1
          } else {
              high = mid - 1
          }
      }
  }
  return -1
};

console.log(searchRotated([7,8,9,0,2,3,4,5,6], 0))