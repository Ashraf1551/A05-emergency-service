# Question and Answer

### 1.What is the difference between getElementById getElementsByClassName, and querySelector / querySelectorAll?

- getElementById: exactly get one element with the specific id
- getElementsByClassName: get HTMLCollection of all elements with the given class name
- querySelector: get first matching element with the id or class
- querySelectorAll: get NodeList of all matching elements based on CSS selector

---

### 2.How do you create and insert a new element into the DOM?

- using createElement and appendChild, we can create and insert a new element into the DOM

---

### 3.What is Event Bubbling and how does it work?

- bubbles up from the event(button clicked), then bubbles up to the parent
- child(button clicked/event) to parent to root

---

### 4.What is Event Delegation in JavaScript? Why is it useful?

- if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common parent.
- useful: dynamic elements, cleaner code

---

### 5.What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault(): prevent web page from reloading
- stopPropagation(): stops the event from bubbling up
