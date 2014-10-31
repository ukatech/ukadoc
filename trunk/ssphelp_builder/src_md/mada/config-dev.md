<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>設定：開発/その他</title>
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
	開発/その他
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 設定：開発/その他

	画像左側のリストを<span class="Doing">クリック</span>で、それぞれのダイアログのページに対応する解説のページへ移動します。

![本体設定ダイアログ開発/その他](image/config-dev/0.png)
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

このページでは右クリックメニューの「設定」サブメニューにある項目「本体設定」で開くダイアログの、「開発/その他」ページについて解説しています。

この設定は「[一般](config-ippan.html)」の設定で、「開発者用機能を有効にする」をONにしないと表示されません。

開発者用、その他特殊な場合に設定する必要がありますが、その他の場合はすべて標準設定で問題ありません。
<span class="Sentence">特に必要のある場合以外は設定を変えないでください。</span>

## 各項目の解説

<dl>
	<dt>FMO名を変更する</dt>
	<dd>現在起動中のゴーストをリストアップするFMOの名前を変更します。

	通常は標準のSakuraのままで問題ありません。</dd>

	<dt>ディレクトリをドロップした際に更新ファイルやNARを作成</dt>
	<dd>ゴーストにディレクトリをドラッグ＆ドロップした際の動作を決定します。

	開発時はONにしておくと、ゴーストに通知するか開発系のコマンドを実行するかの動作を選択できるようになります。
	</dd>

	<dt>ネットワーク更新時に旧ファイルを残す</dt>
	<dd>ネットワーク更新で一時的に作成したファイルを、削除しないで保存しておきます。

	ネットワーク更新の際に起こった問題などを追跡するために使用することが出来ます。
	</dd>

	<dt>読み取り専用属性ファイルは更新対象にしない</dt>
	<dd>ネットワーク更新の対象になっているファイルに読み取り専用属性がついている場合、更新せずにそのまま残しておきます。
	</dd>

	<dt>サーフィスが存在しない時に非表示とする</dt>
	<dd>スクリプトで指定されたサーフェスが存在しない時に、ゴーストのウィンドウを消去します（通常はデフォルトサーフェスが表示）。

	ゴーストのスクリプトの不具合の検証用途などに利用できます。
	</dd>

	<dt>Materiaが起動しているように見せかける</dt>
	<dd>Mutex "sakura" を作成し、Materiaが起動しているかのようにふるまいます。

	Materiaでしか動作しない設計となっているソフトが動作する可能性があります。
	</dd>

	<dt>Vanish（アンインストール）実行を抑制</dt>
	<dd>絶対にVanish（アンインストール）を実行できない状態にします。

	ゴースト開発中等に誤ってVanishを実行してしまうのを防ぐ等に利用できます。　</dd>

	<dt>複数起動ロックを解除</dt>
	<dd>通常SSPは1マシンに1つしか起動できないようになっていますが、開発用とその他用に分けたい場合など、複数起動したい場合にこのロックを解除してください。

	ただし、SSP自体は複数起動を前提とした設計になっていませんので、多少不具合が起こる可能性があります。

	また、NARファイルを関連付けしている場合、NARを開いてのインストール実行ができなくなります（ドラッグ＆ドロップは利用可能）。</dd>

	<dt>利用可能な場合は更新にバージョン管理ツールを使う</dt>
	<dd>ゴーストの管理にバージョン管理ツールが使われている場合は、通常のネットワーク更新の代わりに、それを起動して「更新」処理を行います。</dd>

	<dt>[XXX]レベル以上のエラー発生を通知</dt>
	<dd>
		選択したレベル以上のエラーが発生した際に、タスクトレイアイコンからバルーンを表示します。

ゴースト開発者は、開発中NOTICEか少なくともWARNING以上を通知することが推奨されます。

通知レベルの意味については「[スクリプトログ](dev-scriptlog.html#chapter2)」のページを参照してください。

	</dd>

	<dt>例外ハンドラを使う</dt>
	<dd>通常はONで特に構いません。

デバッグに協力していただける方や、ゴースト開発者はこれをOFFにすることで、メモリへのアクセス違反等で「ちゃんと落ちる」ようになります。</dd>
</dl>

### 更新定義ファイル

updates2.dauとupdates.txtのどちらを出力するか設定します。

### NARダウンロードフォルダ

ゴースト上にURLをドラッグ＆ドロップした際に動作する、自動ゴーストダウンロード機能のファイルの保存先です。

特に理由がない限り、標準のままが良いでしょう。

### NAR作成位置

NAR作成機能でNARファイルを出力するパスを設定します。

<dl>
	<dt>毎回指定</dt>
	<dd>
		毎回作成先とそのファイル名を指定します。
	</dd>

	<dt>フォルダと同じ</dt>
	<dd>
		NARを作成するゴーストのフォルダと同じ場所に作成するようにします。
	</dd>

	<dt>指定したフォルダ</dt>
	<dd>
		常に指定したフォルダの中に作成するようにします。
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
	<span class="Prev">[設定：国際化](config-i18n.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[情報](information.html)</span>
</div>

</div>
</body>
</html>