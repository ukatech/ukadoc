indexsite
==========

Markdown Extra / Jade / HTML形式のヘルプソースをテンプレートにあてはめて出力

使用方法
----------

1. srcにヘルプ内容を書く。
2. index.yamlに目次の階層構造を書く
3. templatesにあるテンプレートで雛形を書く
4. indexsite.bat doを走らせる
5. distにビルドされたヘルプが！

Markdown Extra
----------

Perl製の簡易HTML記述言語MarkdownのPHPによる拡張版方言。

MarkdownはいわばWiki記法の一種ですが、使いやすいので近年プログラミング界隈で普及中(Github, Qiita等)。

indexsiteではそのJavaScriptにおける実装であるmarkdowndeepライブラリをつかっています。

### 文法

- [power source*  » WP: PHP Markdown 記法早見表（的なもの）](http://bono.s206.xrea.com/2007/01/312-markdown_syntax/)
- [電書ちゃんのでんでんマークダウン - でんでんマークダウン](http://conv.denshochan.com/markdown)

Jade
----------

JS製HTML記述言語。

indexsiteのテンプレートはこれで記述されます。

- [Node.js - Jadeの記法について（あまりまとまっていない） - Qiita](http://qiita.com/sasaplus1/items/189560f80cf337d40fdf)
- [Jade チュートリアル](http://www7b.biglobe.ne.jp/~makandat/jade.html)
- [Jade - Template Engine](http://jade-lang.com/)

HTML
----------

HTML。

ヘルプの本質的な内容のみを断片的に記述しておいて、あとでテンプレートに入れ込む。

- [HTMLクイックリファレンス](http://www.htmq.com/index.htm)
- [より良いWebを作るためのガイド｜Web制作 W3G](https://w3g.jp/guide/)
- [HTML 文書とはなんだろうか](http://msugai.fc2web.com/web/tips/)
- [CSS とはなんだろうか](http://msugai.fc2web.com/web/CSS/)
- [HTML覺書とCSS2參考](http://hp.vector.co.jp/authors/VA022006/index.html)

作者
----------
奈良阪某 (Narazaka)
<http://narazaka.net/>
<http://github.com/narazaka/>
<http://search.cpan.org/~narazaka/>
<https://www.npmjs.org/~narazaka>
<http://twitter.com/narazaka/>
