# Mosaic Mobile Application
The mobile application for Mosaic Christian Church. The application is written using [React Native][42208ecd] and thus is used for both the iOS and Android versions of the app. To run the application locally:
 - Clone this repository and navigate into the new directory.
 ```
git clone git@github.com:mosaicchristian/mosaicapp.git
cd mosaicapp
```
 - Install Node.js if you don't already. There are several ways of doing this, but the suggested method is using [NVM][2835e881].
 - Install all required Node.js modules.
 ```
 npm install
 ```
 - Follow the instructions for [installing Expo XDE][2fb15198].
 - Open the Expo XDE application. You may be prompted to enter in a username and password. It will be okay, just create one. Once you're logged in, click to Open Project and select the `mosaicapp` directory.
 - At this point, will build and then should begin running. You can either open it in the Expo application on your iOS or Android device or follow the instructions for setting up a simulator on your machine in the [Expo installation page][2fb15198]. Any updates you make to the code will automatically reload the application.

  [2fb15198]: https://docs.expo.io/versions/v15.0.0/introduction/installation.html "Expo XDE Installation"
  [42208ecd]: https://facebook.github.io/react-native/ "React Native Home Page"
  [2835e881]: https://github.com/creationix/nvm "Node Version Manager"