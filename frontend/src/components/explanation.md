### **Explanation.md**  

This file provides a detailed explanation of every line of code from your updated React frontend. It serves as a teaching guide to help beginners understand the logic and purpose of each part.  

---

### **1. ChatApp.js**  

#### **Imports**  
```javascript
import React, { useState } from "react"; 
import Header from "./Header"; 
import Message from "./Message"; 
import MessageInput from "./MessageInput"; 
import styles from "./ChatApp.module.css"; 
```  
- **Why `import React`?**  
  React is the library we're using to build the user interface. It allows us to create components and manage states.  

- **What is `useState`?**  
  A React hook that allows you to create and manage state variables in functional components.  

- **Why import other components (e.g., `Header`)?**  
  Each file represents a separate "piece" of the UI (e.g., the header bar or a chat message). Breaking the UI into components makes it modular and easier to manage.  

- **What is `ChatApp.module.css`?**  
  This is a CSS module that provides styles specifically for this component. Using modules ensures styles are scoped and don't clash with others.  

#### **State Management**  
```javascript
const [messages, setMessages] = useState([
  { id: 1, text: "Hello! How are you?", sender: "other" },
  { id: 2, text: "I'm good, thanks! And you?", sender: "self" },
]);
```  
- **What is happening here?**  
  - `messages` is a **state variable** holding an array of chat messages.  
  - `setMessages` is the **function** used to update the `messages` array.  
  - We initialize `messages` with two dummy messages to simulate a conversation.  

- **What could we use instead?**  
  - Instead of `useState`, we could fetch messages from a database (e.g., Cassandra) when the component loads.  

#### **Sending a Message**  
```javascript
const sendMessage = (messageText) => { 
  if (messageText.trim() !== "") { 
    setMessages([
      ...messages, 
      { id: messages.length + 1, text: messageText, sender: "self" },
    ]);
  }
};
```  
- **Why check `if (messageText.trim() !== "")`?**  
  To ensure that empty or whitespace-only messages are not sent.  

- **What does `setMessages([...messages, ...])` do?**  
  It updates the state by:  
  - Copying existing messages using the spread operator (`...messages`).  
  - Adding a new message object with `text` and `sender`.  

---

### **2. Header.js**  

#### **Purpose**  
This file defines the top bar of the app, displaying the app name, user's profile picture, and username.  

#### **Component Props**  
```javascript
const Header = ({ username }) => { 
```  
- **What are props?**  
  Props (short for "properties") are inputs to React components. Here, `username` is passed from the parent (`ChatApp`).  

---

### **3. Message.js**  

#### **Purpose**  
This file displays individual messages with styling based on the sender.  

#### **Dynamic Styling**  
```javascript
<div
  className={`${styles.message} ${
    sender === "self" ? styles.self : styles.other
  }`}
>
```
- **What does this code do?**  
  It conditionally applies CSS classes:
  - If `sender === "self"`, apply the `self` class to style the user's messages.
  - Otherwise, apply the `other` class for messages from others.  

---

### **4. MessageInput.js**  

#### **Purpose**  
This file defines the input box where users type their messages and the send button to submit them.  

#### **Local State**  
```javascript
const [inputValue, setInputValue] = useState("");
```  
- **Why use local state here?**  
  The input's value changes independently of other components, so it uses its own state.  

#### **Handling Events**  
```javascript
onChange={(e) => setInputValue(e.target.value)}
onClick={handleSend}
```  
- **What is `onChange`?**  
  An event listener for text input. It updates `inputValue` whenever the user types.  

- **What is `onClick`?**  
  An event listener for the send button. It calls the `handleSend` function, which sends the message.  

---

### **5. CSS (ChatApp.module.css)**  

#### **Scoped Styles**  
```css
.chatApp {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
```  
- **Why `height: 100vh`?**  
  It makes the app fill the entire screen vertically, creating a full-page chat experience.  

#### **Dynamic Classes**  
```css
.self {
  align-self: flex-end;
  background-color: #DCF8C6;
  color: #000;
}
.other {
  align-self: flex-start;
  background-color: #FFF;
  color: #333;
}
```  
- **Why dynamic classes for `self` and `other`?**  
  To distinguish between user messages and received messages visually.  

---
