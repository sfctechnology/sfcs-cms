CKEDITOR.dialog.add("link",(function(e){var t,a;function n(e){return e.replace(/'/g,"\\$&")}function i(e){var i,l,o,s=t;i=[a,"("];for(var r=0;r<s.length;r++)o=e[l=s[r].toLowerCase()],0<r&&i.push(","),i.push("'",o?n(encodeURIComponent(e[l])):"","'");return i.push(")"),i.join("")}function l(e){for(var t,a=e.length,n=[],i=0;i<a;i++)t=e.charCodeAt(i),n.push(t);return"String.fromCharCode("+n.join(",")+")"}var o=CKEDITOR.plugins.link,s=function(){var t=(a=this.getDialog()).getContentElement("target","popupFeatures"),a=a.getContentElement("target","linkTargetName"),n=this.getValue();if(t&&a)switch(t=t.getElement(),t.hide(),a.setValue(""),n){case"frame":a.setLabel(e.lang.link.targetFrameName),a.getElement().show();break;case"popup":t.show(),a.setLabel(e.lang.link.targetPopupName),a.getElement().show();break;default:a.setValue(n),a.getElement().hide()}},r=/^javascript:/,d=/^mailto:([^?]+)(?:\?(.+))?$/,c=/subject=([^;?:@&=$,\/]*)/,h=/body=([^;?:@&=$,\/]*)/,u=/^#(.*)$/,p=/^((?:http|https|ftp|news):\/\/)?(.*)$/,m=/^(_(?:self|top|parent|blank))$/,g=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,f=/^javascript:([^(]+)\(([^)]+)\)$/,y=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,b=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,v=function(e,n){var i,l,o,s=n&&(n.data("cke-saved-href")||n.getAttribute("href"))||"",v={};if(s.match(r)&&("encode"==E?s=s.replace(g,(function(e,t,a){return"mailto:"+String.fromCharCode.apply(String,t.split(","))+(a&&a.replace(/\\'/g,"'"))})):E&&s.replace(f,(function(e,n,i){if(n==a){v.type="email",e=v.email={},n=/(^')|('$)/g;for(var l,o=(i=i.match(/[^,\s]+/g)).length,s=0;s<o;s++)l=decodeURIComponent(l=i[s].replace(n,"").replace(/\\'/g,"'")),e[t[s].toLowerCase()]=l;e.address=[e.name,e.domain].join("@")}}))),!v.type)if(i=s.match(u))v.type="anchor",v.anchor={},v.anchor.name=v.anchor.id=i[1];else if(i=s.match(d)){l=s.match(c),s=s.match(h),v.type="email";var C=v.email={};C.address=i[1],l&&(C.subject=decodeURIComponent(l[1])),s&&(C.body=decodeURIComponent(s[1]))}else s&&(l=s.match(p))?(v.type="url",v.url={},v.url.protocol=l[1],v.url.url=l[2]):v.type="url";if(n){if(i=n.getAttribute("target"),v.target={},v.adv={},i)i.match(m)?v.target.type=v.target.name=i:(v.target.type="frame",v.target.name=i);else if(i=(i=n.data("cke-pa-onclick")||n.getAttribute("onclick"))&&i.match(y))for(v.target.type="popup",v.target.name=i[1];s=b.exec(i[2]);)"yes"!=s[2]&&"1"!=s[2]||s[1]in{height:1,width:1,top:1,left:1}?isFinite(s[2])&&(v.target[s[1]]=s[2]):v.target[s[1]]=!0;(i=function(e,t){var a=n.getAttribute(t);null!==a&&(v.adv[e]=a||"")})("advId","id"),i("advLangDir","dir"),i("advAccessKey","accessKey"),v.adv.advName=n.data("cke-saved-name")||n.getAttribute("name")||"",i("advLangCode","lang"),i("advTabIndex","tabindex"),i("advTitle","title"),i("advContentType","type"),CKEDITOR.plugins.link.synAnchorSelector?v.adv.advCSSClasses=function(e){return(e=e.getAttribute("class"))?e.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}(n):i("advCSSClasses","class"),i("advCharset","charset"),i("advStyles","style"),i("advRel","rel")}if(i=v.anchors=[],CKEDITOR.plugins.link.emptyAnchorFix)for(s=0,l=(C=e.document.getElementsByTag("a")).count();s<l;s++)((o=C.getItem(s)).data("cke-saved-name")||o.hasAttribute("name"))&&i.push({name:o.data("cke-saved-name")||o.getAttribute("name"),id:o.getAttribute("id")});else for(s=0,l=(C=new CKEDITOR.dom.nodeList(e.document.$.anchors)).count();s<l;s++)o=C.getItem(s),i[s]={name:o.getAttribute("name"),id:o.getAttribute("id")};if(CKEDITOR.plugins.link.fakeAnchor)for(s=0,l=(C=e.document.getElementsByTag("img")).count();s<l;s++)(o=CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,C.getItem(s)))&&i.push({name:o.getAttribute("name"),id:o.getAttribute("id")});return this._.selectedElement=n,v},C=function(e){e.target&&this.setValue(e.target[this.id]||"")},k=function(e){e.adv&&this.setValue(e.adv[this.id]||"")},x=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},w=function(e){e.adv||(e.adv={}),e.adv[this.id]=this.getValue()||""},E=e.config.emailProtection||"";E&&"encode"!=E&&(a=t=void 0,E.replace(/^([^(]+)\(([^)]+)\)$/,(function(e,n,i){a=n,t=[],i.replace(/[^,\s]+/g,(function(e){t.push(e)}))})));var T=e.lang.common,S=e.lang.link;return{title:S.title,minWidth:350,minHeight:230,contents:[{id:"info",label:S.info,title:S.info,elements:[{id:"linkType",type:"select",label:S.type,default:"url",items:[[S.toUrl,"url"],[S.toAnchor,"anchor"],[S.toEmail,"email"]],onChange:function(){var t=this.getDialog(),a=["urlOptions","anchorOptions","emailOptions"],n=this.getValue(),i=(i=t.definition.getContents("upload"))&&i.hidden;for("url"==n?(e.config.linkShowTargetTab&&t.showPage("target"),i||t.showPage("upload")):(t.hidePage("target"),i||t.hidePage("upload")),i=0;i<a.length;i++){var l=t.getContentElement("info",a[i]);l&&(l=l.getElement().getParent().getParent(),a[i]==n+"Options"?l.show():l.hide())}t.layout()},setup:function(e){e.type&&this.setValue(e.type)},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:T.protocol,default:"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[S.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:T.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),a=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);a?(this.setValue(t.substr(a[0].length)),e.setValue(a[0].toLowerCase())):/^((javascript:)|[#\/\.\?])/i.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();return!(!e.getContentElement("info","linkType")||"url"==e.getValueOf("info","linkType"))||(/javascript\:/.test(this.getValue())?(alert(T.invalidValue),!1):!!this.getDialog().fakeObj||CKEDITOR.dialog.validate.notEmpty(S.noUrl).apply(this))},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:T.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:S.selectAnchor,setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName",default:"",label:S.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].name&&this.add(e.anchors[t].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId",default:"",label:S.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].id&&this.add(e.anchors[t].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(S.noAnchors)+"</div>",focus:!0,setup:function(e){e.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:S.emailAddress,required:!0,validate:function(){var e=this.getDialog();return!e.getContentElement("info","linkType")||"email"!=e.getValueOf("info","linkType")||CKEDITOR.dialog.validate.notEmpty(S.noEmail).apply(this)},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:S.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:S.emailBody,rows:3,default:"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:S.target,title:S.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:T.target,default:"notSet",style:"width : 100%;",items:[[T.notSet,"notSet"],[S.targetFrame,"frame"],[S.targetPopup,"popup"],[T.targetNew,"_blank"],[T.targetTop,"_top"],[T.targetSelf,"_self"],[T.targetParent,"_parent"]],onChange:s,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),s.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:S.targetFrameName,default:"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:S.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:S.popupResizable,setup:C,commit:x},{type:"checkbox",id:"status",label:S.popupStatusBar,setup:C,commit:x}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:S.popupLocationBar,setup:C,commit:x},{type:"checkbox",id:"toolbar",label:S.popupToolbar,setup:C,commit:x}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:S.popupMenuBar,setup:C,commit:x},{type:"checkbox",id:"fullscreen",label:S.popupFullScreen,setup:C,commit:x}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:S.popupScrollBars,setup:C,commit:x},{type:"checkbox",id:"dependent",label:S.popupDependent,setup:C,commit:x}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:T.width,id:"width",setup:C,commit:x},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:S.popupLeft,id:"left",setup:C,commit:x}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:T.height,id:"height",setup:C,commit:x},{type:"text",labelLayout:"horizontal",label:S.popupTop,widths:["50%","50%"],id:"top",setup:C,commit:x}]}]}]}]},{id:"upload",label:S.upload,title:S.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:T.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:T.uploadSubmit,filebrowser:"info:url",for:["upload","upload"]}]},{id:"advanced",label:S.advanced,title:S.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:S.id,setup:k,commit:w},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:S.langDir,default:"",style:"width:110px",items:[[T.notSet,""],[S.langDirLTR,"ltr"],[S.langDirRTL,"rtl"]],setup:k,commit:w},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:S.acccessKey,maxLength:1,setup:k,commit:w}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:S.name,id:"advName",requiredContent:"a[name]",setup:k,commit:w},{type:"text",label:S.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px",default:"",setup:k,commit:w},{type:"text",label:S.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:k,commit:w}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:S.advisoryTitle,requiredContent:"a[title]",default:"",id:"advTitle",setup:k,commit:w},{type:"text",label:S.advisoryContentType,requiredContent:"a[type]",default:"",id:"advContentType",setup:k,commit:w}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:S.cssClasses,requiredContent:"a(cke-xyz)",default:"",id:"advCSSClasses",setup:k,commit:w},{type:"text",label:S.charset,requiredContent:"a[charset]",default:"",id:"advCharset",setup:k,commit:w}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:S.rel,requiredContent:"a[rel]",default:"",id:"advRel",setup:k,commit:w},{type:"text",label:S.styles,requiredContent:"a{cke-xyz}",default:"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:k,commit:w}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),a=null;(a=o.getSelectedLink(e))&&a.hasAttribute("href")?t.getSelectedElement()||t.selectElement(a):a=null,this.setupContent(v.apply(this,[e,a]))},onOk:function(){var e={},t=[],a={},o=this.getParentEditor();switch(this.commitContent(a),a.type||"url"){case"url":var s=a.url&&null!=a.url.protocol?a.url.protocol:"http://",r=a.url&&CKEDITOR.tools.trim(a.url.url)||"";e["data-cke-saved-href"]=0===r.indexOf("/")?r:s+r;break;case"anchor":s=a.anchor&&a.anchor.id,e["data-cke-saved-href"]="#"+(a.anchor&&a.anchor.name||s||"");break;case"email":switch(s=(c=a.email).address,E){case"":case"encode":r=encodeURIComponent(c.subject||"");var d=encodeURIComponent(c.body||""),c=[];r&&c.push("subject="+r),d&&c.push("body="+d),c=c.length?"?"+c.join("&"):"","encode"==E?(s=["javascript:void(location.href='mailto:'+",l(s)],c&&s.push("+'",n(c),"'"),s.push(")")):s=["mailto:",s,c];break;default:s=s.split("@",2),c.name=s[0],c.domain=s[1],s=["javascript:",i(c)]}e["data-cke-saved-href"]=s.join("")}if(a.target)if("popup"==a.target.type){s=["window.open(this.href, '",a.target.name||"","', '"];var h=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"];for(r=h.length,c=function(e){a.target[e]&&h.push(e+"="+a.target[e])},d=0;d<r;d++)h[d]=h[d]+(a.target[h[d]]?"=yes":"=no");c("width"),c("left"),c("height"),c("top"),s.push(h.join(","),"'); return false;"),e["data-cke-pa-onclick"]=s.join(""),t.push("target")}else"notSet"!=a.target.type&&a.target.name?e.target=a.target.name:t.push("target"),t.push("data-cke-pa-onclick","onclick");a.adv&&((s=function(n,i){var l=a.adv[n];l?e[i]=l:t.push(i)})("advId","id"),s("advLangDir","dir"),s("advAccessKey","accessKey"),a.adv.advName?e.name=e["data-cke-saved-name"]=a.adv.advName:t=t.concat(["data-cke-saved-name","name"]),s("advLangCode","lang"),s("advTabIndex","tabindex"),s("advTitle","title"),s("advContentType","type"),s("advCSSClasses","class"),s("advCharset","charset"),s("advStyles","style"),s("advRel","rel")),s=o.getSelection(),e.href=e["data-cke-saved-href"],this._.selectedElement?(r=(o=this._.selectedElement).data("cke-saved-href"),c=o.getHtml(),o.setAttributes(e),o.removeAttributes(t),a.adv&&a.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&o.addClass(o.getChildCount()?"cke_anchor":"cke_anchor_empty"),(r==c||"email"==a.type&&-1!=c.indexOf("@"))&&(o.setHtml("email"==a.type?a.email.address:e["data-cke-saved-href"]),s.selectElement(o)),delete this._.selectedElement):((s=s.getRanges()[0]).collapsed&&(o=new CKEDITOR.dom.text("email"==a.type?a.email.address:e["data-cke-saved-href"],o.document),s.insertNode(o),s.selectNodeContents(o)),(o=new CKEDITOR.style({element:"a",attributes:e})).type=CKEDITOR.STYLE_INLINE,o.applyToRange(s),s.select())},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url")).select()}}}));