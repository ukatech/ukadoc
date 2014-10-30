<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>設定：ゴースト(2)</title>
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
	ゴースト(2)
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 設定：ゴースト(2)

	画像左側のリストを<span class="Doing">クリック</span>で、それぞれのダイアログのページに対応する解説のページへ移動します。

![本体設定ダイアログゴースト(2)](image/config-ghost2/0.png)
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

このページでは右クリックメニューの「設定」サブメニューにある項目「本体設定」で開くダイアログの、「ゴースト(2)」ページについて解説しています。

[ゴーストごとの設定](config-ghost2.html)の標準設定となる設定です。

## 各項目の解説

<dl>
   <dt>サウンドを鳴らさない</dt>
   <dd>
      本体経由で制御されるサウンド機能をすべて停止し、一切のサウンドを鳴らしません。

ただし、ゴーストが自分で（本体に頼らずに）サウンドを再生する場合には関係しません。
   </dd>

   <dt>常に手前に表示</dt>
   <dd>
      喋っているかどうかにかかわらず、常にデスクトップの一番手前に表示するようにします。
   </dd>

   <dt>SERIKO Moveを無視</dt>
   <dd>
      常時ゴーストが動いている（浮遊の表現等）機能を強制的にOFFにします。

ウィンドウの動きがかなりの負荷になっている場合等に有効にすると負荷を軽減することができます。
   </dd>

   <dt>バルーン位置補正有効</dt>
   <dd>
      バルーンを<span class="Doing">ドラッグ</span>して位置補正をするかどうかを設定します。

補正機能を動作させたくない場合は無効にしてください。
   </dd>
</dl>

### 開発用オプション

	この項目は[開発用オプションがオン](config-ippan.html)になっている場合のみ表示されます。

<dl>
   <dt>定義なしサーフィスを無視</dt>
   <dd>
   キャラクターの表情として定義されていない、アニメーション用などの雑多な画像ファイルを無視します。通常OFFで問題ありません。

旧いゴーストでは特にONにすると問題が生じます。
   </dd>

   <dt>隠し指定された要素を表示する</dt>
   <dd>
   ネタバレ対策や、内部で使用するために、「ユーザーが操作できる形で表示しない」設定になっているものをすべて表示します。

ゴーストをリロードしないと反映されない場合があります。

デバッグ用途のみに使用することをおすすめします。 
   </dd>
</dl>

### キャラクター自由移動

キャラクターを<span class="Doing">ドラッグ</span>で自由な位置に移動できるようにするかどうかの設定です。

<dl>
	<dt>常に自由移動</dt>
	<dd>常に自由に移動できるようにします。</dd>

	<dt>ゴースト設定</dt>
	<dd>ゴースト側の設定に任せます。</dd>

	<dt>常に制限</dt>
	<dd>画面下部に吸着させるようにします。</dd>
</dl>

### 喋る時に手前に出て来る

喋る時に他のウィンドウの裏側に居る場合、一番手前に出て来るかどうかの設定です。

<dl>
	<dt>出て来る</dt>
	<dd>出てくるようにします。</dd>

	<dt>更新時以外</dt>
	<dd>出てくるようにしますが、更新時のトークでは出てきません。</dd>

	<dt>出てこない</dt>
	<dd>出てこないようにします（というよりは、出てくるように「しない」）。</dd>

	<dt>喋り終わると裏へ沈む</dt>
	<dd>チェックを入れると、喋り終わったあとに他のウィンドウの後ろへ沈みます。</dd>
</dl>

### 全ゴーストの設定を標準に戻す

実行すると、全ての[ゴーストの個別の設定](config-eachghost.html)を、現在の本体設定のものに戻します

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
	<span class="Prev">[設定：ゴースト(1)](config-ghost.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[設定：フォルダ](config-folder.html)</span>
</div>
</div>
</body>
</html>