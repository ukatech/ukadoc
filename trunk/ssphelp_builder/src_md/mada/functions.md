<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>機能</title>
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
	機能
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 機能

	![機能サブメニュー](image/functions/0.png)

このページでは、[右クリックメニュー](howto-rclick.html)の「機能」のサブメニューから実行できる、SSPの各種機能について解説しています。

	なお、項目名はゴーストによって異なる場合があります（位置は変わりません）。

分かり難いと感じた時は、本体設定の「[ゴースト(1)](config-ghost.html)」からゴースト定義のメニュー表示をオフにできます。 

	このサブメニューには、[開発モードがオン](config-ippan.html)になっている場合のみ表示される項目がありますが、このページでは省略しています。

開発モードでのメニューとその機能については、「[開発者向けヘルプ](dev.html)」のページをお読みください。

## 各項目の解説

	クリックでその項目の説明へ。

	![機能サブメニュー](image/functions/1.png)
	<map name="functionmenu" id="functionmenu">
		<area shape="rect" coords="14,1,353,17" href="#menuitem1" alt="1,カレンダー">
		<area shape="rect" coords="14,17,353,33" href="#menuitem2" alt="2,SSPメッセンジャー">
		<area shape="rect" coords="14,32,353,48" href="#menuitem3" alt="3,時計合わせ">
		<area shape="rect" coords="14,48,353,64" href="#menuitem4" alt="4,エクスプローラ">
		<area shape="rect" coords="14,64,353,80" href="#menuitem5" alt="5,アドレスバー">
		<area shape="rect" coords="14,80,353,96" href="#menuitem6" alt="6,ファイルを開く">
		<area shape="rect" coords="14,96,353,112" href="#menuitem7" alt="7,フォルダを選択する">
		<area shape="rect" coords="14,113,353,129" href="#menuitem8" alt="8,本体更新をチェック">
		<area shape="rect" coords="14,139,353,155" href="#menuitem9" alt="9,ゴーストキャッシュ開放">
		<area shape="rect" coords="14,155,353,171" href="#menuitem10" alt="10,FMOの整理／更新">

		<area shape="rect" coords="14,171,353,187" href="#menuitem11" alt="11,動作情報再読み込み">
		<area shape="rect" coords="14,199,353,215" href="#menuitem12" alt="12,ゴースト再読み込み">
		<area shape="rect" coords="14,216,353,232" href="#menuitem13" alt="13,一時起動ゴーストを保持">
		<area shape="rect" coords="14,243,353,259" href="#menuitem14" alt="14,シェル位置初期化">
		<area shape="rect" coords="14,258,353,274" href="#menuitem15" alt="15,バルーン位置初期化">
		<area shape="rect" coords="14,274,353,290" href="#menuitem16" alt="16,バルーンを消す">
	</map>

### 1,カレンダー

	SSPに付属のスケジュール管理ツールを起動します。

⇒詳しくは「[カレンダー](calendar.html)」のページをご覧ください。

### 2,SSPメッセンジャー

	SSPに付属のメッセンジャー機能を起動します。

⇒詳しくは「[SSPメッセンジャ](sspim.html)」のページをご覧ください。

### 3,時計合わせ

	OSの現在時刻設定を、外部サーバとの通信によって正しい時刻に修正します。

動作環境によっては無効または無意味です。

時計合わせに使用するサーバは、本体設定の「[接続(1)](config-conn1.html)」から設定できます。

### 4,エクスプローラ

	ゴーストやバルーン、シェル、ヘッドライン、プラグイン等を管理するエクスプローラを起動します。

⇒詳しくは「[エクスプローラ](explorer.html)」のページをご覧ください。

### 5,アドレスバー

	アドレス入力ボックスを開き、打ち込んだurlにあるファイルをダウンロードし、インストールを試みます。

基本的にブラウザ上のリンクを<span class="Doing">ドラッグ＆ドロップ</span>してインストールする場合と同様です。

ブラウザの挙動などで、リンクからのＤ＆Ｄ動作がうまく行かないような場合に用います。

### 6,ファイルを開く

	ファイル選択ダイアログを開き、選択されたファイルをSSPが開こうとします。

基本的にゴーストに対してファイルを<span class="Doing">ドラッグ＆ドロップ</span>したのと同じです。

Wine環境などで、Ｄ＆Ｄ動作がうまく行かないような場合に用います。

### 7,フォルダを選択する

	フォルダ選択ダイアログを開き、選択されたフォルダをSSPが開こうとします。

基本的にゴーストに対してフォルダを<span class="Doing">ドラッグ＆ドロップ</span>したのと同じです。

Wine環境などで、Ｄ＆Ｄ動作がうまく行かないような場合に用います。

### 8,本体更新をチェック

	SSPの更新をチェックし、更新があればダウンロード確認ダイアログを開きます。

本体更新については、「[本体のバージョンアップ](howto-verup.html)」のページもお読みください。

### 9,ゴーストキャッシュ開放

	メモリ上にあるゴーストキャッシュを開放（メモリ上に保持しなくする）します。

自動管理なので普段は使用する必要はありません。

長時間多ゴーストを切り替えながら使用して、メモリ消費が激しくなってきた場合などに使用します。

	ゴーストキャッシュは多ゴースト起動時に、一部ゴーストのみ切り替え・終了した場合に、そのゴーストの情報を一定時間メモリ上に保持しておくことで、再起動時間を節約するしくみです。

本体設定の「[ゴースト(1)](config-ghost.html)」から設定ができます。

### 10,FMOの整理／更新

	他のアプリケーションとの連携に使用するSSPの情報を、整理・更新します。

基本的にSSP単体で使用中は使う必要がありません。

SSTP通信を使う他のアプリケーションと同時使用している時に、SSTPが正しく届かないといったトラブルの際に使用すると解決する場合があります。

### 11,動作情報再読み込み

	読み込んでいるゴースト、バルーン、ヘッドライン、プラグインなどのファイルすべてを読み込み直します。

起動中に各種ファイル群を直接移動、削除などした場合に、それを反映する目的で使用できます。

[エクスプローラ](explorer.html)のファイル->再読み込みを全種類行うのと同じです。

### 12,ゴースト再読み込み

	起動中のゴーストをリロードします。

### 13,一時起動ゴーストを保持

	SSTP等で指示されて一時起動したゴーストを、そのまま完全に読み込んで起動状態を維持します。

### 14,シェル位置初期化

	メニューを開いているゴーストの表示位置を、初回起動時の位置に戻します。

ゴーストが画面外に飛び出してしまった場合等に使用すると復帰できるかもしれません。

### 15,バルーン位置初期化

	メニューを開いているゴーストのバルーンの表示位置を初期化します。

バルーンが画面外に飛び出してしまった場合等に使用すると復帰できるかもしれません。

### 16,バルーンを消す

	メニューを開いているゴーストの、全キャラクターのバルーンを強制的に閉じます。

[ショートカットキー](shortcut.html)の「Ctrl-Shift-Del」でも実行できます。

ただし、選択肢表示中など、バルーンを閉じられない場合があります。

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[基本的な使い方：RSS/ヘッドライン](howto-headline.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[カレンダー](calendar.html)</span>
</div>
</div>
</body>

</html>