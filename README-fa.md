# راه‌اندازی PWA پنل والدین

## مرحلهٔ ۱: Apps Script
1. فایل `api.gs` را به پروژهٔ Apps Script اضافه کنید (کد قبلی دست‌نخورده می‌ماند).
2. Deploy ← Manage deployments ← ویرایش ← Version: New version ← Deploy
   (Execute as: Me — Who has access: Anyone)
3. آدرس Web App را (که به `/exec` ختم می‌شود) کپی کنید.

## مرحلهٔ ۲: تنظیم آدرس
در فایل `config.js` مقدار `API_URL` را با آدرس بالا عوض کنید.

## مرحلهٔ ۳: GitHub Pages
1. یک مخزن بسازید و همهٔ فایل‌های این پوشه را (شامل `.nojekyll` و پوشهٔ `.well-known`) در ریشهٔ مخزن آپلود کنید.
2. Settings ← Pages ← Branch: main ← Save
3. بعد از دقایقی آدرس `https://USERNAME.github.io/REPO/` فعال می‌شود. آن را در Chrome گوشی تست کنید (ورود، نمرات، غیبت، گزارش روزانه).

## مرحلهٔ ۴: PWABuilder
1. آدرس بالا را در pwabuilder.com وارد کنید ← Package for stores ← Android.
2. Package ID مثل `ir.school.parents` انتخاب کنید و گزینهٔ امضا (Signing key) را «New» بگذارید.
3. فایل zip شامل APK، AAB و `assetlinks.json` را دانلود کنید. **فایل keystore و رمزش را حتماً نگه دارید** (برای به‌روزرسانی‌های بعدی لازم است).
4. محتوای `assetlinks.json` دانلودشده را جایگزین `.well-known/assetlinks.json` در مخزن کنید (برای حذف نوار آدرس).

## نکته
GitHub Pages در پوشهٔ `.well-known` با `.nojekyll` درست سرو می‌شود. اگر آدرس مخزن شما `USERNAME.github.io/REPO` است، در PWABuilder همان آدرس کامل را بدهید.
