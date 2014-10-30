<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>設定：フォルダ</title>
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
	<span class="Upper">[設定](config.html)</span>
	<span class="Upper">本体設定</span>
	フォルダ
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 設定：フォルダ

	画像左側のリストを<span class="Doing">クリック</span>で、それぞれのダイアログのページに対応する解説のページへ移動します。

![本体設定ダイアログフォルダ](image/config-folder/0.png)
	<map name="configdialog" id="configdialog">
		<area shape="rect" coords="14,31,137,46" href="config-ippan.html" alt="一般">
		<area shape="rect" coords="14,47,137,66" href="config-ghost.html" alt="ゴースト(1)">
		<area shape="rect" coords="14,66,137,82" href="config-ghost2.html" alt="ゴースト(2)">
		<area shape="rect" coords="14,82,137,98" href="config-folder.html" alt="フォルダ">
		<area shape="rect" coords="14,98,137,114" href="config-disp.html" alt="表示">

		<area shape="rect" coords="14,115,137,133" href="config-talk.html" alt="喋り/バルーン">
		<area shape="rect" coords="14,134,137,152" href="config-conn1.html" alt="接続(1)">
		<area shape="rect" coords="14,150,137,168" href="config-conn2.html" alt="接続(2)">
		<area shape="rect" coords="14,167,137,185" href="config-pop.html" alt="POP">
		<area shape="rect" coords="14,184,137,202" href="config-extprog.html" alt="外部アプリ">

		<area shape="rect" coords="14,201,137,219" href="config-im.html" alt="IM">
		<area shape="rect" coords="14,218,137,236" href="config-ipmes.html" alt="IPMessenger">
		<area shape="rect" coords="14,235,137,253" href="config-i18n.html" alt="国際化">
		<area shape="rect" coords="14,252,137,270" href="config-dev.html" alt="開発/その他">
	</map>

このページでは右クリックメニューの「設定」サブメニューにある項目「本体設定」で開くダイアログの、「フォルダ」ページについて解説しています。

## フォルダ設定とは

	通常ゴーストなどのファイルは、SSP本体があるフォルダ以下の特定の場所におかれます。

しかしここで設定する事で、自由な場所に設置することができるようになります。

	設定は、ゴースト、バルーン、ヘッドライン、プラグインそれぞれについて可能です。

