# Candidate Decisions & Notes

Please use this file to briefly outline your technical choices and the rationale behind them.

## 1. State Management & Architecture
*Why did you structure your state the way you did? Which patterns did you choose for handling the flaky API requests, loading states, and error handling?*

I used React's built-in `useState` hook for state management, structuring data around the project:
- **UI State**: `loading`, `error`, `currentPage`, `category`, `search`
- **Data State**: `products`, `paginatedResponse`

For handling the flaky API (20% failure rate):
- **Error Handling**: Try-catch block with user-friendly error messages displayed in a dedicated error UI block.
- **Loading States**: wait api response in that time show loading spinner.
- **Retry Mechanism**: Manual "Try Again" button that triggers `fetchApiData()` again
- **Automatic Refetching**:  when `currentPage`, `category`, or `search` changes that time`useEffect` dependency array ensures data refreshes instantly.


## 2. Trade-offs and Omissions
*What did you intentionally leave out given the constraints of a take-home assignment? If you had more time, what would you prioritize next?*

**Intentional Omissions:**
- **Exponential Backoff Retry Logic**: Implemented simple manual retry instead of automatic exponential backoff to keep complexity low for a take-home
- **Request Debouncing**: Search input triggers immediate state changes without debouncing, which could cause rapid request bursts
- **Response Caching**: No caching mechanism. If I get more time, I will use React Query or other caching mechanisms.
- **Skeleton Loading UI**: Instead of using skeleton screens, simply used a spinner.

**If I had more time, I would focus on:**
1. **Debounced Search**: want to 300-500ms debounce or minmum keyup lenght on search input to reduce request volume
2. **Smart Retry Logic**: api refetch when flasky failure up to 3-4 retries for automatic recovery from transient failures.
3. **Optimistic UI Updates**: Update UI immediately for category/search changes, rollback on failure
4. **Performance**: Memoization with `React.memo` and `useMemo` for ProductGrid/ProductCard components

## 3. AI Usage
*How did you utilize AI tools (ChatGPT, Copilot, Cursor, etc.) during this assignment? Provide a brief summary of how they assisted you.*

I used GitHub Copilot extensively during this assignment:
After building the features and making sure they work properly, I use Copilot to optimize those features and learn how to do those things with less code. I look for any major structural issues.

## 4. Edge Cases Identified
*Did you notice any edge cases or bugs that you didn't have time to fix? Please list them here.*

**Potential Edge Cases & Known Issues:**

- **Search Input Spam**: Without debouncing, typing "electronics" can send over 10 requests at once. This leads to slow performance for the user, and the unreliable API is more likely to fail.

