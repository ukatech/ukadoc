# UKADOC編集ガイド

**適用範囲：manual/フォルダ以下のHTMLファイル**

## 基本方針
- 文体：「だ/である調」で統一（～する。～である。）
- バージョン表記：`<ul class="supported-baseware"><li><img src="image/icon_s.png" alt="SSP" width="34" height="16" /> 2.7.23</li></ul>`

## 構造パターン

### 1. ナビゲーション追加
`<section class="navigation-category">` 内の `<ul>` にリンク追加：
- エントリ：`<li><a href="#entry_id">エントリ名</a></li>`
- 補足情報：`<li class="caption"><a href="#caption_id">補足情報名</a></li>` ※別の`<ul>`ブロック

### 2. エントリ詳細追加
カテゴリセクション内、最後のエントリの`</dl>`直後、`</section>`前に追加：

**list_*.html系（イベント/スクリプト/プロパティ等）**
```html
<dl id="entry_id">
    <dt class="entry">エントリ名</dt>
    <dd class="entry">
        <p>説明。</p>
        <dl class="reference">
            <dt>パラメータ名</dt>
            <dd>説明。</dd>
        </dl>
        <ul class="supported-baseware">
            <li><img src="image/icon_s.png" alt="SSP" width="34" height="16" /> 2.7.23</li>
        </ul>
    </dd>
</dl>
```

**Sakura Script（記述例付き）**
```html
<div class="legend">
    <section class="code">
        <h1>記述例</h1>
        <p><code type="SakuraScript">\![execute,command,param]説明。</code></p>
    </section>
</div>
```

**補足情報セクション**
```html
<section class="caption" id="caption_id">
    <h1>タイトル</h1>
    <dl>
        <dt>項目</dt>
        <dd>説明</dd>
    </dl>
</section>
```

### 3. HTMLタグ規則
- オプション説明：`<ul class="description"><li>--option=値……説明</li></ul>`
- リファレンス：`<dl class="reference"><dt>項目</dt><dd>説明</dd></dl>`
- 補足情報：`<dl>` のみ（class不要）
- コード：`<code type="SakuraScript">コード</code>`
- 改行：`<br />`

### 4. リンク規則
- ドキュメント間：`<a href="list_sakura_script.html#id">テキスト</a>`
- 同一ファイル内：`<a href="#id">テキスト</a>`

## 頻出パターン

### 非同期処理
- 成功：OnXxxComplete、失敗：OnXxxFailure（識別子に「Failure」付加）
- --eventオプション：`<li>--event=イベントまたは識別子……Onではじまる文字列を指定すると、Sakura Scriptの続きを実行しながら処理を続け、終わり次第指定したイベントが起きる。省略時は処理が完了するまでスクリプトの実行は停止する。</li>`
- Reference0：`<dd>Sakura Scriptの--eventオプションで指定されたイベント識別子。</dd>`

### パラメータ/制約
- フルパス：「指定はフルパスで行うこと(相対パス指定不可)」
- オプション：`--option=値` 形式
- セキュリティ：「セキュリティ上の観点から、[操作先]は、SSP管理下のフォルダ(ghostフォルダ、balloonフォルダなど「フォルダ」設定で指定した場所)以下への展開に制限される。また、この制限は適宜強化される可能性があるため、ゴースト自身のデータが置かれているフォルダ以下に限定するのが無難。」
