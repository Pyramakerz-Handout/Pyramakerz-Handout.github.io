﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#864302";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="No";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#998957";bookConfig.bgEndColor="#998757";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="Yes";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="None";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Enable";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#956514";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=14;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.CreatedTime ="240828141759";bookConfig.bookTitle="Roblox 9 Book";bookConfig.bookmarkCR="b6918fb2b2a9231dc77afe8f344055dce95d9c4f";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Arabic",btnFirstPage:"الأول",btnNextPage:"الصفحة التالية",btnLastPage:"الأخير",btnPrePage:"الصفحة السابقة",btnDownload:"تحميل",btnPrint:"طباعة",btnSearch:"بحث",btnClearSearch:"مسح",frmSearchPrompt:"حذف",btnBookMark:"جدول المحتويات",btnHelp:"مساعدة",btnHome:"الرئيسية",btnFullScreen:"تمكين الشاشة الكاملة",btnDisableFullScreen:"تعطيل الشاشة الكاملة",btnSoundOn:"تشغيل الصوت",btnSoundOff:"إيقاف الصوت",btnShareEmail:"مشاركة",btnSocialShare:"المشاركة على شبكات التواصل الاجتماعي",btnZoomIn:"تقريب",btnZoomOut:"تبعيد",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnAutoFlip:"تقليب تلقائي",btnStopAutoFlip:"إيقاف التقليب التلقائي",btnGoToHome:"العودة للرئيسية",frmHelpCaption:"مساعدة",frmHelpTip1:"انقر مرتين للتقريب أو للتبعيد",frmHelpTip2:"اسحب زاوية الصفحة للعرض",frmPrintCaption:"طباعة",frmPrintBtnCaption:"طباعة",frmPrintPrintAll:"طباعة جميع الصفحات",frmPrintPrintCurrentPage:"طباعة الصفحة الحالية",frmPrintPrintRange:"حدود الطباعة",frmPrintExampleCaption:"مثال: 2،5،8-26",frmPrintPreparePage:"إعداد الصفحة:",frmPrintPrintFailed:"فشل الطباعة:",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",loginCaption:"تسجيل الدخول",loginInvalidPassword:"كلمة السر غير صحيحة!",loginPasswordLabel:"كلمة السر:",loginBtnLogin:"تسجيل الدخول",loginBtnCancel:"إالغاء",btnThumb:"الصور المصغرة",lblPages:"الصفحات:",lblPagesFound:"الصفحات:",lblPageIndex:"الصفحة",btnAbout:"حول",frnAboutCaption:"حول والاتصال",btnSinglePage:"صفحة واحدة",btnDoublePage:"صفحة مزدوجة",btnSwicthLanguage:"تبديل اللغة",tipChangeLanguage:"برجاء اختيار لغة بالأسفل ...",btnMoreOptionsLeft:"خيارات أخرى",btnMoreOptionsRight:"خيارات أخرى",btnFit:"ملائمة النافذة",smallModeCaption:"انقر للعرض في الشاشه الكاملة",btnAddAnnotation:"إضافة تعليقات توضيحية",btnAnnotation:"تعليقات توضيحية",FlipPageEditor_SaveAndExit:"حفظ وخروج",FlipPageEditor_Exit:"خروج",DrawToolWindow_Redo:"إعادة",DrawToolWindow_Undo:"تراجع",DrawToolWindow_Clear:"مسح",DrawToolWindow_Brush:"فرشاة",DrawToolWindow_Width:"العرض",DrawToolWindow_Alpha:"ألفا",DrawToolWindow_Color:"اللون",DrawToolWindow_Eraser:"ممحاة",DrawToolWindow_Rectangular:"مستطيل الشكل",DrawToolWindow_Ellipse:"بيضاوي الشكل",TStuff_BorderWidth:"عرض الحدود",TStuff_BorderAlph:"ألفا الحدود",TStuff_BorderColor:"لون الحدود",DrawToolWindow_TextNote:"ملاحظة نصية",AnnotMark:"إشارة مرجعية",lastpagebtnHelp:"الصفحة الأخيرة",firstpagebtnHelp:"الصفحة الأولى",homebtnHelp:"العودة للصفحة الرئيسية",aboubtnHelp:"حول",screenbtnHelp:"فتح هذا التطبيق في وضع الشاشه الكاملة",helpbtnHelp:"أظهر المساعدة",searchbtnHelp:"البحث من الصفحات",pagesbtnHelp:"ألق نظرة على الصورة المصغرة لهذا الكتيب",bookmarkbtnHelp:"فتح الإشارة المرجعية",AnnotmarkbtnHelp:"فتح جدول المحتويات",printbtnHelp:"طباعة المجلد",soundbtnHelp:"تشغيل أو إيقاف الصوت",sharebtnHelp:"أرسل بريد اليكتروني إلى",socialSharebtnHelp:"المشاركة على شبكات التواصل الاجتماعي",zoominbtnHelp:"تقريب",downloadbtnHelp:"تحميل الكتيب",pagemodlebtnHelp:"تبديل وضع الصفحة الواحدة والصفحة المزدوجة",languagebtnHelp:"تبديل اللغة",annotationbtnHelp:"إضافة تعليق توضيحي",addbookmarkbtnHelp:"إضافة إشارة مرجعية",removebookmarkbtnHelp:"حذف تعليق توضيحي",updatebookmarkbtnHelp:"تحديث إشارة مرجعية",btnShoppingCart:"سلة التسوق",Help_ShoppingCartbtn:"سلة التسوق",Help_btnNextPage:"الصفحة التالية",Help_btnPrePage:"الصفحة السابقة",Help_btnAutoFlip:"تقليب تلقائي",Help_StopAutoFlip:"ايقاف التقليب التلقائي",btnaddbookmark:"إضافة",btndeletebookmark:"حذف",btnupdatebookmark:"تحديث",frmyourbookmarks:"إشاراتك المرجعية",frmitems:"عناصر",DownloadFullPublication:"النشر الكامل",DownloadCurrentPage:"الصفحة الحالية",DownloadAttachedFiles:"الملفات المرفقة",lblLink:"رابط",btnCopy:"زر النسخ",infCopyToClipboard:"متصفحك لا يدعم الحافظة.",restorePage:"هل ترغب في استعادة الوضع السابق",tmpl_Backgoundsoundon:"تشغيل صوت الخلفية",tmpl_Backgoundsoundoff:"إيقاف صوت الخلفية",tmpl_Flipsoundon:"تشغيل صوت التقليب",tmpl_Flipsoundoff:"إيقاف صوت التقليب",Help_PageIndex:"رقم الصفحة الحالية",tmpl_PrintPageRanges:"نطاقات الصفحة",tmpl_PrintPreview:"معاينة",btnSelection:"تحديد نص",loginNameLabel:"الإسم:",btnGotoPage:"اذهب",btnSettings:"الإعدادات",soundSettingTitle:"إعدادات الصوت",closeFlipSound:"إغلاق صوت التقليب",closeBackgroundSound:"إغلاق صوت الخلفية",frmShareCaption:"مشاركة",frmShareLinkLabel:"الرابط:",frmShareBtnCopy:"نسخ",frmShareItemsGroupCaption:"المشاركة على شبكات التواصل الاجتماعي",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"إذهب إلى صفحة",btnPageBack:"العودة",btnPageForward:"التقدم",SelectTextCopy:"نسخ النص",selectCopyButton:"نسخ",TStuffCart_TypeCart:"سلة التسوق",TStuffCart_DetailedQuantity:"الكمية",TStuffCart_DetailedPrice:"السعر",ShappingCart_Close:"إغلاق",ShappingCart_CheckOut:"إنهاء عملية الشراء",ShappingCart_Item:"العنصر",ShappingCart_Total:"الإجمالي",ShappingCart_AddCart:"أضف لسلة التسوق",ShappingCart_InStock:"مخزون متاح",TStuffCart_DetailedCost:"تكلفة الشحن",TStuffCart_DetailedTime:"موعد التسليم",TStuffCart_DetailedDay:"يوم (أيام)",ShappingCart_NotStock:"مخزون غير كاف",btnCrop:"قص",btnDragButton:"سحب",btnFlipBook:"تقليب الكتاب",btnSlideMode:"وضع الشرائح",btnSinglePageMode:"وضع الصفحة الواحدة",btnVertical:"الوضع الرأسي",btnHotizontal:"الوضع الأفقي",btnClose:"إغلاق",btnDoublePage:"صفحة مزدوجة",btnBookStatus:"عرض الكتاب",checkBoxInsert:"إدراج الصفحة الحالية",lblLast:"هذه هي الصفحة الأخيرة.",lblFirst:"هذه هي الصفحة الأولى.",lblFullscreen:"انقر للعرض في الشاشه الكاملة",lblName:"الإسم",lblPassword:"كلمة السر",lblLogin:"تسجيل الدخول",lblCancel:"إلغاء",lblNoName:"لا يمكن أن يكون اسم المستخدم فارغاً.",lblNoPassword:"كلمة السر لا يمكن أن تكون فارغة.",lblNoCorrectLogin:"الرجاء إدخال اسم المستخدم وكلمة السر الصحيحين.",btnVideo:"معرض الفيديو",btnSlideShow:"عرض الشرائح",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnPositionToMove:"تحرك عن طريق موضع الفأرة",lblHelp1:"اسحب زاوية الصفحة للعرض",lblHelp2:"انقر مرتين للتقريب أو للتبعيد",lblCopy:"نسخ",lblAddToPage:"أضف للصفحة",lblPage:"صفحة",lblTitle:"العنوان",lblEdit:"تعديل",lblDelete:"حذف",lblRemoveAll:"حذف الكل",tltCursor:"المؤشر",tltAddHighlight:"إضافة تحديد",tltAddTexts:"إضافة نصوص",tltAddShapes:"إضافة أشكال",tltAddNotes:"إضافة ملاحظات",tltAddImageFile:"إضافة ملف صورة",tltAddSignature:"إضافة توقيع",tltAddLine:"إضافة خط",tltAddArrow:"إضافة سهم",tltAddRect:"إضافة مستطيل",tltAddEllipse:"إضافة شكل بيضاوي",lblDoubleClickToZoomIn:"انقر مرتين للتقريب.",frmShareCaption:"مشاركة",frmShareLabel:"مشاركة",frmShareInfo:"يمكنك مشاركة هذا المنشور على شبكات التواصل الاجتماعي بسهولة. فقط انقر على الزر الملائم بالأسفل.",frminsertLabel:"إدراج إلى الموقع",frminsertInfo:"استخدام الرمز أدناه لتضمين هذا المنشور على موقعك الإلكتروني.",btnQRCode:"انقر لمسح رمز الاستجابة السريعة",btnRotateLeft:"دوران لليسار",btnRotateRight:"دوران لليمين",lblSelectMode:"اختر نظام العرض من فضلك.",frmDownloadPreview:"عرض",frmHowToUse:"كيفية الإستخدام",lblHelpPage1:"حرك أصابعك لتغيير صفحة الكتاب",lblHelpPage2:"تكبير الصورة بواسطة أصابعك أو عن طريق النقر مرتين.",lblHelpPage3:"اضغط لعرض جدول المحتوى والعلامات وشارك كتبك في وسائل التواصل الإجتماعي.",lblHelpPage4:"إضافة علامة واستخدم وظيفة البحث للتنقل في الكتاب.",lblHelpPage5:"افتح الصورة المصغرة لعرض جميع صفحات الكتاب.",TTActionQuiz_PlayAgain:"هل تريد التشغيل مرة أخرى؟",TTActionQuiz_Ration:"نسبتك هي",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"المرجعية",btnFullscreen:"الشاشة الكاملة",btnExitFullscreen:"خروج ملء الشاشة",btnMore:"أكثر",frmPrintall:"طباعة جميع الصفحات",frmPrintcurrent:"طباعة الصفحة الحالية",frmPrintRange:"نطاق الطباعة",frmPrintexample:"مثال: 2،3،5-10",frmPrintbtn:"طباعة",frmaboutcaption:"اتصال",frmaboutcontactinformation:"معلومات الاتصال",frmaboutADDRESS:"العنوان",frmaboutEMAIL:"البريد الإلكتروني",frmaboutWEBSITE:"موقع على الإنترنت",frmaboutMOBILE:"جوال",frmaboutAUTHOR:"الكاتب",frmaboutDESCRIPTION:"الوصف",frmSearch:"بحث",frmToc:"جدول المحتوى",btnTableOfContent:"عرض جدول المحتويات",lblDescription:"عنوان",frmLinkLabel:"صلة",frmQrcodeCaption:"مسح أسفل رمز ثنائي الأبعاد لعرض مع الهاتف المحمول."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"2024281414147783","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie1","x":"0.06383550598037899","y":"0.5380750454334889","width":"0.8682468754199705","height":"0.2745608096069558","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","H5Replay":"false","H5PlaybackNumber":"0","url":"files/pageConfig/6_P_1.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"2024281414148559","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6617434685084358","y":"0.8100033278189056","width":"0.06951554809436443","height":"0.024937313827366456","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1bpcsTSDQnwsd5gdfRNn9zxm77PwQyIwr/view?usp=drive_link","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024281414144164","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.7072302109931461","y":"0.8088942735986887","width":"0.09852506383550598","height":"0.060340424521018184","rotation":"69.86408111368986","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"770","imgOriginalHeight":"770","url":"./files/pageConfig/mouse click_1.gif","originalURL":"","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1bpcsTSDQnwsd5gdfRNn9zxm77PwQyIwr/view?usp=drive_link","linkTarget":"_blank"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"2024281414149101","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie2","x":"0.08063432334363661","y":"0.36821912601408735","width":"0.8433006316355329","height":"0.3587166969556593","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","H5Replay":"false","H5PlaybackNumber":"0","url":"files/pageConfig/11_P.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"2024281414145282","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6484837585081069","y":"0.2768630525295675","width":"0.06551538771670475","height":"0.02494387627837366","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1QafLdBX3EybXqbhFcEhQ9eWMg6w_W0vD/view?usp=drive_link","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024281414147921","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.6599094247294401","y":"0.27773643755332017","width":"0.09850215635728336","height":"0.060354307940097045","rotation":"84.60593759799971","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"770","imgOriginalHeight":"770","url":"./files/pageConfig/mouse click_1.gif","originalURL":"","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1QafLdBX3EybXqbhFcEhQ9eWMg6w_W0vD/view?usp=drive_link","linkTarget":"_blank"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"2024281414147777","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6475217221630672","y":"0.7598231360391497","width":"0.06551538771670475","height":"0.02494387627837366","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1lNVa04iJbMhIs6_5HkFAPv6INJYfczkg/view?usp=sharing","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024281414142588","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.6566076209773293","y":"0.7583669344707009","width":"0.09850215635728336","height":"0.060354307940097045","rotation":"78.35015574186917","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"770","imgOriginalHeight":"770","url":"./files/pageConfig/mouse click_1.gif","originalURL":"","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1lNVa04iJbMhIs6_5HkFAPv6INJYfczkg/view?usp=sharing","linkTarget":"_blank"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024281414149252","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.06383550598037899","y":"0.4192946822031382","width":"0.8718586211530709","height":"0.3230825879865541","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"2800","imgOriginalHeight":"1597","url":"./files/pageConfig/robox_16x9-cover_edited_1.jpg","originalURL":"./files/pageConfig/robox_16x9-cover_edited_1.jpg","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Robox","windowURL":"https://www.crazygames.com/embed/robox"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024281414147458","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.6433947050127671","y":"0.5024409364643837","width":"0.1579088832146217","height":"0.10809013053961919","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"770","imgOriginalHeight":"770","url":"./files/pageConfig/mouse click_1.gif","originalURL":"","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Robox","windowURL":"https://www.crazygames.com/embed/robox"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}