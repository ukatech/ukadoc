"use strict";
//页面加载完成后，尝试加载ghost列表
var jsstp;
document.addEventListener('DOMContentLoaded', async function () {
	jsstp=await import("https://cdn.jsdelivr.net/gh/ukatech/jsstp-lib@v2.0.1.2/dist/jsstp.mjs").then(m=>m.jsstp);
	if (await jsstp.available())
		init_content().then(() => reload_button());
	else
		document.getElementById("GhostStatus").remove();
});
async function init_content() {
	document.getElementById("GhostStatus").style.display = "block";
	ghost_events_queryer = await jsstp.new_event_queryer();
	//追加相关元素
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption)")) {
		const span = document.createElement("span");
		span.classList.add(el.querySelector("a").textContent + "_GhostStatus");
		el.appendChild(span);
	}
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > h1")) {
		//获取其父元素，查看其下ul的子li的数量
		const list = el.parentElement.querySelectorAll("ul > li:not(.caption)");
		if (list.length > 4) {//若数量大于4，有必要追加一个进度条
			let meter_div = document.createElement("div");
			meter_div.innerHTML = `<p>support: <meter min="0" max="${list.length}" value="0"></meter><span>?/${list.length}</span></p>`;
			meter_div.classList.add("sub_support_graph");
			el.parentElement.insertBefore(meter_div, el.nextElementSibling);
		}
	}
	for (const el of document.querySelectorAll("body > div.categories > section.category > dl > dt")) {
		const span = document.createElement("span");
		span.classList.add(el.textContent + "_GhostStatus");
		el.appendChild(span);
	}
}
function hide_all_sub_support_graph() {
	//获取所有class是sub_support_graph的元素
	for (const meter_div of document.querySelectorAll(".sub_support_graph"))
		meter_div.style.display = "none";
}
function show_all_sub_support_graph() {
	//获取所有class是sub_support_graph的元素
	for (const meter_div of document.querySelectorAll(".sub_support_graph"))
		meter_div.style.display = "block";
}
function update_all_sub_support_graph() {
	//获取所有class是sub_support_graph的元素
	for (const meter_div of document.querySelectorAll(".sub_support_graph")) {
		//获取其父元素，遍历其下ul的子span，class中包含_GhostStatus的
		const list = meter_div.parentElement.querySelectorAll("ul > li:not(.caption) > span[class*='_GhostStatus']");
		let count_support = 0;
		for (const span of list)
			if (span.dataset.supported == "true")
				count_support += 1;

		meter_div.querySelector("meter").value = count_support;
		meter_div.querySelector("span").textContent = `${count_support}/${list.length}`;
	}
}
let ghost_events_queryer = null;
//for support graph
let count_support = 0;
let count_all = 0;
function base_update_support_graph() {
	const g = document.getElementById("supported_graph_content");
	g.max = count_all; g.value = count_support;
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
function clear_ghost_status_content() {
	document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption) > span[class*='_GhostStatus']").forEach(el => el.textContent = "");
}

function reload_button() {
	const list = document.getElementById("ghost_list_content");
	//隐藏所有的元素
	document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "none";
	document.getElementById("supported_text_event_Has_Event_reminder").style.display = "none";
	//重新加载列表
	jsstp.get_fmo_infos().then(async fmo => {
		//备份当前选项（如果有的话）
		let selected = list.value;
		//清空列表
		list.options.length = 0;
		if (!fmo.available)
			throw new Error("get_fmo_infos failed");
		fmo.forEach((info, uuid) => list.options.add(new Option(info.name, uuid)));
		//根据备份的选项重新选中（如果还在列表中的话）
		if (fmo[selected])
			list.value = selected;
		else
			selected = list.value = list.options[0].value;
		jsstp.default_info.ReceiverGhostHwnd = fmo[selected].hwnd;
		//清空事件统计图
		clear_support_graph();
		await ghost_events_queryer.reset();
		if (ghost_events_queryer.available) {
			if (!ghost_events_queryer.fast_query_available)
				document.getElementById("supported_text_event_Get_Supported_Events_reminder").style.display = "block";
			set_event().then(() => {update_all_sub_support_graph();show_support_graph();});
		}
		else {
			document.getElementById("supported_text_event_Has_Event_reminder").style.display = "block";
			throw new Error("ghost_events_queryer is not available");
		}
	}).catch(() => {
		hide_support_graph();
		hide_all_sub_support_graph();
		clear_ghost_status_content();
	});
}
//定义一个函数，给定事件id和所需安全等级，返回一个事件对象是否被当前ghost支持的文本
async function base_check_event(event_id, security_level = "local") {
	return await ghost_events_queryer.check_event(event_id, security_level);
}
async function check_event(event_id, security_level = "local") {
	let result = await base_check_event(event_id, security_level);
	let ex_var = false;
	let common_var = false;
	let is_reg_event = false;
	//进行额外判断
	if (!result) {
		try {
			if (event_id.endsWith("Ex")) {
				const common_event_id = event_id.slice(0, -2);
				if (document.querySelector(`span.${common_event_id}_GhostStatus`))
					common_var = await base_check_event(common_event_id, security_level);
			}
			else {
				const ex_event_id = event_id + "Ex";
				if (document.querySelector(`span.${ex_event_id}_GhostStatus`))
					ex_var = await base_check_event(ex_event_id, security_level);
			}
			result = ex_var || common_var;
		}
		catch (e) {
			is_reg_event = true;
		}
	}
	return {
		"result": result,
		"ex_var": ex_var,
		"common_var": common_var,
		"reg_event": is_reg_event,
	};
}
function get_str_by_check_result(result) {
	if (result.result) {
		if (result.ex_var)
			return "（Ex対応）";
		else if (result.common_var)
			return "（共通対応）";
		else
			return "（対応）";
	}
	else if (result.reg_event)
		return "（特定のイベントではない）";
	else
		return "（未対応）";
}
async function set_event_str(element_class_name, event_id, security_level = "local") {
	let result = await check_event(event_id, security_level)
	update_support_graph(result.result);
	for (let el of document.getElementsByClassName(element_class_name)) {
		el.textContent = get_str_by_check_result(result);
		el.dataset.supported = result.result;
	}
}
async function set_event() {
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption) > a")) {
		const event = el.textContent;
		if (el.dataset.external == "true")
			await set_event_str(event + "_GhostStatus", event, "external");
		else
			await set_event_str(event + "_GhostStatus", event);
	}
}
