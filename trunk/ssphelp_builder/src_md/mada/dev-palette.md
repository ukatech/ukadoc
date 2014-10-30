<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>開発者向けヘルプ：開発用パレット</title>
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
	開発用パレット
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# 開発者向けヘルプ：開発用パレット

	項目をクリックでその説明に飛びます。

![開発用パレット](image/dev-palette/0.png)
	<map name="palette" id="palette">
		<area shape="rect" coords="13,36,188,52" href="#menuitem1" alt="当たり判定を表示">
		<area shape="rect" coords="13,52,188,68" href="#menuitem2" alt="バルーンテストモード">
		<area shape="rect" coords="13,67,188,83" href="#menuitem3" alt="SERIKOウェイト調整">
		<area shape="rect" coords="13,81,188,97" href="#menuitem4" alt="更新チェックのみ">
		<area shape="rect" coords="13,96,188,112" href="#menuitem5" alt="SHIORIのSenderを変更">
		<area shape="rect" coords="13,111,188,127" href="#menuitem6" alt="SHIORI呼出ログ有効">
		<area shape="rect" coords="13,127,188,143" href="#menuitem7" alt="SHIORI内部ログ機能有効">
		<area shape="rect" coords="13,142,188,158" href="#menuitem8" alt="SHIORIデバッグ機能有効">
		<area shape="rect" coords="13,157,188,173" href="#menuitem9" alt="自動切替無効">
		<area shape="rect" coords="13,172,188,188" href="#menuitem10" alt="自動チェック無効">
		<area shape="rect" coords="13,187,188,203" href="#menuitem11" alt="自動更新無効">

		<area shape="rect" coords="15,205,188,223" href="#menuitem12" alt="スクリプト入力">
		<area shape="rect" coords="15,226,188,244" href="#menuitem13" alt="サーフィステスト">
		<area shape="rect" coords="15,247,188,265" href="#menuitem14" alt="エラーログを表示">
		<area shape="rect" coords="15,268,188,286" href="#menuitem15" alt="現在時刻の仮想的変更">
		<area shape="rect" coords="15,289,188,307" href="#menuitem16" alt="SERIKO Inspector">
		<area shape="rect" coords="15,310,188,328" href="#menuitem17" alt="リロード">
		<area shape="rect" coords="15,331,188,349" href="#menuitem18" alt="開く/実行">
	</map>

	開発に役立つ設定のスイッチや、ツール類の起動ボタンが集約されたダイアログです。

ゴーストだけでなく、バルーンやシェルの開発にも有用です。

	なお、開発用パレットによる設定は各ゴースト単位で管理されます。

## チェックボックス

### 当たり判定を表示

![当たり判定表示](image/dev-palette/1.png)

	チェックにすると、判定名つきで領域が表示されます。

半チェックだと判定名は消えます。領域の線と判定名が重なって見難い場合などに。

線の重なり関係を見ると、判定の上下関係もわかります（下にある部分は触れない）

画像は矩形ですが、もちろん多角形判定にも対応しています。

### バルーンテストモード

![バルーンテストモードのバルーン](image/dev-palette/2.png)

	ONにすると、\1・\0バルーン上にテスト用の表示が現れます。

表示される数字によって横・縦の表示文字数が確認できる他、以下のものも表示されるので、位置調節などに利用できます。

*   更新の進行度表示用のカウンタ
*   更新時に再生されるループアニメーション（online*.pngによるもの）
*   スクロール用の矢印（arrow0/1.png）
*   SSTPマーカー
*   SSTPメッセージ

### SERIKOウェイト調整

![ウェイト倍率入力ボックス](image/dev-palette/3.png)

	ONにすると入力ボックスが開き、シェルのアニメーションのウェイトを%単位で変更できます。

100%で設定どおりのウェイトでコマ送りされます。

OFFにすれば設定は無効になります。

高速かつ枚数が多いようなアニメーションで、不正なコマのチェックなどに利用できます。

### 更新チェックのみ

	ONにした状態でネットワーク更新すると、更新イベントは発生しますが実際にはファイルが上書きされません。

誤って更新を行う事による開発中ファイルの上書き防止の他、更新イベントの動作テストなどにも利用できます。

