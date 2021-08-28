# Coin Rate Service

## Contents
  - [Description](#description)
    - [Purpose of Application](#purpose-of-application)
    - [Technical Information](#technical-information)


  - [How to Install](#how-to-install)


  - [How to Use](#how-to-use)


  - [Issues](#issues)
    - [Challenges and Issues](#challenges-and-issues)
    - [Hope Features to Implement](#hope-features-to-implement)
  
  - [Credits](#credits)

<br>

## Description

### Purpose of Application

This Application supports to get coin data of coin market cap. 
<br><br>
The data of coin is coin's name, symbol, price of KRW, percent change of 24H and 7D.
<br><br>
You can get updated of those by 5 seconds.
<br><br>
You can also select and get maximum 100 data of coins at once.
<br><br>

### Technical Information

- Workspace : macOS Big Sur - 11.2.3

- Target platform : ios 14.4

- Target simulator : ipad mini 4

- Code language : React-native

- System version of project module :  
  - homebrew - 3.2.9  
  - node - 14.17.0  
  - npm - 6.14.13  
  - watchman - 2021.08.02.00  
  - react native - 6.0.0  
  - pod - 1.10.2  
  - openjdk - 14.0.2  
  - javac - 14.0.2  

- Package I use :
  - moment - 2.29.1
  - react - 17.0.2
  - react-native - 0.65.1
  - react-native-stopwatch-timer - 0.0.21
  - react-native-table-component - 1.2.1
  - react-native-vector-icons - 8.1.0

- Bundle name of android : com.coinrateservice

- Bundle name of ios : org.reactjs.native.example.CoinRateService

- What each files do : Please check each file's comment in those code.

- Default screen when application start : '../src/screeens/DefaultScreen.js'

please check and sync if you have some issue of application works.
<br><br>

## How to Install

It only gives you project file, not application package.
<br><br>
So, you need to check envirment of your mac. 
<br><br>
If you can run React-native in your mac, please see after 2 step, or not, see after 1 step.

1. React-Native install  
    You should install above technical information - system of project module.
    <br><br>
    Check this link to get help. https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/
    <br><br>

2. Project file download  
    You should download this project file in your mac. 
    <br><br>
    Please download this porject file with git clone or fork or download zip of them.
    <br><br>

3. Install packages  
    Now, you should download project's package.
    <br><br>
    Go to project file with terminal of mac with command 'cd'. (ex. cd ~/CoinRateService)
    <br><br>
    Then use command 'npm install'.
    <br><br>
4. Run project  
    This is Last step. If you have mini 4 simulator, run command 'npm run mini'.
    <br><br>
    If you don't have, please install mini 4 simulator. Please check this link to get help.  
    https://stackoverflow.com/questions/43154600/how-to-download-ipad-mini-simulator 
    <br><br>

## How to Use

According to purpose, you can select maximum 100 coins and can see it's data. 
<br><br>
So first, you shoud select coins which you want to see, then extract data.
<br><br>
If you want to do like this, follow up under this.
<br><br>

![screenshot](/screenshots/read_me_1.png)

<figcaption style="text-align:center; font-size:15px; color:#808080">
Default Screen to select coins.</figcaption>

1. Select more than one coin less than 100 coins in default screen.  
    Those will extract data of symbol, price of KRW, percent change of 24H & 7D. 
    <br><br>
    You can see more coins with pressing more button. Be care that list is from CMC API at that time.
    <br><br>

![screenshot](/screenshots/read_me_2.png)

<figcaption style="text-align:center; font-size:15px; color:#808080">
Screen that coin selected.</figcaption>

2. Start extraction.  
    If you select coins, label of coins and 'start' button will be shown.
    <br><br>
    If you want to remove coin, repress coin card or press coin label's close button.
    <br><br>
    If selected coin is too much, see those label with scroll. You can see all of them.
    <br><br>
    After you select done, press 'start' button to run extraction. Screen will navigate to extraction screen. 
    <br><br>

![screenshot](/screenshots/read_me_3.png)

<figcaption style="text-align:center; font-size:15px; color:#808080">
Extraction Screen with selected coin. Run time is less than 5 seconds.</figcaption>

3. Wait less than 5 seconds to extract data.  
    After Extraction start, it will emit data after 5 seconds.
    <br><br>
    So, if you want to see data, please wait more than 5 seconds. If not, skip for next step.
    <br><br>

![screenshot](/screenshots/read_me_4.png)

<figcaption style="text-align:center; font-size:15px; color:#808080">
Extraction Screen with selected coin. Run time is more than 5 seconds.</figcaption>

4. See data that extracted.  
    After 5 seconds passed, screen will display request & respond time of extract data and extracted data you want. 
    <br><br>
    These will refresh every 5 seconds, you can see refreshed data every update.
    <br><br>
    Also, if coin data is too much, you  can see all with scroll.
    <br><br>
    To finish this work, please press the button 'finish'.
    <br><br>
    After press 'finish' button, all work stop and button will toggle to 'reset' button.

![screenshot](/screenshots/read_me_5.png)

<figcaption style="text-align:center; font-size:15px; color:#808080">
Extraction Screen after finish extraction. Time and data is updated.</figcaption>

5. Finish extraction.  
    After you see data all, please press 'reset' button.
    <br><br>
    If 'reset'button pressed, screen will go to default screen. We can repeat all step 1 ~ 4.
    <br><br>
    If you want to exit, please kill or close the application.
    <br><br>

## Issues

### Challenges and Issues
- Challenges
  - First, it was hard to handle the data of selected coin between coin card and coin label.  
    All data was easy to handle with callback, but change style of card with remove label is pretty hard to think method. Finally, I solved them with handle the state of card style state at parent component. Additionally, to maintain those state, I use append method to display coin card.

  - Second, getting model of API was pretty hard.  
    This API was i've never seen. Getting method is same as other, but there is a limitaion to get data per second or per day so few. I solved them with two method. First is get two account of CMC, so get more data. Second is scrap those data and make sample json model. With sample model, I can test easy and inifitly.

- Issues (This is some issue that different with design.)  
  - I changed coin cards list pagination to infinity scroll. 
  - I removed more button of data list in extraction screen. It was replaced to infinity scroll.

### Hope Features to Implement
- Splash screen and logo of application will show this project handsome.
- flexible design to fit other ios device or android device will increase the user target.
- Can save user's prefer coin will give user some comfort to extract every time.
- Designate coin number as given by user will give some comfort.
- Get logo of coins will develop intuition.
- Stop and resume function of stopwatch will prevent that user pressed accidentally.
<br><br>

## Credits

Thanks to Haru, BlockCrafters. 
<br><br>
Project and Layout designed by Haru & BlockCrafters.
<br><br>
Application developed by Hangyu Sang.
<br><br>
Than you for watch this doc!