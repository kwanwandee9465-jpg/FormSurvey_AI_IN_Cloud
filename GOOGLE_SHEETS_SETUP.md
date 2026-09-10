# เชื่อมแบบสอบถามกับ Google Sheets

1. สร้าง Google Sheet เปล่า 1 ไฟล์ แล้วเปิดเมนู **Extensions → Apps Script**
2. ลบโค้ดเดิม แล้ววางโค้ดจากไฟล์ `Code.gs` ในโปรเจกต์นี้ จากนั้นกด Save
3. กด **Deploy → New deployment → Web app**
4. ตั้งค่า **Execute as: Me** และ **Who has access: Anyone** แล้วกด Deploy
5. คัดลอก Web app URL ที่ลงท้ายด้วย `/exec`
6. นำ URL ไปใส่ใน `config.js`:

```js
window.GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/DEPLOYMENT_ID/exec';
```

7. Commit/push ไฟล์ทั้งหมดขึ้น GitHub Pages

เมื่อผู้ตอบกดส่ง ระบบจะสร้างชีตชื่อ `Responses` อัตโนมัติ และบันทึก Timestamp, ภาษา และคำตอบ HC1–DV5 เป็นคะแนน 1–5 ในแต่ละคอลัมน์

แบบสอบถามนี้ไม่ได้ส่งชื่อ อีเมล หมายเลขโทรศัพท์ หรือข้อมูลที่ระบุตัวบุคคลได้
