<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>エクスプローラ：右クリック/機能メニュー</title>
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
	<span class="Upper">[エクスプローラ](explorer.html)</span>
	右クリック/機能メニュー
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# エクスプローラ：右クリック/機能メニュー

エクスプローラで選択したアイテムに対して右クリックするか、選択した状態で「機能」メニューを呼び出した時に表示されるメニューの解説です。

メニュー項目は以下の通りです。(<span class="Sentence">デフォルト</span>の項目は、左ダブルクリック時に実行されます。またエクスプローラ右下のボタンもおなじ効果です)

## 共通する項目

<dl>
	<dt>削除</dt>
	<dd>指定項目のアンインストールを行います。</dd>

	<dt>フォルダを開く</dt>
	<dd>指定項目の構成ファイルが収録されているフォルダをWindowsエクスプローラで開きます。</dd>

	<dt>フォルダ（グループ）移動<span class="Note">[シェル以外]</span></dt>
	<dd>指定項目が属する[読み込みフォルダ（グループ）](config-folder.html)を移動します。
現在起動中の項目については実行できないので注意してください。
なおフォルダが１つのみの場合はこの項目は選択できません。</dd>

	<dt>配布元URLを開く</dt>
	<dd>指定項目を配布している場所を表示させます。
ただし、情報が見付からない場合は何もしません。</dd>

	<dt>READMEを開く</dt>
	<dd>指定項目のreadmeを開きます。
ただし、readmeが見付からない場合は何もしません。</dd>

	<dt>ネットワーク更新</dt>
	<dd>ゴーストの場合は起動せずにネットワーク更新のみを実行します。
ゴースト以外の場合は、通常このメニューでネットワーク更新を実行します。</dd>

	<dt>更新ファイルの作成</dt>
	<dd>ネットワーク更新のための、updates2.dauファイルを作成します。</dd>

	<dt>NAR作成</dt>
	<dd>選択項目をネットワーク上で配布できるように、１つのファイルにまとめます。</dd>

	<dt>更新/NAR両方作成</dt>
	<dd>更新ファイル作成・NAR作成を一度に実行します。</dd>
</dl>

## ゴーストの項目

![ゴーストのメニュー](image/explorer-menu/0.png)
<dl>
	<dt>切り替え：<span class="Sentence">デフォルト</span></dt>
	<dd>現在のゴーストを他のものに切り替えます。

	<dt>ゴーストを呼ぶ</dt>
	<dd>現在のゴーストはそのまま、あらたに別のゴーストを立たせます。</dd>

	<dt>起動用ショートカットを作成する</dt>
	<dd>選択したゴーストでSSPを起動するためのショートカットをデスクトップに作成します。</dd>

	<dt>デフォルトゴーストに設定</dt>
	<dd>
	エラー終了時に再起動した際など、標準で起動するゴーストとして、現在選択中のゴーストを設定します。

なお設定されたゴーストのリスト左側のアイコンは【![デフォルトマーク](image/explorer-menu/5.png)】になります。
	</dd>

	<dt>喋り優先ゴーストに指定</dt>
	<dd>
	喋るゴーストの指定のないSSTPなどで、優先して喋らせたいゴーストとして、現在選択中のゴーストを設定します。

なお設定されたゴーストのリスト左側のアイコンは【![喋り優先マーク](image/explorer-menu/6.png)】になります。

※デフォルトゴーストと喋り優先ゴーストを兼ねる場合は【![デフォルト・喋り優先同時指定](image/explorer-menu/7.png)】のような表示になる。
	</dd>

	<dt>RSSの更新情報を使い一括更新</dt>
	<dd>最新の更新情報を自動で取得し、更新があるキャラクターを自動的に一括更新します。</dd>
</dl>

## バルーンの項目

![バルーンのメニュー](image/explorer-menu/2.png)
<dl>
	<dt>切り替え：<span class="Sentence">デフォルト</span></dt>
	<dd>現在のバルーンを、他のものに切り替えます。

	<dt>デフォルトバルーンに設定</dt>
	<dd>
		ゴースト側で使用するバルーンが指定されていない場合（あるいは指定されたバルーンがない場合）に標準で使うバルーンを設定します。

なお設定されたバルーンのリスト左側のアイコンは【![デフォルトマーク](image/explorer-menu/5.png)】になります。
	</dd>
</dl>

## シェルの項目

![シェルのメニュー](image/explorer-menu/1.png)
<dl>
	<dt>切り替え：<span class="Sentence">デフォルト</span></dt>
	<dd>現在のシェルを、他のものに切り替えます。
</dl>

## ヘッドラインの項目

![ヘッドラインのメニュー](image/explorer-menu/3.png)
<dl>
	<dt>読み上げる：<span class="Sentence">デフォルト</span></dt>
	<dd>ヘッドラインセンスを開始して、読み上げます。</dd>

	<dt>Webページを表示</dt>
	<dd>RSS/ヘッドラインを配信しているサイトをブラウザで開きます。</dd>
</dl>

## プラグインの項目

![プラグインのメニュー](image/explorer-menu/4.png)
<dl>
	<dt>設定/実行：<span class="Sentence">デフォルト</span></dt>
	<dd>プラグインの設定あるいは実行を行います。実際に何をするかは、プラグイン毎に異なります。</dd>

	<dt>有効/無効</dt>
	<dd>プラグインの有効/無効を切り替えます。
無効にすると、プラグイン自体は認識されていますが、読み込まれていない状態になります。</dd>
</dl>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[エクスプローラ](explorer.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[ショートカット一覧](shortcut.html)</span>
</div>
</div>
</body>

</html>