import java.util.HashMap;
import java.util.Map;

public class Test {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int[] result = new int[2];
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) {
                result[1] = i;
                result[0] = map.get(target - nums[i]);
                return result;
            }
            map.put(nums[i], i);
        }
        return result;
    }

    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.isEmpty())
            return 0;
        char[] sChar = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>();
        int left = 0;
        for (int i = 0; i < sChar.length; i++) {
            map.put(sChar[i], map.getOrDefault(sChar[i], 0) + 1);
            if (i - left + 1 > map.size()) {
                map.put(sChar[left], map.get(sChar[left]) - 1);
                if (map.get(sChar[left]) == 0)
                    map.remove(sChar[left]);
                left++;
            }
        }
        return sChar.length - left;
    }

    public int lengthOfLongestSubstring01(String s) {
        int n = s.length(), ans = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int end = 0, start = 0; end < n; end++) {
            char alpha = s.charAt(end);
            if (map.containsKey(alpha)) {
                start = Math.max(map.get(alpha), start);
            }
            ans = Math.max(ans, end - start + 1);
            map.put(s.charAt(end), end + 1);
        }
        return ans;
    }

    public int lengthOfLongestSubstring02(String s) {
        int res = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int index = 0, i = 0; i < s.length(); i++){
            char strChar = s.charAt(i);
            if (map.containsKey(strChar)) {
                index = Math.max(map.get(strChar), index);
            }
            res = Math.max(res, i - index + 1);
            map.put(s.charAt(i), i + 1);
        }
        return res;
    }

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n = nums1.length + nums2.length;
        int[] new_arr = new int[n];
        int i=0, j=0, k=0;

        while (i<=nums1.length && j<=nums2.length) {
            if (i == nums1.length) {
                while(j<nums2.length) new_arr[k++] = nums2[j++];
                break;
            } else if (j == nums2.length) {
                while (i<nums1.length) new_arr[k++] = nums1[i++];
                break;
            }

            if (nums1[i] < nums2[j]) {
                new_arr[k++] = nums1[i++];
            } else {
                new_arr[k++] = nums2[j++];
            }
        }
        return (n%2==0) ? (float)(new_arr[n/2-1] + new_arr[n/2])/2 : new_arr[n/2];
    }

    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        if(target > nums[len - 1]){
            return len;
        }
        int left = 0;
        int right = len - 1;
        while(left < right){
            int mid = left + (right - left)/2;
            if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        return left;
    }

    public boolean searchMatrix(int[][] matrix, int target) {
        int row = searchRow(matrix, target);
        if(row == -1){
            return false;
        }
        int l = 0;
        int r = matrix[row].length - 1;
        while(l <= r){
            int mid = l + (r - l)/2;
            if (matrix[row][mid] == target) {
                return true;
            } else if (matrix[row][mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;
    }

    public int searchRow(int[][] matrix, int target){
        int left = 0;
        int right = matrix.length -1;
        int row = -1;
        while(left <= right){
            int mid = left + (right - left)/2;
            if(matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]){
                return mid;
            } 
            if(matrix[mid][0] < target){
                row = mid;
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return row;
    }

    // 実行して
    public static void main(String[] args) {
        Test test = new Test();
        boolean tatol = test.searchMatrix(new int[][]{{1}}, 0);
        System.out.println(tatol);
    }
}