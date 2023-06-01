"use strict";
//一个全局变量用于保存ghost所支持的事件列表
/*
其结构大致如下：
{
	local: local ? local.split(",") : [],
	external: external ? external.split(",") : []
};
*/
var event_list;
var has_has_event= false;

//for support graph
var count_support = 0;
var count_all = 0;
function base_update_support_graph(){
	const g = document.getElementById("supported_graph_content");
	g.max = count_all;g.value = count_support;
	document.getElementById("supported_ratio").textContent = `${count_support}/${count_all}`;
}
function update_support_graph(is_support){
	count_support += is_support;
	count_all += 1;
	base_update_support_graph();
}
function clear_support_graph(){
	count_support = 0;
	count_all = 0;
	base_update_support_graph();
}
function hide_support_graph(){
	document.getElementById("supported_graph").style.display = "none";
}
function show_support_graph(){
	document.getElementById("supported_graph").style.display = "block";
}
function clear_all(){
	clear_support_graph();
	event_list= null;
	has_has_event= false;
}

async function reload_button(){
	clear_all();
	//清空ghost列表
	var list =document.getElementById("ghost_list_content");
	//备份当前选项（如果有的话）
	var selected = list.value;
	//清空列表
	list.options.length = 0;
	//重新加载列表
	const fmo = await jsstp.EXECUTE({
		"Command": "GetFMO"
	});
	//对于每个fmo的key以".fullname"结尾的项，将其对应的value添加到列表中
	for (var key in fmo) {
		if (key.endsWith(".fullname")) {
			var option = document.createElement("option");
			option.text = fmo[key];
			option.value = option.text;
			list.add(option);
		}
	}
	//根据备份的选项重新选中（如果还在列表中的话）
	if(selected)
		list.value = selected;
	else
		list.value = list.options[0].value;
	selected=list.value;
	//隐藏所有的元素
	document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "none";
	document.getElementById("supported_text_event_Has_Event_reminder").style.display = "none";
	hide_support_graph();
	jsstp.set_default_info("ReceiverGhostName", selected);
	//如果选中了一个ghost，更新事件列表
	if(selected){
		//清空事件统计图
		clear_support_graph();
		const has_get_events = await jsstp.has_event('Get_Supported_Events');
		if(has_get_events){
			event_list=await jsstp.get_supported_events();
			show_support_graph();
		}
		else{
			has_has_event = await jsstp.has_event('Has_Event');
			if(has_has_event){
				show_support_graph();
				document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "block";
			}
			else{
				hide_support_graph();
				document.getElementById("supported_text_event_Has_Event_reminder").style.display = "block";
			}
		};
	}
	set_event();
}
//页面加载完成后，尝试加载ghost列表
window.onload = () => {
	reload_button().then(() => {
		//若无法加载ghost列表，隐藏所有ghost状态相关的元素
		if(document.getElementById("ghost_list_content").value == "")
			document.getElementById("GhostStatus").style.display = "none";
		else
			document.getElementById("GhostStatus").style.display = "block";
	});
};
//定义一个函数，给定事件id和所需安全等级，返回一个事件对象是否被当前ghost支持的文本
async function base_check_event(event_id, security_level="local") {
	var result = false;
	if (event_list) {
		if (security_level == "local")
			result = event_list.local.includes(event_id);
		else if (security_level == "external")
			result = event_list.external.includes(event_id);
	}
	else if(has_has_event){
		result = await jsstp.has_event(event_id, security_level);
	}
	return!!result;
}
async function check_event(event_id, security_level="local") {
	var result = await base_check_event(event_id, security_level);
	var ex_var= false;
	var common_var= false;
	if(!result){
		if(event_id.endsWith("Ex"))
			common_var = await base_check_event(event_id.slice(0, -2), security_level);
		else
			ex_var = await base_check_event(event_id + "Ex", security_level);
		result = ex_var || common_var;
	}
	return {
		"result": result,
		"ex_var": ex_var,
		"common_var": common_var
	};
}
function get_str_by_check_result(result) {
	if(!event_list&&!has_has_event)
		return "";
	if (result.result){
		if (result.ex_var)
			return "（Ex対応）";
		else if (result.common_var)
			return "（共通対応）";
		else
			return "（対応）";
	}
	else
		return "（未対応）";
}
function set_event_str(element_class_name, event_id, security_level="local") {
	check_event(event_id, security_level).then(function(result) {
		update_support_graph(result.result);
		var elements = document.getElementsByClassName(element_class_name);
		for (var i = 0; i < elements.length; i++)
			elements[i].textContent = get_str_by_check_result(result);
	});
}
const set_event = () => {
	set_event_str("OnFirstBoot_GhostStatus", "OnFirstBoot");
	set_event_str("OnBoot_GhostStatus", "OnBoot");
	set_event_str("OnClose_GhostStatus", "OnClose");
	set_event_str("OnCloseAll_GhostStatus", "OnCloseAll");
	set_event_str("OnGhostChanged_GhostStatus", "OnGhostChanged");
	set_event_str("OnGhostChanging_GhostStatus", "OnGhostChanging");
	set_event_str("OnGhostCalled_GhostStatus", "OnGhostCalled");
	set_event_str("OnGhostCalling_GhostStatus", "OnGhostCalling");
	set_event_str("OnGhostCallComplete_GhostStatus", "OnGhostCallComplete");
	set_event_str("OnOtherGhostBooted_GhostStatus", "OnOtherGhostBooted");
	set_event_str("OnOtherGhostChanged_GhostStatus", "OnOtherGhostChanged");
	set_event_str("OnOtherGhostClosed_GhostStatus", "OnOtherGhostClosed");
	set_event_str("OnShellChanged_GhostStatus", "OnShellChanged");
	set_event_str("OnShellChanging_GhostStatus", "OnShellChanging");
	set_event_str("OnDressupChanged_GhostStatus", "OnDressupChanged");
	set_event_str("OnBalloonChange_GhostStatus", "OnBalloonChange");
	set_event_str("OnWindowStateRestore_GhostStatus", "OnWindowStateRestore");
	set_event_str("OnWindowStateMinimize_GhostStatus", "OnWindowStateMinimize");
	set_event_str("OnFullScreenAppMinimize_GhostStatus", "OnFullScreenAppMinimize");
	set_event_str("OnFullScreenAppRestore_GhostStatus", "OnFullScreenAppRestore");
	set_event_str("OnVirtualDesktopChanged_GhostStatus", "OnVirtualDesktopChanged");
	set_event_str("OnCacheSuspend_GhostStatus", "OnCacheSuspend");
	set_event_str("OnCacheRestore_GhostStatus", "OnCacheRestore");
	set_event_str("OnInitialize_GhostStatus", "OnInitialize");
	set_event_str("OnDestroy_GhostStatus", "OnDestroy");
	set_event_str("OnSysResume_GhostStatus", "OnSysResume");
	set_event_str("OnSysSuspend_GhostStatus", "OnSysSuspend");
	set_event_str("OnBasewareUpdating_GhostStatus", "OnBasewareUpdating");
	set_event_str("OnBasewareUpdated_GhostStatus", "OnBasewareUpdated");
	set_event_str("OnTeachStart_GhostStatus", "OnTeachStart");
	set_event_str("OnTeachInputCancel_GhostStatus", "OnTeachInputCancel");
	set_event_str("OnTeach_GhostStatus", "OnTeach");
	set_event_str("OnCommunicate_GhostStatus", "OnCommunicate");
	set_event_str("OnCommunicateInputCancel_GhostStatus", "OnCommunicateInputCancel");
	set_event_str("OnUserInput_GhostStatus", "OnUserInput");
	set_event_str("OnUserInputCancel_GhostStatus", "OnUserInputCancel");
	set_event_str("inputbox.autocomplete_GhostStatus", "inputbox.autocomplete");
	set_event_str("OnSystemDialog_GhostStatus", "OnSystemDialog");
	set_event_str("OnSystemDialogCancel_GhostStatus", "OnSystemDialogCancel");
	set_event_str("OnConfigurationDialogHelp_GhostStatus", "OnConfigurationDialogHelp");
	set_event_str("OnGhostTermsAccept_GhostStatus", "OnGhostTermsAccept");
	set_event_str("OnGhostTermsDecline_GhostStatus", "OnGhostTermsDecline");
	set_event_str("OnSecondChange_GhostStatus", "OnSecondChange");
	set_event_str("OnMinuteChange_GhostStatus", "OnMinuteChange");
	set_event_str("OnHourTimeSignal_GhostStatus", "OnHourTimeSignal");
	set_event_str("OnVanishSelecting_GhostStatus", "OnVanishSelecting");
	set_event_str("OnVanishSelected_GhostStatus", "OnVanishSelected");
	set_event_str("OnVanishCancel_GhostStatus", "OnVanishCancel");
	set_event_str("OnVanishButtonHold_GhostStatus", "OnVanishButtonHold");
	set_event_str("OnVanished_GhostStatus", "OnVanished");
	set_event_str("OnOtherGhostVanished_GhostStatus", "OnOtherGhostVanished");
	set_event_str("OnChoiceSelect_GhostStatus", "OnChoiceSelect");
	set_event_str("OnChoiceSelectEx_GhostStatus", "OnChoiceSelectEx");
	set_event_str("OnChoiceEnter_GhostStatus", "OnChoiceEnter");
	set_event_str("OnChoiceTimeout_GhostStatus", "OnChoiceTimeout");
	set_event_str("OnChoiceHover_GhostStatus", "OnChoiceHover");
	set_event_str("OnAnchorSelect_GhostStatus", "OnAnchorSelect");
	set_event_str("OnAnchorSelectEx_GhostStatus", "OnAnchorSelectEx");
	set_event_str("OnSurfaceChange_GhostStatus", "OnSurfaceChange");
	set_event_str("OnSurfaceRestore_GhostStatus", "OnSurfaceRestore");
	set_event_str("OnOtherSurfaceChange_GhostStatus", "OnOtherSurfaceChange");
	set_event_str("OnMouseClick_GhostStatus", "OnMouseClick");
	set_event_str("OnMouseClickEx_GhostStatus", "OnMouseClickEx");
	set_event_str("OnMouseDoubleClick_GhostStatus", "OnMouseDoubleClick");
	set_event_str("OnMouseDoubleClickEx_GhostStatus", "OnMouseDoubleClickEx");
	set_event_str("OnMouseMultipleClick_GhostStatus", "OnMouseMultipleClick");
	set_event_str("OnMouseMultipleClickEx_GhostStatus", "OnMouseMultipleClickEx");
	set_event_str("OnMouseUp_GhostStatus", "OnMouseUp");
	set_event_str("OnMouseUpEx_GhostStatus", "OnMouseUpEx");
	set_event_str("OnMouseDown_GhostStatus", "OnMouseDown");
	set_event_str("OnMouseDownEx_GhostStatus", "OnMouseDownEx");
	set_event_str("OnMouseMove_GhostStatus", "OnMouseMove");
	set_event_str("OnMouseWheel_GhostStatus", "OnMouseWheel");
	set_event_str("OnMouseEnterAll_GhostStatus", "OnMouseEnterAll");
	set_event_str("OnMouseLeaveAll_GhostStatus", "OnMouseLeaveAll");
	set_event_str("OnMouseEnter_GhostStatus", "OnMouseEnter");
	set_event_str("OnMouseLeave_GhostStatus", "OnMouseLeave");
	set_event_str("OnMouseDragStart_GhostStatus", "OnMouseDragStart");
	set_event_str("OnMouseDragEnd_GhostStatus", "OnMouseDragEnd");
	set_event_str("OnMouseHover_GhostStatus", "OnMouseHover");
	set_event_str("OnMouseGesture_GhostStatus", "OnMouseGesture");
	set_event_str("OnBalloonBreak_GhostStatus", "OnBalloonBreak");
	set_event_str("OnBalloonClose_GhostStatus", "OnBalloonClose");
	set_event_str("OnBalloonTimeout_GhostStatus", "OnBalloonTimeout");
	set_event_str("OnTrayBalloonClick_GhostStatus", "OnTrayBalloonClick");
	set_event_str("OnTrayBalloonTimeout_GhostStatus", "OnTrayBalloonTimeout");
	set_event_str("OnInstallBegin_GhostStatus", "OnInstallBegin");
	set_event_str("OnInstallComplete_GhostStatus", "OnInstallComplete");
	set_event_str("OnInstallCompleteEx_GhostStatus", "OnInstallCompleteEx");
	set_event_str("OnInstallFailure_GhostStatus", "OnInstallFailure");
	set_event_str("OnInstallRefuse_GhostStatus", "OnInstallRefuse");
	set_event_str("OnInstallReroute_GhostStatus", "OnInstallReroute");
	set_event_str("OnFileDropping_GhostStatus", "OnFileDropping");
	set_event_str("OnFileDropped_GhostStatus", "OnFileDropped");
	set_event_str("OnOtherObjectDropping_GhostStatus", "OnOtherObjectDropping");
	set_event_str("OnOtherObjectDropped_GhostStatus", "OnOtherObjectDropped");
	set_event_str("OnWallpaperChange_GhostStatus", "OnDirectoryDrop");
	set_event_str("OnWallpaperChange_GhostStatus", "OnWallpaperChange");
	set_event_str("OnFileDrop_GhostStatus", "OnFileDrop");
	set_event_str("OnFileDropEx_GhostStatus", "OnFileDropEx");
	set_event_str("OnFileDrop2_GhostStatus", "OnFileDrop2");
	set_event_str("OnUpdatedataCreating_GhostStatus", "OnUpdatedataCreating");
	set_event_str("OnUpdatedataCreated_GhostStatus", "OnUpdatedataCreated");
	set_event_str("OnNarCreating_GhostStatus", "OnNarCreating");
	set_event_str("OnNarCreated_GhostStatus", "OnNarCreated");
	set_event_str("OnURLDragDropping_GhostStatus", "OnURLDragDropping");
	set_event_str("OnURLDropping_GhostStatus", "OnURLDropping");
	set_event_str("OnURLDropped_GhostStatus", "OnURLDropped");
	set_event_str("OnURLDropFailure_GhostStatus", "OnURLDropFailure");
	set_event_str("OnURLQuery_GhostStatus", "OnURLQuery");
	set_event_str("OnXUkagakaLinkOpen_GhostStatus", "OnXUkagakaLinkOpen", "external");
	set_event_str("OnUpdateProcessExec_GhostStatus", "OnUpdateProcessExec");
	set_event_str("OnUpdateBegin_GhostStatus", "OnUpdateBegin");
	set_event_str("OnUpdateReady_GhostStatus", "OnUpdateReady");
	set_event_str("OnUpdateComplete_GhostStatus", "OnUpdateComplete");
	set_event_str("OnUpdateFailure_GhostStatus", "OnUpdateFailure");
	set_event_str("OnUpdate.OnDownloadBegin_GhostStatus", "OnUpdate.OnDownloadBegin");
	set_event_str("OnUpdate.OnMD5CompareBegin_GhostStatus", "OnUpdate.OnMD5CompareBegin");
	set_event_str("OnUpdate.OnMD5CompareComplete_GhostStatus", "OnUpdate.OnMD5CompareComplete");
	set_event_str("OnUpdate.OnMD5CompareFailure_GhostStatus", "OnUpdate.OnMD5CompareFailure");
	set_event_str("OnUpdateOtherBegin_GhostStatus", "OnUpdateOtherBegin");
	set_event_str("OnUpdateOtherReady_GhostStatus", "OnUpdateOtherReady");
	set_event_str("OnUpdateOtherComplete_GhostStatus", "OnUpdateOtherComplete");
	set_event_str("OnUpdateOtherFailure_GhostStatus", "OnUpdateOtherFailure");
	set_event_str("OnUpdateOther.OnDownloadBegin_GhostStatus", "OnUpdateOther.OnDownloadBegin");
	set_event_str("OnUpdateOther.OnMD5CompareBegin_GhostStatus", "OnUpdateOther.OnMD5CompareBegin");
	set_event_str("OnUpdateOther.OnMD5CompareComplete_GhostStatus", "OnUpdateOther.OnMD5CompareComplete");
	set_event_str("OnUpdateOther.OnMD5CompareFailure_GhostStatus", "OnUpdateOther.OnMD5CompareFailure");
	set_event_str("OnUpdateCheckComplete_GhostStatus", "OnUpdateCheckComplete");
	set_event_str("OnUpdateCheckFailure_GhostStatus", "OnUpdateCheckFailure");
	set_event_str("OnUpdateResult_GhostStatus", "OnUpdateResult");
	set_event_str("OnUpdateResultEx_GhostStatus", "OnUpdateResultEx");
	set_event_str("OnUpdateCheckResult_GhostStatus", "OnUpdateCheckResult");
	set_event_str("OnUpdateCheckResultEx_GhostStatus", "OnUpdateCheckResultEx");
	set_event_str("OnUpdateResultExplorer_GhostStatus", "OnUpdateResultExplorer");
	set_event_str("OnSNTPBegin_GhostStatus", "OnSNTPBegin");
	set_event_str("OnSNTPCompareEx_GhostStatus", "OnSNTPCompareEx");
	set_event_str("OnSNTPCompare_GhostStatus", "OnSNTPCompare");
	set_event_str("OnSNTPCorrectEx_GhostStatus", "OnSNTPCorrectEx");
	set_event_str("OnSNTPCorrect_GhostStatus", "OnSNTPCorrect");
	set_event_str("OnSNTPFailure_GhostStatus", "OnSNTPFailure");
	set_event_str("OnBIFFBegin_GhostStatus", "OnBIFFBegin");
	set_event_str("OnBIFFComplete_GhostStatus", "OnBIFFComplete");
	set_event_str("OnBIFF2Complete_GhostStatus", "OnBIFF2Complete");
	set_event_str("OnBIFFFailure_GhostStatus", "OnBIFFFailure");
	set_event_str("OnHeadlinesenseBegin_GhostStatus", "OnHeadlinesenseBegin");
	set_event_str("OnHeadlinesense.OnFind_GhostStatus", "OnHeadlinesense.OnFind");
	set_event_str("OnHeadlinesenseComplete_GhostStatus", "OnHeadlinesenseComplete");
	set_event_str("OnHeadlinesenseFailure_GhostStatus", "OnHeadlinesenseFailure");
	set_event_str("OnRSSBegin_GhostStatus", "OnRSSBegin");
	set_event_str("OnRSSComplete_GhostStatus", "OnRSSComplete");
	set_event_str("OnRSSFailure_GhostStatus", "OnRSSFailure");
	set_event_str("OnSchedule5MinutesToGo_GhostStatus", "OnSchedule5MinutesToGo");
	set_event_str("OnScheduleRead_GhostStatus", "OnScheduleRead");
	set_event_str("OnSchedulesenseBegin_GhostStatus", "OnSchedulesenseBegin");
	set_event_str("OnSchedulesenseComplete_GhostStatus", "OnSchedulesenseComplete");
	set_event_str("OnSchedulesenseFailure_GhostStatus", "OnSchedulesenseFailure");
	set_event_str("OnSchedulepostBegin_GhostStatus", "OnSchedulepostBegin");
	set_event_str("OnSchedulepostComplete_GhostStatus", "OnSchedulepostComplete");
	set_event_str("OnSSTPBreak_GhostStatus", "OnSSTPBreak");
	set_event_str("OnSSTPBlacklisting_GhostStatus", "OnSSTPBlacklisting");
	set_event_str("OnExecuteHTTPComplete_GhostStatus", "OnExecuteHTTPComplete");
	set_event_str("OnExecuteHTTPFailure_GhostStatus", "OnExecuteHTTPFailure");
	set_event_str("OnExecuteHTTPProgress_GhostStatus", "OnExecuteHTTPProgress");
	set_event_str("OnExecuteHTTPSSLInfo_GhostStatus", "OnExecuteHTTPSSLInfo");
	set_event_str("OnExecuteRSSComplete_GhostStatus", "OnExecuteRSSComplete");
	set_event_str("OnExecuteRSSFailure_GhostStatus", "OnExecuteRSSFailure");
	set_event_str("OnExecuteRSS_SSLInfo_GhostStatus", "OnExecuteRSS_SSLInfo");
	set_event_str("OnPingComplete_GhostStatus", "OnPingComplete");
	set_event_str("OnPingProgress_GhostStatus", "OnPingProgress");
	set_event_str("OnNSLookupComplete_GhostStatus", "OnNSLookupComplete");
	set_event_str("OnNSLookupFailure_GhostStatus", "OnNSLookupFailure");
	set_event_str("OnRaisePluginFailure_GhostStatus", "OnRaisePluginFailure");
	set_event_str("OnNotifyPluginFailure_GhostStatus", "OnNotifyPluginFailure");
	set_event_str("OnRaiseOtherFailure_GhostStatus", "OnRaiseOtherFailure");
	set_event_str("OnNotifyOtherFailure_GhostStatus", "OnNotifyOtherFailure");
	set_event_str("OnOverlap_GhostStatus", "OnOverlap");
	set_event_str("OnOtherOverlap_GhostStatus", "OnOtherOverlap");
	set_event_str("OnOffscreen_GhostStatus", "OnOffscreen");
	set_event_str("OnOtherOffscreen_GhostStatus", "OnOtherOffscreen");
	set_event_str("OnNetworkHeavy_GhostStatus", "OnNetworkHeavy");
	set_event_str("OnNetworkStatusChange_GhostStatus", "OnNetworkStatusChange");
	set_event_str("OnScreenSaverStart_GhostStatus", "OnScreenSaverStart");
	set_event_str("OnScreenSaverEnd_GhostStatus", "OnScreenSaverEnd");
	set_event_str("OnSessionLock_GhostStatus", "OnSessionLock");
	set_event_str("OnSessionUnlock_GhostStatus", "OnSessionUnlock");
	set_event_str("OnSessionDisconnect_GhostStatus", "OnSessionDisconnect");
	set_event_str("OnSessionReconnect_GhostStatus", "OnSessionReconnect");
	set_event_str("OnCPULoadHigh_GhostStatus", "OnCPULoadHigh");
	set_event_str("OnCPULoadLow_GhostStatus", "OnCPULoadLow");
	set_event_str("OnMemoryLoadHigh_GhostStatus", "OnMemoryLoadHigh");
	set_event_str("OnMemoryLoadLow_GhostStatus", "OnMemoryLoadLow");
	set_event_str("OnDisplayChange_GhostStatus", "OnDisplayChange");
	set_event_str("OnDisplayHandover_GhostStatus", "OnDisplayHandover");
	set_event_str("OnDisplayChangeEx_GhostStatus", "OnDisplayChangeEx");
	set_event_str("OnDisplayPowerStatus_GhostStatus", "OnDisplayPowerStatus");
	set_event_str("OnBatteryNotify_GhostStatus", "OnBatteryNotify");
	set_event_str("OnBatteryLow_GhostStatus", "OnBatteryLow");
	set_event_str("OnBatteryCritical_GhostStatus", "OnBatteryCritical");
	set_event_str("OnBatteryChargingStart_GhostStatus", "OnBatteryChargingStart");
	set_event_str("OnBatteryChargingStop_GhostStatus", "OnBatteryChargingStop");
	set_event_str("OnDeviceArrival_GhostStatus", "OnDeviceArrival");
	set_event_str("OnDeviceRemove_GhostStatus", "OnDeviceRemove");
	set_event_str("OnTabletMode_GhostStatus", "OnTabletMode");
	set_event_str("OnDarkTheme_GhostStatus", "OnDarkTheme");
	set_event_str("OnOSUpdateInfo_GhostStatus", "OnOSUpdateInfo");
	set_event_str("OnRecycleBinEmpty_GhostStatus", "OnRecycleBinEmpty");
	set_event_str("OnRecycleBinEmptyFromOther_GhostStatus", "OnRecycleBinEmptyFromOther");
	set_event_str("OnRecycleBinStatusUpdate_GhostStatus", "OnRecycleBinStatusUpdate");
	set_event_str("OnSelectModeBegin_GhostStatus", "OnSelectModeBegin");
	set_event_str("OnSelectModeCancel_GhostStatus", "OnSelectModeCancel");
	set_event_str("OnSelectModeComplete_GhostStatus", "OnSelectModeComplete");
	set_event_str("OnSelectModeCancel_GhostStatus", "OnSelectModeCancel");
	set_event_str("OnSelectModeMouseDown_GhostStatus", "OnSelectModeMouseDown");
	set_event_str("OnSelectModeMouseUp_GhostStatus", "OnSelectModeMouseUp");
	set_event_str("OnSpeechSynthesisStatus_GhostStatus", "OnSpeechSynthesisStatus");
	set_event_str("OnVoiceRecognitionStatus_GhostStatus", "OnVoiceRecognitionStatus");
	set_event_str("OnVoiceRecognitionWord_GhostStatus", "OnVoiceRecognitionWord");
	set_event_str("OnKeyPress_GhostStatus", "OnKeyPress");
	set_event_str("OnRecommendsiteChoice_GhostStatus", "OnRecommendsiteChoice");
	set_event_str("OnTranslate_GhostStatus", "OnTranslate");
	set_event_str("OnAITalk_GhostStatus", "OnAITalk");
	set_event_str("OnOtherGhostTalk_GhostStatus", "OnOtherGhostTalk");
	set_event_str("OnEmbryoExist_GhostStatus", "OnEmbryoExist");
	set_event_str("OnNekodorifExist_GhostStatus", "OnNekodorifExist");
	set_event_str("OnSoundStop_GhostStatus", "OnSoundStop");
	set_event_str("OnSoundError_GhostStatus", "OnSoundError");
	set_event_str("OnTextDrop_GhostStatus", "OnTextDrop");
	set_event_str("OnShellScaling_GhostStatus", "OnShellScaling");
	set_event_str("OnBalloonScaling_GhostStatus", "OnBalloonScaling");
	set_event_str("OnLanguageChange_GhostStatus", "OnLanguageChange");
	set_event_str("basewareversion_GhostStatus", "basewareversion");
	set_event_str("hwnd_GhostStatus", "hwnd");
	set_event_str("uniqueid_GhostStatus", "uniqueid");
	set_event_str("capability_GhostStatus", "capability");
	set_event_str("ownerghostname_GhostStatus", "ownerghostname");
	set_event_str("otherghostname_GhostStatus", "otherghostname");
	set_event_str("installedsakuraname_GhostStatus", "installedsakuraname");
	set_event_str("installedkeroname_GhostStatus", "installedkeroname");
	set_event_str("installedghostname_GhostStatus", "installedghostname");
	set_event_str("installedshellname_GhostStatus", "installedshellname");
	set_event_str("installedballoonname_GhostStatus", "installedballoonname");
	set_event_str("installedheadlinename_GhostStatus", "installedheadlinename");
	set_event_str("installedplugin_GhostStatus", "installedplugin");
	set_event_str("configuredbiffname_GhostStatus", "configuredbiffname");
	set_event_str("ghostpathlist_GhostStatus", "ghostpathlist");
	set_event_str("balloonpathlist_GhostStatus", "balloonpathlist");
	set_event_str("headlinepathlist_GhostStatus", "headlinepathlist");
	set_event_str("pluginpathlist_GhostStatus", "pluginpathlist");
	set_event_str("calendarskinpathlist_GhostStatus", "calendarskinpathlist");
	set_event_str("calendarpluginpathlist_GhostStatus", "calendarpluginpathlist");
	set_event_str("rateofusegraph_GhostStatus", "rateofusegraph");
	set_event_str("enable_log_GhostStatus", "enable_log");
	set_event_str("enable_debug_GhostStatus", "enable_debug");
	set_event_str("OnNotifySelfInfo_GhostStatus", "OnNotifySelfInfo");
	set_event_str("OnNotifyBalloonInfo_GhostStatus", "OnNotifyBalloonInfo");
	set_event_str("OnNotifyShellInfo_GhostStatus", "OnNotifyShellInfo");
	set_event_str("OnNotifyDressupInfo_GhostStatus", "OnNotifyDressupInfo");
	set_event_str("OnNotifyUserInfo_GhostStatus", "OnNotifyUserInfo");
	set_event_str("OnNotifyOSInfo_GhostStatus", "OnNotifyOSInfo");
	set_event_str("OnNotifyFontInfo_GhostStatus", "OnNotifyFontInfo");
};
