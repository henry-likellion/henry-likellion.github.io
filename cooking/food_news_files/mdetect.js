var MobileEsp={InitCompleted:false,IsWebkit:false,IsMobilePhone:false,IsIphone:false,IsAndroid:false,IsAndroidPhone:false,IsTierTablet:false,IsTierIphone:false,IsTierRichCss:false,IsTierGenericMobile:false,engineWebKit:"webkit",deviceIphone:"iphone",deviceIpod:"ipod",deviceIpad:"ipad",deviceMacPpc:"macintosh",deviceAndroid:"android",deviceGoogleTV:"googletv",deviceXoom:"xoom",deviceHtcFlyer:"htc_flyer",deviceNuvifone:"nuvifone",deviceSymbian:"symbian",deviceSymbos:"symbos",deviceS60:"series60",deviceS70:"series70",deviceS80:"series80",deviceS90:"series90",deviceWinPhone7:"windows phone os 7",deviceWinMob:"windows ce",deviceWindows:"windows",deviceIeMob:"iemobile",devicePpc:"ppc",enginePie:"wm5 pie",deviceBB:"blackberry",vndRIM:"vnd.rim",deviceBBStorm:"blackberry95",deviceBBBold:"blackberry97",deviceBBBoldTouch:"blackberry 99",deviceBBTour:"blackberry96",deviceBBCurve:"blackberry89",deviceBBCurveTouch:"blackberry 938",deviceBBTorch:"blackberry 98",deviceBBPlaybook:"playbook",devicePalm:"palm",deviceWebOS:"webos",deviceWebOShp:"hpwos",deviceBada:"bada",engineBlazer:"blazer",engineXiino:"xiino",deviceKindle:"kindle",engineSilk:"silk",vndwap:"vnd.wap",wml:"wml",deviceTablet:"tablet",deviceBrew:"brew",deviceDanger:"danger",deviceHiptop:"hiptop",devicePlaystation:"playstation",deviceNintendoDs:"nitro",deviceNintendo:"nintendo",deviceWii:"wii",deviceXbox:"xbox",deviceArchos:"archos",engineOpera:"opera",engineNetfront:"netfront",engineUpBrowser:"up.browser",deviceMidp:"midp",uplink:"up.link",engineTelecaQ:"teleca q",engineObigo:"obigo",devicePda:"pda",mini:"mini",mobile:"mobile",mobi:"mobi",maemo:"maemo",linux:"linux",mylocom2:"sony/com",manuSonyEricsson:"sonyericsson",manuericsson:"ericsson",manuSamsung1:"sec-sgh",manuSony:"sony",manuHtc:"htc",svcDocomo:"docomo",svcKddi:"kddi",svcVodafone:"vodafone",disUpdate:"update",uagent:"",InitDeviceScan:function(){this.InitCompleted=false;if(navigator&&navigator.userAgent){this.uagent=navigator.userAgent.toLowerCase();}this.IsWebkit=this.DetectWebkit();this.IsIphone=this.DetectIphone();this.IsAndroid=this.DetectAndroid();this.IsAndroidPhone=this.DetectAndroidPhone();this.IsTierTablet=this.DetectTierTablet();this.IsMobilePhone=this.DetectMobileQuick();this.IsTierIphone=this.DetectTierIphone();this.IsTierRichCss=this.DetectTierRichCss();this.IsTierGenericMobile=this.DetectTierOtherPhones();this.InitCompleted=true;},DetectIphone:function(){if(this.InitCompleted||this.IsIphone){return this.IsIphone;}if(this.uagent.search(this.deviceIphone)>-1){if(this.DetectIpad()||this.DetectIpod()){return false;}else{return true;}}else{return false;}},DetectIpod:function(){if(this.uagent.search(this.deviceIpod)>-1){return true;}else{return false;}},DetectIphoneOrIpod:function(){if(this.uagent.search(this.deviceIphone)>-1||this.uagent.search(this.deviceIpod)>-1){return true;}else{return false;}},DetectIpad:function(){if(this.uagent.search(this.deviceIpad)>-1&&this.DetectWebkit()){return true;}else{return false;}},DetectIos:function(){if(this.DetectIphoneOrIpod()||this.DetectIpad()){return true;}else{return false;}},DetectAndroid:function(){if(this.InitCompleted||this.IsAndroid){return this.IsAndroid;}if((this.uagent.search(this.deviceAndroid)>-1)||this.DetectGoogleTV()){return true;}if(this.uagent.search(this.deviceHtcFlyer)>-1){return true;}else{return false;}},DetectAndroidPhone:function(){if(this.InitCompleted||this.IsAndroidPhone){return this.IsAndroidPhone;}if(this.DetectAndroid()&&(this.uagent.search(this.mobile)>-1)){return true;}if(this.DetectOperaAndroidPhone()){return true;}if(this.uagent.search(this.deviceHtcFlyer)>-1){return true;}else{return false;}},DetectAndroidTablet:function(){if(!this.DetectAndroid()){return false;}if(this.DetectOperaMobile()){return false;}if(this.uagent.search(this.deviceHtcFlyer)>-1){return false;}if(this.uagent.search(this.mobile)>-1){return false;}else{return true;}},DetectAndroidWebKit:function(){if(this.DetectAndroid()&&this.DetectWebkit()){return true;}else{return false;}},DetectGoogleTV:function(){if(this.uagent.search(this.deviceGoogleTV)>-1){return true;}else{return false;}},DetectWebkit:function(){if(this.InitCompleted||this.IsWebkit){return this.IsWebkit;}if(this.uagent.search(this.engineWebKit)>-1){return true;}else{return false;}},DetectS60OssBrowser:function(){if(this.DetectWebkit()){if((this.uagent.search(this.deviceS60)>-1||this.uagent.search(this.deviceSymbian)>-1)){return true;}else{return false;}}else{return false;}},DetectSymbianOS:function(){if(this.uagent.search(this.deviceSymbian)>-1||this.uagent.search(this.deviceS60)>-1||((this.uagent.search(this.deviceSymbos)>-1)&&(this.DetectOperaMobile))||this.uagent.search(this.deviceS70)>-1||this.uagent.search(this.deviceS80)>-1||this.uagent.search(this.deviceS90)>-1){return true;}else{return false;}},DetectWindowsPhone7:function(){if(this.uagent.search(this.deviceWinPhone7)>-1){return true;}else{return false;}},DetectWindowsMobile:function(){if(this.DetectWindowsPhone7()){return false;}if(this.uagent.search(this.deviceWinMob)>-1||this.uagent.search(this.deviceIeMob)>-1||this.uagent.search(this.enginePie)>-1){return true;}if((this.uagent.search(this.devicePpc)>-1)&&!(this.uagent.search(this.deviceMacPpc)>-1)){return true;}if(this.uagent.search(this.manuHtc)>-1&&this.uagent.search(this.deviceWindows)>-1){return true;}else{return false;}},DetectBlackBerry:function(){if((this.uagent.search(this.deviceBB)>-1)||(this.uagent.search(this.vndRIM)>-1)){return true;}else{return false;}},DetectBlackBerryTablet:function(){if(this.uagent.search(this.deviceBBPlaybook)>-1){return true;}else{return false;}},DetectBlackBerryWebKit:function(){if(this.DetectBlackBerry()&&this.uagent.search(this.engineWebKit)>-1){return true;}else{return false;}},DetectBlackBerryTouch:function(){if(this.DetectBlackBerry()&&((this.uagent.search(this.deviceBBStorm)>-1)||(this.uagent.search(this.deviceBBTorch)>-1)||(this.uagent.search(this.deviceBBBoldTouch)>-1)||(this.uagent.search(this.deviceBBCurveTouch)>-1))){return true;}else{return false;}},DetectBlackBerryHigh:function(){if(this.DetectBlackBerryWebKit()){return false;}if((this.DetectBlackBerry())&&(this.DetectBlackBerryTouch()||this.uagent.search(this.deviceBBBold)>-1||this.uagent.search(this.deviceBBTour)>-1||this.uagent.search(this.deviceBBCurve)>-1)){return true;}else{return false;}},DetectBlackBerryLow:function(){if(this.DetectBlackBerry()){if(this.DetectBlackBerryHigh()||this.DetectBlackBerryWebKit()){return false;}else{return true;}}else{return false;}},DetectPalmOS:function(){if(this.DetectPalmWebOS()){return false;}if(this.uagent.search(this.devicePalm)>-1||this.uagent.search(this.engineBlazer)>-1||this.uagent.search(this.engineXiino)>-1){return true;}else{return false;}},DetectPalmWebOS:function(){if(this.uagent.search(this.deviceWebOS)>-1){return true;}else{return false;}},DetectWebOSTablet:function(){if(this.uagent.search(this.deviceWebOShp)>-1&&this.uagent.search(this.deviceTablet)>-1){return true;}else{return false;}},DetectOperaMobile:function(){if((this.uagent.search(this.engineOpera)>-1)&&((this.uagent.search(this.mini)>-1||this.uagent.search(this.mobi)>-1))){return true;}else{return false;}},DetectOperaAndroidPhone:function(){if((this.uagent.search(this.engineOpera)>-1)&&(this.uagent.search(this.deviceAndroid)>-1)&&(this.uagent.search(this.mobi)>-1)){return true;}else{return false;}},DetectOperaAndroidTablet:function(){if((this.uagent.search(this.engineOpera)>-1)&&(this.uagent.search(this.deviceAndroid)>-1)&&(this.uagent.search(this.deviceTablet)>-1)){return true;}else{return false;}},DetectKindle:function(){if(this.uagent.search(this.deviceKindle)>-1&&!this.DetectAndroid()){return true;}else{return false;}},DetectAmazonSilk:function(){if(this.uagent.search(this.engineSilk)>-1){return true;}else{return false;}},DetectBada:function(){if(this.uagent.search(this.deviceBada)>-1){return true;}else{return false;}},DetectGarminNuvifone:function(){if(this.uagent.search(this.deviceNuvifone)>-1){return true;}else{return false;}},DetectArchos:function(){if(this.uagent.search(this.deviceArchos)>-1){return true;}else{return false;}},DetectMaemoTablet:function(){if(this.uagent.search(this.maemo)>-1){return true;}if((this.uagent.search(this.linux)>-1)&&(this.uagent.search(this.deviceTablet)>-1)&&!this.DetectWebOSTablet()&&!this.DetectAndroid()){return true;}else{return false;}},DetectSonyMylo:function(){if(this.uagent.search(this.mylocom2)>-1){return true;}else{return false;}},DetectBrewDevice:function(){if(this.uagent.search(this.deviceBrew)>-1){return true;}else{return false;}},DetectDangerHiptop:function(){if(this.uagent.search(this.deviceDanger)>-1||this.uagent.search(this.deviceHiptop)>-1){return true;}else{return false;}},DetectGameConsole:function(){if(this.DetectSonyPlaystation()||this.DetectNintendo()||this.DetectXbox()){return true;}else{return false;}},DetectSonyPlaystation:function(){if(this.uagent.search(this.devicePlaystation)>-1){return true;}else{return false;}},DetectNintendo:function(){if(this.uagent.search(this.deviceNintendo)>-1||this.uagent.search(this.deviceWii)>-1||this.uagent.search(this.deviceNintendoDs)>-1){return true;}else{return false;}},DetectXbox:function(){if(this.uagent.search(this.deviceXbox)>-1){return true;}else{return false;}},DetectSmartphone:function(){if(this.DetectIphoneOrIpod()||this.DetectAndroidPhone()||this.DetectS60OssBrowser()||this.DetectSymbianOS()||this.DetectWindowsMobile()||this.DetectWindowsPhone7()||this.DetectBlackBerry()||this.DetectPalmWebOS()||this.DetectPalmOS()||this.DetectBada()){return true;}return false;},DetectMobileQuick:function(){if(this.InitCompleted||this.IsMobilePhone){return this.IsMobilePhone;}if(this.DetectTierTablet()){return false;}if(this.DetectSmartphone()){return true;}if(this.DetectKindle()||this.DetectAmazonSilk()){return true;}if(this.uagent.search(this.mobile)>-1){return true;}if(this.uagent.search(this.deviceMidp)>-1||this.DetectBrewDevice()){return true;}if(this.DetectOperaMobile()||this.DetectArchos()){return true;}if((this.uagent.search(this.engineObigo)>-1)||(this.uagent.search(this.engineNetfront)>-1)||(this.uagent.search(this.engineUpBrowser)>-1)){return true;}return false;},DetectMobileLong:function(){if(this.DetectMobileQuick()){return true;}if(this.DetectGameConsole()){return true;}if(this.DetectDangerHiptop()||this.DetectMaemoTablet()||this.DetectSonyMylo()||this.DetectGarminNuvifone()){return true;}if((this.uagent.search(this.devicePda)>-1)&&!(this.uagent.search(this.disUpdate)>-1)){return true;}if(this.uagent.search(this.manuSamsung1)>-1||this.uagent.search(this.manuSonyEricsson)>-1||this.uagent.search(this.manuericsson)>-1){return true;}if((this.uagent.search(this.svcDocomo)>-1)||(this.uagent.search(this.svcKddi)>-1)||(this.uagent.search(this.svcVodafone)>-1)){return true;}return false;},DetectTierTablet:function(){if(this.InitCompleted||this.IsTierTablet){return this.IsTierTablet;}if(this.DetectIpad()||this.DetectAndroidTablet()||this.DetectBlackBerryTablet()||this.DetectWebOSTablet()){return true;}else{return false;}},DetectTierIphone:function(){if(this.InitCompleted||this.IsTierIphone){return this.IsTierIphone;}if(this.DetectIphoneOrIpod()||this.DetectAndroidPhone()||this.DetectWindowsPhone7()||(this.DetectBlackBerryWebKit()&&this.DetectBlackBerryTouch())||this.DetectPalmWebOS()||this.DetectBada()||this.DetectGarminNuvifone()){return true;}else{return false;}},DetectTierRichCss:function(){if(this.InitCompleted||this.IsTierRichCss){return this.IsTierRichCss;}if(this.DetectTierIphone()||this.DetectKindle()||this.DetectTierTablet()){return false;}if(!this.DetectMobileQuick()){return false;}if(this.DetectWebkit()){return true;}if(this.DetectS60OssBrowser()||this.DetectBlackBerryHigh()||this.DetectWindowsMobile()||(this.uagent.search(this.engineTelecaQ)>-1)){return true;}else{return false;}},DetectTierOtherPhones:function(){if(this.InitCompleted||this.IsTierGenericMobile){return this.IsTierGenericMobile;}if(this.DetectTierIphone()||this.DetectTierRichCss()||this.DetectTierTablet()){return false;}if(this.DetectMobileLong()){return true;}else{return false;}}};MobileEsp.InitDeviceScan();