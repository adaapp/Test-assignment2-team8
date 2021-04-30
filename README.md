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

## UI Testing:

[Google form link](https://docs.google.com/forms/d/e/1FAIpQLSfqpiod4m_Z1JBSGb7LWIiLfEhIUTyJAI6mxz_O1ht1hF9H-g/viewform?vc=0&c=0&w=1&flr=0&gxids=7628)

---

## Work Progression:

<details>
     <summary>1. Inital Figma Design:</summary>
 

![image](https://user-images.githubusercontent.com/79174597/116712507-d4e27c00-a9cb-11eb-8f31-f2d3e620d40b.png)


</details>
<details>
    <summary>2. HTML design:</summary>

![image](https://user-images.githubusercontent.com/79174597/116699471-85954f00-a9bd-11eb-8c31-cda79b4af314.png)


</details>
<details>
    <summary>3. UI testing feedback results:</summary>

Question:
![image](https://user-images.githubusercontent.com/79174597/116716333-8931d180-a9cf-11eb-9820-aae41792bb17.png)

Answer:

![image](https://user-images.githubusercontent.com/79174597/116712021-52f25300-a9cb-11eb-81ec-4f26bafd53e1.png)

28.6% of responses would like to use the converter if it used the blue colour design, this was shown within our form and was the most popular response. For this reason we have decided to improve our design and tailor to the needs of our users. 

</details>
<details>
    <summary>4. HTML design - resolving decimal point issue:</summary>

![image](https://user-images.githubusercontent.com/79174597/116718345-c5fec800-a9d1-11eb-8eaa-860e1990406c.png)

As you can see above the input does not take decimal point values, to make this more user friendly we decided to allow the user to input values up to 2 decimal points 

![image](https://user-images.githubusercontent.com/79174597/116718860-563d0d00-a9d2-11eb-9603-37c51469a617.png)

Now the user can not add values such as 70.234 Celsius to find the Fahrenheit value, however up to 2 decimal place values can be includes as shown in the Fahrenheit to Celsius converter 

</details>

---

# Tests
<details>

 <summary>Unit Tests</summary>

Smoke test - 5+5 = 10 - initial check to see that test are working

There are 2 describe blocks one testing cel to far and one testing far to cel

1. Once we call function check to see if output returns a number

2. Checks function with pre-defined values e.g. 0 Celsius gives 32 Fahrenheit - This test includes 3 assertions

3. Makes sure an error is returned when the function is empty with no input/parameter

4. Makes sure an error is returned when the function is NaN e.g. user has inputted a string

These 4 tests (as described above) are refactored for the next describe block and testing function: Fahrenheit to Celsius
</details>
