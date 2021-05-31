var calendar,events=[];let mymap;$(document).ready((function(){var e=null;if($("body").on("click",(function(e){$('[data-toggle="popover"]').each((function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||$(this).popover("hide")}))})),$(".btn-group button[data-calendar-nav]").each((function(){var e=$(this);e.click((function(){calendar.navigate(e.data("calendar-nav"))}))})),$(".btn-group button[data-calendar-view]").each((function(){var e=$(this);e.click((function(){calendar.view(e.data("calendar-view"))}))})),$("#Calendar").length>0){var t=$("#CalendarContainer").data(),a={time_start:"00:00",time_end:"00:00",events_source:function(){return events},view:"month",tmpl_path:function(e){return"calendar-template-"+e},tmpl_cache:!0,onBeforeEventsLoad:function(t){var a=$("#CalendarContainer").data();let n=$("#showAll").is(":checked");if($("#DisplayList").prop("disabled",n),"agenda"!==this.options.view){var o=$("#DisplayList").serialize(),r=$("#campaignId").serialize(),s=a.eventSource;s+="?"+r,n?s+="&displayGroupIds[]=-1":""!==o&&(s+="&"+o),events=[];var l={from:this.options.position.start.getTime(),to:this.options.position.end.getTime()};e&&e.abort(),$("#calendar-progress").addClass("fa fa-cog fa-spin"),e=$.getJSON(s,l).done((function(e){events=e.result,null!=t&&t(),calendar._render(),$('[data-toggle="popover"]').popover({trigger:"manual",html:!0,placement:"bottom",content:function(){return $(this).html()}}).on("mouseenter",(function(){var e=this;$('[data-toggle="popover"]').not(this).popover("hide"),$(this).popover("show"),$(".popover").off("mouseleave").on("mouseleave",(function(){$(e).popover("hide")}))})).on("shown.bs.popover",(function(){var e=$(this),t=e.attr("aria-describedby");$("#"+t+" a").click((function(t){t.preventDefault(),XiboFormRender($(this)),e.popover("hide")}))})),$("#calendar-progress").removeClass("fa fa-cog fa-spin")})).fail((function(e){$("#calendar-progress").removeClass("fa fa-cog fa-spin"),null!=t&&t(),calendar._render(),"abort"!=e.statusText&&(toastr.error(translations.failure),console.error(e))}))}else{var i=$(".cal-context").data().selectedTab,d=[],c=!1;n||($("#DisplayList").prop("disabled",!1),$("#DisplayList option").each((function(){var e=$(this);if(-1==e.val()&&e.is(":selected"))return c=!0,!0;(e.is(":selected")||c)&&(d.push({id:e.val(),name:e.html(),isDisplaySpecific:e.attr("type")}),void 0===i&&(i=e.val()))}))),d.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})),s=a.agendaLink.replace(":id",i);var p=moment(this.options.position.start.getTime()/1e3,"X"),u=$("#timePickerSlider").length?$("#timePicker").slider("getValue"):0,m=moment(60*u,"X");l={date:moment(p+m).format(systemDateFormat)},jQuery.isEmptyObject(events.results)&&((events=[]).results={}),events.displayGroupList=d,events.selectedDisplayGroup=i,events.errorMessage="",1==calendar.options.clearCache&&(events.results={}),e&&e.abort(),n?(events.errorMessage="all_displays_selected",null!=t&&t(),calendar._render()):null==$("#DisplayList").val()||Array.isArray($("#DisplayList").val())&&0==$("#DisplayList").val().length?(events.errorMessage="display_not_selected",null!=t&&t(),calendar._render()):jQuery.isEmptyObject(events.results[i])||events.results[i].request_date!=l.date?($("#calendar-progress").addClass("fa fa-cog fa-spin"),e=$.getJSON(s,l).done((function(e){!jQuery.isEmptyObject(e.data)&&null!=e.data.events&&e.data.events.length>0?(events.results[String(i)]=e.data,events.results[String(i)].request_date=l.date):(events.results[String(i)]={},events.errorMessage="no_events"),null!=t&&t(),calendar._render(),$("#calendar-progress").removeClass("fa fa-cog fa-spin")})).fail((function(e){null!=t&&t(),"abort"!=e.statusText&&(events.errorMessage="request_failed"),calendar._render(),$("#calendar-progress").removeClass("fa fa-cog fa-spin")}))):(null!=t&&t(),calendar._render())}},onAfterEventsLoad:function(e){"agenda"==this.options.view&&$(".agenda-panel").ready((function(){$(".agenda-table-layouts").dataTable({searching:!1})}))},onAfterViewLoad:function(e){if("agenda"==this.options.view){$(".cal-event-time-bar").show();const e=$("#timePicker");let t=moment().tz?moment().tz(timezone):moment();e.slider({value:60*t.hour()+t.minute(),tooltip:"always",formatter:function(e){return moment().startOf("day").minute(e).format(jsTimeFormat)}}).off("slideStop").on("slideStop",(function(e){calendar.view()})),$(".time-picker-step-btn").off().on("click",(function(){e.slider("setValue",e.slider("getValue")+$(this).data("step")),calendar.view()}))}else $(".cal-event-time-bar").hide();null!=this.options.position.start&&""!=this.options.position.start&&$("#dateInput .form-control").datetimepicker("update",moment(this.options.position.start.getTime()/1e3,"X").format(systemDateFormat)),"function"==typeof this.getTitle&&$("h1.page-header").text(this.getTitle()),$(".btn-group button").removeClass("active"),$('button[data-calendar-view="'+e+'"]').addClass("active")},language:calendarLanguage};a.type=t.calendarType,calendar=$("#Calendar").calendar(a),$(".cal-context").on("click",'a[data-toggle="tab"]',(function(e){$(".cal-context").data().selectedTab=$(this).data("id"),calendar.view()})),$(".cal-context").on("click","tbody tr",(function(e){var t=$(this),a=t.hasClass("selected");$(".cal-event-breadcrumb-trail").hide(),$(".cal-context tbody tr").removeClass("selected"),$(".cal-context tbody tr").removeClass("selected-linked"),a||("layouts"==t.closest("table").data("type")&&($(".cal-event-breadcrumb-trail").show(),$(".cal-event-breadcrumb-trail #content").html(""),$(".cal-event-breadcrumb-trail #content").append(calendar._breadcrumbTrail(t.data("elemId"),events,t.data("eventId"))),XiboInitialise("")),agendaSelectLinkedElements(t.closest("table").data("type"),t.data("elemId"),events,t.data("eventId")))})),$("#dateInput").datetimepicker({format:bootstrapDateFormatDateOnly,autoclose:!0,language,calendarType,minView:2,todayHighlight:!0}).change((function(){calendar.navigate("date",moment($("#dateInput .form-control").val(),jsDateFormat))})).datetimepicker("update",moment(calendar.options.position.start.getTime()/1e3,"X").format(systemDateFormat))}}));var setupScheduleForm=function(e){console.log("Setup schedule form");let t=$("#isGeoAware"),a=t.is(":checked");a&&$(".nav-tabs a").on("shown.bs.tab",(function(e){"Geo Location"===$(e.target).text()&&($("#geoScheduleMap").removeClass("hidden"),generateGeoMap())})),t.change((function(){a=$("#isGeoAware").is(":checked"),a?($("#geoScheduleMap").removeClass("hidden"),generateGeoMap()):$("#geoScheduleMap").addClass("hidden")}));var n=$("#shareOfVoice"),o=$("#shareOfVoicePercentage");n.on("change paste keyup",(function(){r(n.val())})),o.on("change paste keyup",(function(){var e;e=3600*o.val()/100,n.val(e)}));var r=function(e){var t;t=100*e/3600,o.val(t.toFixed(2))};r(n.val());var s=$("#campaignId",e);s.select2({ajax:{url:s.data("searchUrl"),dataType:"json",data:function(e){var t={isLayoutSpecific:s.data("searchIsLayoutSpecific"),retired:0,totalDuration:0,name:e.term,start:0,length:10,columns:[{data:"isLayoutSpecific"},{data:"campaign"}],order:[{column:0,dir:"asc"},{column:1,dir:"asc"}]};return null!=e.page&&(t.start=10*(e.page-1)),t},processResults:function(e,t){let a=[];$.each(e.data,(function(e,t){a.push({id:t.campaignId,text:t.campaign})}));let n=t.page||1;return n=n>1?n-1:n,{results:a,pagination:{more:10*n<e.recordsTotal}}}}});var l=$('select[name="displayGroupIds[]"]',e);l.select2({ajax:{url:l.data("searchUrl"),dataType:"json",data:function(e){var t={isDisplaySpecific:-1,forSchedule:1,displayGroup:e.term,start:0,length:10,columns:[{data:"isDisplaySpecific"},{data:"displayGroup"}],order:[{column:0,dir:"asc"},{column:1,dir:"asc"}]};return null!=e.page&&(t.start=10*(e.page-1)),t},processResults:function(e,t){var a=[],n=[];$.each(e.data,(function(e,t){1===t.isDisplaySpecific?n.push({id:t.displayGroupId,text:t.displayGroup}):a.push({id:t.displayGroupId,text:t.displayGroup})}));var o=t.page||1;return o=o>1?o-1:o,{results:[{text:l.data("transGroups"),children:a},{text:l.data("transDisplay"),children:n}],pagination:{more:10*o<e.recordsTotal}}}}}),$('select[name="recurrenceRepeatsOn[]"]',e).select2({width:"100%"}),processScheduleFormElements($("#recurrenceType",e)),processScheduleFormElements($("#eventTypeId",e)),processScheduleFormElements($("#campaignId",e)),$("#recurrenceType, #eventTypeId, #dayPartId, #campaignId",e).on("change",(function(){processScheduleFormElements($(this))})),$('a[data-toggle="tab"]',e).on("shown.bs.tab",(function(t){var a,n=$(e).find("input[name=fromDt]"),o=null===n.val()||""===n.val()?moment():moment(n.val()),r=$(e).find("select[name=recurrenceMonthlyRepeatsOn]"),s=$('<option value="0">'+r.data("transDay").replace("[DAY]",o.format("Do"))+"</option>"),l=$('<option value="1">'+r.data("transWeekday").replace("[POSITION]",(a=Math.ceil(o.date()/7),a+(["st","nd","rd"][((a+90)%100-10)%10-1]||"th"))).replace("[WEEKDAY]",o.format("dddd"))+"</option>");r.find("option").remove().end().append(s).append(l).val(r.data("value"))})),$("#scheduleAddForm, #scheduleEditForm, #scheduleDeleteForm, #scheduleRecurrenceDeleteForm").submit((function(e){e.preventDefault();var t=$(this);$.ajax({type:$(this).attr("method"),url:$(this).attr("action"),data:$(this).serialize(),cache:!1,dataType:"json",success:function(e,a,n){XiboSubmitResponse(e,t),e.success&&(calendar.options.clearCache=!0,calendar.view())}})})),$(e).find('[data-toggle="popover"]').popover();let i=$(e).find("#scheduleEditForm");if(i.length>0){let t=$("<button>").addClass("btn btn-info").attr("id","scheduleDuplateButton").html(translations.duplicate).on("click",(function(){duplicateScheduledEvent()}));$(e).find(".modal-footer").prepend(t),i.find("#instanceStartDate").html(moment(i.data().eventStart,"X").format(jsDateFormat)),i.find("#instanceEndDate").html(moment(i.data().eventEnd,"X").format(jsDateFormat)),t=$("<button>").addClass("btn btn-primary").attr("id","scheduleRecurringDeleteButton").html(translations.deleteRecurring).on("click",(function(){deleteRecurringScheduledEvent(i.data("eventId"),i.data("eventStart"),i.data("eventEnd"))})),$(e).find("#recurringInfo").prepend(t)}configReminderFields($(e))},deleteRecurringScheduledEvent=function(e,t,a){var n=scheduleRecurrenceDeleteUrl.replace(":id",e);XiboSwapDialog(n,{eventStart:t,eventEnd:a})},beforeSubmitScheduleForm=function(e){e.find('[name="reminder_isEmail[]"]').each((function(e){$(this).parent().find('[type="hidden"]').val($(this).is(":checked")?"1":"0")})),$('[data-toggle="popover"]').popover(),e.submit()},configReminderFields=function(e){var t=e.find("#reminderFields");if(0!=t.length){var a=Handlebars.compile($("#reminderEventTemplate").html());if(0==t.data().reminders.length)t.append(a({title:0,buttonGlyph:"fa-plus"}));else{console.log(t.data().reminders);var n=0;$.each(t.data().reminders,(function(e,o){n++;var r={scheduleReminderId:o.scheduleReminderId,value:o.value,type:o.type,option:o.option,isEmail:o.isEmail,title:n,buttonGlyph:1==n?"fa-plus":"fa-minus"};t.append(a(r))}))}t.on("click","button",(function(e){if(e.preventDefault(),$(this).find("i").hasClass("fa-plus")){var n={title:t.find(".form-group").length+1,buttonGlyph:"fa-minus"};t.append(a(n))}else $(this).closest(".form-group").remove()}))}},processScheduleFormElements=function(e){var t=e.val();switch(e.attr("id")){case"recurrenceType":var a=""==t?"none":"block",n="Week"!=t?"none":"block",o="Month"!==t?"none":"block";$(".repeat-control-group").css("display",a),$(".repeat-weekly-control-group").css("display",n),$(".repeat-monthly-control-group").css("display",o),$("#recurrenceDetail").parent().find(".input-group-addon").html(e.val());break;case"eventTypeId":console.log("Process: eventTypeId, val = "+t);var r=2==t?"none":"block",s=2==t?"none":"block",l="block",i=2==t?"none":"block",d=2==t?"block":"none",c=1==t?"block":"none";let b=4==t?"block":"none";if($(".layout-control").css("display",r),$(".endtime-control").css("display",s),$(".starttime-control").css("display",l),$(".day-part-control").css("display",i),$(".command-control").css("display",d),$(".sync-schedule-control").css("display",c),$(".interrupt-control").css("display",b),2==t){let e=$("#dayPartId"),t=0;e.find("option").each((function(e,a){1===$(a).data("isCustom")&&(t=$(a).val())})),console.log("Setting dayPartId to custom: "+t),e.val(t),(f=$(".starttime-control")).find("input[name=fromDt_Link2]").show(),f.find(".help-block").html(f.closest("form").data().daypartMessage),$("li.repeats").css("display","block"),$("li.reminders").css("display","block")}processScheduleFormElements($("#dayPartId"));let k=e.closest("form").find("#campaignId"),w=$(".layout-control"),D=-1;"1"===t||"3"===t||"4"===t?(D=1,w.children("label").text(k.data("transLayout")),w.children("div").children(".help-block").text(k.data("transLayoutHelpText"))):(D=0,w.children("label").text("Campaign"),w.children("div").children(".help-block").text("Please select a Campaign for this Event to show")),k.data("searchIsLayoutSpecific",D);break;case"dayPartId":if(console.log("Process: dayPartId, val = "+t+", visibility = "+e.is(":visible")),!e.is(":visible"))return;var p=e.find("option[value="+t+"]").data(),u=(s=0===p.isCustom?"none":"block",l=1===p.isAlways?"none":"block",1===p.isAlways?"none":"block"),m=1===p.isAlways?"none":"block",f=$(".starttime-control"),h=$(".endtime-control"),v=$("li.repeats"),y=$("li.reminders");f.css("display",l),h.css("display",s),v.css("display",u),y.css("display",m),0===p.isAlways&&0===p.isCustom?(f.find("input[name=fromDt_Link2]").hide(),f.find(".help-block").html(f.closest("form").data().notDaypartMessage)):(f.find("input[name=fromDt_Link2]").show(),f.find(".help-block").html(f.closest("form").data().daypartMessage));break;case"campaignId":console.log("Process: campaignId, val = "+t+", visibility = "+e.is(":visible"));var g=$("#previewButton");null===t||""===t||0===t?g.closest(".preview-button-container").hide():(g.closest(".preview-button-container").show(),g.attr("href",g.data().url.replace(":id",t)))}},duplicateScheduledEvent=function(){var e=$("#scheduleEditForm");e.attr("action",e.data().addUrl).attr("method","post"),$("#scheduleDuplateButton").remove(),toastr.info(e.data().duplicatedMessage)},setupScheduleNowForm=function(e){$("#campaignId",e).select2(),$('select[name="displayGroupIds[]"]',e).select2(),dateFormat.indexOf("s")<=-1&&$(e).find(".schedule-now-seconds-field").hide(),$(e).find("#always").on("change",(function(){var t=$(e).find("#always").is(":checked")?$(e).find("#alwaysDayPartId").val():$(e).find("#customDayPartId").val();$(e).find("#dayPartId").val(t),$(e).find(".duration-part").toggle(),dateFormat.indexOf("s")<=-1&&$(e).find(".schedule-now-seconds-field").hide()}));var t=_.debounce((function(){scheduleNowFormEvaluateDates(e)}),500);$(e).find("#hours").on("keyup",t),$(e).find("#minutes").on("keyup",t),$(e).find("#seconds").on("keyup",t)},scheduleNowFormEvaluateDates=function(e){if(!$(e).find("#always").is(":checked")){var t=$(e).find("#hours").val(),a=$(e).find("#minutes").val(),n=$(e).find("#seconds").val(),o=moment(),r=moment(),s=$(".scheduleNowMessage");""!=t&&r.add(t,"hours"),""!=a&&r.add(a,"minutes"),""!=n&&r.add(n,"seconds"),s.html(s.data().template.replace("[fromDt]",o.format(jsDateFormat)).replace("[toDt]",r.format(jsDateFormat))).removeClass("hidden"),$("#fromDt").val(o.format(systemDateFormat)),$("#toDt").val(r.format(systemDateFormat))}},scheduleNowFormSubmit=function(e){scheduleNowFormEvaluateDates(e),e.submit()},agendaSelectLinkedElements=function(e,t,a,n){var o=[],r={layouts:"selected-linked",overlays:"selected-linked",displaygroups:"selected-linked",campaigns:"selected-linked"};results=a.results[a.selectedDisplayGroup];for(var s=results.events,l=0;l<s.length;l++)"layouts"!=e&&"overlays"!=e||s[l].layoutId!=t||s[l].eventId!=n?"displaygroups"==e&&s[l].displayGroupId==t?(o.push(s[l]),r.displaygroups="selected"):"campaigns"==e&&s[l].campaignId==t&&(o.push(s[l]),r.campaigns="selected"):(o.push(s[l]),r[e]="selected");for(l=0;l<o.length;l++)$('table[data-type="layouts"] tr[data-elem-id~="'+o[l].layoutId+'"][data-event-id~="'+o[l].eventId+'"]').addClass(r.layouts),$('table[data-type="displaygroups"] tr[data-elem-id~="'+o[l].displayGroupId+'"]').addClass(r.displaygroups),$('table[data-type="campaigns"] tr[data-elem-id~="'+o[l].campaignId+'"]').addClass(r.campaigns)};let generateGeoMap=function(){null!=mymap&&mymap.remove();let e=$("#scheduleAddForm , #scheduleEditForm").data().defaultLat,t=$("#scheduleAddForm , #scheduleEditForm").data().defaultLong;mymap=L.map("geoScheduleMap").setView([e,t],13),L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:["a","b","c"]}).addTo(mymap);let a=new L.FeatureGroup;mymap.addLayer(a);let n=new L.Control.Draw({position:"topright",draw:{polyline:!1,circle:!1,marker:!1,circlemarker:!1},edit:{featureGroup:a}}),o=new L.Control.Draw({position:"topright",draw:!1,edit:{featureGroup:a}});mymap.addControl(n);let r=new L.Control.Search({url:"https://nominatim.openstreetmap.org/search?format=json&q={s}",jsonpParam:"json_callback",propertyName:"display_name",propertyLoc:["lat","lon"],marker:L.circleMarker([0,0],{radius:30}),autoCollapse:!0,autoType:!1,minLength:2,hideMarkerOnCollapse:!0});mymap.addControl(r);let s="",l=null,i=null;if(mymap.on("draw:created",(function(e){l=e.layer,a.addLayer(l),s=l.toGeoJSON(),$("#geoLocation").val(JSON.stringify(s)),mymap.removeControl(n),mymap.addControl(o)})),mymap.on("draw:edited",(function(e){i=e.layers,i.eachLayer((function(e){s=e.toGeoJSON(),$("#geoLocation").val(JSON.stringify(s))}))})),mymap.on("draw:deleted",(function(e){i=e.layers,i.eachLayer((function(e){$("#geoLocation").val(""),a.removeLayer(e)})),0===a.getLayers().length&&(mymap.removeControl(o),mymap.addControl(n))})),null!=$("#geoLocation").val()&&""!==$("#geoLocation").val()){let e=JSON.parse($("#geoLocation").val());L.geoJSON(e,{onEachFeature:function(e,t){a.addLayer(t),mymap.fitBounds(t.getBounds())}}),mymap.removeControl(n),mymap.addControl(o)}};