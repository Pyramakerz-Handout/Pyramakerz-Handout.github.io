	var aliasConfig = {
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
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/extfiles/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#864302";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="No";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#998957";bookConfig.bgEndColor="#998757";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="Yes";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="None";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Enable";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#768228";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=22;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.CreatedTime ="240611140712";bookConfig.bookTitle="Roblox Book";bookConfig.bookmarkCR="29cebab65c20e4a96d93c6a550211567ac181842";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Arabic",btnFirstPage:"الأول",btnNextPage:"الصفحة التالية",btnLastPage:"الأخير",btnPrePage:"الصفحة السابقة",btnDownload:"تحميل",btnPrint:"طباعة",btnSearch:"بحث",btnClearSearch:"مسح",frmSearchPrompt:"حذف",btnBookMark:"جدول المحتويات",btnHelp:"مساعدة",btnHome:"الرئيسية",btnFullScreen:"تمكين الشاشة الكاملة",btnDisableFullScreen:"تعطيل الشاشة الكاملة",btnSoundOn:"تشغيل الصوت",btnSoundOff:"إيقاف الصوت",btnShareEmail:"مشاركة",btnSocialShare:"المشاركة على شبكات التواصل الاجتماعي",btnZoomIn:"تقريب",btnZoomOut:"تبعيد",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnAutoFlip:"تقليب تلقائي",btnStopAutoFlip:"إيقاف التقليب التلقائي",btnGoToHome:"العودة للرئيسية",frmHelpCaption:"مساعدة",frmHelpTip1:"انقر مرتين للتقريب أو للتبعيد",frmHelpTip2:"اسحب زاوية الصفحة للعرض",frmPrintCaption:"طباعة",frmPrintBtnCaption:"طباعة",frmPrintPrintAll:"طباعة جميع الصفحات",frmPrintPrintCurrentPage:"طباعة الصفحة الحالية",frmPrintPrintRange:"حدود الطباعة",frmPrintExampleCaption:"مثال: 2،5،8-26",frmPrintPreparePage:"إعداد الصفحة:",frmPrintPrintFailed:"فشل الطباعة:",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",loginCaption:"تسجيل الدخول",loginInvalidPassword:"كلمة السر غير صحيحة!",loginPasswordLabel:"كلمة السر:",loginBtnLogin:"تسجيل الدخول",loginBtnCancel:"إالغاء",btnThumb:"الصور المصغرة",lblPages:"الصفحات:",lblPagesFound:"الصفحات:",lblPageIndex:"الصفحة",btnAbout:"حول",frnAboutCaption:"حول والاتصال",btnSinglePage:"صفحة واحدة",btnDoublePage:"صفحة مزدوجة",btnSwicthLanguage:"تبديل اللغة",tipChangeLanguage:"برجاء اختيار لغة بالأسفل ...",btnMoreOptionsLeft:"خيارات أخرى",btnMoreOptionsRight:"خيارات أخرى",btnFit:"ملائمة النافذة",smallModeCaption:"انقر للعرض في الشاشه الكاملة",btnAddAnnotation:"إضافة تعليقات توضيحية",btnAnnotation:"تعليقات توضيحية",FlipPageEditor_SaveAndExit:"حفظ وخروج",FlipPageEditor_Exit:"خروج",DrawToolWindow_Redo:"إعادة",DrawToolWindow_Undo:"تراجع",DrawToolWindow_Clear:"مسح",DrawToolWindow_Brush:"فرشاة",DrawToolWindow_Width:"العرض",DrawToolWindow_Alpha:"ألفا",DrawToolWindow_Color:"اللون",DrawToolWindow_Eraser:"ممحاة",DrawToolWindow_Rectangular:"مستطيل الشكل",DrawToolWindow_Ellipse:"بيضاوي الشكل",TStuff_BorderWidth:"عرض الحدود",TStuff_BorderAlph:"ألفا الحدود",TStuff_BorderColor:"لون الحدود",DrawToolWindow_TextNote:"ملاحظة نصية",AnnotMark:"إشارة مرجعية",lastpagebtnHelp:"الصفحة الأخيرة",firstpagebtnHelp:"الصفحة الأولى",homebtnHelp:"العودة للصفحة الرئيسية",aboubtnHelp:"حول",screenbtnHelp:"فتح هذا التطبيق في وضع الشاشه الكاملة",helpbtnHelp:"أظهر المساعدة",searchbtnHelp:"البحث من الصفحات",pagesbtnHelp:"ألق نظرة على الصورة المصغرة لهذا الكتيب",bookmarkbtnHelp:"فتح الإشارة المرجعية",AnnotmarkbtnHelp:"فتح جدول المحتويات",printbtnHelp:"طباعة المجلد",soundbtnHelp:"تشغيل أو إيقاف الصوت",sharebtnHelp:"أرسل بريد اليكتروني إلى",socialSharebtnHelp:"المشاركة على شبكات التواصل الاجتماعي",zoominbtnHelp:"تقريب",downloadbtnHelp:"تحميل الكتيب",pagemodlebtnHelp:"تبديل وضع الصفحة الواحدة والصفحة المزدوجة",languagebtnHelp:"تبديل اللغة",annotationbtnHelp:"إضافة تعليق توضيحي",addbookmarkbtnHelp:"إضافة إشارة مرجعية",removebookmarkbtnHelp:"حذف تعليق توضيحي",updatebookmarkbtnHelp:"تحديث إشارة مرجعية",btnShoppingCart:"سلة التسوق",Help_ShoppingCartbtn:"سلة التسوق",Help_btnNextPage:"الصفحة التالية",Help_btnPrePage:"الصفحة السابقة",Help_btnAutoFlip:"تقليب تلقائي",Help_StopAutoFlip:"ايقاف التقليب التلقائي",btnaddbookmark:"إضافة",btndeletebookmark:"حذف",btnupdatebookmark:"تحديث",frmyourbookmarks:"إشاراتك المرجعية",frmitems:"عناصر",DownloadFullPublication:"النشر الكامل",DownloadCurrentPage:"الصفحة الحالية",DownloadAttachedFiles:"الملفات المرفقة",lblLink:"رابط",btnCopy:"زر النسخ",infCopyToClipboard:"متصفحك لا يدعم الحافظة.",restorePage:"هل ترغب في استعادة الوضع السابق",tmpl_Backgoundsoundon:"تشغيل صوت الخلفية",tmpl_Backgoundsoundoff:"إيقاف صوت الخلفية",tmpl_Flipsoundon:"تشغيل صوت التقليب",tmpl_Flipsoundoff:"إيقاف صوت التقليب",Help_PageIndex:"رقم الصفحة الحالية",tmpl_PrintPageRanges:"نطاقات الصفحة",tmpl_PrintPreview:"معاينة",btnSelection:"تحديد نص",loginNameLabel:"الإسم:",btnGotoPage:"اذهب",btnSettings:"الإعدادات",soundSettingTitle:"إعدادات الصوت",closeFlipSound:"إغلاق صوت التقليب",closeBackgroundSound:"إغلاق صوت الخلفية",frmShareCaption:"مشاركة",frmShareLinkLabel:"الرابط:",frmShareBtnCopy:"نسخ",frmShareItemsGroupCaption:"المشاركة على شبكات التواصل الاجتماعي",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"إذهب إلى صفحة",btnPageBack:"العودة",btnPageForward:"التقدم",SelectTextCopy:"نسخ النص",selectCopyButton:"نسخ",TStuffCart_TypeCart:"سلة التسوق",TStuffCart_DetailedQuantity:"الكمية",TStuffCart_DetailedPrice:"السعر",ShappingCart_Close:"إغلاق",ShappingCart_CheckOut:"إنهاء عملية الشراء",ShappingCart_Item:"العنصر",ShappingCart_Total:"الإجمالي",ShappingCart_AddCart:"أضف لسلة التسوق",ShappingCart_InStock:"مخزون متاح",TStuffCart_DetailedCost:"تكلفة الشحن",TStuffCart_DetailedTime:"موعد التسليم",TStuffCart_DetailedDay:"يوم (أيام)",ShappingCart_NotStock:"مخزون غير كاف",btnCrop:"قص",btnDragButton:"سحب",btnFlipBook:"تقليب الكتاب",btnSlideMode:"وضع الشرائح",btnSinglePageMode:"وضع الصفحة الواحدة",btnVertical:"الوضع الرأسي",btnHotizontal:"الوضع الأفقي",btnClose:"إغلاق",btnDoublePage:"صفحة مزدوجة",btnBookStatus:"عرض الكتاب",checkBoxInsert:"إدراج الصفحة الحالية",lblLast:"هذه هي الصفحة الأخيرة.",lblFirst:"هذه هي الصفحة الأولى.",lblFullscreen:"انقر للعرض في الشاشه الكاملة",lblName:"الإسم",lblPassword:"كلمة السر",lblLogin:"تسجيل الدخول",lblCancel:"إلغاء",lblNoName:"لا يمكن أن يكون اسم المستخدم فارغاً.",lblNoPassword:"كلمة السر لا يمكن أن تكون فارغة.",lblNoCorrectLogin:"الرجاء إدخال اسم المستخدم وكلمة السر الصحيحين.",btnVideo:"معرض الفيديو",btnSlideShow:"عرض الشرائح",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnPositionToMove:"تحرك عن طريق موضع الفأرة",lblHelp1:"اسحب زاوية الصفحة للعرض",lblHelp2:"انقر مرتين للتقريب أو للتبعيد",lblCopy:"نسخ",lblAddToPage:"أضف للصفحة",lblPage:"صفحة",lblTitle:"العنوان",lblEdit:"تعديل",lblDelete:"حذف",lblRemoveAll:"حذف الكل",tltCursor:"المؤشر",tltAddHighlight:"إضافة تحديد",tltAddTexts:"إضافة نصوص",tltAddShapes:"إضافة أشكال",tltAddNotes:"إضافة ملاحظات",tltAddImageFile:"إضافة ملف صورة",tltAddSignature:"إضافة توقيع",tltAddLine:"إضافة خط",tltAddArrow:"إضافة سهم",tltAddRect:"إضافة مستطيل",tltAddEllipse:"إضافة شكل بيضاوي",lblDoubleClickToZoomIn:"انقر مرتين للتقريب.",frmShareCaption:"مشاركة",frmShareLabel:"مشاركة",frmShareInfo:"يمكنك مشاركة هذا المنشور على شبكات التواصل الاجتماعي بسهولة. فقط انقر على الزر الملائم بالأسفل.",frminsertLabel:"إدراج إلى الموقع",frminsertInfo:"استخدام الرمز أدناه لتضمين هذا المنشور على موقعك الإلكتروني.",btnQRCode:"انقر لمسح رمز الاستجابة السريعة",btnRotateLeft:"دوران لليسار",btnRotateRight:"دوران لليمين",lblSelectMode:"اختر نظام العرض من فضلك.",frmDownloadPreview:"عرض",frmHowToUse:"كيفية الإستخدام",lblHelpPage1:"حرك أصابعك لتغيير صفحة الكتاب",lblHelpPage2:"تكبير الصورة بواسطة أصابعك أو عن طريق النقر مرتين.",lblHelpPage3:"اضغط لعرض جدول المحتوى والعلامات وشارك كتبك في وسائل التواصل الإجتماعي.",lblHelpPage4:"إضافة علامة واستخدم وظيفة البحث للتنقل في الكتاب.",lblHelpPage5:"افتح الصورة المصغرة لعرض جميع صفحات الكتاب.",TTActionQuiz_PlayAgain:"هل تريد التشغيل مرة أخرى؟",TTActionQuiz_Ration:"نسبتك هي",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"المرجعية",btnFullscreen:"الشاشة الكاملة",btnExitFullscreen:"خروج ملء الشاشة",btnMore:"أكثر",frmPrintall:"طباعة جميع الصفحات",frmPrintcurrent:"طباعة الصفحة الحالية",frmPrintRange:"نطاق الطباعة",frmPrintexample:"مثال: 2،3،5-10",frmPrintbtn:"طباعة",frmaboutcaption:"اتصال",frmaboutcontactinformation:"معلومات الاتصال",frmaboutADDRESS:"العنوان",frmaboutEMAIL:"البريد الإلكتروني",frmaboutWEBSITE:"موقع على الإنترنت",frmaboutMOBILE:"جوال",frmaboutAUTHOR:"الكاتب",frmaboutDESCRIPTION:"الوصف",frmSearch:"بحث",frmToc:"جدول المحتوى",btnTableOfContent:"عرض جدول المحتويات",lblDescription:"عنوان",frmLinkLabel:"صلة",frmQrcodeCaption:"مسح أسفل رمز ثنائي الأبعاد لعرض مع الهاتف المحمول."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146209826","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"-0.04199704340814407","y":"0.7682119991922935","width":"0.5491533396048918","height":"0.20133271567544453","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"793","imgOriginalHeight":"768","url":"./files/pageConfig/Roblox Book (Original).gif","originalURL":"","effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146204240","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.0907136137615912","y":"0.5297604200073643","width":"0.2251041526676522","height":"0.19479979569777525","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"500","imgOriginalHeight":"469","url":"./files/pageConfig/dfn0ob1-139ee28c-e7aa-4861-b46b-e9b57ae0c1d9.gif","originalURL":"","effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146205651","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.07391479639833357","y":"0.26963142453289624","width":"0.434333422927026","height":"0.26274216346553586","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"338","imgOriginalHeight":"312","url":"./files/pageConfig/icegif-127.gif","originalURL":"","effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202411146209845","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.5296924393819972","y":"0.29574705304313686","width":"0.3766491595748416","height":"0.0273141330761685","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.supermario-game.com/","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146205887","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.5296924393819972","y":"0.30069623484440144","width":"0.07570818365738403","height":"0.06024625630512385","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"732","imgOriginalHeight":"1402","url":"./files/pageConfig/Roblox Book.gif","originalURL":"","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.supermario-game.com/","linkTarget":"_blank"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146204165","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image3","x":"0.6601935223760248","y":"0.3076411407666085","width":"0.2750806343233437","height":"0.16486714416372686","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"793","imgOriginalHeight":"870","url":"./files/pageConfig/Roblox Book (Original_v02).gif","originalURL":"","effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146204613","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.06551538771670475","y":"0.620033496062431","width":"0.8617793307351163","height":"0.2904179880982076","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"800","imgOriginalHeight":"450","url":"./files/pageConfig/5a2a27f1-1d37-4909-8c34-9153d4562e8b.jpg","originalURL":"./files/pageConfig/5a2a27f1-1d37-4909-8c34-9153d4562e8b.jpg","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Dream Pet Connect","windowURL":"https://cdn.htmlgames.com/DreamPetConnect/"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"202411146205355","alpha":"1","location":{"tannoName":"hotSpots3","x":"0.4787662948528424","y":"0.6758602667806958","width":"0.113979975809703","height":"0.08059247645179299","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Black Ripple with Pointer.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Dream Pet Connect","windowURL":"https://cdn.htmlgames.com/DreamPetConnect/"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202411146205509","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.06551538771670475","y":"0.6414139614438941","width":"0.8248219325359495","height":"0.2699877656225873","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"800","imgOriginalHeight":"450","url":"./files/pageConfig/ac13184c-5f7f-4d8c-b3c8-82e595b5ddc3.jpg","originalURL":"./files/pageConfig/ac13184c-5f7f-4d8c-b3c8-82e595b5ddc3.jpg","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Red and Green 2","windowURL":"https://cdn.htmlgames.com/RedAndGreen2/"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"202411146204262","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.6236560946109394","y":"0.7174333939113186","width":"0.11649979841419164","height":"0.08237418190024824","rotation":"-20","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Black Ripple with Pointer.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1200","windowHeight":"675","caption":"Red and Green 2","windowURL":"https://cdn.htmlgames.com/RedAndGreen2/"}}],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
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