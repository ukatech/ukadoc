"use strict";
//页面加载完成后，尝试加载ghost列表
window.onload = () => {
	reload_button().then(() => {
		//若无法加载ghost列表，移除所有ghost状态相关的元素
		if (document.getElementById("ghost_list_content").value == ""){
			document.getElementById("GhostStatus").remove();
			return;
		}
		document.getElementById("GhostStatus").style.display = "block";
		//追加相关元素
		for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption)")) {
			const span = document.createElement("span");
			span.classList.add(el.querySelector("a").textContent + "_GhostStatus");
			el.appendChild(span);
		}
		for (const el of document.querySelectorAll("body > div.categories > section.category > dl > dt")) {
			const span = document.createElement("span");
			span.classList.add(el.textContent + "_GhostStatus");
			el.appendChild(span);
		}
		
	});
};
//一个全局变量用于保存ghost所支持的事件列表
/*
其结构大致如下：
{
	local: local ? local.split(",") : [],
	external: external ? external.split(",") : []
};
*/
let event_list;
let has_has_event = false;
//for support graph
let count_support = 0;
let count_all = 0;
function base_update_support_graph() {
	const g = document.getElementById("supported_graph_content");
	g.max = count_all;g.value = count_support;
	document.getElementById("supported_ratio").textContent = `${count_support}/${count_all}`;
}
function update_support_graph(is_support) {
	count_support += is_support;
	count_all += 1;
	base_update_support_graph();
}
function clear_support_graph() {
	count_support = 0;
	count_all = 0;
	base_update_support_graph();
}
function hide_support_graph() {
	document.getElementById("supported_graph").style.display = "none";
}
function show_support_graph() {
	document.getElementById("supported_graph").style.display = "block";
}
function clear_all() {
	clear_support_graph();
	event_list = null;
	has_has_event = false;
}

async function reload_button() {
	clear_all();
	//清空ghost列表
	const list = document.getElementById("ghost_list_content");
	//备份当前选项（如果有的话）
	let selected = list.value;
	//清空列表
	list.options.length = 0;
	//重新加载列表
	const fmo = await jsstp.get_fmo_infos();
	for (const ghost_uid in fmo)
		list.options.add(new Option(fmo[ghost_uid].name, ghost_uid));
	//根据备份的选项重新选中（如果还在列表中的话）
	if (fmo[selected])
		list.value = selected;
	else if(list.options.length > 0)
		list.value = list.options[0].value;
	selected = list.value;
	//隐藏所有的元素
	document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "none";
	document.getElementById("supported_text_event_Has_Event_reminder").style.display = "none";
	hide_support_graph();
	jsstp.set_default_info("ReceiverGhostHwnd", selected ? fmo[selected].hwnd : null);
	//如果选中了一个ghost，更新事件列表
	if (selected) {
		//清空事件统计图
		clear_support_graph();
		const has_get_events = await jsstp.has_event('Get_Supported_Events');
		if (has_get_events) {
			event_list = await jsstp.get_supported_events();
			show_support_graph();
		}
		else {
			has_has_event = await jsstp.has_event('Has_Event');
			if (has_has_event) {
				show_support_graph();
				document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "block";
			}
			else {
				hide_support_graph();
				document.getElementById("supported_text_event_Has_Event_reminder").style.display = "block";
			}
		};
	}
	set_event();
}
//定义一个函数，给定事件id和所需安全等级，返回一个事件对象是否被当前ghost支持的文本
async function base_check_event(event_id, security_level="local") {
	let result = false;
	if (event_list) {
		if (security_level == "local")
			result = event_list.local.includes(event_id);
		else if (security_level == "external")
			result = event_list.external.includes(event_id);
	}
	else if (has_has_event) {
		result = await jsstp.has_event(event_id, security_level);
	}
	return !!result;
}
async function check_event(event_id, security_level="local") {
	let result = await base_check_event(event_id, security_level);
	let ex_var = false;
	let common_var = false;
	if (!result) {
		if (event_id.endsWith("Ex"))
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
	if (!event_list&&!has_has_event)
		return "";
	if (result.result) {
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
		const elements = document.getElementsByClassName(element_class_name);
		for (let i = 0; i < elements.length; i++)
			elements[i].textContent = get_str_by_check_result(result);
	});
}
const set_event = () => {
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption) > a")) {
		const event = el.textContent;
		if (event == "OnXUkagakaLinkOpen")
			set_event_str(event + "_GhostStatus", event, "external");
		else
			set_event_str(event + "_GhostStatus", event);
	}
};
