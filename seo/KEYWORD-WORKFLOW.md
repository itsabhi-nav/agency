# Keyword workflow

Client se naye keywords milne par unhe `KEYWORD-MAPPING.csv` mein add karein. Yeh file
planning aur tracking ke liye hai: ismein keyword likhne se website ya Google par apne aap
change nahi hota.

## Naya keyword add karne ki checklist

- [ ] Keyword aur uska matlab samjhein: visitor kya dhoondh raha hai?
- [ ] `KEYWORD-MAPPING.csv` mein keyword, intent, priority aur suitable `target_page` add karein.
- [ ] Check karein ki topic website ki actual service se relevant hai. Generic job keywords ko
      adult-creator service ke liye misleading tarike se target na karein.
- [ ] Page ka existing content dekhein; agar topic pehle se naturally covered hai toh
      exact phrase ko baar-baar add karna zaroori nahi hai.
- [ ] Zarurat ho toh relevant page ka title ya description `lib/seo/config.ts` mein update karein.
- [ ] Zarurat ho toh us page ke visible heading, content ya FAQ mein useful information add karein.
- [ ] New claims, platform rules aur business details verify karein; privacy, earnings ya ranking
      guarantee na likhein. Platform registration aur agency application ko alag rakhein.
- [ ] Build check karein aur changes deploy karein. Phir Search Console mein indexing aur
      query performance monitor karein.

## Page aur file kahan hain?

| Page | Title aur description | Visible content |
|---|---|---|
| Home (`/`) | `lib/seo/config.ts` mein `home` | `app/page.tsx`; shared content `lib/site.ts` |
| Apply (`/apply`) | `lib/seo/config.ts` mein `apply` | `app/apply/page.tsx` |
| Help (`/help`) | `lib/seo/config.ts` mein `help` | `app/help/page.tsx`; shared FAQ/privacy `lib/site.ts` |
| Creator guide (`/guides/how-to-become-model`) | `lib/seo/config.ts` mein `guide` | `app/guides/how-to-become-model/page.tsx` |

`lib/site.ts` ka kuch content multiple pages par use hota hai. Edit karne se pehle dekhein
ki change aur kahan dikhega. Naya page banana ho toh route, useful content, metadata,
internal link aur public-route registry sab set karein; sitemap us registry se banta hai.

## CSV bharne ka example

`KEYWORD-MAPPING.csv` ko spreadsheet ya text editor mein kholkar existing columns mein
ek row add karein:

| cluster | keyword | source_or_status | intent | priority | target_page | notes |
|---|---|---|---|---|---|---|
| Privacy | creator privacy options India | Client suggestion; demand unknown | Informational | P2 | /help | Relevant content check; verify platform settings before publishing |

Yeh example sirf process samjhane ke liye hai, verified search demand nahi. Priority P1
high, P2 medium aur P3 low planning priority hai; yeh ranking signal nahi hai. CSV ko text
editor mein edit karte waqt comma wale fields ko double quotes mein rakhein.

## Build aur deploy

Project folder `agency/agency` mein, actual deployment domain ke saath build run karein:

```bash
SITE_URL=https://your-actual-domain.example npm run build
```

Placeholder domain ko apne controlled production domain se replace karein. Build successful
hone ke baad apne normal deployment process se publish karein. Search Console verification
aur sitemap submission external steps hain; indexing ya ranking ki guarantee nahi hoti.

WordPress ke focus-keyword field ki tarah keyword list ek checklist hai, ranking control
nahi. Google meta-keywords tag ko ranking ke liye use nahi karta; title, description aur
useful visible content mein relevant language natural rakhein, keyword stuffing na karein.
