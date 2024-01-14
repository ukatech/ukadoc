/// <reference types="jsstp" />
"use strict";

/** @type {typeof import("jsstp").jsstp} */
var jsstp;

//页面加载完成后，检查ghost可用性
document.addEventListener('DOMContentLoaded', () =>
	import("https://cdn.jsdelivr.net/gh/ukatech/jsstp-lib@v3.1.0.0/dist/jsstp.mjs")
		.then(m => (jsstp = m.jsstp).if_available(init_content).then(reload_button)).catch(e => e)
);
async function init_content() {
	document.getElementById("TargetGhost").style.display = "block";
	// 获取所有的SakuraScript代码
	const sakuraScriptCodes = document.querySelectorAll("code[type='SakuraScript']");
	// 为其增加一个按钮，点击后执行SakuraScript
	sakuraScriptCodes.forEach(code => {
		const button = createExecutionButton(code.textContent);
		const parent = code.parentElement.parentElement;
		// 若父元素的子元素除了h1外只有一个元素，那么将按钮插入到h1后面
		if (parent.children.length == 2) {
			parent.insertBefore(button, parent.children[1]);
			//取消h1的换行
			parent.children[0].style.display = "inline";
		}
		// 否则插入到代码块前面
		else
			code.parentElement.insertBefore(button, code);
	});
}

function createExecutionButton(script) {
	const button = document.createElement("button");
	button.textContent = "実行";
	// 为按钮添加悬浮提示
	button.title = "SakuraScriptを実行";
	button.addEventListener("click", () => {
		jsstp.SEND({
			Event: "OnUkadocScriptExample",
			Reference0: script,
			Script: script,
			Option: "notranslate"
		});
	});
	return button;
}

function reload_button() {
	const list = document.getElementById("ghost_list_content");
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
		jsstp = jsstp.by_fmo_info(fmo[selected]);
	}).catch(e => {
		console.error(e);
	});
}
