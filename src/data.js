const data = [
  {
    question: "What are the key differences/advantages of functional vs OOP?",
    answer:
      "They are different ways to store data. In functional programming the data is transformed using functions, in OOP data is stored in objects/classes. OOP can be hard to maintain object data whilst increasing inheritence levels",
  },
  {
    question: "What are the 4 principles of OOP?",
    answer: "encapsulation, abstraction, inheritance, and polymorphism",
  },

  {
    question: "Give examples of primitive and complex/references data types",
    answer:
      "Primitive - strings, booleon. Complex - arrays, objects, functions",
  },
  {
    question: "What makes a function pure?",
    answer:
      "Should be independant, no side effects, given the same input they return the same output. Named with correct convention (e.g. handle, is, amount), be testable",
  },
  {
    question: "What makes code clean",
    answer:
      "DRY (don't repeat), SRP(single responsibility principal) each function does 1 job, testable, minimum comments.",
  },
  {
    question: "How do you link JS and CSS files in your HTML?",
    answer: "JS - <script src=file></script>, CSS - <.....,",
  },
  {
    question: "Describe the 3 types of testing and programme options",
    answer:
      "Unit = in isolation - JEST, Integration = how functions work together, End to End = larger scale testing, how app works as a whole - CYPRESS",
  },
  {
    question: "How do you set up JS testing (JEST)?",
    answer:
      "1. npm install jest --save-dev. 2. npm init -y. 3. In package.json file change test to jest. 4. Create file babel.rc and add code. 5. Write tests. 6. npm test testFileName.js",
  },
  {
    question: "Write a basic Unit test (JEST)?",
    answer:
      "1. Prefix function with export. 2. Create .test.js file. 3. In test file import {functionName} from ..... 4. test(describe test, () => {let varName = funcName(parameters);  expect(varName).toBe(expected exact outcome, e.g. 4); });",
  },
  {
    question:
      "What term do you use if need something to be done prior to a test and write example where need to wait for a promise",
    answer: "beforeAll( () => { functToRun() });",
  },
  {
    question: "Write a test to check if an array matches",
    answer:
      "test(return ne correct array, () => { expect(varName.funcName([string1, string2]).toMatchObject{[string1, string2]) });",
  },
  {
    question: "How do you set up Cypress testing?",
    answer:
      "1. npm install. 2. npm init. 3. npm install cypress --save-dev. 4. npx cypress open. Can then view different tests",
  },
  {
    question: "How to combine 2 arrays",
    answer: "const varName = firstArray.concat(secondArr)",
  },
  {
    question: "How to reverse and array",
    answer:
      "const nerArr = []; for (let i = 0, i < oldArr.length; i++) { newArr.unshift (oldArr [i] ); }",
  },
  {
    question: "How to copy and add to an array",
    answer:
      "const nerArr = [...oldArr, new item, etc] - use the spread operator",
  },
  {
    question: "Create a new class and an object from it",
    answer:
      "class className { constructor(paramater1, paramater2) { *this.paramater1 = paramater1*, *this.paramater2 = paramater2*} then create object with: const obj = new className()  ",
  },
  {
    question: "Write a complex data type and access an inner value",
    answer:
      "const data = [address {line1: Old Street, line2: postcode}, name: Tamzin]. To access postcode - data[0].line2",
  },
  {
    question: "What does REST stand for and what is it?",
    answer:
      "Representational State Transfer. Type of API and a standard for creating stateless APIs that conform to REST style. Referred to as Restful API. Can be developed using most programmes / languages",
  },
  {
    question: "What's an API?",
    answer:
      "Application Programming Interface is a a way for applications and devices to communicate with each other. ",
  },
  {
    question: "Write a fetch request",
    answer:
      "const varName = () => { fetch(url)  .then((response) => response.json())   .then((json) => action)    .catch((error) => console.log(error))} ",
  },
];

export default data;
