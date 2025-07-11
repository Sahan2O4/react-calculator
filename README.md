# 🔢 React Calculator

A stylish and responsive calculator built with **React** and **CSS**, featuring basic arithmetic operations, live formatting, and a modern glassmorphism UI.

## 🚀 Features

- Add, subtract, multiply, divide
- Decimal and zero input handling
- Delete and All Clear buttons
- Beautiful glass-like UI design with hover effects
- Responsive layout for mobile and desktop

## 🛠️ Built With

- React (with `useReducer` for state management)
- JavaScript (ES6+)
- CSS (custom styles with gradient background and pop-up hover effects)

## 📂 File Structure

react-calculator/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── DigitButton.js
│ ├── OperationButton.js
│ ├── styles.css
│ └── index.js
├── package.json
└── README.md


## 📋 How It Works

### State Management

The calculator uses `useReducer` to manage the state:
- `currentOperand`
- `previousOperand`
- `operation`
- `overwrite` (to handle fresh input after evaluation)

### Core Functions

- `evaluate()` – Executes the operation and returns the result
- `reducer()` – Updates state based on button actions
- `formatOperand()` – Adds commas to large numbers for readability

### Actions

```js
const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

🧪 Getting Started
Clone the repo

bash
Copy
Edit
git clone https://github.com/Sahan2O4/react-calculator.git
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm start
Open in browser: http://localhost:3000

✍️ Author
Sahan De Silva
📧 sahandesilva484@gmail.com
📱 +94 776 822 240
🌐 LinkedIn Profile