### SHIORIのSenderを変更

![偽装Sender入力ボックス](image/dev-palette/4.png)

	ONにすると入力ボックスが開き、SHIORIに対してSSPが名乗る送信者名を変更できます。

OFFにすれば設定は無効になります。

### SHIORI呼出ログ有効

    =====send=====
    GET SHIORI/3.0
    Charset: Shift_JIS
    Sender: SSP
    SecurityLevel: local
    ID: OnSecondChange
    Reference0: 193
    Reference1: 0
    Reference2: 0
    Reference3: 1
    Reference4: 0

    =====response=====
    SHIORI/3.0 204 No Content
    Charset: Shift_JIS

	ONにするとSSP-SHIORI間通信ログが記録され、ssp_shiori_log.txtとしてゴーストのmasterフォルダに吐き出されます。

また、更新用ファイルにログを含めないように注意してください。

また常に記録しっぱなしのまま放置するとかなりの重さになる場合があるので注意してください。

### SHIORI内部ログ機能有効

	ON・OFFの情報がSHIORI Event「enable_log」で通知されます。

SHIORI側でその情報を見て、SHIORI自体のログ機能をONにするかOFFにするかを制御するための機能です。

### SHIORIデバッグ機能有効

	ONにすると、ShioriEchoなど外部から発生するデバッグ用イベントが有効になります。

OFFの場合、セキュリティ上のリスクがあるためそれらのイベントは無視されます（通常はSHIORI側でも無視するようになっています）

ONにしないと一部のSHIORIのデバッグツールが動きませんので注意してください（例：華和梨のらふらんす・幸水）

### 自動切替無効

	ONにすると、そのゴーストについてSSPの[自動切換え機能](config-ghost.html)が無効になります。

開発中はゴーストを立たせっぱなしにしていることも多いはずなので、そのような場合に勝手にゴーストが切り替わってしまうことを防ぎます。

### 自動チェック無効

	ONにすると、そのゴースト起動中は設定にかかわらずRSS/ヘッドラインセンスおよびメールチェックが自動で発生しなくなります。

### 自動更新無効

	ONにすると、そのゴーストについて[自動更新機能](config-ghost.html)が無効になります。

開発中ゴーストのデータが更新によって上書きされてしまうような事故の防止に役立ちます。

## ボタン

### スクリプト入力

	SENDボックスが開かれ、SakuraScriptを入力することで直接実行させる事ができます。

入力できるのは各SHIORIの辞書の記法ではありませんので注意してください。

### サーフィステスト

![サーフィステスト](image/dev-palette/5.png)

	シェルの動作についてさまざまなテストを行うためのダイアログを開きます。

	ダイアログ中央に4つのリストがあります。

一番左の<span class="Sentence">WND</span>とあるリストは、操作するスコープ（\0、\1、\p[2]...）を選択するためのウィンドウです。

左から2番目の<span class="Sentence">Surface</span>とあるリストには、認識しているサーフィスの一覧が表示されます。ここでサーフィスを選ぶ事で、WNDリストで選択中のスコープの表示を切り替える事ができます。リスト上部のSurfaceの横にある数字は、（surfaces.txtでのサーフィス定義数/定義のない画像だけのサーフィスを含めた総数）となっています。

右から2番目の<span class="Sentence">ID</span>とあるリストには、選択中のスコープに定義されているアニメーションのIDが表示されます。選択する事で、現在表示中のサーフィスに定義があれば、そのIDのアニメーションが実行されます。リスト上部のIDの横にある数字は総数です。

一番右側の<span class="Sentence">COL</span>リストは、選択中のSurfaceに定義されている当たり判定のIDとその名前が表示されます。リスト上部のCOLの横にある数字は総数です。

	左下にある「▼」ボタンを押すと機能メニューが開きます。

現状選択できるのは「Copy Surface List」のみで、選択すると認識されている全サーフィスについて、「surface**」の形で改行区切りで列挙された内容が、クリップボードにコピーされます。

	その隣には、読み込まれている画像ファイル数と合計容量が記載されています。

	さらにその横に3つのチェックボックスがあります。

