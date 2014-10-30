<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>設定：ゴーストごとの設定</title>
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
	ゴーストごとの設定
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 設定：ゴーストごとの設定

![ゴーストごとの設定ダイアログ](image/config-eachghost/0.png)

			ここで行える設定の標準設定となるのは、本体設定の「[ゴースト(2)](config-ghost2.html)」で行えるものです。ゴーストごとの設定が本体設定に優先します。

## 各項目の解説

チェックボックスが半チェック（■チェック）になっているものは、未設定（従って標準設定に従う）です。

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

## 下部のボタン

<dl>
	<dt>標準設定</dt>
	<dd>
		本体設定ダイアログの「[ゴースト(2)](config-ghost2.html)」のページを開きます。

ゴースト(2)での設定が、ゴースト別設定の標準設定（未設定時の設定）になっています。
	</dd>
	<dt>標準に戻す</dt>
	<dd>
		全ての設定を標準設定に戻します。

標準設定は本体設定の「[ゴースト(2)](config-ghost2.html)」で行えます。
	</dd>

	<dt>適用</dt>
	<dd>現在の設定を保存します。</dd>

	<dt>OK</dt>
	<dd>現在の設定を保存し、ダイアログを閉じます。</dd>
</dl>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[設定](config.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[設定：一般](config-ippan.html)</span>
</div>
</div>
</body>
</html>