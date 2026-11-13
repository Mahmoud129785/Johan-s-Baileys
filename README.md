# Johan’s Baileys

نسخة مطوّرة من مكتبة Baileys للربط مع WhatsApp Web، ضمن مستودع Johan.

## التثبيت

يتطلب Node.js 22 أو أحدث:

```bash
npm install github:Mahmoud129785/Johan-s-Baileys
```

## الاستخدام

```js
const makeWASocket = require('Baileys').default;
const sock = makeWASocket({});
```

راجع إعدادات التطبيق الذي يستخدم المكتبة لإدارة جلسة الاتصال ورمز الربط. لا تنشر ملفات الجلسة أو بيانات المصادقة.

## الاختبارات

```bash
npm test
```

## قناة Johan

`120363429822131088@newsletter`

## الحقوق والنسب

تعديلات هذه النسخة وتخصيصها: **Johan** ([Mahmoud129785](https://github.com/Mahmoud129785)).

هذا المستودع متفرّع من [baileys-by-hulk](https://github.com/mzml-gg/baileys-by-hulk)، المبني على Baileys. تُحفظ حقوق ومساهمات أصحاب المشروع الأصلي والمساهمين السابقين. ترخيص الحزمة: MIT كما هو مذكور في `package.json`.