<span class="Sentence">Sort</span>がONになっている場合、Surfaceリストの並び順が記述順ではなくID昇順になります。

<span class="Sentence">Copy</span>がONになっている場合、サーフィス選択時にそのサーフィスへ切り替えるためのスクリプトがクリップボードにコピーされます（例えば\0をsurface1にする場合\0\s[1]）。

<span class="Sentence">Script</span>がONになっている場合、

### エラーログを表示

	通知されたエラーの履歴リストを表示します。

詳細は「[スクリプトログ](dev-scriptlog.html#chapter2)」のページをご覧ください。

### 現在時刻の仮想的変更

![TimeMachine](image/dev-palette/9.png)

時刻を設定すると、SSPが認識している現在日時を、設定した日時に仮想的に置き換えます。

これによって、実際にOSの時刻を修正しなくとも、日時によって異なるようなゴーストの動作についてテストが可能です。

	<span class="Sentence">Present Time</span>が現在設定されているSSP内の仮想日時です。

<span class="Sentence">System Time</span>がOS内部の実際の日時です。

<span class="Sentence">Apply</span>ボタンを押すと、入力ボックスの日時を仮想時刻として設定します。

<span class="Sentence">Reset</span>ボタンを押すと、仮想時刻をSystem Timeに戻します。

### SERIKO Inspector

![SERIKO Inspector](image/dev-palette/8.png)

	シェルの定義をツリービューで表示します。

surfaceIDごとに、element、collision、animationのノード（枝）が分かれ、さらにそれぞれの持つIDのノードが分かれ、さらにその構成要素が……というように、シェル定義の構造が直感的に捕らえやすくなっています。

	右下の<span class="Sentence">Dump</span>ボタンから、ファイル保存ダイアログを開き、構造をタブ・インデントで表現したテキストファイルを出力できます。

### リロード

![リロードメニュー](image/dev-palette/10.png)

	メニューから選択した内容について、読み込み直します。

開発中にファイルの書き変えや、追加・削除などを行った場合に利用してください。

### 開く/実行

![開く/実行メニュー](image/dev-palette/11.png)

メニューから選択した項目を開くか実行します。

<dl>
	<dt>BALLOON</dt>
	<dt>GHOST</dt>
	<dt>SHELL</dt>
	<dd>
		それぞれ、現在使用中のバルーン、ゴースト、シェルのフォルダを開きます。

開発中は当然それぞれのフォルダを開く機会も多いので、そのような場合に利用します。
	</dd>

	<dt>SHIORI LOG</dt>
	<dd>
		上記の「[SHIORI呼出ログ有効](#menuitem6)」にて作成されたログファイルを開きます。

作成されていない場合は選択できません。
	</dd>

	<dt>VCS Uppdate</dt>
	<dt>VCS Commit</dt>
	<dt>VCS Log</dt>
	<dt>VCS Revert</dt>
	<dt>VCS Export</dt>
	<dd>本体設定の「[外部アプリ](config-extprog.html)」で設定した、バージョン管理ツールをここから操作できます。</dd>

	<dt>UPDATE EVENT/NORMAL</dt>
	<dt>UPDATE EVENT/NONE</dt>
	<dt>UPDATE EVENT/ERROR</dt>
	<dt>UPDATE EVENT/NORMAL GBALLOON</dt>
	<dd>
		更新イベントについて、実際に更新がなくとも架空の更新内容を用いた動作テストが行えます。

<span class="Sentence">NORMAL</span>では、更新ファイルが発見されて正常に更新が終了した場合の動作をします。

<span class="Sentence">NONE</span>では、更新ファイルが発見できなかった場合の動作をします。

<span class="Sentence">ERROR</span>では、更新がエラーによって中断した（md5不一致）場合の動作をします。

<span class="Sentence">NORMAL GBALLOON</span>は、[本体設定によっては](config-ghost.html)更新時に同時に行われる、シェル・バルーンの更新確認の動作をします。
	</dd>
</dl>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[開発者向けヘルプ：スクリプトログ](dev-scriptlog.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[開発者向けヘルプ：開発リンク集](dev-links.html)</span>
</div>

</div>
</body>