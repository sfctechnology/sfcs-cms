var text_callback=function(a,e){var t=e;null==e&&(t=$(".bootbox").data().extra);var n=$c.complement($("#layout").data().backgroundColor),s=$("#layout"),i=s.attr("designer_scale"),o=$("#region_"+s.data().currentRegionId).attr("width"),r=$("#region_"+s.data().currentRegionId).attr("height"),l=function(a){$("#cke_"+a+" iframe").contents().find("head").append("<style>body {width: "+o+"px; height: "+r+"px; border:2px solid red; background: "+$("#layout").css("background-color")+"; transform: scale("+i+"); transform-origin: 0 0; }h1, h2, h3, h4, p { margin-top: 0;}</style>")},d=function(a,e){if(!$("#overrideTemplate").is(":checked")){var t=$("#templateId").val();$.each(e,(function(e,s){s.id==t&&(a=s.template.replace(/#Color#/g,n),$("#ta_css").val(s.css),$.each(s,(function(a,e){"template"!=a&&"css"!=a&&$("#"+a).val(e)})))}))}return a},c=function(a){return a.replace(/\[[0-9]+]/gi,(function(a){var e=a.replace("]","").replace("[","");return CKEDITOR_DEFAULT_CONFIG.imageDownloadUrl.replace(":id",e)}))};CKEDITOR.replace("ta_text",CKEDITOR_DEFAULT_CONFIG),CKEDITOR.instances.ta_text.on("instanceReady",(function(){l("ta_text"),CKEDITOR.instances.ta_text.on("contentDom",(function(){l("ta_text")}));var a=CKEDITOR.instances.ta_text.getData();""!=a||$("#overrideTemplate").is(":checked")||(a='<span style="font-size: 48px;"><span style="color: '+n+';">'+translations.enterText+"</span></span>"),a=d(a,t),a=c(a),CKEDITOR.instances.ta_text.setData(a)})),$("#templateId").on("change",(function(){CKEDITOR.instances.ta_text.setData(d(CKEDITOR.instances.ta_text.getData(),t))})),$("#noDataMessage").length>0&&(CKEDITOR.replace("noDataMessage",CKEDITOR_DEFAULT_CONFIG),CKEDITOR.instances.noDataMessage.on("instanceReady",(function(){l("noDataMessage"),CKEDITOR.instances.noDataMessage.on("contentDom",(function(){l("noDataMessage")}));var a=CKEDITOR.instances.noDataMessage.getData();""===a&&(a='<span style="font-size: 48px;"><span style="color: '+n+';">'+translations.noDataMessage+"</span></span>"),a=c(a),CKEDITOR.instances.noDataMessage.setData(a)}))),a.on("hide.bs.modal",(function(a){if("bs.modal"===a.namespace){try{void 0!==CKEDITOR.instances.ta_text&&CKEDITOR.instances.ta_text.destroy(),void 0!==CKEDITOR.instances.noDataMessage&&CKEDITOR.instances.noDataMessage.destroy()}catch(a){console.log("Unable to remove CKEditor instance. "+a)}$("#backgroundColor").colorpicker("destroy")}})),$(".ckeditor_snippits",a).dblclick((function(){var a,e=$(this).attr("linkedto");return null!=CKEDITOR.instances[e]&&(a=null!=$(this).attr("datasetcolumnid")?"["+$(this).html()+"|"+$(this).attr("datasetcolumnid")+"]":"["+$(this).html()+"]",CKEDITOR.instances[e].insertText(a)),!1}));var u=$(".ckeditor_library_select");return u.length>0&&u.select2({ajax:{url:u.data().searchUrl,dataType:"json",data:function(a){var e=a.term,t="";if(null!=a.term){var n=a.term.match(/\[([^}]+)\]/);null!=n&&(t=n[1],e=a.term.replace(n[0],"")),e=e.replace(" ",""),t=t.replace(" ","")}var s={media:e,tags:t,type:"image",retired:0,assignable:1,start:0,length:10};return null!=a.page&&(s.start=10*(a.page-1)),void 0!==a.term&&(localStorage.liveSearchPlaceholder=a.term),s},processResults:function(a,e){var t=[];$.each(a.data,(function(a,e){t.push({id:e.mediaId,text:e.name,imageUrl:u.data().imageUrl.replace(":id",e.mediaId),disabled:!1})}));var n=e.page||1;return{results:t,pagination:{more:10*(n=n>1?n-1:n)<a.recordsTotal}}},delay:250},dropdownParent:$(a)}).on("select2:select",(function(a){var e=$(this).data().linkedTo,t=a.params.data.imageUrl;console.log("Value is "+t+", linked control is "+e),void 0!==t&&""!==t&&null!=e&&null!=CKEDITOR.instances[e]&&CKEDITOR.instances[e].insertHtml('<img src="'+t+'" />')})),$("#backgroundColor").colorpicker(),!1};function switchLists(a){$($(a.currentTarget).parent().sortable("option","connectWith")).not($(a.currentTarget).parent()).append(a.currentTarget)}function GroupSecurityCallBack(a){$("#groupsIn, #groupsOut").sortable({connectWith:".connectedSortable",dropOnEmpty:!0}).disableSelection(),$(".li-sortable",a).dblclick(switchLists)}function GroupSecuritySubmit(){var a=$("#groupsIn").attr("href")+"&ajax=true";serializedData=$("#groupsIn").sortable("serialize"),$.ajax({type:"post",url:a,cache:!1,dataType:"json",data:serializedData,success:XiboSubmitResponse})}function DisplayGroupManageMembersCallBack(a){$("#displaysIn, #displaysOut").sortable({connectWith:".connectedSortable",dropOnEmpty:!0}).disableSelection(),$(".li-sortable",a).dblclick(switchLists)}function DisplayGroupMembersSubmit(){var a=$("#displaysIn").attr("href")+"&ajax=true";serializedData=$("#displaysIn").sortable("serialize"),$.ajax({type:"post",url:a,cache:!1,dataType:"json",data:serializedData,success:XiboSubmitResponse})}var FileAssociationsCallback=function(){$("#FileAssociationsTable .library_assign_list_select").click((function(){var a=$(this).parent().parent(),e=$("<li/>",{text:a.attr("litext"),id:a.attr("rowid"),class:"li-sortable",dblclick:function(){$(this).remove()}});e.appendTo("#FileAssociationsSortable"),$("<span/>",{class:"glyphicon glyphicon-minus-sign",click:function(){$(this).parent().remove(),$(".modal-body .XiboGrid").each((function(){var a=$(this).attr("id");XiboGridRender(a)}))}}).appendTo(e),a.remove()})),$("#FileAssociationsSortable li .glyphicon-minus-sign").click((function(){$(this).parent().remove()})),$("#FileAssociationsSortable").sortable().disableSelection()},FileAssociationsSubmit=function(a){var e=$("#FileAssociationsSortable").sortable("serialize");$.ajax({type:"post",url:"index.php?p=displaygroup&q=SetFileAssociations&displaygroupid="+a+"&ajax=true",cache:!1,dataType:"json",data:e,success:XiboSubmitResponse})},settingsUpdated=function(a){a.success||SystemMessage(""==a.message?translation.failure:a.message,!0)},attachmentFormSubmit=function(a){var e=$(a);for(var t in CKEDITOR.instances){var n=new RegExp(CKEDITOR_DEFAULT_CONFIG.imageDownloadUrl.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(":id","([0-9]+)"),"g"),s=CKEDITOR.instances[t].getData().replace(n,(function(a,e){return"["+e+"]"}));$("#"+t).val(s)}$.ajax({type:e.attr("method"),url:e.attr("action"),cache:!1,dataType:"json",data:$(e).serialize(),success:function(a,t,n){XiboSubmitResponse(a,e),a.success&&console.log("success")},error:function(a,e,t){SystemMessage(a.responseText,!1)}})},attachmentFormSetup=function(a){CKEDITOR.replace("body",CKEDITOR_DEFAULT_CONFIG),a.on("hide.bs.modal",(function(a){"bootbox modal in"==a.target.className&&null!=CKEDITOR.instances.body&&CKEDITOR.instances.body.destroy()})),$("#attachmentImageId"),$("#attachmentAddButton").on("click",(function(e){$(this).addClass("disabled"),notificationAddFormAttachmentButtonClicked(e,a)})),a.find("#notificationForm").validate({submitHandler:attachmentFormSubmit,errorElement:"span",highlight:function(a){$(a).closest(".form-group").removeClass("has-success").addClass("has-error")},success:function(a){$(a).closest(".form-group").removeClass("has-error").addClass("has-success")},invalidHandler:function(a,e){$(this).closest(".modal-dialog").find(".saving").remove(),$(this).closest(".modal-dialog").find(".save-button").removeClass("disabled")}})};function notificationAddFormAttachmentButtonClicked(a,e){a.preventDefault(),e.find(".attachment-add-button").hide(),e.find("#notificationAddFormAttachmentUpload").show();var t=Handlebars.compile($("#attachment-upload-template").html()),n=e.find("#notificationAddFormAttachmentUpload");n.append(t());var s,i=n.find("form"),o=i.prop("action");i.fileupload({url:o,uploadTemplateId:"template-upload-simple",disableImageResize:!0,previewMaxWidth:100,previewMaxHeight:100,previewCrop:!0}),$.support.cors&&$.ajax({url:o,type:"HEAD"}).fail((function(){$('<span class="alert alert-error"/>').text("Upload server currently unavailable - "+new Date).appendTo(i)})),i.fileupload("option","redirect",window.location.href.replace(/\/[^\/]*$/,"/cors/result.html?%s")),i.bind("fileuploadsubmit",(function(a,e){n.find("button").addClass("disabled")})).bind("fileuploadstart",(function(a,e){return i.find(".fileupload-progress .progress-extended").show(),i.find(".fileupload-progress .progress-end").hide(),i.fileupload("active")<=0&&(s=setInterval("XiboPing('"+pingUrl+"?refreshSession=true')",18e4)),!0})).bind("fileuploaddone",(function(a,t){if(n.find("button").removeClass("disabled"),null!=s&&i.fileupload("active")<=0&&clearInterval(s),console.log(t.result),null==t.result.files[0].error||""==t.result.files[0].error){e.find(".attachment-fields").slideUp(),console.log(" hidefileinput-button"),e.find(".fileinput-button").hide(),e.find(".fileinput-close-button").removeClass("hidden");var o=t.result.files[0].name;e.find("input[name='attachedFilename']").remove(),$("#notificationForm").append($("<input type='hidden' name='attachedFilename' value='"+o+"'/>"))}})).bind("fileuploadprogressall",(function(a,e){e.total>0&&e.loaded==e.total&&(i.find(".fileupload-progress .progress-extended").hide(),i.find(".fileupload-progress .progress-end").show())})),e.find(".fileinput-button input").click(),e.find(".fileinput-close-button").click((function(){e.find("input[name='attachedFilename']").remove(),e.find(".attachment-add-button").show(),e.find("#attachmentAddButton").removeClass("disabled"),e.find("#notificationAddFormAttachmentUpload").hide(),n.html("")}))}var backGroundFormSetup=function(a){$("#backgroundColor").colorpicker({format:"hex"}),a.hasClass("modal")&&a.on("hide.bs.modal",(function(e){"bs.modal"===e.namespace&&a.find("#backgroundColor").colorpicker("destroy")}));var e=$("#backgroundImageId"),t=$("#bg_not_found_icon"),n=$("#bg_image_image"),s=e.val(),i=!1;function o(){var a,o=e.val();-1!==[0,""].indexOf(o)?(t.show(),n.hide()):(t.hide(),n.show(),a=n.data().url.replace(":id",o),n.attr("src",a)),o!=s&&(i=!0)}e.change(o),o(),$("#backgroundAddButton").on("click",(function(e){$(this).addClass("disabled"),layoutEditBackgroundButtonClicked(e,a)})),$("#layoutEditForm").submit((function(a){a.preventDefault();var e=$(this);$.ajax({type:e.attr("method"),url:e.attr("action"),cache:!1,dataType:"json",data:$(e).serialize(),success:function(a,t,n){if(XiboSubmitResponse(a,e),a.success){var s=$("div#layout");if(s.length>0){var o=e.find("#backgroundColor").val();s.data().backgroundColor=o,s.css("background-color",o),i&&window.location.reload()}else i&&"undefined"!=typeof table&&table.hasOwnProperty("ajax")&&table.ajax.reload(null,!1)}},error:function(a,e,t){SystemMessage(a.responseText,!1)}})}))};function layoutEditBackgroundButtonClicked(a,e){a.preventDefault(),e.find(".background-image-add-button").hide(),e.find("#layoutEditFormBackgroundUpload").show();var t=Handlebars.compile($("#layout-background-image-upload-template").html()),n=e.find("#layoutEditFormBackgroundUpload");n.append(t());var s,i=n.find("form"),o=i.prop("action");i.fileupload({url:o,disableImageResize:!0,previewMaxWidth:100,previewMaxHeight:100,previewCrop:!0}),$.support.cors&&$.ajax({url:o,type:"HEAD"}).fail((function(){$('<span class="alert alert-error"/>').text("Upload server currently unavailable - "+new Date).appendTo(i)})),i.fileupload("option","redirect",window.location.href.replace(/\/[^\/]*$/,"/cors/result.html?%s")),i.bind("fileuploadsubmit",(function(a,e){n.find("button").addClass("disabled")})).bind("fileuploadstart",(function(a,e){return i.find(".fileupload-progress .progress-extended").show(),i.find(".fileupload-progress .progress-end").hide(),i.fileupload("active")<=0&&(s=setInterval("XiboPing('"+pingUrl+"?refreshSession=true')",18e4)),!0})).bind("fileuploaddone",(function(a,t){if(n.find("button").removeClass("disabled"),null!=s&&i.fileupload("active")<=0&&clearInterval(s),null==t.result.files[0].error||""==t.result.files[0].error){e.find(".background-image-fields").slideUp();var o=t.result.files[0].mediaId;$("#layoutEditForm").append($("<input type='hidden' name='backgroundImageId' value='"+o+"'/>"));var r=e.find("#bg_image_image");r.prop("src",r.data().url.replace(":id",o)),i.slideUp()}})).bind("fileuploadprogressall",(function(a,e){e.total>0&&e.loaded==e.total&&(i.find(".fileupload-progress .progress-extended").hide(),i.find(".fileupload-progress .progress-end").show())})),e.find(".fileinput-button input").click(),e.find(".fileinput-close-button").click((function(){e.find(".background-image-add-button").show(),e.find("#backgroundAddButton").removeClass("disabled"),e.find("#layoutEditFormBackgroundUpload").hide(),n.html("")}))}function permissionsFormOpen(a){var e=$("#permissionsTable").closest(".XiboGrid");e.data().permissions.length<=0&&(e.data().permissions={});var t=$("#permissionsTable").DataTable({language:dataTablesLanguage,serverSide:!0,stateSave:!0,filter:!1,searchDelay:3e3,order:[[0,"asc"]],ajax:{url:e.data().url,data:function(a){$.extend(a,e.find(".permissionsTableFilter form").serializeObject())}},columns:[{data:"group",render:function(a,e,t,n){return"display"!=e||1==t.isUser?a:"<strong>"+a+"</strong>"}},{data:"view",render:function(a,t,n,s){if("display"!=t)return a;var i;if(n.groupId in e.data().permissions){var o=e.data().permissions[n.groupId];i=void 0!==o.view&&1===o.view?1:0}else i=a;return'<input type="checkbox" data-permission="view" data-group-id="'+n.groupId+'" '+(1===i?"checked":"")+" />"}},{data:"edit",render:function(a,t,n,s){if("display"!=t)return a;var i;if(n.groupId in e.data().permissions){var o=e.data().permissions[n.groupId];i=void 0!==o.edit&&1===o.edit?1:0}else i=a;return'<input type="checkbox" data-permission="edit" data-group-id="'+n.groupId+'" '+(1===i?"checked":"")+" />"}},{data:"delete",render:function(a,t,n,s){if("display"!=t)return a;var i;if(n.groupId in e.data().permissions){var o=e.data().permissions[n.groupId];i=void 0!==o.delete&&1===o.delete?1:0}else i=a;return'<input type="checkbox" data-permission="delete" data-group-id="'+n.groupId+'" '+(1===i?"checked":"")+" />"}}]});t.on("draw",(function(a,t){dataTableDraw(a,t),$("#"+a.target.id).find("input[type=checkbox]").change((function(){var a=$(this).data().groupId,t=$(this).data().permission,n=$(this).is(":checked");void 0===e.data().permissions[a]&&(e.data().permissions[a]={}),e.data().permissions[a][t]=n?1:0}))})),t.on("processing.dt",dataTableProcessing),e.find(".permissionsTableFilter form input, .permissionsTableFilter form select").change((function(){t.ajax.reload()}))}function permissionsFormSubmit(a){var e=$("#"+a),t=e.closest(".permissions-form"),n={groupIds:$(e).data().permissions,ownerId:t.find("select[name=ownerId]").val(),cascade:t.find("#cascade").is(":checked")},s=$.param(n);$.ajax({type:"POST",url:e.data().url,cache:!1,dataType:"json",data:s,success:function(a,t,n){XiboSubmitResponse(a,e)},error:function(a,e,t){SystemMessage(a.responseText,!1)}})}function membersFormOpen(a){var e=$(a).find(".membersTable");null==e.data().members&&(e.data().members={}),e.find("input[type=checkbox]").change((function(){var a=$(this).data().memberId,t=$(this).is(":checked");e.data().members[a]=t?1:0}))}function membersFormSubmit(a){var e=$("#"+a),t=e.find(".membersTable").data().members;if(null!=t){var n=[],s=[];$.each(t,(function(a,e){1==e?n.push(a):s.push(a)}));var i={};i[e.data().param]=n,i[e.data().paramUnassign]=s,$.ajax({type:"POST",url:e.data().url,cache:!1,dataType:"json",data:$.param(i),success:function(a,t,n){XiboSubmitResponse(a,e)},error:function(a,e,t){SystemMessage(a.responseText,!1)}})}else XiboDialogClose()}function mediaDisplayGroupFormCallBack(){var a=$("#FileAssociationsAssign");null==a.data().media&&(a.data().media={});var e=$("#mediaAssignments").DataTable({language:dataTablesLanguage,serverSide:!0,stateSave:!0,searchDelay:3e3,order:[[0,"asc"]],filter:!1,ajax:{url:$("#mediaAssignments").data().url,data:function(a){$.extend(a,$("#mediaAssignments").closest(".XiboGrid").find(".FilterDiv form").serializeObject())}},columns:[{data:"name"},{data:"mediaType"},{sortable:!1,data:function(a,e,t,n){return"display"!=e?"":'<a href="#" class="assignItem"><span class="glyphicon glyphicon-plus-sign"></a>'}}]});e.on("draw",(function(t,n){dataTableDraw(t,n),$(".assignItem","#mediaAssignments").click((function(){var t=e.row($(this).closest("tr")).data();a.data().media[t.mediaId]=1;var n=$("<li/>",{text:t.name,"data-media-id":t.mediaId,class:"btn btn-sm btn-default"});n.appendTo("#FileAssociationsSortable"),$("<span/>",{class:"glyphicon glyphicon-minus-sign",click:function(){a.data().media[$(this).parent().data().mediaId]=0,$(this).parent().remove()}}).appendTo(n)}))})),e.on("processing.dt",dataTableProcessing),$("#FileAssociationsSortable").sortable(),$("#FileAssociationsSortable").find("li span").click((function(){a.data().media[$(this).parent().data().mediaId]=0,$(this).parent().remove()})),$("#mediaAssignments").closest(".XiboGrid").find(".FilterDiv input, .FilterDiv select").change((function(){e.ajax.reload()}))}function mediaAssignSubmit(){var a=$("#FileAssociationsAssign"),e=[],t=[];$.each(a.data().media,(function(a,n){1==n?e.push(a):t.push(a)})),assignMediaToCampaign(a.data().url,e,t)}var assignMediaToCampaign=function(a,e,t){toastr.info("Assign Media",e),$.ajax({type:"post",url:a,cache:!1,dataType:"json",data:{mediaId:e,unassignMediaId:t},success:XiboSubmitResponse})};function layoutFormCallBack(){var a=$("#FileAssociationsAssign");null==a.data().layout&&(a.data().layout={});var e=$("#layoutAssignments").DataTable({language:dataTablesLanguage,serverSide:!0,stateSave:!0,searchDelay:3e3,order:[[0,"asc"]],filter:!1,ajax:{url:$("#layoutAssignments").data().url,data:function(a){$.extend(a,$("#layoutAssignments").closest(".XiboGrid").find(".FilterDiv form").serializeObject())}},columns:[{data:"layout"},{sortable:!1,data:function(a,e,t,n){return"display"!=e?"":'<a href="#" class="assignItem"><span class="glyphicon glyphicon-plus-sign"></a>'}}]});e.on("draw",(function(t,n){dataTableDraw(t,n),$(".assignItem","#layoutAssignments").click((function(){var t=e.row($(this).closest("tr")).data();a.data().layout[t.layoutId]=1;var n=$("<li/>",{text:t.layout,"data-layout-id":t.layoutId,class:"btn btn-sm btn-default"});n.appendTo("#FileAssociationsSortable"),$("<span/>",{class:"glyphicon glyphicon-minus-sign",click:function(){a.data().layout[$(this).parent().data().layoutId]=0,$(this).parent().remove()}}).appendTo(n)}))})),e.on("processing.dt",dataTableProcessing),$("#FileAssociationsSortable").sortable(),$("#FileAssociationsSortable").find("li span").click((function(){a.data().layout[$(this).parent().data().layoutId]=0,$(this).parent().remove()})),$("#layoutAssignments").closest(".XiboGrid").find(".FilterDiv input, .FilterDiv select").change((function(){e.ajax.reload()}))}function layoutAssignSubmit(){var a=$("#FileAssociationsAssign"),e=[],t=[];$.each(a.data().layout,(function(a,n){1==n?e.push(a):t.push(a)})),assignLayoutToCampaign(a.data().url,e,t)}var assignLayoutToCampaign=function(a,e,t){toastr.info("Assign Layout",e),$.ajax({type:"post",url:a,cache:!1,dataType:"json",data:{layoutId:e,unassignLayoutId:t},success:XiboSubmitResponse})};function regionEditFormSubmit(){XiboFormSubmit($("#regionEditForm"),null,(function(a,e){a.success&&window.location.reload()}))}function userProfileEditFormOpen(){$("#qRCode").addClass("hidden"),$("#recoveryButtons").addClass("hidden"),$("#recoveryCodes").addClass("hidden"),$("#twoFactorTypeId").on("change",(function(a){a.preventDefault(),2==$("#twoFactorTypeId").val()&&2!=$("#userEditProfileForm").data().currentuser?($.ajax({url:$("#userEditProfileForm").data().setup,type:"GET",beforeSend:function(){$("#qr").addClass("fa fa-spinner fa-spin loading-icon")},success:function(a){let e=a.data.qRUrl;$("#qrImage").attr("src",e)},complete:function(){$("#qr").removeClass("fa fa-spinner fa-spin loading-icon")}}),$("#qRCode").removeClass("hidden")):$("#qRCode").addClass("hidden"),0==$("#twoFactorTypeId").val()&&($("#recoveryButtons").addClass("hidden"),$("#recoveryCodes").addClass("hidden")),0!=$("#userEditProfileForm").data().currentuser&&0!=$("#twoFactorTypeId").val()&&$("#recoveryButtons").removeClass("hidden")})),0!=$("#userEditProfileForm").data().currentuser&&$("#recoveryButtons").removeClass("hidden");let a="";$("#generateCodesBtn").on("click",(function(e){$("#codesList").html(""),$("#recoveryCodes").removeClass("hidden"),$(".recBtn").attr("disabled",!0).addClass("disabled"),a="",$.ajax({url:$("#userEditProfileForm").data().generate,async:!1,type:"GET",beforeSend:function(){$("#codesList").removeClass("well").addClass("fa fa-spinner fa-spin loading-icon")},success:function(e){a=JSON.parse(e.data.codes),$("#recoveryCodes").addClass("hidden"),$(".recBtn").attr("disabled",!1).removeClass("disabled"),$("#showCodesBtn").click()},complete:function(){$("#codesList").removeClass("fa fa-spinner fa-spin loading-icon")}})})),$("#showCodesBtn").on("click",(function(e){$(".recBtn").attr("disabled",!0).addClass("disabled"),$("#codesList").html(""),$("#recoveryCodes").toggleClass("hidden");let t=[];$.ajax({url:$("#userEditProfileForm").data().show,type:"GET",data:{generatedCodes:a},success:function(e){t=""!=a?a:e.data.codes,$("#twoFactorRecoveryCodes").val(JSON.stringify(t)),$.each(t,(function(a,e){$("#codesList").append(e+"<br/>")})),$("#codesList").addClass("well"),$(".recBtn").attr("disabled",!1).removeClass("disabled")}})}))}function tagsWithValues(a){let e;$('#tagValue, label[for="tagValue"], #tagValueRequired').addClass("hidden"),$("#tagValueContainer").hide();let t="",n="",s="",i=[],o=0,r="#"+a+" input#tags";$(r).on("beforeItemAdd",(function(t){$("#tagValue").html(""),$("#tagValueInput").val(""),e=t.item,i=[],o=0,n=e.split("|")[0],s=e.split("|")[1],-1===$(r).val().indexOf(n)&&void 0===s&&$.ajax({url:$("#"+a).data().gettag,type:"GET",data:{name:n},beforeSend:function(){$("#loadingValues").addClass("fa fa-spinner fa-spin loading-icon")},success:function(a){a.success&&(null!=a.data.tag?(i=JSON.parse(a.data.tag.options),o=a.data.tag.isRequired,null!=i&&i!=[]?($('#tagValue, label[for="tagValue"]').removeClass("hidden"),$("#tagValue").append($("<option></option>").attr("value","").text("")),$.each(i,(function(a,e){$("#tagValue").append($("<option></option>").attr("value",e).text(e))})),$("#tagValue").focus()):($("#tagValueContainer").show(),0===o?$("#tagValueInput").parent().find("span.help-block").text(translations.tagInputValueHelpText):$("#tagValueInput").parent().find("span.help-block").text(translations.tagInputValueRequiredHelpText),$("#tagValueInput").focus())):($("#tagValueContainer").show(),$("#tagValueInput").focus(),$("#tagValueInput").parent().find("span.help-block").text(translations.tagInputValueHelpText)))},complete:function(){$("#loadingValues").removeClass("fa fa-spinner fa-spin loading-icon")},error:function(a,e,t){console.error(a,e,t)}})})),$(r).on("itemAdded",(function(a){null!=i&&i!==[]&&$("#tagValue").focus()})),$(r).on("itemRemoved",(function(a){n===a.item?($('#tagValueRequired, label[for="tagValue"]').addClass("hidden"),$(".save-button").prop("disabled",!1),$("#tagValue").html("").addClass("hidden"),$("#tagValueInput").val(""),$("#tagValueContainer").hide(),n=""):$(".save-button").is(":disabled")||($("#tagValue").html("").addClass("hidden"),$("#tagValueInput").val(""),$("#tagValueContainer").hide(),$('label[for="tagValue"]').addClass("hidden"))})),$("#tagValue").on("change",(function(a){a.preventDefault(),t=n+"|"+$(this).val(),0===o||1===o&&""!==$(this).val()?($(r).tagsinput("add",t),$(r).tagsinput("remove",n),$("#tagValue").html("").addClass("hidden"),$('#tagValueRequired, label[for="tagValue"]').addClass("hidden"),$(".save-button").prop("disabled",!1)):($("#tagValueRequired").removeClass("hidden"),$("#tagValue").focus())})),$("#tagValue").blur((function(){""===$(this).val()&&1===o?($("#tagValueRequired").removeClass("hidden"),$("#tagValue").focus(),$(".save-button").prop("disabled",!0)):($("#tagValue").html("").addClass("hidden"),$('label[for="tagValue"]').addClass("hidden"))})),$("#tagValueInput").on("keypress focusout",(function(a){if((13===a.keyCode||"focusout"===a.type)&&""!=n){a.preventDefault();let e=$(this).val();t=""!==e?n+"|"+e:n,0===o||1===o&&""!==e?($(r).tagsinput("add",t),""!==e&&$(r).tagsinput("remove",n),$("#tagValueInput").val(""),$("#tagValueContainer").hide(),$("#tagValueRequired").addClass("hidden"),$(".save-button").prop("disabled",!1)):($("#tagValueContainer").show(),$("#tagValueRequired").removeClass("hidden"),$("#tagValueInput").focus())}}))}