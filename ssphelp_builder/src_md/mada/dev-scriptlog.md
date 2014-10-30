<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>開発者向けヘルプ：スクリプトログ</title>
  <link rel="stylesheet" type="text/css" href="about.css" />
</head>
<body>
<div id="sidebar">
	<iframe src="contents.html" name="sidebar">
		フレーム非対応の環境では以下の目次ページからご覧ください。

[目次](contents.html)
	</iframe>
</div>
<div id="text">
<div id="breadcrumb">
	<span class="Upper">[目次](contents.html)</span>
	<span class="Upper">[開発者向けヘルプ](dev.html)</span>
	スクリプトログ
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 開発者向けヘルプ：スクリプトログ

このページでは、<span class="Sentence">スクリプトログ</span>について解説しています。

また、スクリプトログ左下から切り替えられる<span class="Sentence">エラーログ</span>についても解説しています。

## スクリプトログ

![スクリプトログ](image/dev-scriptlog/5.png)

	ゴーストが受け取ったSakuraScriptは、設定した件数分、内部的に保存されています。

スクリプトログでは、そのように内部に保存されているスクリプトを参照したり、保存したり、もう一度しゃべらせることができます。
<p>

### (左下)Script

<p>[エラーログ](#chapter2)と切り替えるためのプルダウンメニューです。

### ログ行数

内部に保存しておくログの件数を設定します。

### ボタン類

リストで選択されている行などを対象に、以下の操作を行います。

<dl>
	<dt>消去</dt>
	<dd>リスト内の全ての内容を削除します。</dd>

	<dt>コピー</dt>
	<dd>選択しているスクリプトをクリップボードにコピーします。
テキストなどに貼り付けて、検証に用いることができます。</dd>

	<dt>保存</dt>
	<dd>保存ダイアログを開き、指定位置にログをcsv形式で出力します。</dd>

	<dt>実行</dt>
	<dd>選択しているログをゴーストに再実行させます。</dd>
</dl>

## エラーログ

![エラーログ](image/dev-scriptlog/6.png)

	SSPの動作中に発生したエラーの履歴を表示します。

エラーの内容を確認し、対処するための参考にしてください。

### エラーのレベル

	リスト左端のアイコンおよび、エラー文の先頭にある語句はエラーのレベルを表します。

おおよそ以下のような意味合いです。

<dl>
	<dt>![](image/dev-scriptlog/4.png)Critical</dt>
	<dd>重大な誤りがあります。起動不能・動作停止などの結果に繋がる場合があります。
直ちに修正が必要です。</dd>
	<dt>![](image/dev-scriptlog/3.png)Error</dt>
	<dd>誤りがあります。補正不能なファイルの記述が一部読み飛ばされるなど、意図した動作をしていません。
正常動作のためには修正が必要です。</dd>
	<dt>![](image/dev-scriptlog/2.png)Warning</dt>
	<dd>ファイルの記述などに軽微な誤りがありますが、SSPの内部的な補正により、（おそらく）正常動作しています。
他のベースウェアとの互換性の観点から、またSSPの仕様変更に際して「何もしてないのに動かなくなった」などという事態が起こり得ますので、可能な限り修正してください。</dd>
	<dt>![](image/dev-scriptlog/1.png)Notice</dt>
	<dd>何らかの誤りの（潜在的な）可能性・危険性が発見されました。</dd>
	<dt>![](image/dev-scriptlog/0.png)Info</dt>
	<dd>システム開発者用の参考情報です。基本的に気にしなくとも構いません。</dd>
</dl>

### (左下)Error

[スクリプトログ](#chapter2)と切り替えるためのプルダウンメニューです。

### ログ行数

内部に保存しておくログの件数を設定します。

### ボタン類

リストで選択されている行などを対象に、以下の操作を行います。

<dl>
	<dt>消去</dt>
	<dd>リスト内の全ての内容を削除します。</dd>

	<dt>コピー</dt>
	<dd>選択しているエラーの内容をクリップボードにコピーします。
テキストなどに貼り付けて、検証に用いることができます。</dd>

	<dt>保存</dt>
	<dd>保存ダイアログを開き、指定位置にログをcsv形式で出力します。</dd>
</dl>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[開発者向けヘルプ](dev.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[開発者向けヘルプ：開発用パレット](dev-palette.html)</span>
</div>

</div>
</body>