# Team 8's project

## *Our Project!*

- <span style="color:#8AB6CF"> A simple and easy to use Celcius to Fahrenheit converter 🌡️
- For people that love to cook and bake and need an easy to use temperature converter when using recipes! </span>

---
## *Workflow:*

- Decided upon our means of communication: GChat, GitHub, separate google meet
- Accessed suggestion options for project 
    - Decided on what our purpose would be 
    -  Target audience: People that enjoy cooking and baking
- Team strengths and weaknesses: 
    - Assigned roles - ¾ Tech Consultant Pathway
    - Tasks related to those roles: Decided to split in half and have two people working on README and two to be developers 
        - Discussed if anyone needed any extra support 
- Agreed upon using issues as a way of giving tasks
- Worked through each point through the assessment spec and went into breakout rooms to work separately
- End of Friday call (30/04/21) - discussed further actions we needed to take and availability
- Made a list of all the tasks that needed to be completed
- Friday (30/04/21) to Saturday (15/05/21): Communicaation using GChat and GitHub (through pull requests)
- Saturday (15/05/21)
    - Worked on what had been completed, on an individual basis, since Friday (30/04/21) and what we could do in the 1.5 hrs
    - Agreed upon tasks for the next week - i.e. making README as clear as possible and improving the README
    - Arranged another means of communication: WhatsApp
- Decided to have 1 final call together the day before submission (15/05/21)
- Reviewed improvements
- All agreed to submit assignment

Areas to improve for workflow:
- Deciding upon definition of done right at the start of project
- Using WhatsApp as means of communication from the start of the project
- Schedule for when certain issues should have been completed by
- Kanban would be more effective

### Adding a new feature
1. Create Issue
2. Assign Issue to developer
3. Complete issue
4. Commit and Push work to new branch
5. Pull Request and assign reviewers
6. Code Review & Integration Tests(GitHub Actions)
7. Merge Pull Request
8. Close Issue

### Coding Best Practices:
- Descriptive variable names
- Common standards:
    - Capitalisation:
    Camel casing i.e. toBeCloseTo
    - Indentation
- Comments on code describing functions
- Wrote readable yet efficient code

---

## *Definition of done :*

To understand when we have reached the end of the project as a team, we have set clear objectives that need to be met within the given time:

- Software developers must create a functioning temperature converter using code that converts from Celcius to Fahrenheit/Fahrenheit to Celcius with regular support and feedback from tech consultants 
- Temperature converter must be user friendly where colour, style and font size is taken into consideration
- Testers must write automated tests including a smoke test on all code to meet quality standards before deployment 
- All code must have comments to explain the functionality of the code
- All members must collaboratively work using collaboration frameworks (GitHub)
- All members must write code reviews: the reviewer checks that the change has not broken accessibility and other audits by testing the UI manually and with Accessibility Audit Tools
- Tech consultants must create a well-documented README file collaboratively, with regular feedback for improvement 
- All feedback given by the reviewer must be acted on by the person who initially made the request


These are the main aspects of this project which relate to the steps in the system development life cycle; system planning, system design, implementation, system testing and integration. 


---

## *Links:*



