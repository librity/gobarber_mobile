﻿# gobarber_front_end_mobile

<img alt="Build status" src="https://build.appcenter.ms/v0.1/apps/54ce426d-14de-4144-954c-dc178708a7d0/branches/staging/badge" />

#### Code Push

If we ever alter any native dependencies in our android or ios, be it a `reacat-native link ...` or some configuration file (like build.gradel), we can't use codePush: We need to run a new build!

CodePush just bundles the app, it doesn't rebuild-it.

  -> We use codePush for changing things in our ReactNative code (basically changes in the src directory).

`$ appcenter codepush release-react -a luis.geniole-gmail.com/GoBarber-android`

It defaults to statging. To code push to production add `-d Production`; 

You should also code push everytime you build something to the Play/App store.

#### To do

- [ ] We no longer need to separate android & ios [dateTimePickers](https://github.com/react-native-community/react-native-datetimepicker)
- [ ] There's an hour diference between the SelectDateTime & Dashboard times, probably because of the repulsion of Daylight Savings in Brasil. We need to check how the API & the mobile app are processing time w/`date-fns`.

I know many Brazilian developers are having issues in their apps because of this change, and some had to manually configure the brazilain locale on their front-ends.

`adb reverse tcp:9090 tcp:9090`

‣潧慢扲牥晟潲瑮敟摮浟扯汩