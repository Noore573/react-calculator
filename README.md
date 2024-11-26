# React Calculator App 🧮✨

Welcome to the **React Calculator App**, a sleek, minimal, and functional calculator built with **React**, **HTML**, and **CSS**. It's perfect for crunching numbers, learning React, or simply having fun experimenting with modern front-end tools. 🚀
this was one of my first react apps that created while learning react and javascript and helped me alot
---

## 🎉 Features

- **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
- **Clean and Intuitive UI**: Thanks to **HTML** and pure **CSS**, it's a delight to use.
- **Functional Component Architecture**: Built entirely with React's functional components and hooks (`useState`).

---

## 🛠️ Technologies Used

- **React**: For building the app’s interactive UI.
- **HTML**: For structuring the app’s layout.
- **CSS**: For styling 

---

## 🛠️ How to Run the App

### 1️⃣ Clone the Repository

```bash
git https://github.com/Noore573/react-calculator.git
cd react-calculator
```

### 2️⃣ Install Dependencies

Ensure you have **Node.js** and **npm** installed. Then, run:
```bash
npm install
```

### 3️⃣ Start the Development Server

Launch the app locally by running:
```bash
npm start
```
The app will open in your default browser at `http://localhost:3000`.

---

## 🎮 How to Use the Calculator

1. **Clear Input**:
   - Click `AC` to reset the display.
   - Click `DE` to delete the last entered character.
2. **Enter Numbers and Operators**:
   - Click the buttons to build your equation. (Example: `7 + 3 * 2`).
3. **Calculate Results**:
   - Press `=` to evaluate the equation.
4. **Enjoy Error-Free Math**:
   - Input is sanitized, so you don’t need to worry about breaking things!

---

## 💡 Code Highlights

### State Management
- The app uses React's `useState` hook to manage the current input value:
  ```javascript
  const [value, setValue] = useState("");
  ```

### Button Click Handlers
- Every button dynamically updates the state to reflect the input:
  ```javascript
  <input 
    type='button' 
    value="7" 
    onClick={e => setValue(value + e.target.value)} 
  />
  ```

### Equation Evaluation
- The `=` button evaluates the equation using `eval` (not recommended for production apps):
  ```javascript
  <input 
    type='button' 
    value="=" 
    className='equal' 
    onClick={e => setValue(eval(value))} 
  />
  ```

---

## 🌈 Styling with CSS
The app’s design is powered by simple yet elegant CSS:
- **Grid Layout**: Buttons are neatly arranged in rows.
- **Custom Styling**: Make it your own by tweaking `tw.css` or adding animations!

---

## 🚀 Ready to Calculate?

Why wait? Start crunching numbers with style and show off your React skills! 😎  
Feel free to improve, customize, and extend this app to your heart's content.

---

### Made with ❤️ and JavaScript Magic ✨