[Google Meet](https://meet.google.com/qxf-kbsj-znp)

[GitHub repository](https://GitHub.com/adaapp/Test-assignment2-team8.git)

[Figma design](https://www.figma.com/files/project/30171167/Team-project?fuid=969893282186065214)

[MVP](https://adaapp.GitHub.io/Test-assignment2-team8/)

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
     <summary><span style="color:#8AB6CF">1. Initial Figma Design:</span></summary>
 

![image](https://user-images.GitHubusercontent.com/79174597/116712507-d4e27c00-a9cb-11eb-8f31-f2d3e620d40b.png "Original design for Celsius to Fahrenheit converter via Figma")


</details>
<details>
    <summary><span style="color:#8AB6CF">2. HTML design:</span></summary>

![image](https://user-images.GitHubusercontent.com/79174597/116699471-85954f00-a9bd-11eb-8c31-cda79b4af314.png "Live Celsius to Fahrenheit converter via index.html")


</details>
<details>
    <summary><span style="color:#8AB6CF">3. UI testing feedback results:</span></summary>

Question:
![image](https://user-images.GitHubusercontent.com/79174597/116716333-8931d180-a9cf-11eb-9820-aae41792bb17.png)

Answer:

![image](https://user-images.GitHubusercontent.com/79174597/116712021-52f25300-a9cb-11eb-81ec-4f26bafd53e1.png)

28.6% of responses would like to use the converter if it used the blue colour design, this was shown within our form and was the most popular response. For this reason we have decided to improve our design and tailor to the needs of our users. We used the exact HEX from the Figma design on our Google form and then used the most popular HEX in our code providing consistency throughout.

</details>
<details>
    <summary><span style="color:#8AB6CF">4. HTML design - resolving decimal point issue:</span></summary>

![image](https://user-images.GitHubusercontent.com/79174597/116718345-c5fec800-a9d1-11eb-8eaa-860e1990406c.png)

As you can see above the input does not take decimal point values, to make this more user friendly we decided to allow the user to input values up to 2 decimal points 

![image](https://user-images.GitHubusercontent.com/79174597/116718860-563d0d00-a9d2-11eb-9603-37c51469a617.png)

Now the user can not add values such as 70.234 Celsius to find the Fahrenheit value, however up to 2 decimal place values can be includes as shown in the Fahrenheit to Celsius converter 

</details>

---

## *Accessibility and Performance Audit*
We used Lighthouse to do a performance audit and we also used the inspect function to manually test the accessibility functions. We believe that the results were very positive.
<details>
     <summary>1. Performance Audit (Lighthouse) </summary>

![image](https://user-images.GitHubusercontent.com/79159315/118361508-b790de80-b583-11eb-85f1-40b5981a2cec.png)

![Lighthouse 2](https://user-images.GitHubusercontent.com/79159315/118361526-cd060880-b583-11eb-88d1-dea3b22ade3b.png)

![Accessibility(80)](https://user-images.GitHubusercontent.com/79159315/118361527-ce373580-b583-11eb-9c29-aa692a39f9f2.png)

![Best Practices(100) SEO(91)](https://user-images.GitHubusercontent.com/79159315/118361528-cf686280-b583-11eb-8232-a2167bb25628.png)

</details>

<details>
     <summary>2. Device Accessibility </summary>

![iPhone X](https://user-images.GitHubusercontent.com/79159315/118361529-d000f900-b583-11eb-969e-7593ed93e0a0.png)

![iPad Pro](https://user-images.GitHubusercontent.com/79159315/118361531-d1cabc80-b583-11eb-99b9-2f3634311bbc.png)

![Pixel 2](https://user-images.GitHubusercontent.com/79159315/118361534-d3948000-b583-11eb-8bc9-0083ce37103e.png)

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


Continuous Integration is the practice of developers frequently committing and integrating their work to the main branch. This is usually done multiple times a day. Integration can be tested with a script and if it passes the branch can be merged. The integration testing is usually run on a server such as Jenkins, Gitlab CI, Bitbucket Pipelines, GitHub Actions, AWS CodePipeline among many others. We chose GitHub actions for our CI of choice. The reason for this is our version control is hosted on GitHub and using their continuous integration tools reduces work needed to create webhooks that automatically run when there is a commit or a pull request. It also means all our work is in one place. Along with GitHub actions we also used GitHub pages. This acts as our host for our website and a useful continuous development tool. GitHub uses the index.html file on the main branch for our website. This means whenever there is a merge to the main branch the changes will be deployed to the website. 

### Integration Tests
The purpose of an integration test is to discover errors of the interaction between different units.
Whenever there is a pull request or commit to the main branch our pipeline is activated. It first builds an environment with the necessary requirements to run the application. This includes node, npm and our packages. After the environment has been set our tests are run.

### Coverage Report 

A coverage report gives a report on how much of your code is being assessed. It can be useful when adding
many new functions and you would like to measure and make sure a certain amount of your code is being tested before being merged.

Here is an example of our coverage report on a html page

![Coverage](https://user-images.GitHubusercontent.com/52491921/119031667-3f6f5200-b9a3-11eb-8c40-812dd83d6a12.png)
---
## *Installation Guide*
### Website

1. Clone repository
2. Open index.html

### Test modules
1. Install Node and npm
2. run `npm install`
3. run  `npm test`

---
## *Evaluation:*
As a team we have been able to produce a good product as per the objectives. Some examples of this are:

- Creating a clean/responsive website 
- Write well written code with error handling
- Tests tested functionality of our code 
- Integration tests running and passing on our continuous integration pipeline
- Chosen to set a feature of the converter to be able to take inputted values of max 2 decimals


Although our converter does function well, the product could be improved. 

The areas of improvement that we have discussed as a team would be:
- To extend the capability of the converter to be able to produce an input and output  value of upto 4 decimals places to make the product more accessible to a wider audience
- The colours and design of the converter could be more engaging to link to the purpose of the user who may be using the product for cooking/baking purposes 
- The converter title style and text should be more creative and user friendly as accessibility shown in the audit tools to be 80, which we like to improve to 90
- The output pop up box should be smaller to align with the design features of the input box to maintain consistency 
- A margin should be placed between the input and output box for easy read purposes 
