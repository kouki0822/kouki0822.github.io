/* =====================================================================
   小さいラボ ─ アプリ一覧データ（apps.js）

   このファイルが「中身」です。トップページ(index.html)はここを読んで
   カードを表示します。

   ふだんは管理ページ(admin.html)で編集して、書き出したコードを
   ここに貼り付ける流れですが、直接ここを手で書き換えてもOKです。

   ・published: true  → 公開（トップに表示される）
   ・published: false → 非公開（保存はされるが表示されない）
   ・thumbnail: 画像のURLかファイル名。空 "" ならプレースホルダー表示
   ・appUrl:    「使ってみる」のリンク先。空ならボタン非表示
===================================================================== */

const APPS = [
  {
    id: "warikan",
    title: "わりかん電卓",
    description: "金額と人数を入れるだけで、割り勘をサッと計算するツール。",
    tags: ["tool", "JavaScript"],
    thumbnail: "",
    appUrl: "",
    githubUrl: "https://github.com/kouki0822",
    published: true
  },
  {
    id: "pomodoro",
    title: "ポモドーロタイマー",
    description: "25分集中して5分休む。それを繰り返すシンプルな集中タイマー。",
    tags: ["tool", "timer"],
    thumbnail: "",
    appUrl: "",
    githubUrl: "https://github.com/kouki0822",
    published: true
  }
];
const APPS = [
  {
    "id": "warikan",
    "title": "わりかん電卓",
    "description": "金額と人数を入れるだけで、割り勘をサッと計算するツール。",
    "tags": [
      "tool",
      "JavaScript"
    ],
    "thumbnail": "",
    "appUrl": "",
    "githubUrl": "https://github.com/kouki0822",
    "published": true
  },
  {
    "id": "pomodoro",
    "title": "ポモドーロタイマー",
    "description": "25分集中して5分休む。それを繰り返すシンプルな集中タイマー。",
    "tags": [
      "tool",
      "timer"
    ],
    "thumbnail": "",
    "appUrl": "",
    "githubUrl": "https://github.com/kouki0822",
    "published": true
  }
];
