## Whiteboard Process
<!-- Embedded whiteboard image -->
1. [Code Challenge 28](/images/cc28.png)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Picked a pivot location and continued to break the arrays into 2 until it was completely sorted. Big O will typically be O(n), unless the sort is set to sort 2 arrays at once, then it will grow and become O(n2), at a min. 

## Solution

if ( left >= right) {
    return;
} else pivot = arr[(left+right)/2];
partition( array, left, right, pivot);
quicksort(arr, left, index);