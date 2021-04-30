# Test-assignment2-team8

## Our Project!

- A simple and easy to use Celcius to Fahrenheit converter

---

## Links:

[Google Meet Link](https://meet.google.com/qxf-kbsj-znp)

[Github Link](https://github.com/adaapp/Test-assignment2-team8.git)

[Figma Link](https://www.figma.com/files/project/30171167/Team-project?fuid=969893282186065214)

[MVP](https://adaapp.github.io/Test-assignment2-team8/)

---

## Our team:

| Yasameen        | Amran              | Jacob           | Shenel          |
| --------------- | ------------------ | --------------- | --------------- |
| Tech Consultant | Software Developer | Tech Consultant | Tech Consultant |

---

## Collaboration Methods:

1. Google Collab

- Google Chat
- Google Meet

2. GitHub

- Repository

3. Figma

---

UI testing:

[Google form link](https://docs.google.com/forms/d/1cV7OobaVwHyIfseuUCFFQYjQQU19oXcvE4Z3gbBrLM0/prefill)

---

## Work Progression:


1. Inital Figma Design: 

![image](https://user-images.githubusercontent.com/79174597/116712507-d4e27c00-a9cb-11eb-8f31-f2d3e620d40b.png)


2. HTML design:

![image](https://user-images.githubusercontent.com/79174597/116699471-85954f00-a9bd-11eb-8c31-cda79b4af314.png)


3. UI testing feedback results:

Question:
![image](https://user-images.githubusercontent.com/79174597/116716333-8931d180-a9cf-11eb-9820-aae41792bb17.png)

Answer:

![image](https://user-images.githubusercontent.com/79174597/116712021-52f25300-a9cb-11eb-81ec-4f26bafd53e1.png)

28.6% of responses would like to use the converter if it used the blue colour design, this was shown within our form and was the most popular response. For this reason we have decided to improve our design and tailor to the needs of our users. 



---

# Tests

## Unit Tests

smoke test - 5+5 = 10 - initial check to see that test are working

there are 2 describe blocks one testing cel to far and one testing far to cel

1. Once we call function check to see if output returns a number

2. Checks function with pre-defined values e.g. 0 Celsius gives 32 Fahrenheit - This test includes 3 assertions

3. Makes sure an error is returned when the function is empty with no input/parameter

4. Makes sure an error is returned when the function is NaN e.g. user has inputted a string

These 4 tests (as described above) are refactored for the next describe block and testing function: Fahrenheit to Celsius

