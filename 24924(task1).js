
// Question 1:
// Create an object representing a car with properties 
// make, model, and year. Use Object.freeze() to prevent modifications,
//  then try to change the model and display the result.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
  };
  
  // Freezing the car object to prevent modifications
  Object.freeze(car);
  
  // Attempting to modify the model property
  car.model = "Camry";
  
  // Displaying the result
  console.log(car);



//   Question 2:
//   Create an object representing a user with properties 
//   name, age, and email. Use Object.isFrozen() to check if the object
//    is frozen and display the result.
  
const user = {
    name: "chintu",
    age: 22,
    email: "chintu07@gmail.com"
};
  
  // Checking if the object is frozen before freezing
  console.log("Is user object frozen before freezing?", Object.isFrozen(user)); // false
  
  // Freezing the user object
  Object.freeze(user);
  
  // Checking if the object is frozen after freezing
  console.log("Is user object frozen after freezing?", Object.isFrozen(user)); // true



//   Question 3:
//   Create an object representing a product with properties
//   name, category, and price. Use Object.isSealed() to check 
//   if the object is sealed and display the result.
const product = {
    name: "Laptop",
    category: "Electronics",
    price: 1200
  };
  
  // Checking if the object is sealed before sealing
  console.log("Is product object sealed before sealing?", Object.isSealed(product)); // false
  
  // Sealing the product object
  Object.seal(product);
  
  // Checking if the object is sealed after sealing
  console.log("Is product object sealed after sealing?", Object.isSealed(product)); // true



//   Question 4:
//   Create an object representing a laptop with properties 
//   brand, model, and price. Use Object.keys() to list all the 
//   keys in the object and display them.
  
const laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 1500
  };
  
  // Listing all the keys in the laptop object
  const keys = Object.keys(laptop);
  
  // Displaying the keys
  console.log(keys);


//   Question 5:
//   Create an object representing a house with properties 
//   location, size, and price. Use Object.values() to retrieve 
//   all values from the object and display them.
  
const house = {
    location: "New York",
    size: "3000 sqft",
    price: 850000
  };
  
  // Retrieving all the values from the house object
  const values = Object.values(house);
  
  // Displaying the values
  console.log(values);


//   Question 6:
//   Create an object representing a smartphone with properties
//  brand, model, and price. Seal the object using Object.seal(),
//    modify the price, and then check if the object is sealed using Object.isSealed().
  
const smartphone = {
    brand: "Apple",
    model: "iPhone 14",
    price: 999
  };
  
  // Sealing the smartphone object
  Object.seal(smartphone);
  
  // Modifying the price
  smartphone.price = 1099;
  
  // Checking if the object is sealed
  const isSealed = Object.isSealed(smartphone);
  
  // Displaying the modified object and the sealed status
  console.log(smartphone);  // { brand: "Apple", model: "iPhone 14", price: 1099 }
  console.log("Is smartphone object sealed?", isSealed);  // true



//   Question 7:
//   Create an object representing a book with properties 
//   title, author, and publishedYear. Freeze the object using 
//   Object.freeze(), then try to modify the publishedYear and 
//   check if the object is frozen using Object.isFrozen().
  
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  };
  
  // Freezing the book object
  Object.freeze(book);
  
  // Attempting to modify the publishedYear
  book.publishedYear = 2023;  // This modification will be ignored
  
  // Checking if the object is frozen
  const isFrozen = Object.isFrozen(book);
  
  // Displaying the modified object and the frozen status
  console.log(book);  // { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
  console.log("Is book object frozen?", isFrozen);  // true


//   Question 8:
//   Create an object representing a person with properties 
//   firstName, lastName, and age. Use both Object.keys() and 
//   Object.values() to retrieve and display all keys and values 
//   of the object.
  
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Retrieving all the keys of the person object
  const personKeys = Object.keys(person);
  
  // Retrieving all the values of the person object
  const personValues = Object.values(person);
  
  // Displaying the keys and values
  console.log("Keys:", personKeys);    // ["firstName", "lastName", "age"]
  console.log("Values:", personValues); // ["John", "Doe", 30]

  

//   Question 9:
//   Create an object representing a course with properties 
//   title, instructor, and duration. Use Object.entries() 
//   to get the key-value pairs, and then modify the object
//    using the delete operator to remove the duration property.
  
const course = {
    title: "JavaScript Basics",
    instructor: "Jane Smith",
    duration: "4 weeks"
  };
  
  // Retrieving key-value pairs of the course object
  const entries = Object.entries(course);
  
  // Displaying the key-value pairs
  console.log("Key-value pairs:", entries); 
  // [["title", "JavaScript Basics"], ["instructor", "Jane Smith"], ["duration", "4 weeks"]]
  
  // Removing the 'duration' property from the course object
  delete course.duration;
  
  // Displaying the modified object
  console.log("Modified course object:", course);
  // { title: "JavaScript Basics", instructor: "Jane Smith" }


//   Question 10:
//   Create an object representing an employee with properties
//    name, position, and salary. Seal the object using Object.seal(),
//     modify the position, and then use Object.keys() to list all 
//     properties and verify that no new properties can be added.
  
const employee = {
    name: "Alice Johnson",
    position: "Developer",
    salary: 75000
  };
  
  // Sealing the employee object
  Object.seal(employee);
  
  // Modifying the position
  employee.position = "Senior Developer";
  
  // Attempting to add a new property
  employee.department = "IT";  // This modification will be ignored
  
  // Listing all properties using Object.keys()
  const employeeKeys = Object.keys(employee); // Changed variable name
  
  // Displaying the modified object and the keys
  console.log("Modified employee object:", employee);
  // { name: "Alice Johnson", position: "Senior Developer", salary: 75000 }
  console.log("Keys:", employeeKeys);  // ["name", "position", "salary"]
  
  
  
  
