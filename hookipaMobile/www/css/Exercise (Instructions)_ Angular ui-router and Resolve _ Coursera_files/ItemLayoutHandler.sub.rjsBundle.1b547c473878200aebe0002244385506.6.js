define("bundles/confirmNavigation/nls/confirmNavigation",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/page/lib/nls/metatagsAddressBook",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/nls/moment.lang",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/plugins/lazy",["require","exports","module"],function(require,exports,module){var e={version:"0.0.1",load:function load(e,r,u,i){var n=function getModule(n){r([e],function(e){return n(e)})};return n.lazy={moduleId:e},u(n)}};module.exports=e});

define("nls/ondemand",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/naptimejs",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/phoenix",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/common/__styles__/NpsContent',[],function(){})

define('css!bundles/ondemand/components/common/__styles__/NpsModal',[],function(){})
define("nls/enroll-course",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/certificate-enroll",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/require.memoize",["module"],function(module){function argsToJsonHasher(){var r=Array.prototype.slice.call(arguments);return JSON.stringify(r)}function memoize(e,t){var n={};t=t||argsToJsonHasher;var r=function memoized(){var r=t.apply(this,arguments);return r in n||(n[r]=e.apply(this,arguments)),n[r]};return r.force=function(){return r.clear.apply(this,arguments),r.apply(this,arguments)},r.clear=function(){var r=t.apply(this,arguments);delete n[r]},r.reset=function(){n={}},r}var r={version:"0.0.1",load:function load(r,n,t,e){n([r],function(r){t(memoize(r))})}};return r});

define("js/json/nls/universities",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/languages",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/topics",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/course-preview",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("js/json/nls/specializations",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("js/json/nls/categories",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/socialPlugins/wechat/__styles__/wechat-button',[],function(){})
define("nls/socialPlugins",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});





define("nls/profile",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});


define("nls/code-evaluator",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});



