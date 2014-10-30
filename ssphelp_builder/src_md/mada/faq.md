<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE.html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/.htmll1/DTD/.html1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <title>よくある質問</title>
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
	よくある質問
</div>
<!-------------------------------------------------------------------------------------------------------------------------------->

# よくある質問

	ここでは、SSPによく寄せられる質問のうち、ヘルプ作成時点での既知の情報を載せています。

質問する前に確認しましょう。

## 操作方法などの質問

## エラーメッセージがでた場合の質問

<table class="QnA">
	<tr>
		<td>
			<span class="Head">Q:</span>
			ネットワーク更新をするとMD5チェックとかいう所でいつも合わないと言われるのですが
		</td>
	</tr>
	<tr>
		<td>
			<span class="Head">A1:</span>
			ネットワーク関連をいじるユーティリティが入っている場合は一時的に無効にしてください。
		</td>
	</tr>
	<tr>
		<td>
			<span class="Head">A2:</span>
			モデム・TA等のドライバ（モデム等を動かすための特殊なソフト）を更新してみてください。
		</td>
	</tr>
	<tr>
		<td>
			<span class="Head">A3:</span>
			ゴーストの作者の方に問い合わせてください。

もしゴーストからmd5不一致が起きているファイル名の通知があれば、それを併せて伝えると助けになるかも知れません。
		</td>
	</tr>
</table>

## 不具合・あやしい動作がでた場合の質問

<table width="100%" class="qa">

	<tr class="a" valign="top">

		<th class="qa">A4：</th>
<!-- 
		<td>
			無料ホームページサービスをやっている所でネットワーク更新をしようとすると
			まれに広告を無理に挿入しようとするせいでMD5不一致が起こってしまいます。
		</td>

	</tr>
-->
    <tr class="q" valign="top">

		<th class="qa">Q：</th>

		<td>GeForce系ビデオカードで半透明設定すると変です

		SiS系ビデオカードで半透明設定すると変です</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A：</th>

		<td>
			SSPの半透明処理は、Windowsでも比較的新しい機能を使っていますので、まだ未テストもしくは未対応のドライバがあるようです。

			できるだけ最新版のドライバをお試しください。

			もし症状が解決しない場合は、半透明設定をOFFにして利用することをおすすめします。
		</td>

	</tr>

    <tr class="q" valign="top">

		<th class="qa">Q：</th>

		<td>バグバグなゴーストに切り替えたら起動しなくなりました(T_T)</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A：</th>

		<td>
			data -&gt; profile -&gt; app.datが設定ファイルです。
			これを削除するか中身でそれらしき行(Ghostなんとかと頭についている行)を削除するとデフォルトゴーストに戻ります。

			また、ghostフォルダから該当するゴーストを一度どこかに移動してSSPから見つけられなくすることでも同様の事が出来ます。

			なお、一応起動時に停止した時に自動的にこれらの処理を行なう機能も含まれております。
		</td>

	</tr>

    <tr class="q" valign="top">

		<th class="qa">Q：</th>

		<td>上の方法をやってみましたがそれでも起動しません</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A：</th>

		<td>
			data -&gt; profileフォルダ、realize.txt、各ゴースト内に作られるprofileフォルダを削除してみてください。

			もしくは、SSPを別の場所に解凍してクリーンな状態のものを作ったのちghostフォルダやballoonフォルダなどだけ移動するというテもあります。
		</td>

	</tr>

    <tr class="q" valign="top">

		<th class="qa">Q：</th>

		<td>落ちます。</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A1：</th>

		<td>
			クロスフェード機能を切にすると比較的安定するという報告もあります。
		</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A2：</th>

		<td>
			例外ハンドラを使う、をONにしてみてください。ただしゴースト開発中はおすすめできません。
		</td>

	</tr>

	<tr class="a" valign="top">

		<th class="qa">A3：</th>

		<td>
			STACKTRC.TXTというファイルが、SSPのあるフォルダと同じ場所にできているかもしれません。

			その場合は、[SSP BUGTRAQ](http://ssp.shillest.net/)の掲示板への報告をおねがいします。

			環境等の情報はすべてそのファイルに載ってはいますが、起動していたゴースト、標準状態から行った設定変更の情報など、できるだけ詳しい情報が把握できると、修正が容易になります。
		</td>

	</tr>
</table>

<!-------------------------------------------------------------------------------------------------------------------------------->
<div id="navigation">
	<span class="Prev">[リンク集](links.html)</span>
	<span class="Return">[目次](contents.html)</span>
	<span class="Next">[用語説明](reference.html)</span>
</div>

</div>
</body>
</html>