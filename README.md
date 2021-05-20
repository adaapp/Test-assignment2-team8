# Test-assignment2-team8

## *Our Project!*

- <span style="color:#8AB6CF"> A simple and easy to use Celcius to Fahrenheit converter 🌡️</span>

---

## *Definition of done :*

To understand when we have reached the end of the project as a team, we have set clear objectives that need to be met within the given time:

- Create a functioning Celsius to Fahrenheit Converter
- Write automated unit tests
- Use collaboration frameworks
- Write code reviews
- Create a well documented README file
- UI is tested manually and with Accessibility Audit Tools
- Write automated tests including a smoke test

These are the main aspects of this project which relates to the steps in system development life cycle; system planning, system design, implementation, system testing and integration. 


---

## *Links:*



[Google Meet](https://meet.google.com/qxf-kbsj-znp)

[Github repository](https://github.com/adaapp/Test-assignment2-team8.git)

[Figma design](https://www.figma.com/files/project/30171167/Team-project?fuid=969893282186065214)

[MVP](https://adaapp.github.io/Test-assignment2-team8/)

---

## *Our team:*

| Yasameen Mazloom       | Amran Uddin             | Jacob Lamb        | Shenel Birant        |
| --- | --- | --- | --- |
| Tech Consultant | Software Developer | Tech Consultant | Tech Consultant |

---

## *Collaboration Tools:*

1. Google Collab

- Google Chat
- Google Meet

2. GitHub

- Repository

3. Figma

---

## *UI Testing:*

[Google form link](https://docs.google.com/forms/d/e/1FAIpQLSfqpiod4m_Z1JBSGb7LWIiLfEhIUTyJAI6mxz_O1ht1hF9H-g/viewform?vc=0&c=0&w=1&flr=0&gxids=7628)

---

## *Work progression*:

<details>
     <summary><span style="color:#8AB6CF">1. Inital Figma Design:</span></summary>
 

![image](https://user-images.githubusercontent.com/79174597/116712507-d4e27c00-a9cb-11eb-8f31-f2d3e620d40b.png "Original design for Celsius to Fahrenheit converter via Figma")


</details>
<details>
    <summary><span style="color:#8AB6CF">2. HTML design:</span></summary>

![image](https://user-images.githubusercontent.com/79174597/116699471-85954f00-a9bd-11eb-8c31-cda79b4af314.png "Live Celsius to Fahrenheit converter via index.html")


</details>
<details>
    <summary><span style="color:#8AB6CF">3. UI testing feedback results:</span></summary>

Question:
![image](https://user-images.githubusercontent.com/79174597/116716333-8931d180-a9cf-11eb-9820-aae41792bb17.png)

Answer:

![image](https://user-images.githubusercontent.com/79174597/116712021-52f25300-a9cb-11eb-81ec-4f26bafd53e1.png)

28.6% of responses would like to use the converter if it used the blue colour design, this was shown within our form and was the most popular response. For this reason we have decided to improve our design and tailor to the needs of our users. We used the exact HEX from the Figma design on our Google form and then used the most popular HEX in our code providing consistency throughout.

</details>
<details>
    <summary><span style="color:#8AB6CF">4. HTML design - resolving decimal point issue:</span></summary>

![image](https://user-images.githubusercontent.com/79174597/116718345-c5fec800-a9d1-11eb-8eaa-860e1990406c.png)

As you can see above the input does not take decimal point values, to make this more user friendly we decided to allow the user to input values up to 2 decimal points 

![image](https://user-images.githubusercontent.com/79174597/116718860-563d0d00-a9d2-11eb-9603-37c51469a617.png)

Now the user can not add values such as 70.234 Celsius to find the Fahrenheit value, however up to 2 decimal place values can be includes as shown in the Fahrenheit to Celsius converter 

</details>

---

## *Accessibility and Performance Audit*
We used Lighthouse to do a performance audit and we also used the inspect function to manually test the accessibility functions. We believe that the results were very positive.
<details>
     <summary>1. Performance Audit (Lighthouse) </summary>

![image](https://user-images.githubusercontent.com/79159315/118361508-b790de80-b583-11eb-85f1-40b5981a2cec.png)

![Lighthouse 2](https://user-images.githubusercontent.com/79159315/118361526-cd060880-b583-11eb-88d1-dea3b22ade3b.png)

![Accessibility(80)](https://user-images.githubusercontent.com/79159315/118361527-ce373580-b583-11eb-9c29-aa692a39f9f2.png)

![Best Practices(100) SEO(91)](https://user-images.githubusercontent.com/79159315/118361528-cf686280-b583-11eb-8232-a2167bb25628.png)

</details>

<details>
     <summary>2. Device Accessibility </summary>

![iPhone X](https://user-images.githubusercontent.com/79159315/118361529-d000f900-b583-11eb-969e-7593ed93e0a0.png)

![iPad Pro](https://user-images.githubusercontent.com/79159315/118361531-d1cabc80-b583-11eb-99b9-2f3634311bbc.png)

![Pixel 2](https://user-images.githubusercontent.com/79159315/118361534-d3948000-b583-11eb-8bc9-0083ce37103e.png)

</details>


---

## *Tests:*
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

---

## *Integration Tests and Continuous Integration*:


Continuous Integration is the practise of developers frequently committing and integrating their work to a main branch. This is usally done multiple times a day. An integration can be tested with a script and if it passes the branch can be merged. The integration testing is usually ran on a server such as Jenkins, Gitlab CI, BitBucket Pipelines, Github Actions, AWS CodePipeline among many others. We chose github actions for our CI of choice. The reason for this is our version control is hosted on github and using their continuous integration tools reduces work needed to create webhooks that automatically run when there is a commit or a pull request. It also means all our work is in one place. Along with github actions we also used github pages. This acts as our host for our website and a useful continuous development tool. Github uses the index.html file on the main branch for our website. This means whenever there is a merge to the main branch the changes will be deployed to the website. 

### Integration Tests
The purpose of an integration test is to dicover errors of the interaction between different units.
Whenever there is a pull request or commit to the main branch our pipeline is activated. It first builds an environment with the neccesary requirements to run the application. This includes node, npm and our packages. After the environment has been set our tests are ran.

---
## *Installation Guide*
### Website

1. Clone repositary
2. Open index.html

### Test modules
1. Install Node and npm
2. run `npm install`
3. run  `npm test`
