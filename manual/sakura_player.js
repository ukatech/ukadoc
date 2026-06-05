/// <reference types="jsstp" />
"use strict";

/** @type {typeof import("jsstp").jsstp} */
var jsstp;
// 実行ボタンを設置済みかどうか（初回読み込み時に一度だけ設置する）
var execution_buttons_ready = false;

// 「読み込み」ボタンが押されるまでは一切接続しない。
// ボタン押下時に初めてjsstp本体を読み込み、ローカルのSSPへ接続する。
async function reload_button() {
	// 初回のみjsstp本体を読み込む
	if (!jsstp) {
		const m = await import("https://cdn.jsdelivr.net/gh/ukatech/jsstp-lib@v3.1.1.2/dist/jsstp.mjs");
		jsstp = m.jsstp;
	}
	// 初回のみ各記述例に実行ボタンを設置する
	if (!execution_buttons_ready) {
		init_content();
		execution_buttons_ready = true;
	}
	const list = document.getElementById("ghost_list_content");
	// ゴースト一覧を取得して選択肢を更新する
	jsstp.get_fmo_infos().then(async fmo => {
		//現在の選択を控えておく
		let selected = list.value;
		//リストを一旦空にする
		list.options.length = 0;
		if (!fmo.available)
			throw new Error("get_fmo_infos failed");
		fmo.forEach((info, uuid) => list.options.add(new Option(info.name, uuid)));
		//控えた選択がまだ存在すれば選び直す
		if (fmo[selected])
			list.value = selected;
		else
			selected = list.value = list.options[0].value;
		jsstp = jsstp.by_fmo_info(fmo[selected]);
	}).catch(e => {
		console.error(e);
	});
}

function init_content() {
	// 全てのSakuraScriptコードを取得
	const sakuraScriptCodes = document.querySelectorAll("code[type='SakuraScript']");
	// それぞれに実行ボタンを追加する
	sakuraScriptCodes.forEach(code => {
		const button = createExecutionButton(code.textContent);
		const parent = code.parentElement.parentElement;
		// 親要素の子要素がh1とコードの2つだけなら、h1の後ろにボタンを挿入する
		if (parent.children.length == 2) {
			parent.insertBefore(button, parent.children[1]);
			//h1の改行を取り消す
			parent.children[0].style.display = "inline";
		}
		// それ以外はコードブロックの前に挿入する
		else
			code.parentElement.insertBefore(button, code);
	});
}

function createExecutionButton(script) {
	const button = document.createElement("button");
	button.textContent = "実行";
	// ボタンにマウスオーバー時のヒントを追加する
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
