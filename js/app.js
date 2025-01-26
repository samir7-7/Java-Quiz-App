const quizData = [
  {
    question:
      "Which of the following is a way to write a single-line comment in Java?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: "a",
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    a: "true",
    b: "false",
    c: "0",
    d: "null",
    correct: "b",
  },
  {
    question: "How many primitive data types are supported by Java?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },
  {
    question: "Which data type is used to store a single character in Java?",
    a: "String",
    b: "char",
    c: "Character",
    d: "boolean",
    correct: "b",
  },
  {
    question: "What symbol is used to denote a multi-line comment in Java?",
    a: "//",
    b: "/* ... */",
    c: "#",
    d: "<!-- ... -->",
    correct: "b",
  },
  {
    question: "Which of the following is a floating point data type in Java?",
    a: "int",
    b: "byte",
    c: "float",
    d: "char",
    correct: "c",
  },
  {
    question: "What is the maximum value of a byte in Java?",
    a: "127",
    b: "255",
    c: "128",
    d: "64",
    correct: "a",
  },
  {
    question:
      "Which of the following is NOT a non-primitive data type in Java?",
    a: "String",
    b: "Array",
    c: "int",
    d: "Class",
    correct: "c",
  },
  {
    question: "What does the char type represent in Java?",
    a: "A string",
    b: "A single character",
    c: "An integer",
    d: "A boolean value",
    correct: "b",
  },
  {
    question: "Which of the following data types can store decimal values?",
    a: "int",
    b: "float",
    c: "byte",
    d: "char",
    correct: "b",
  },
  {
    question: "What is the default value of an uninitialized int variable?",
    a: "0",
    b: "null",
    c: "undefined",
    d: "1",
    correct: "a",
  },
  {
    question: "Which of the following is an integer data type in Java?",
    a: "float",
    b: "double",
    c: "int",
    d: "char",
    correct: "c",
  },
  {
    question: "How do you denote a documentation comment in Java?",
    a: "//",
    b: "/* ... */",
    c: "/** ... */",
    d: "<!-- ... -->",
    correct: "c",
  },
  {
    question: "What is the size of a short data type in Java?",
    a: "8 bits",
    b: "16 bits",
    c: "32 bits",
    d: "64 bits",
    correct: "b",
  },
  {
    question:
      "Which of the following cannot be used as a variable name in Java?",
    a: "myVariable",
    b: "7up",
    c: "my_variable",
    d: "$variable",
    correct: "b",
  },
  {
    question: "What is the range of a boolean type in Java?",
    a: "0 to 1",
    b: "true or false",
    c: "-1 to 1",
    d: "any integer",
    correct: "b",
  },
  {
    question: "Which operator is used for assignment in Java?",
    a: "==",
    b: "=",
    c: ":",
    d: "<-",
    correct: "b",
  },
  {
    question: "What is the minimum value of a byte in Java?",
    a: "0",
    b: "-128",
    c: "1",
    d: "-255",
    correct: "b",
  },
  {
    question: "Which of the following is a valid char literal?",
    a: "'abc'",
    b: "'A'",
    c: '"A"',
    d: "A",
    correct: "b",
  },
  {
    question: "Which of the following is a primitive data type?",
    a: "String",
    b: "ArrayList",
    c: "int",
    d: "HashMap",
    correct: "c",
  },
  {
    question: "What is the suffix for a float literal in Java?",
    a: "d",
    b: "f",
    c: "F",
    d: "both b and c",
    correct: "d",
  },
  {
    question: "What is the default value of a char variable?",
    a: "' '",
    b: "'0'",
    c: "0",
    d: "'\\u0000'",
    correct: "d",
  },
  {
    question: "Which keyword is used to define a class in Java?",
    a: "class",
    b: "define",
    c: "object",
    d: "struct",
    correct: "a",
  },
  {
    question: "Which of the following is a non-primitive data type?",
    a: "int",
    b: "char",
    c: "String",
    d: "boolean",
    correct: "c",
  },
  {
    question: "What type of comment is used for generating documentation?",
    a: "Single line",
    b: "Multi-line",
    c: "Documentation",
    d: "Inline",
    correct: "c",
  },
  {
    question: "How many bits are in a float in Java?",
    a: "32",
    b: "64",
    c: "16",
    d: "8",
    correct: "a",
  },
  {
    question: "Which of the following is a valid multi-line comment?",
    a: "/* Comment */",
    b: "// Comment",
    c: "# Comment",
    d: "<!-- Comment -->",
    correct: "a",
  },
  {
    question: "What is the maximum value of a short in Java?",
    a: "32767",
    b: "255",
    c: "128",
    d: "65535",
    correct: "a",
  },
  {
    question: "Which type is used to store true/false values?",
    a: "int",
    b: "boolean",
    c: "char",
    d: "float",
    correct: "b",
  },
  {
    question: "What is the default value of an uninitialized object reference?",
    a: "0",
    b: "null",
    c: "undefined",
    d: "empty",
    correct: "b",
  },
  {
    question: "Which of the following can be used as an identifier in Java?",
    a: "1stVariable",
    b: "my-variable",
    c: "$myVariable",
    d: "my variable",
    correct: "c",
  },
  {
    question: "What is the size of a double data type in Java?",
    a: "32 bits",
    b: "64 bits",
    c: "16 bits",
    d: "128 bits",
    correct: "b",
  },
  {
    question: "How do you declare a boolean variable in Java?",
    a: "boolean isTrue = 1;",
    b: "boolean isTrue = true;",
    c: "boolean isTrue = 'true';",
    d: "boolean isTrue = '1';",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a floating-point type?",
    a: "float",
    b: "double",
    c: "decimal",
    d: "both a and b",
    correct: "c",
  },
  {
    question: "What is the range of values for an int in Java?",
    a: "-2^31 to 2^31-1",
    b: "-2^15 to 2^15-1",
    c: "-128 to 127",
    d: "0 to 255",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to define a multi-line comment?",
    a: "// comment",
    b: "# comment",
    c: "/* comment */",
    d: "<!-- comment -->",
    correct: "c",
  },
  {
    question: "What is the default value of a String variable?",
    a: "''",
    b: "0",
    c: "null",
    d: "undefined",
    correct: "c",
  },
  {
    question: "Which primitive type is used for creating arrays?",
    a: "int",
    b: "double",
    c: "char",
    d: "none of the above",
    correct: "d",
  },
  {
    question: "What is the value range of a char in Java?",
    a: "0 to 255",
    b: "0 to 65535",
    c: "-128 to 127",
    d: "0 to 100",
    correct: "b",
  },
  {
    question: "Which of the following keywords is used to declare a variable?",
    a: "var",
    b: "let",
    c: "const",
    d: "int",
    correct: "d",
  },
  {
    question: "Which of the following is true regarding Java?",
    a: "Java is a weakly typed language.",
    b: "Java supports multiple inheritance.",
    c: "Java is a strongly typed language.",
    d: "Java uses pointers.",
    correct: "c",
  },
  {
    question: "Which type of comment can span multiple lines?",
    a: "Single line",
    b: "Documentation",
    c: "Multi-line",
    d: "Inline",
    correct: "c",
  },
  {
    question: "How do you declare a variable of type float?",
    a: "float myVar = 3.14;",
    b: "float myVar = 3.14F;",
    c: "float myVar = 3.14d;",
    d: "float myVar = '3.14';",
    correct: "b",
  },
  {
    question: "What is the default value of a char variable in Java?",
    a: "' '",
    b: "'0'",
    c: "'\\u0000'",
    d: "'null'",
    correct: "c",
  },
  {
    question: "Which of the following is a valid identifier?",
    a: "my variable",
    b: "myVariable",
    c: "2ndVariable",
    d: "$my-variable",
    correct: "b",
  },
  {
    question: "How many bits are in a long in Java?",
    a: "32",
    b: "64",
    c: "16",
    d: "8",
    correct: "b",
  },
  {
    question: "What is the minimum value of a short in Java?",
    a: "-32,768",
    b: "0",
    c: "-128",
    d: "1",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to denote a String in Java?",
    a: "'Hello'",
    b: '"Hello"',
    c: "Hello",
    d: "Hello",
    correct: "b",
  },
  {
    question: "What is the size of a boolean in Java?",
    a: "1 bit",
    b: "8 bits",
    c: "16 bits",
    d: "64 bits",
    correct: "a",
  },
  {
    question: "How do you express hexadecimal values for char types?",
    a: "0x",
    b: "#",
    c: "0h",
    d: "0b",
    correct: "a",
  },
  {
    question: "Which of the following data types is used for large numbers?",
    a: "int",
    b: "float",
    c: "long",
    d: "boolean",
    correct: "c",
  },
  {
    question: "Which type of variable must be initialized before use?",
    a: "Instance variable",
    b: "Static variable",
    c: "Local variable",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What does the default value of a variable depend on?",
    a: "Variable type",
    b: "Variable name",
    c: "Variable scope",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which of the following is a floating-point literal?",
    a: "3.14",
    b: "3.14f",
    c: "3.14d",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What is the maximum value of a long in Java?",
    a: "2^63 - 1",
    b: "2^32 - 1",
    c: "2^31 - 1",
    d: "2^16 - 1",
    correct: "a",
  },
  {
    question: "What type of variable is declared within a method?",
    a: "Instance variable",
    b: "Static variable",
    c: "Local variable",
    d: "Global variable",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a primitive type?",
    a: "int",
    b: "char",
    c: "String",
    d: "boolean",
    correct: "c",
  },
  {
    question: "What is the purpose of comments in Java?",
    a: "To execute code",
    b: "To explain code",
    c: "To compile code",
    d: "To debug code",
    correct: "b",
  },
  {
    question: "How do you denote a boolean value in Java?",
    a: "1 or 0",
    b: "true or false",
    c: "yes or no",
    d: "on or off",
    correct: "b",
  },
  {
    question: "What does the final keyword indicate when used with a variable?",
    a: "Variable is constant",
    b: "Variable can be changed",
    c: "Variable is static",
    d: "Variable is local",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to declare an integer variable?",
    a: "int num = 5;",
    b: "integer num = 5;",
    c: "num = 5;",
    d: "int num;",
    correct: "a",
  },
  {
    question: "What is the value of the following expression: 10 == 10?",
    a: "true",
    b: "false",
    c: "1",
    d: "0",
    correct: "a",
  },
  {
    question: "Which of the following is used to concatenate strings in Java?",
    a: "+",
    b: "&",
    c: "||",
    d: "&&",
    correct: "a",
  },
  {
    question: "What is the correct way to create a constant variable?",
    a: "const int x = 10;",
    b: "final int x = 10;",
    c: "static int x = 10;",
    d: "constant int x = 10;",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a valid identifier?",
    a: "$myVar",
    b: "_myVar",
    c: "2myVar",
    d: "myVar123",
    correct: "c",
  },
  {
    question: "What is the result of the expression: 5 + 3 * 2?",
    a: "16",
    b: "11",
    c: "10",
    d: "13",
    correct: "b",
  },
  {
    question: "Which of the following is a character literal?",
    a: "'A'",
    b: '"A"',
    c: "A",
    d: "A'",
    correct: "a",
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    a: "Refer to the current object",
    b: "Create a new object",
    c: "Access static members",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which of the following is used for logical operations?",
    a: "==",
    b: "&&",
    c: "+",
    d: "-",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: System.out.println(5 + 3);?",
    a: "8",
    b: "53",
    c: "Error",
    d: "5 + 3",
    correct: "a",
  },
  {
    question: "What is a variable in programming?",
    a: "A fixed value",
    b: "A container for data",
    c: "A type of function",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of the following is a valid way to initialize a variable?",
    a: "int num;",
    b: "int num = 5;",
    c: "num = 5;",
    d: "Both a and b",
    correct: "d",
  },
  {
    question: "What does the static keyword indicate?",
    a: "Variable is constant",
    b: "Variable belongs to the class",
    c: "Variable is local",
    d: "Variable is global",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a valid boolean expression?",
    a: "true && false",
    b: "true || false",
    c: "5 > 3",
    d: "5 + 3",
    correct: "d",
  },
  {
    question: "What is the result of the expression: 10 > 5?",
    a: "true",
    b: "false",
    c: "1",
    d: "0",
    correct: "a",
  },
  {
    question: `What will be the output of the following code?
    public class Main {
      public static void main(String[] args) {
        int x = 5;
        System.out.println(x++ + ++x);
      }
    }`,
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    correct: "c",
  },
  {
    question: `Which of the following statements about the code is true?
    abstract class Shape {
        abstract void draw();
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing Circle");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Shape shape = new Circle();
            shape.draw();
        }
    }`,
    a: "The code will not compile as Shape is abstract.",
    b: "It will print 'Drawing Circle'.",
    c: "Runtime error due to the use of abstract class.",
    d: "No output due to incorrect method implementation.",
    correct: "b",
  },
  {
    question: `What is the result of the following code snippet?
    interface Animal {
        void sound();
    }
    class Dog implements Animal {
        public void sound() {
            System.out.println("Bark");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Animal animal = new Dog();
            animal.sound();
        }
    }`,
    a: "Compile-time error",
    b: "'Bark' will be printed",
    c: "No output as sound() isn't implemented",
    d: "Runtime exception due to the interface",
    correct: "b",
  },
  {
    question: `Find the error in the following code:
    public class Main {
        public static void main(String[] args) {
            int arr[] = new int[5];
            arr[5] = 10;
            System.out.println(arr[5]);
        }
    }`,
    a: "Array index out of bounds",
    b: "Compilation error at 'arr[5] = 10;'",
    c: "Run-time exception: array length exceeded",
    d: "Logical error in accessing arrays",
    correct: "a",
  },
  {
    question: `What will be the output of the following program?
    class Test {
        int x = 10;
        public static void main(String args[]) {
            Test t = new Test();
            System.out.println(t.x);
        }
    }`,
    a: "0",
    b: "Compile-time error",
    c: "10",
    d: "null",
    correct: "c",
  },
  {
    question: `Guess the output:
    class Parent {
        void display() {
            System.out.println("Parent");
        }
    }
    class Child extends Parent {
        void display() {
            System.out.println("Child");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Parent p = new Child();
            p.display();
        }
    }`,
    a: "Parent",
    b: "Child",
    c: "Compile-time error",
    d: "Runtime exception",
    correct: "b",
  },
  {
    question: `What will happen if the following code runs?
    public class Main {
        public static void main(String[] args) {
            int a = 10, b = 0;
            System.out.println(a / b);
        }
    }`,
    a: "0",
    b: "Compile-time error",
    c: "Runtime error: ArithmeticException",
    d: "Infinity",
    correct: "c",
  },
  {
    question: `Which of the following best describes this output?
    class Test {
        void display(int a, double b) {
            System.out.println("Integer and Double");
        }
        void display(double b, int a) {
            System.out.println("Double and Integer");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Test t = new Test();
            t.display(10, 10.5);
        }
    }`,
    a: "Compile-time error due to ambiguity",
    b: "'Integer and Double' will be printed",
    c: "'Double and Integer' will be printed",
    d: "Runtime exception: incompatible parameters",
    correct: "b",
  },
  {
    question: `Identify the error:
    public class Main {
        public static void main(String[] args) {
            final int x = 10;
            x = 20;
            System.out.println(x);
        }
    }`,
    a: "No error; output is 20",
    b: "Compile-time error: cannot assign a value to final variable",
    c: "Runtime exception",
    d: "Logical error: x not reassignable",
    correct: "b",
  },
  {
    question: `Analyze the inheritance structure:
    class A {
        int x = 5;
    }
    class B extends A {
        int x = 10;
        void printValues() {
            System.out.println(super.x);
            System.out.println(x);
        }
    }
    public class Main {
        public static void main(String[] args) {
            B b = new B();
            b.printValues();
        }
    }`,
    a: "5 and 10",
    b: "10 and 5",
    c: "5 and 5",
    d: "10 and 10",
    correct: "a",
  },
  {
    question: "Which of the following statements about arrays in Java is true?",
    a: "Array size can be changed after declaration.",
    b: "Array index starts at 1.",
    c: "Arrays are objects in Java.",
    d: "Arrays are immutable collections.",
    correct: "c",
  },
  {
    question: "What is the purpose of the 'this' keyword in Java?",
    a: "To refer to the current object",
    b: "To create a new object",
    c: "To invoke a static method",
    d: "To inherit a class",
    correct: "a",
  },
  {
    question: "Which method is invoked first in a Java program?",
    a: "start()",
    b: "run()",
    c: "main()",
    d: "init()",
    correct: "c",
  },
  {
    question: "What is an abstract class in Java?",
    a: "A class with no methods",
    b: "A class that cannot be instantiated",
    c: "A class with only static methods",
    d: "A class with private fields only",
    correct: "b",
  },
  {
    question: "What is the default value of an int variable in Java?",
    a: "0",
    b: "null",
    c: "undefined",
    d: "-1",
    correct: "a",
  },
  {
    question: "What is the purpose of a constructor in Java?",
    a: "To create new methods",
    b: "To initialize objects",
    c: "To define static methods",
    d: "To destroy objects",
    correct: "b",
  },
  {
    question: "Which of the following is not a feature of Java?",
    a: "Platform independence",
    b: "Garbage collection",
    c: "Pointer arithmetic",
    d: "Object-oriented programming",
    correct: "c",
  },
  {
    question: "Which of these is a valid access specifier in Java?",
    a: "protected",
    b: "package",
    c: "internal",
    d: "shared",
    correct: "a",
  },
  {
    question: "What happens if a constructor in Java has a return type?",
    a: "Compile-time error",
    b: "Runtime exception",
    c: "It runs successfully",
    d: "The constructor behaves as a normal method",
    correct: "a",
  },
  {
    question:
      "Which keyword is used to prevent a method from being overridden?",
    a: "static",
    b: "final",
    c: "const",
    d: "abstract",
    correct: "b",
  },
  {
    question: 'What is the output of 10 + "20" in Java?',
    a: "30",
    b: "1020",
    c: "Compile-time error",
    d: "Runtime exception",
    correct: "b",
  },
  {
    question: "Which of the following is a marker interface in Java?",
    a: "Runnable",
    b: "Serializable",
    c: "Cloneable",
    d: "Comparable",
    correct: "b",
  },
  {
    question: "What is the default access modifier for a class in Java?",
    a: "private",
    b: "protected",
    c: "default",
    d: "public",
    correct: "c",
  },
  {
    question: "What is the purpose of the 'super' keyword in Java?",
    a: "To call the parent class constructor",
    b: "To override a parent class method",
    c: "To create a subclass",
    d: "To define a static method",
    correct: "a",
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    a: "int",
    b: "char",
    c: "string",
    d: "boolean",
    correct: "c",
  },
  {
    question: "What is returned by the length attribute of an array in Java?",
    a: "The last index of the array",
    b: "The total number of elements in the array",
    c: "The memory size of the array",
    d: "The type of the array",
    correct: "b",
  },
  {
    question: "Which keyword is used to declare a constant in Java?",
    a: "static",
    b: "const",
    c: "final",
    d: "immutable",
    correct: "c",
  },
  {
    question: "What is the correct syntax to create an object in Java?",
    a: "MyClass obj = new MyClass();",
    b: "MyClass obj();",
    c: "MyClass obj = create MyClass();",
    d: "MyClass obj = MyClass.new();",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid declaration of a 2D array in Java?",
    a: "int arr[2,3];",
    b: "int[][] arr = new int[2][3];",
    c: "int arr = [2][3];",
    d: "int arr(2,3);",
    correct: "b",
  },
  {
    question: "What is the purpose of the instanceof operator in Java?",
    a: "To check if an object is of a specific type",
    b: "To cast an object to a specific type",
    c: "To create an instance of a class",
    d: "To destroy an instance of a class",
    correct: "a",
  },
  {
    question: "Who is the founder of Java?",
    a: "James Gosling",
    b: "Dennis Ritchie",
    c: "Bjarne Stroustrup",
    d: "Guido van Rossum",
    correct: "a",
  },
  {
    question: "A file with the '.java' extension is called:",
    a: "Java bytecode",
    b: "Java source code file",
    c: "Executable file",
    d: "Compiled file",
    correct: "b",
  },
  {
    question:
      "Which package provides a complete set of tools for developing and executing Java code?",
    a: "java.io",
    b: "JDK",
    c: "JVM",
    d: "JRE",
    correct: "b",
  },
  {
    question: "Java is an example of a:",
    a: "Procedural programming language",
    b: "Object-oriented programming language",
    c: "Markup language",
    d: "Functional programming language",
    correct: "b",
  },
  {
    question:
      "Which keyword is used to allocate memory for a 1-D array in Java?",
    a: "new",
    b: "malloc",
    c: "alloc",
    d: "array",
    correct: "a",
  },
  {
    question: "What will be the index number of the 5th element in an array?",
    a: "5",
    b: "4",
    c: "6",
    d: "0",
    correct: "b",
  },
  {
    question:
      "What will happen if you access an array element beyond its bounds in Java?",
    a: "Compile-time error",
    b: "Undefined behavior",
    c: "ArrayIndexOutOfBoundsException",
    d: "Returns null",
    correct: "c",
  },
  {
    question:
      "Which type of loop guarantees execution of the body at least once?",
    a: "for loop",
    b: "while loop",
    c: "do-while loop",
    d: "foreach loop",
    correct: "c",
  },
  {
    question:
      "Which keyword is used to stop the current iteration and move to the next in Java?",
    a: "continue",
    b: "break",
    c: "exit",
    d: "return",
    correct: "a",
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    a: "true",
    b: "false",
    c: "0",
    d: "null",
    correct: "b",
  },
  {
    question: "What is the size of an int data type in Java?",
    a: "2 bytes",
    b: "4 bytes",
    c: "8 bytes",
    d: "1 byte",
    correct: "b",
  },
  {
    question: "Which of the following is used to execute Java bytecode?",
    a: "Compiler",
    b: "Interpreter",
    c: "JVM",
    d: "JDK",
    correct: "c",
  },
  {
    question: "What will happen if you write 'byte trainSpeed = 240;'?",
    a: "The program will compile and run successfully",
    b: "Compile-time error",
    c: "Runtime exception",
    d: "Overflow error",
    correct: "b",
  },
  {
    question: "How many primitive data types are there in Java?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    a: "extends",
    b: "implements",
    c: "inherits",
    d: "super",
    correct: "a",
  },
  {
    question:
      "Which access modifier allows visibility only within the same class?",
    a: "public",
    b: "private",
    c: "protected",
    d: "default",
    correct: "b",
  },
  {
    question: "Which of the following is not a valid keyword in Java?",
    a: "class",
    b: "interface",
    c: "main",
    d: "super",
    correct: "c",
  },
  {
    question: "What is the correct way to declare a 2D array in Java?",
    a: "int[][] arr;",
    b: "array int[2][2];",
    c: "int arr{}{};",
    d: "int arr[2,2];",
    correct: "a",
  },
  {
    question:
      "Which of the following operators is used for logical AND in Java?",
    a: "&",
    b: "&&",
    c: "||",
    d: "|",
    correct: "b",
  },
  {
    question: "What is the default value of a char variable in Java?",
    a: "'\u0000'",
    b: "' '",
    c: "null",
    d: "undefined",
    correct: "a",
  },
  {
    question:
      "Which of the following provides a complete package of tools for developing and executing Java code?",
    a: "Eclipse",
    b: "NetBeans",
    c: "BlueJ",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "In Object Oriented Programming, a/an __________ describes what a/an __________ can contain within the code.",
    a: "Class, Object",
    b: "Object, Class",
    c: "Method, Variable",
    d: "Interface, Implementation",
    correct: "a",
  },
  {
    question:
      "A __________ is a set of instructions used to solve a specific problem.",
    a: "Method",
    b: "Function",
    c: "Program",
    d: "Module",
    correct: "c",
  },
  {
    question: "Java is an example of a ____________.",
    a: "High-level language",
    b: "Low-level language",
    c: "Machine language",
    d: "Assembly language",
    correct: "a",
  },
  {
    question:
      "Interpreter translates programs written in high-level language to _________",
    a: "Assembly language",
    b: "Machine code",
    c: "Bytecode",
    d: "Source code",
    correct: "b",
  },
  {
    question: "A file with the '.class' extension is called a/an:",
    a: "Source file",
    b: "Bytecode file",
    c: "Executable file",
    d: "Script file",
    correct: "b",
  },
  {
    question: "Java uses:",
    a: "Compilers only",
    b: "Interpreters only",
    c: "Both compilers and interpreters",
    d: "Neither compilers nor interpreters",
    correct: "c",
  },
  {
    question: "Which of the following is a language processor?",
    a: "Compiler",
    b: "Interpreter",
    c: "Assembler",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Where to declare instance variables?",
    a: "Inside methods",
    b: "Inside constructors",
    c: "Inside classes",
    d: "Inside loops",
    correct: "c",
  },
  {
    question: "Which of the following is a valid identifier in Java?",
    a: "2ndVariable",
    b: "_variableName",
    c: "first-name",
    d: "first name",
    correct: "b",
  },
  {
    question: "Which of the following is a keyword in Java? (Choose multiple)",
    a: "static",
    b: "Void",
    c: "main",
    d: "Class",
    correct: "a",
  },
  {
    question: "All of the following are types of variables in Java except ___.",
    a: "Local variables",
    b: "Global variables",
    c: "Instance variables",
    d: "Static variables",
    correct: "b",
  },
  {
    question: "Operator performs operations with ___________",
    a: "Constants",
    b: "Variables",
    c: "Literals",
    d: "Expressions",
    correct: "b",
  },
  {
    question:
      "What will be the output of the following program?\nSystem.out.print(55 % 9);\nSystem.out.print (55 / 9);",
    a: "6 6",
    b: "6 5",
    c: "5 6",
    d: "5 5",
    correct: "b",
  },
  {
    question:
      "Logical AND and Logical OR operator is represented by ______ in Java.",
    a: "&& and ||",
    b: "AND and OR",
    c: "& and |",
    d: "&& and |",
    correct: "a",
  },
  {
    question: "The default value for boolean data type is:",
    a: "1",
    b: "0",
    c: "true",
    d: "false",
    correct: "d",
  },
  {
    question:
      "What is not true about the following statement?\nfloat salary = 23456.55;",
    a: "Float can hold decimal values",
    b: "Float must be initialized",
    c: "Float cannot hold large values",
    d: "None of the above",
    correct: "d",
  },
  {
    question:
      "boolean isTrue = 1;\nWhich of the following is true about the given statement?",
    a: "It's valid syntax.",
    b: "It's invalid syntax.",
    c: "It's valid but will cause an error.",
    d: "It's valid only in older Java versions.",
    correct: "b",
  },
  {
    question:
      "Byte data type holds numeric value in Java. What happens if we write:\nbyte trainSpeed = 240;",
    a: "Compilation error",
    b: "Runtime error",
    c: "Value is accepted",
    d: "Value is truncated",
    correct: "a",
  },
  {
    question:
      'What is wrong with the given program?\nint ageOfStudentAtIIC = -250;\nSystem.out.println("The value of age is: " + ageOfStudentAtIIC);',
    a: "Negative age is not valid",
    b: "No error",
    c: "Output will cause error",
    d: "Age cannot be more than 100",
    correct: "a",
  },
  {
    question: "How many primitive data types does Java provide?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },
  {
    question: "Is this legal in Java?\ndouble salary = 23.89f;",
    a: "Yes",
    b: "No",
    c: "Only in older Java versions",
    d: "Yes, but it will cause a warning",
    correct: "a",
  },
  {
    question:
      'What is the output?\nSystem.out.println("Itahari International College");',
    a: "Itahari International College",
    b: "Error",
    c: "Itahari",
    d: "International College",
    correct: "a",
  },
  {
    question:
      'Find the value of C.\nString a = "4";\nString b = "5";\nString c = a + b;\nSystem.out.println(c);',
    a: "9",
    b: "45",
    c: "Error",
    d: "4.5",
    correct: "b",
  },
  {
    question: "Java is a _______ language.",
    a: "Compiled",
    b: "Interpreted",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "You can access local variable of one method in another method. True or false?",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question:
      "You cannot run java program if you do not have BlueJ installed. True or false?",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question:
      "The _______ file is generated after successful compilation of Java source code.",
    a: ".class",
    b: ".java",
    c: ".exe",
    d: ".byte",
    correct: "a",
  },
  {
    question: "Java is _____________ language.",
    a: "Platform-dependent",
    b: "Platform-independent",
    c: "Only for web development",
    d: "Only for desktop applications",
    correct: "b",
  },
  {
    question: "Char data type in Java holds ASCII value only.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "Int data type is _____ integer.",
    a: "16-bit",
    b: "32-bit",
    c: "64-bit",
    d: "8-bit",
    correct: "b",
  },
  {
    question:
      "Final value of the given variable is:\nint age = 50;\nage++;\nage--;\nSystem.out.println(++age);\nage--;\nSystem.out.println(age);",
    a: "50 50",
    b: "51 49",
    c: "51 50",
    d: "50 49",
    correct: "b",
  },
  {
    question:
      "Which of these is the method which is executed first before execution of any other thing takes place in a program?",
    a: "main()",
    b: "start()",
    c: "init()",
    d: "execute()",
    correct: "a",
  },
  {
    question:
      "What is the main difference between an object and a class in Java?",
    a: "Class is a blueprint; object is an instance.",
    b: "Class is an instance; object is a blueprint.",
    c: "Both are the same.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is an object in Java?",
    a: "An instance of a class",
    b: "A blueprint of a class",
    c: "A method",
    d: "A variable",
    correct: "a",
  },
  {
    question: "What is the 'this' keyword used for in Java?",
    a: "To refer to the current class instance",
    b: "To call static methods",
    c: "To access parent class methods",
    d: "To create new objects",
    correct: "a",
  },
  {
    question: "What is the constructor in Java?",
    a: "A method that initializes an object",
    b: "A method that destroys an object",
    c: "A static method",
    d: "A method that returns a value",
    correct: "a",
  },
  {
    question: "What is the purpose of a method in Java?",
    a: "To perform a specific task",
    b: "To create objects",
    c: "To declare variables",
    d: "To handle exceptions",
    correct: "a",
  },
  {
    question:
      "Can a constructor in Java be overloaded? If yes, then which keyword is used to overload the constructor?",
    a: "Yes, using 'new'",
    b: "Yes, using 'this'",
    c: "No",
    d: "Yes, using 'super'",
    correct: "b",
  },
  {
    question: "What are the ways to overload a method?",
    a: "By changing return type",
    b: "By changing the number of parameters",
    c: "By changing the type of parameters",
    d: "Both B and C",
    correct: "d",
  },
  {
    question:
      "Which of the following is the correct way to declare a 2D array in Java?",
    a: "int[][] arr;",
    b: "int arr[][];",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "What is the difference between postfix increment and prefix increment operators in Java?",
    a: "Postfix increments value after use; prefix before.",
    b: "Both are the same.",
    c: "Postfix is faster.",
    d: "Prefix is faster.",
    correct: "a",
  },
  {
    question: "What is inheritance?",
    a: "A way to acquire properties of another class",
    b: "A method of organizing data",
    c: "A type of variable",
    d: "A way to create interfaces",
    correct: "a",
  },
  {
    question:
      "List the valid access specifier in Java? (Check multiple options)",
    a: "public",
    b: "private",
    c: "protected",
    d: "default",
    correct: "a,b,c,d",
  },
  {
    question: "Inheritance uses the concept of:",
    a: "Encapsulation",
    b: "Polymorphism",
    c: "Abstraction",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Public class A extends B {}. Give correct answer.",
    a: "Class A inherits from class B.",
    b: "Class B inherits from class A.",
    c: "Both classes are independent.",
    d: "Class A is private.",
    correct: "a",
  },
  {
    question: "What are the types of inheritance? (Check multiple options)",
    a: "Single",
    b: "Multiple",
    c: "Multilevel",
    d: "Hierarchical",
    correct: "a,b,c,d",
  },
  {
    question:
      "Which of the following inheritance is not supported by Java? (check multiple options)",
    a: "Multiple inheritance",
    b: "Multilevel inheritance",
    c: "Hierarchical inheritance",
    d: "Single inheritance",
    correct: "a",
  },
  {
    question: "Which keyword is used to create an inheritance?",
    a: "extends",
    b: "inherits",
    c: "implements",
    d: "creates",
    correct: "a",
  },
  {
    question:
      "Which of the following is not a condition for method overloading?",
    a: "Different parameter types",
    b: "Different number of parameters",
    c: "Different return type",
    d: "Same parameter names",
    correct: "d",
  },
  {
    question: "Can we inherit a parent class constructor in child class?",
    a: "Yes",
    b: "No",
    correct: "a",
  },
  {
    question: "What is the use of super keyword in Java?",
    a: "To call the parent class constructor",
    b: "To access parent class methods",
    c: "To refer to the current class",
    d: "Both A and B",
    correct: "d",
  },
  {
    question: "How do you call a parent class constructor in child class?",
    a: "Using 'super()'",
    b: "Using 'this()'",
    c: "Using 'parent()'",
    d: "Using 'call()'",
    correct: "a",
  },
  {
    question: "Annotation used for method overriding",
    a: "@Override",
    b: "@Method",
    c: "@OverrideMethod",
    d: "@Annote",
    correct: "a",
  },
  {
    question: "Two different types of parameters are?",
    a: "Primitive and Reference",
    b: "Static and Dynamic",
    c: "Indexed and Non-indexed",
    d: "Global and Local",
    correct: "a",
  },
  {
    question: "Abstract class can have constructors and static methods?",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      "A method which is declared as abstract and does not have implementation is known as an ____________?",
    a: "Abstract method",
    b: "Concrete method",
    c: "Static method",
    d: "Final method",
    correct: "a",
  },
  {
    question:
      "If a class inheriting an abstract class does not define all of its methods then it will be known as?",
    a: "Concrete class",
    b: "Abstract class",
    c: "Final class",
    d: "Static class",
    correct: "b",
  },
  {
    question:
      "Given the following piece of code....\nWhich of the following statements is true??\npublic class College {\n    public abstract double calculateFee();}",
    a: "It's a valid class.",
    b: "Abstract methods cannot be in a non-abstract class.",
    c: "It's an interface.",
    d: "It will compile without error.",
    correct: "b",
  },
  {
    question: "Which of the following is correct interface?",
    a: "public interface MyInterface {}",
    b: "class MyInterface {}",
    c: "interface MyInterface",
    d: "public class interface MyInterface {}",
    correct: "a",
  },
  {
    question:
      "Find the output of the following code:\npublic interface Bank {\n    void calcInterestRate();\n}\n\nabstract class XYZ implements Bank {}",
    a: "No output",
    b: "Compilation error",
    c: "Abstract method implementation",
    d: "Valid interface",
    correct: "a",
  },
];

const quizEl = document.getElementById("quiz");
const startBtn = document.getElementById("start");
const questionBox = document.getElementById("questionBox");
const submitBtn = document.getElementById("submit");
const numQuestionsInput = document.getElementById("num-questions");

let index = 0;
let correct = 0;
let selectedCount = 1;
let total = quizData.length;
let wrongQuestions = [];
let usedQuestionIndices = [];
let currentQuestionIndex = null;

const getRandomUnusedQuestion = () => {
  let availableIndices = Array.from(Array(quizData.length).keys()).filter(
    (i) => !usedQuestionIndices.includes(i)
  );

  if (availableIndices.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * availableIndices.length);
  const selectedIndex = availableIndices[randomIndex];
  usedQuestionIndices.push(selectedIndex);
  return selectedIndex;
};

startBtn.addEventListener("click", () => {
  usedQuestionIndices = [];
  index = 0;
  correct = 0;
  selectedCount = Math.min(Number(numQuestionsInput.value), quizData.length);
  wrongQuestions = [];
  currentQuestionIndex = getRandomUnusedQuestion();
  loadQuestion();
  document.querySelector(".question-selector").style.display = "none";
  quizEl.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const answers = getAnswers();
  if (answers.length === 0) return alert("Please select at least one answer!");

  const data = quizData[currentQuestionIndex];
  const options = document.querySelectorAll(".box");

  options.forEach((option) => {
    const input = option.querySelector("input");
    if (data.correct.includes(input.value)) {
      option.classList.add("correct");
    } else if (answers.includes(input.value)) {
      option.classList.add("wrong");
    }
  });

  const isCorrect =
    answers.every((ans) => data.correct.includes(ans)) &&
    answers.length === data.correct.length;

  if (!isCorrect) {
    wrongQuestions.push({
      question: data.question,
      userAnswer: answers,
      correctAnswer: data.correct,
      options: { a: data.a, b: data.b, c: data.c, d: data.d },
    });
  } else {
    correct++;
  }

  setTimeout(() => {
    index++;
    if (index < selectedCount) {
      currentQuestionIndex = getRandomUnusedQuestion();
      loadQuestion();
    } else {
      showResults();
    }
  }, 700);
});

const getAnswers = () => {
  const answers = [];
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    if (input.checked) answers.push(input.value);
  });
  return answers;
};

