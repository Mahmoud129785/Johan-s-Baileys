<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:25D366,100:128C7E&height=220&section=header&text=Johan's%20Baileys&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=WhatsApp%20Web%20API%20%E2%80%A2%20Node.js&descAlignY=58&descSize=20" width="100%"/>

<a href="https://github.com/Mahmoud129785/Johan-s-Baileys">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=25D366&center=true&vCenter=true&width=600&lines=%D9%85%D9%83%D8%AA%D8%A8%D8%A9+%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8+%D9%85%D8%B7%D9%88%D9%91%D8%B1%D8%A9;Pairing+Code+%E2%80%A2+Multi-Device;Fast+%E2%80%A2+Stable+%E2%80%A2+Lightweight;Made+with+%E2%9D%A4+by+Johan" alt="Typing SVG"/>
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-22%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
<img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>
<img src="https://img.shields.io/github/stars/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=yellow&logo=github"/>
<img src="https://img.shields.io/github/forks/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=orange&logo=github"/>
<img src="https://img.shields.io/github/last-commit/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=purple"/>

<br/><br/>

<a href="https://whatsapp.com/channel/0029VbBFqCN3wtb7pC4Prz1P"><img src="https://img.shields.io/badge/📢_قناة_Johan-انضم_الآن-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785"><img src="https://img.shields.io/badge/GitHub-Johan-181717?style=for-the-badge&logo=github&logoColor=white" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785/Johan-s-Baileys/fork"><img src="https://img.shields.io/badge/🍴_Fork-المستودع-FF6B6B?style=for-the-badge" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785/Johan-s-Baileys/issues"><img src="https://img.shields.io/badge/🐞_بلّغ-عن_مشكلة-E34F26?style=for-the-badge" height="40"/></a>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

<div dir="rtl">

## 📖 نبذة

**Johan’s Baileys** نسخة مطوّرة من مكتبة [Baileys](https://github.com/WhiskeySockets/Baileys) للربط مع **WhatsApp Web** بدون متصفح، مع إصلاحات لرمز الربط (Pairing Code) وتحسينات للاستقرار.

## ✨ المميزات

| | الميزة | الوصف |
|:-:|---|---|
| 🔐 | **Pairing Code** | ربط برقم الهاتف بدون QR |
| 📱 | **Multi-Device** | يعمل مع الأجهزة المتعددة |
| 📢 | **Newsletter** | دعم قنوات واتساب |
| 🖼️ | **Media** | إرسال واستقبال الصور والفيديو والملفات |
| 👥 | **Groups** | إدارة المجموعات كاملة |
| ⚡ | **خفيفة** | بدون Selenium أو Chromium |

## 📦 التثبيت

> [!IMPORTANT]
> يتطلب **Node.js 22** أو أحدث.

</div>

```bash
npm install github:Mahmoud129785/Johan-s-Baileys
```

<div dir="rtl">

## 🚀 الاستخدام السريع

</div>

```js
const { default: makeWASocket, useMultiFileAuthState } = require('Baileys');

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({ auth: state, printQRInTerminal: false });

  if (!sock.authState.creds.registered) {
    const code = await sock.requestPairingCode('201234567890');
    console.log('🔑 Pairing Code:', code);
  }

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('messages.upsert', ({ messages }) => {
    console.log('📩', messages[0]?.message);
  });
}

start();
```

<div dir="rtl">

> [!WARNING]
> لا تنشر ملفات الجلسة (`session/`) أو بيانات المصادقة أبدًا.

## 🧪 الاختبارات

</div>

```bash
npm test
```

<div dir="rtl">

## 📢 قناة Johan

</div>

<div align="center">

```
120363429822131088@newsletter
```

<a href="https://whatsapp.com/channel/0029VbBFqCN3wtb7pC4Prz1P"><img src="https://img.shields.io/badge/تابع_القناة_على_واتساب-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" height="45"/></a>

</div>

<div dir="rtl">

## 📊 إحصائيات

</div>

<div align="center">

<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mahmoud129785&repo=Johan-s-Baileys&theme=tokyonight&hide_border=true"/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Mahmoud129785&theme=react-dark&hide_border=true&area=true" width="100%"/>

</div>

<div dir="rtl">

## 💎 الحقوق والنسب

تعديلات هذه النسخة وتخصيصها: **Johan** ([Mahmoud129785](https://github.com/Mahmoud129785)).

هذا المستودع متفرّع من [baileys-by-hulk](https://github.com/mzml-gg/baileys-by-hulk)، المبني على [Baileys](https://github.com/WhiskeySockets/Baileys). تُحفظ حقوق ومساهمات أصحاب المشروع الأصلي والمساهمين السابقين. الترخيص: **MIT**.

</div>

<div align="center">

### ⭐ إذا أعجبك المشروع لا تنسَ تعطيه نجمة!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:128C7E,100:25D366&height=120&section=footer" width="100%"/>

</div>
