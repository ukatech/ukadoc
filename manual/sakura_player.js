/// <reference types="jsstp" />
"use strict";

/** @type {typeof import("jsstp").jsstp} */
var jsstp;

//页面加载完成后，检查ghost可用性
document.addEventListener('DOMContentLoaded', () =>
	import("https://cdn.jsdelivr.net/gh/ukatech/jsstp-lib@v3.0.0.1/dist/jsstp.mjs")
	.then(m => (jsstp = m.jsstp).if_available(init_content)).catch(e => e)
);
async function init_content() {
	// 遍历所有的code class，要求type="SakuraScript"
	// 为其增加一个按钮，点击后执行SakuraScript
	for (const code of document.querySelectorAll("code[type='SakuraScript']")) {
		const button = document.createElement("button");
		button.textContent = "执行";
		button.addEventListener("click", () => {
			const script = code.textContent;
			jsstp.SEND({
				"Event": "OnUkaDocScriptExample",
				'Reference0': script,
				"Script": script,
				"Option": "notranslate"
			});
		});
		// 为按钮添加悬浮提示
		button.title = "执行SakuraScript";
		code.parentElement.insertBefore(button, code);
	}
}
