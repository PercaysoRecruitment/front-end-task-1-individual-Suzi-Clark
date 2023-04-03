# Plan

- install next, react, typescript ✅ 
- install mocha, chai, sinon(?) for testing 🚫 Use Jest/React Testing Library instead for render/screen/fire event reasons ✅ 
- sort test script and typescript config ✅
- plan out React components (excalidraw) & state ✅
- set up file and folder structure ✅
- create a test for a component (Jest/ React Testing Library) then work on code and back to tests etc. ✅

        - GameBoard ✅
        - GameButton ✅
        - Index Page ✅
        - EndGame ✅
        
- Go component by component doing that and rendering them on the page as I go ✅
- Fix issue where you have to click again after you have won for the game to update ✅ (FIXED - useEffect)
- research github actions ✅
- try to automate tests with GitHub Actions ✅
- Custom hooks ✅
- Check I have done FP properly and tidy any 'any's ✅
- CSS it ✅
- Cypress tests ✅
- deploy

## Functionality Planning
### Index.tsx should ...
- Hold win, lose or game in progress state, render either GameBoard or EndGame depending on this ✅
- Hold logic for figuring whether anyone has won yet (to later be moved into custom hook) ✅
- Hold true/false boolean state for noughts or crosses next. ✅
- Hold on Click logic function and pass down to GameButton via GameBoard (or could make customhook) ✅
- onClick function:  ✅

        - puts an 0 or X on the button as text ✅
        - updates the state so the next click puts X in if 0 last time etc. ✅
        - updates a grid state with which button now has an X or 0 ✅
        - disables the button after it has been clicked. ✅
        - call the win checker function from index. ✅
        - handleClick should just take (e: React.MouseEvent<HTMLButtonElement>) as arg ✅

- EndGame rendered conditionally if win is true ✅


## Use FP
- Pure functions ✅
- Don't mutate data (map instead of for loops, push/pop/slice etc) ✅
- Use higher order functions where necessary to abstract out functionality ✅
- Declare variables with const and initialise at point of declaration ✅
- Avoid Global Variables ✅
