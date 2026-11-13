<div align="center">

<img src="assets/banner.jpg" width="100%" alt="Johan's Baileys"/>

<a href="https://github.com/Mahmoud129785/Johan-s-Baileys">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=25D366&center=true&vCenter=true&width=600&lines=Enhanced+WhatsApp+Library;Pairing+Code+%E2%80%A2+Multi-Device;Fast+%E2%80%A2+Stable+%E2%80%A2+Lightweight;Made+with+%E2%9D%A4+by+Johan" alt="Typing SVG"/>
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-22%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
<img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>
<img src="https://img.shields.io/github/stars/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=yellow&logo=github"/>
<img src="https://img.shields.io/github/forks/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=orange&logo=github"/>
<img src="https://img.shields.io/github/last-commit/Mahmoud129785/Johan-s-Baileys?style=for-the-badge&color=purple"/>

<br/><br/>

<a href="#-johan-channel"><img src="https://img.shields.io/badge/📢_Johan_Channel-Join_Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785"><img src="https://img.shields.io/badge/GitHub-Johan-181717?style=for-the-badge&logo=github&logoColor=white" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785/Johan-s-Baileys/fork"><img src="https://img.shields.io/badge/🍴_Fork-Repository-FF6B6B?style=for-the-badge" height="40"/></a>
&nbsp;
<a href="https://github.com/Mahmoud129785/Johan-s-Baileys/issues"><img src="https://img.shields.io/badge/🐞_Report-an_Issue-E34F26?style=for-the-badge" height="40"/></a>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

## 📖 About

**Johan's Baileys** is an enhanced fork of [Baileys](https://github.com/WhiskeySockets/Baileys) for connecting to **WhatsApp Web** without a browser, with pairing code fixes and stability improvements.

<div align="center"><img src="assets/features.jpg" width="90%" alt="Features"/></div>

## ✨ Features

| | Feature | Description |
|:-:|---|---|
| 🔐 | **Pairing Code** | Link with a phone number, no QR needed |
| 📱 | **Multi-Device** | Works with WhatsApp multi-device |
| 📢 | **Newsletter** | WhatsApp channels support |
| 🖼️ | **Media** | Send and receive images, videos and files |
| 👥 | **Groups** | Full group management |
| ⚡ | **Lightweight** | No Selenium or Chromium |

## 📦 Installation

> [!IMPORTANT]
> Requires **Node.js 22** or newer.

```bash
npm install github:Mahmoud129785/Johan-s-Baileys
```

## 🚀 Quick Start

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

> [!WARNING]
> Never publish your session files (`session/`) or authentication data.

## 🧪 Tests

```bash
npm test
```

## 📢 Johan Channel

<div align="center">

```
120363429822131088@newsletter
```

</div>

## 📊 Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mahmoud129785&repo=Johan-s-Baileys&theme=tokyonight&hide_border=true"/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Mahmoud129785&theme=react-dark&hide_border=true&area=true" width="100%"/>

</div>

## 💎 Credits

Customization and changes in this version: **Johan** ([Mahmoud129785](https://github.com/Mahmoud129785)).

Forked from [baileys-by-hulk](https://github.com/mzml-gg/baileys-by-hulk), built on [Baileys](https://github.com/WhiskeySockets/Baileys). All rights and contributions of the original authors are preserved. License: **MIT**.

<div align="center">

### ⭐ If you like this project, give it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:128C7E,100:25D366&height=120&section=footer" width="100%"/>

</div>