const loadQuestion = () => {
  if (currentQuestionIndex === null) {
    showResults();
    return;
  }

  reset();
  const data = quizData[currentQuestionIndex];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  const options = document.querySelectorAll(".box");

  options.forEach((option, i) => {
    const input = option.querySelector("input");
    input.type = "checkbox";
    option.classList.remove("correct", "wrong");
    option.querySelector("label").innerText = data[Object.keys(data)[i + 1]];
  });
};

const reset = () => {
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });

  document.querySelectorAll(".box").forEach((box) => {
    box.classList.remove("correct", "wrong");
  });
};

const showResults = () => {
  quizEl.innerHTML = `
    <div class="col">
      <h3>You scored ${correct} / ${selectedCount}</h3>
    </div>
  `;

  if (wrongQuestions.length > 0) {
    if (wrongQuestions.length >= 5) {
      document
        .querySelector(".container")
        .setAttribute("style", "position: relative; top: 101%");
    }
    wrongQuestions.forEach((q, i) => {
      // Convert correctAnswer to array if it's not already
      const correctAnswers = Array.isArray(q.correctAnswer)
        ? q.correctAnswer
        : [q.correctAnswer];

      const wrongHtml = `
        <div class="wrong-question">
          <h4>${i + 1}) ${q.question}</h4>
          <ul>
            <li ${q.userAnswer.includes("a") ? 'style="color: red;"' : ""}>
              A. ${q.options.a}
            </li>
            <li ${q.userAnswer.includes("b") ? 'style="color: red;"' : ""}>
              B. ${q.options.b}
            </li>
            <li ${q.userAnswer.includes("c") ? 'style="color: red;"' : ""}>
              C. ${q.options.c}
            </li>
            <li ${q.userAnswer.includes("d") ? 'style="color: red;"' : ""}>
              D. ${q.options.d}
            </li>
          </ul>
          <p style="color: green;">Correct Answer(s): ${correctAnswers
            .map((ans) => ans.toUpperCase())
            .join(", ")}</p>
        </div>
      `;
      quizEl.innerHTML += wrongHtml;
    });
  }
};
