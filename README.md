
# Infinite Scrolling Cards

Simple infitite scroll view made in React Native, showing cards with image and text.

### Approach

 My main goal was trying to make the things as simple and organized as possible. <br/>
 I used a folder structure to make the code easy to find and mantain. I used Typescript because of its advantages for code organization and better understanding.
 I used an existing Amiibo API since I wanted to do something of a theme that I like, althought I had to make a couple of modifications in the original since it didn't have pagination nor ids; you can check [the repo](https://github.com/ElSamplio/my-amiibo-api) out, though is very simple.

### Trade-offs / decisions

I made the project using Expo, due to the fact that it should be done quick and no complex device functionalities should be implemented. <br/>Also the Typescript usage was important to me since, despite it could take some more time, it avoids many mistakes and improves the sense of the code. <br/>I used ```React.memo``` in the components that didn't handle any internal state in order to cache them and optimize the application. <br/>Finally, I implemented a couple of improvements for the endReached handling:<br/>
- Implemented debounce from ```lodash``` library to optimize the API calls
- Implemented a control to see if there were enough records to trigger the API call again since, for example, when there is an error and no records are returned, the endReached was triggered many times.

### Potential future optimizations and improvements

- **Error handling:** Since it doens't make any sense show error codes or logs to the user, we could handle them in the ```Error``` component to send it to a monitoring tool or catch the log at conveinence.

- **Image Optimizations:** Image load could be optimized in the future using the  ```react-native-fast-image``` library to cache them once they are loaded.

### Learnings:

I learned about the new Expo CLI whose main advantage is to run over the specific project, so there is no matter about, i.e., the environment NodeJS Version or SDK.

