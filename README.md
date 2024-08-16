
# Infinite Scrolling Cards

Simple infitite scroll view made in React Native, showing cards with image and text.

### Approach

 My main goal was trying to make the things as simple and organized as possible. <br/>
 I used a folder structure to make the code easy to find and mantain. I used Typescript because of its advantages for code organization and better understanding.
 I used an existing Amiibo API since I wanted to do something of a theme that I like, althought I had to make a couple of modifications in the original since it didn't have pagination nor ids; you can check [the repo](https://github.com/ElSamplio/my-amiibo-api) out, though is very simple.

### Trade-offs / decisions

I made the project using Expo, due to the fact that it should be done quick and no complex device functionalities should be implemented. Also the Typescript usage was important to me since, despite it could take some more time, it avoids many mistakes and improves the sense of the code.

### Potential future optimizations and improvements

- **Error handling:** Since it doens't make any sense show error codes or logs to the user, we could handle them in the ```Error``` component to send it to a monitoring tool or catch the log at conveinence.

- **Caching:** Improve the performance using ```React.memo```; not done by lack of time and enough experience.

- **Optimizations:** I checked out and for images optimization we could use libraries like ```react-native-fast-image``` and also debounce the scroll event with ```lodash```, however, I could not do it because of time constraints too.

### Learnings:

I learned about the new Expo CLI whose main advantage is to run over the specific project, so there is no matter about, i.e., the environment NodeJS Version or SDK.

### Missing tasks

I could not complete the optimiezations. Also there is a bug since from the first load, the image width is different for subsequent loads. I know I can fix this using the right Dimensions in styling.
Unfortunately, I ran out of time to do these tasks, anyway, I really appreciate the time you take reviewing this assessment.
