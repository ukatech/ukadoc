/// <reference types="jsstp" />
"use strict";

/** @type {typeof import("jsstp").jsstp} */
var jsstp;

String.prototype.hashCode = function () {
	var hash = 0, i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr = this.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

//页面加载完成后，检查ghost可用性
document.addEventListener('DOMContentLoaded', () =>
	import("https://cdn.jsdelivr.net/gh/ukatech/jsstp-lib@v3.1.1.2/dist/jsstp.mjs")
	.then(m => (jsstp = m.jsstp).if_available(init_content).then(reload_button)).catch(e => e)
);
function get_ghost_status_class_name(method_name) {
	return `m${method_name.hashCode()}_GhostStatus`;
}
async function init_content() {
	document.getElementById("GhostStatus").style.display = "block";
	support_graph = new support_graph_t();
	//追加相关元素
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption)")) {
		const span = document.createElement("span");
		span.classList.add(get_ghost_status_class_name(el.querySelector("a").textContent));
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
		span.classList.add(get_ghost_status_class_name(el.textContent));
		el.appendChild(span);
	}
}
class sub_support_graph {
	static hide_all() {
		//获取所有class是sub_support_graph的元素
		for (const meter_div of document.querySelectorAll(".sub_support_graph"))
			meter_div.style.display = "none";
	}
	static show_all() {
		//获取所有class是sub_support_graph的元素
		for (const meter_div of document.querySelectorAll(".sub_support_graph"))
			meter_div.style.display = "block";
	}
	static update_all() {
		//获取所有class是sub_support_graph的元素
		for (const meter_div of document.querySelectorAll(".sub_support_graph")) {
			//获取其父元素，遍历其下ul的子span，class中包含_GhostStatus的
			const list = meter_div.parentElement.querySelectorAll("ul > li:not(.caption) > span[class*='_GhostStatus']");
			let count_support = 0, count_all_event = list.length;
			for (const span of list)
				if (span.dataset.supported == "true")
					count_support += 1;
				else if (span.dataset.is_reg_event == "true")
					count_all_event -= 1;

			meter_div.querySelector("meter").value = count_support;
			meter_div.querySelector("span").textContent = `${count_support}/${count_all_event}`;
		}
	}
}
let ghost_events_queryer = null;
let support_graph = null;
class support_graph_t {
	graph_content = document.getElementById("supported_graph_content");
	graph_ratio = document.getElementById("supported_ratio");
	graph = document.getElementById("supported_graph");

	get count_support() { return this.graph_content.value; }
	get count_all() { return this.graph_content.max; }
	set count_support(value) { this.graph_content.value = value; }
	set count_all(value) { this.graph_content.max = value; }

	#base_update() {
		this.graph_ratio.textContent = `${this.count_support}/${this.count_all}`;
	}
	update(is_support) {
		this.count_support += is_support;
		this.count_all += 1;
		this.#base_update();
	}
	clear() {
		this.count_support = 0;
		this.count_all = 0;
		this.#base_update();
	}
	hide() {
		this.graph.style.display = "none";
	}
	show() {
		this.graph.style.display = "block";
	}
};
function clear_ghost_status_content() {
	document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption) > span[class*='_GhostStatus']").forEach(el => el.textContent = "");
}

function hideElementById(...ids) {
	for (const id of ids)
		document.getElementById(id).style.display = "none";
}
function showElementById(...ids) {
	for (const id of ids)
		document.getElementById(id).style.display = "block";
}

function reload_button() {
	const list = document.getElementById("ghost_list_content");
	//隐藏所有的元素
	hideElementById("supported_text_event_Get_Supported_Events_reminder",
		"supported_text_event_Has_Event_reminder");
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
		//根据选中的选项生成事件查询器
		ghost_events_queryer = await jsstp.by_fmo_info(fmo[selected]).new_event_queryer();
		//清空事件统计图
		support_graph.clear();
		if (ghost_events_queryer.available) {
			if (!ghost_events_queryer.fast_query_available)
				showElementById("supported_text_event_Get_Supported_Events_reminder");
			set_event().then(() => { sub_support_graph.update_all(); support_graph.show(); });
		}
		else {
			showElementById("supported_text_event_Has_Event_reminder");
			throw new Error("ghost_events_queryer is not available");
		}
	}).catch(e => {
		support_graph.hide();
		sub_support_graph.hide_all();
		clear_ghost_status_content();
		console.error(e);
	});
}
async function check_event(event_id, security_level = "local") {
	let result = await ghost_events_queryer(event_id, security_level);
	let ex_var = false;
	let common_var = false;
	let is_reg_event = false;
	//进行额外判断
	if (!result) {
		if (!event_id.includes("*") && !event_id.includes("(")) {
			if (event_id.endsWith("Ex")) {
				const common_event_id = event_id.slice(0, -2);
				if (document.querySelector(`span.${get_ghost_status_class_name(common_event_id)}`))
					common_var = await ghost_events_queryer(common_event_id, security_level);
			}
			else {
				const ex_event_id = event_id + "Ex";
				if (document.querySelector(`span.${get_ghost_status_class_name(ex_event_id)}`))
					ex_var = await ghost_events_queryer(ex_event_id, security_level);
			}
			result = ex_var || common_var;
		}
		else {
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
async function set_event_str(event_id, security_level = "local") {
	let result = await check_event(event_id, security_level)
	support_graph.update(result.result);
	for (let el of document.getElementsByClassName(get_ghost_status_class_name(event_id))) {
		el.textContent = get_str_by_check_result(result);
		el.dataset.supported = result.result;
		el.dataset.is_reg_event = result.reg_event;
	}
}
async function set_event() {
	for (const el of document.querySelectorAll("body > section.navigation-bar > section.navigation-category > ul > li:not(.caption) > a")) {
		const event = el.textContent;
		if (el.dataset.external == "true")
			await set_event_str(event, "external");
		else
			await set_event_str(event);
	}
}