どれも基本は同じですので、以下まとめて解説します。

	「編集」ボタンを押すと追加・削除・編集・順番の変更等ができる[ダイアログが開きます（詳細は後述）](#chapter2)。

	「再読込」ボタンで各フォルダを認識し直すことができます。

フォルダ編集では自動的に再読み込みされますが、何らかの問題で認識されていない場合、また手動でフォルダの中身を変更したため再度認識しなおして欲しい場合等に押してください。

</p>

## フォルダ設定ダイアログ

	![フォルダ設定ダイアログ](image/config-folder/1.png)

フォルダ設定ダイアログでフォルダを登録する事で、そのフォルダにあるゴーストやバルーンなどもSSPに読み込ませる事ができるようになります。

フォルダの登録は[ボタン](#chapter2-2)で行えるほか、直接<span class="Doing">ドラッグ＆ドロップ</span>することでも追加可能です。

### リスト

	ダイアログの上半分にあるのが、読み込み対象フォルダのリストです。

フォルダを選択する事で、そのフォルダについて[ボタン](#chapter2-2)や[フォルダ個別設定](#chapter2-3)の操作が可能になります。

またフォルダを<span class="Doing">ダブルクリック</span>するか、左側のチェックボックスマークを<span class="Doing">クリック</span>することで、マークが外れ、そのフォルダが一時的に読み込み対象から外れます。

	なお、選択状態でもう一度フォルダ名をクリックすると、フォルダの表示名をフォルダ名そのものから変更する事ができます。

以下フォルダ別けを行った場合のゴースト切り替えメニューの例です。

![フォルダ別けした場合のゴーストメニューの例](image/config-folder/3.png)

	リスト左側のアイコンが【![起動中ゴーストが存在する場合のチェックマーク](image/config-folder/2.png)】となっている場合、現在そのフォルダに含まれるゴーストなどが動作中である事を意味します。

この状態では、読み込み対象からの除外やパスの変更などの操作ができません。

### ボタン

<dl>
	<dt>追加</dt>
	<dd>
		フォルダ選択ダイアログを開き、選択したフォルダを読み込み対象リストに登録します。
	</dd>
	<dt>変更</dt>
	<dd>
		選択中のフォルダのパスついて、フォルダ選択ダイアログで改めてフォルダを選び、パスを変更します。
	</dd>
	<dt>編集</dt>
	<dd>
		選択中のフォルダのパスについて、直接パスを入力するためのインプットボックスを開き、パスを変更します。

通常、追加・変更で指定されたフォルダのパスは、ssp.exeのあるフォルダの外を示している場合は絶対パスとして記憶されますが、何らかの理由で相対パスでないと問題がある場合などに利用してください。
	</dd>
	<dt>削除</dt>
	<dd>
		選択中のフォルダを読み込み対象リストから削除します。

フォルダ自体が削除されるわけではありません。
	</dd>
	<dt>▲・▼</dt>
	<dd>
		選択中のフォルダの、読み込み対象リスト中での位置を移動します。

インストール処理、ゴースト呼び出し処理の一部などでは、一番最初に設定してある有効なフォルダが優先されるため、順番にも注意する必要があります。

また単にメニュー中での表示順序に関係します。
	</dd>
</dl>

### フォルダ個別設定

	ゴーストのみの設定です。

<dl>
	<dt>ランダム切替の対象にしない</dt>
	<dd>
		チェックした場合、そのフォルダ内のゴーストは、ゴースト自動切換による切替先として選ばれません。

[本体設定によるランダム自動切替](config-ghost.html#chapter1-2)の他、ゴースト側から実行できるランダム切替命令の対象にもなりません。
	</dd>
	<dt>ヘッドライン・メール等を自動チェックしない</dt>
	<dd>
		チェックした場合、そのフォルダ内のゴーストの起動中には、ヘッドライン・メール等の自動チェックを行いません。
	</dd>
	<dt>自動切換しない</dt>
	<dd>
		チェックした場合、そのフォルダ内のゴーストは、[本体設定による自動切替](config-ghost.html#chapter1-2)で他のゴーストに切り替わる事がありません。
	</dd>
	<dt>起動時に自動更新しない</dt>
	<dd>
		チェックした場合、そのフォルダ内のゴーストの[起動時に自動更新](config-ghost.html#chapter1-1)を行いません。
	</dd>
</dl>

## そのほかの設定

<dl>
	<dt>インストール時に格納するフォルダを選択する</dt>
	<dd>
		新規インストール時に、フォルダを複数読み込むように設定している場合、どのフォルダにインストールするか選ぶようにします。

読み込むフォルダが1個だけの場合は、設定に関係なく自動的にそのフォルダにインストールされます。
	</dd>

	<dt>起動時に使用するフォルダを選択する</dt>
	<dd>
		起動時に認識すべきフォルダの有効・無効や、読み込むフォルダの追加・削除ができるようになります。

大量にインストールしていたり、開発用と検証用のフォルダを分けていたりする場合に、適宜切り替えることができます。
		</p>
	</dd>
</dl>

## 下部のボタン

<dl>
	<dt>ヘルプ</dt>
	<dd>
		本体設定ダイアログの、設定中のページのヘルプ（つまりこのページ）を開きます。

ダイアログ右上の「？」マークも同様です。
	</dd>

	<dt>閉じる</dt>
	<dd>
		本体設定ダイアログを閉じます。

ダイアログ右上の「×」マークも同様です。
	</dd>
</dl>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[設定：ゴースト(2)](config-ghost2.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[設定：表示](config-disp.html)</span>
</div>
</div>
</body>
</html>