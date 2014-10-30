<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta http-equiv="content-style-type" content="text/css" />
	<title>起動オプション一覧</title>
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
	<span class="Upper">[機能](functions.html)</span>
	起動オプション一覧
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 起動オプション一覧

ssp.exeには以下のオプション（スイッチ）をつけて起動することができます。

## 起動オプションとは？

	windowsのソフトウェアの起動時に、設定を切り替えて実行するための仕組みです。

詳しい事は実行時オプション、コマンドラインオプション、起動オプションなどの言葉を調べてみてください。

## 利用方法

	方法はいろいろあります。

例えば「コマンドプロンプト」や「ファイル名を指定して実行」からも使用できます。

ここでは、オプション専用のショートカットを作る方法を書いておきます。

1.  ssp.exeのショートカットを作成します。
例：ssp.exeを右クリック→ショートカットの作成
2.  作成したショートカットのプロパティを開きます。
例：ショートカットを右クリック→プロパティ
3.  プロパティの「リンク先」欄にssp.exeのパスがあるのを確認したら、その全体を「""」で囲います。
4.  囲ったパスに続けて半角スペースを一つ置き、その後ろに下記の起動オプションを記入します。
例："C:/User/Document/略/SSP/ssp.exe" /r
5.  そのままOKボタンを押してプロパティを閉じ、ついでにショートカットに解りやすい名前をつけましょう。
SSP-ランダム起動
6.  そのショートカットを実行すれば、普通にssp.exeを起動した場合とは異なり、オプション設定が反映された状態で起動できます。

## オプション一覧

<table class="CommandLineSwitch">
	<tr>
		<th>スイッチ</th>
		<th>機能</th>
	</tr>

	<tr>
		<td>/o nobootcheck</td>
		<td>異常終了チェックを無効にする</td>
	</tr>

	<tr>
		<td>/o layered</td>
		<td>半透明ウインドウ有効</td>
	</tr>

	<tr>
		<td>/o region</td>
		<td>半透明ウインドウ無効（リージョンモード）</td>
	</tr>

	<tr>
		<td>/r</td>
		<td>設定にかかわらずゴーストをランダム起動</td>
	</tr>

	<tr>
		<td>/g フォルダ名/ゴースト名</td>
		<td>指定したゴーストを起動　空白区切りで複数起動</td>
	</tr>
</table>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[ショートカット一覧](shortcut.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[設定](config.html)</span>
</div>
</div>
</body>
</html>