# 3 Javascript: Password Generator

- In this homework I was tasked to create a random password generator that creates passwords based on perameters that are chosen by the user.

- To start this application I first defined the variables that I was going to use for the app, i.e. users "choices", and "enter" as what the user entered as the length of the password.

- Next I went ahead and defined all of the arrays I was going to use for the parameters of the password. Numbers, special characters, upper and lower case letters.

- Once all of my varibles and arrays were defined, I then started to write some functions.
  - First I added a Click Event Listener on the Generate Button.
  - Next I started the code for how the function would work.
    - Inside the function I defined the prompt for the first parameter which was the length and set the guide lines for the parameter which require the user to choose any where from 8 to 128 characters using conditional statements.
    - Using the conditional statements I defined what the apps response should be if the parameters for the password were not met and if one, two, three, or four of the parameters were chosen.
    - Using .concat I was able to join the arrays chosen with out changing the parent arrays.
  - Once I had all of my conditionals explained I created an empty array named password that would hold the generated password.
  - Using a for loop I created an algoritim that would make the app choose random characters from the chosen arrays, with .push I was able to tell the generator to move the chosen characters into the empty password array, and with .join I was able to combine the characters separated by a string and then using return to bring back the new password.
  - Finally I created another function to copy the generated passwords and add them to users clipboard.

<img src="../Assets/Screenshot2020-10-17164044.png"/>

<img src=../Assets/Screenshot2020-10-17164117.png/>

<img src=../Assets/Screenshot2020-10-17164137.png/>

<img src=../Assets/screenshot2020-10-17164154.png/>

![img1](../Assets/Screenshot2020-10-17164044.png)