define("pages/open-course/peerReview/reviewTypes/structured/partTypes/multiLineInput/views/nls/edit",["require","exports","module"],function(require,exports,module){module.exports={}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/multiLineInput/views/nls/review",["require","exports","module"],function(require,exports,module){module.exports={}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/options/views/nls/edit",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/options/views/nls/review",["require","exports","module"],function(require,exports,module){module.exports={}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/singleLineInput/views/nls/edit",["require","exports","module"],function(require,exports,module){module.exports={}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/singleLineInput/views/nls/review",["require","exports","module"],function(require,exports,module){module.exports={}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/yesNo/views/nls/edit",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("pages/open-course/peerReview/reviewTypes/structured/partTypes/yesNo/views/nls/review",["require","exports","module"],function(require,exports,module){module.exports={}});

define("nls/peer-admin",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/quiz-question-types",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/invitations",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/sessions/__styles__/SessionStartedModal',[],function(){})
define("nls/payments-common",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/account-settings",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/collapse/collapse',[],function(){})

define('css!bundles/phoenix/components/__styles__/ProfileImage',[],function(){})
define("nls/program-home",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/user-account",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("pages/open-course/item/views/nls/header",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/ondemand/components/ItemLayoutHandler",["require","exports","module","underscore","js/lib/timing","react","./ItemLayout","bundles/phoenix/lib/waitForStores"],function(require,exports,module){function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},n=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),t,r,_=require("underscore"),i=require("js/lib/timing"),e=require("react"),u=require("./ItemLayout"),a=require("bundles/phoenix/lib/waitForStores"),o=(r=t=function(t){function ItemLayoutHandler(){return _classCallCheck(this,ItemLayoutHandler),_possibleConstructorReturn(this,Object.getPrototypeOf(ItemLayoutHandler).apply(this,arguments))}return _inherits(ItemLayoutHandler,t),n(ItemLayoutHandler,[{key:"componentDidMount",value:function componentDidMount(){i.setMarkOnce("itemLayoutHandlerMounted",!0)}},{key:"render",value:function render(){var r=this.props.courseMaterials,t=r.getItemMetadata(this.context.router.params.item_id);return e.createElement(u,null,this.props.children&&e.cloneElement(this.props.children,s({},_(this.props).omit("children"),{itemMetadata:t,key:t.getId()})))}}]),ItemLayoutHandler}(e.Component),t.propTypes={courseMaterials:e.PropTypes.object.isRequired,course:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired,children:e.PropTypes.element},t.contextTypes={router:e.PropTypes.object.isRequired},r);module.exports=a(o,["CourseStore","ProgressStore"],function(e){var t=e.CourseStore,r=e.ProgressStore;return{courseMaterials:t.getMaterials(),course:t.getMetadata(),courseProgress:r.courseProgress}}),module.exports.BaseComp=o});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-NpsContent .nps-rating-button{min-width:30px;min-height:30px;width:30px;height:30px;margin:3px;padding:5px;outline:none}.rc-NpsContent .nps-rating-label{padding:12px 5px}.rc-NpsContent .nps-feedback-enter{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);max-height:0;-webkit-transition:opacity 0.5s ease-in, max-height 0.5s;-moz-transition:opacity 0.5s ease-in, max-height 0.5s;-o-transition:opacity 0.5s ease-in, max-height 0.5s;-ms-transition:opacity 0.5s ease-in, max-height 0.5s;transition:opacity 0.5s ease-in, max-height 0.5s;overflow:hidden}.rc-NpsContent .nps-feedback-enter.nps-feedback-enter-active{opacity:1;-ms-filter:none;filter:none;max-height:300px}.rc-NpsContent .nps-feedback-leave{opacity:1;-ms-filter:none;filter:none;max-height:300px}.rc-NpsContent .nps-feedback-leave.nps-feedback-leave-active{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);max-height:0;-webkit-transition:opacity 0.5s ease-in, max-height 0.5s;-moz-transition:opacity 0.5s ease-in, max-height 0.5s;-o-transition:opacity 0.5s ease-in, max-height 0.5s;-ms-transition:opacity 0.5s ease-in, max-height 0.5s;transition:opacity 0.5s ease-in, max-height 0.5s}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-NpsModal{text-align:center;}.rc-NpsModal .nps-title{padding:32px;border-top-left-radius:3px;border-top-right-radius:3px;background-color:#354b72;text-align:center}.rc-NpsModal .nps-content{padding:28px 32px 32px 32px}.rc-NpsModal .nps-feedback-appear{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);-webkit-transition:opacity 0.5s ease-in;-moz-transition:opacity 0.5s ease-in;-o-transition:opacity 0.5s ease-in;-ms-transition:opacity 0.5s ease-in;transition:opacity 0.5s ease-in}.rc-NpsModal .nps-feedback-appear.nps-feedback-appear-active{opacity:1;-ms-filter:none;filter:none}.rc-NpsModal .nps-feedback-leave{opacity:1;-ms-filter:none;filter:none}.rc-NpsModal .nps-followup-text{margin-bottom:20px}.rc-NpsModal .nps-feedback-leave.nps-feedback-leave-active{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);-webkit-transition:opacity 0.5s ease-in;-moz-transition:opacity 0.5s ease-in;-o-transition:opacity 0.5s ease-in;-ms-transition:opacity 0.5s ease-in;transition:opacity 0.5s ease-in}.rc-NpsModal .feedback-prompt{padding-top:30px}.rc-NpsModal .thank-you{padding:20px}.rc-NpsModal .feedback-image{width:48px;margin-bottom:20px}.rc-NpsModal .rc-FeedbackEditor{text-align:left;min-height:50px;margin:15px 0}.wechat-image{cursor:pointer}.wechat-qrcode-container{background:#fff;border:1px solid #ccc;position:absolute;z-index:100;width:260px;height:130px;font-size:13px;right:10px;top:-120px;margin-top:20px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3)}#wechat-qrcode{display:inline-block;margin:20px 10px;float:left}.wechat-qrcode-message{display:inline-block;width:120px;height:90px;margin:20px 10px;line-height:20px;text-align:left}.wechat-qrcode-close{position:absolute;top:0;right:8px;cursor:pointer}.rc-SessionStartedModal .rc-Modal .c-modal-content{max-width:550px}.collapse{display:none;}.collapse.open{display:block}.collapsing{position:relative;height:0;overflow:hidden}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-ProfileImage .c-profile-image{-webkit-border-radius:100%;border-radius:100%;}.rc-ProfileImage .c-profile-image img{-webkit-border-radius:100%;border-radius:100%}.rc-ProfileImage .c-profile-initials{background-color:#3277b2;color:#fff;text-transform:uppercase;}.rc-ProfileImage .c-profile-initials div{width:100%;height:100%;}.rc-ProfileImage .c-profile-initials div p{margin-bottom:0}');
