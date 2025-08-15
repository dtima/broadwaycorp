# 🚀 VERCEL PRODUCTION ENVIRONMENT SETUP

## Copy-Paste Environment Variables for Vercel Dashboard

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

### 🌐 Site Configuration
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://broadway-corp.com
Environment: Production
```

```
Name: NEXT_PUBLIC_DEFAULT_LOCALE
Value: en
Environment: Production
```

```
Name: NEXT_PUBLIC_SUPPORTED_LOCALES
Value: en,fr
Environment: Production
```

### 🔥 Firebase Client (Public Variables)
```
Name: NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyB7uNlFOwD6vcEC-XLZEum98taOMj3135o
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: broadway-corporation.firebaseapp.com
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: broadway-corporation
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: broadway-corporation.firebasestorage.app
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 362269714661
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:362269714661:web:a2da432beff1836af80c0c
Environment: Production
```

```
Name: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
Value: G-23QJFTL90F
Environment: Production
```

### 🔐 Firebase Admin SDK (Private Variables)
```
Name: FIREBASE_ADMIN_PROJECT_ID
Value: broadway-corporation
Environment: Production
```

```
Name: FIREBASE_ADMIN_CLIENT_EMAIL
Value: firebase-adminsdk-fbsvc@broadway-corporation.iam.gserviceaccount.com
Environment: Production
```

```
Name: FIREBASE_ADMIN_PRIVATE_KEY
Value: -----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD1EYkeLbG+Irlz
tqp2QPO/kjgpebUX4kCaraHkrbjDGEI4aQgkf8c7MjdA3jUXlh4HBXCJFYcNi2Ga
qqJhltMzjkThpgKLM9tUysVFZtFMbhnPGmuo3h0wuDVlYYpbenp5V9N9zcYhUBai
LmpYnqA4flrpi4WN2LS+BS+jdceN9KfooJBsmnVqhqfvLymy4V0FaAdp2wt1cquL
bzZUaxnS07LumeWWso+SsHWUyAIG84XD30ZA3wIzzuWiMCmiPonDhQ16Ni5FMkw2
psy3Y0pbBrtURvyaR8CaNxRmm+lVLQyGpWoehzGFIDWifjgIyB+E1fOjXUJ3NwAf
kOjLL2BpAgMBAAECggEAFJAbHEAjSNvrCa2LEg8TJMDlG33N1yox14i4K9LzzNLt
Q4R0nXNnSS1Ge5fphogfDuHC9o2q3lUSpIKqy1t3bz0BxJlEX1/DiJLXCKK+7xXR
7pG99NZmRp8+Q7pyfIiDXEklQsoQVN0+eO9CFxuAQB1CDZSaaTOEvuj6fVG1o9B4
eZffQ4HdFszU/G5T0JydepnEisSDhlKfa5fUn9aAdwUZdpyW5SRajb5qE4DLKHR0
HnJjbMfNH8wQDMIxhIOfl4oIoDYDp2iGvfIfn7mXb5FxIbJld2iSbqiQ+JgUGNp9
416BokXJFvg6d2Huxk7ImEd3Q6h4pNfHHEAY6OeH3QKBgQD7X+E5sMBxOlYdTxk7
kRfAVXNEpU+XNKNT5TUqRWYXPUr0io78hvTrgeSPNjh5Q5v1rpBummwGwprDQigs
gdZF0pC6kvs9k4YvZV0Z0gTDbjdcl6yyL8N3bmzNpRjOk80Hd2mg1soiuXZQpjfR
7XOjxiPPu+wlqfM0Ltbbyii/VwKBgQD5k/NkiurjPmRpmzq+LyzQcfs5pDvVU2DJ
7dyOhKfLiHkIVPTp0aBTeequLsGAmsPd+PrFoD83+yJbmSQ78QJCxRJMAHqtxsC6
nQObz/HFBUGshZkSm2WFZq5QkkHxgwMQSRTp4NW26cTsCIAGeUvgHLthEfU37Zmk
7UWolk3GPwKBgQCY9OCRQBH5U+vubaEG8+Sl7djz3jst4KO5evD8xbm3Tl57qowS
8PO7EhDHa9C1SQRvXEcaZfBxtJyDT5AudNqzJctXG/SwpUGzOVSLT5YCbOBXARve
WN3xoEmoYFtV5+2MK4ckjU32DzAFJv80R+5jqz9DOjAZQu5vxEiM+NgOhQKBgQDY
ZqGe5xj9iubT7uXDa/Imlv4nH7FFqjL9Q8J+zKUVRLL1N3zYlIu4dbi36RCdKxR0
DmOaIfVO2/ERjTquwq2cKXZQ8gVtUi1gYa50VpyioYktRvXP/W/MeJjigb6t41Qv
tb5tgCauoAnAQyqG8nuIykDqzQBbyyfyqk1A/XpYTwKBgQDc0e0CRFDaTY0sxfZQ
uWmjypB88RaVauF5H+DX+RmYeE/ZJeITSxq7a5qA0/HzixsnuqY5EHa9Vuifaixi
QsTM+bKy9DBgAOPM3L6GxzsjBMiYuGi2S0Jvr0BsDOuiFvJ/6QsiSebwGHfuBjTj
SuMQ7tNQDl3nq6YeHEczsQdGDQ==
-----END PRIVATE KEY-----
Environment: Production
```

## 🔥 CRITICAL: Firebase Console Setup

**MUST DO AFTER SETTING VERCEL ENVIRONMENT VARIABLES:**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select `broadway-corporation` project
3. Navigate to **Authentication** → **Settings** → **Authorized domains**
4. Click **Add domain**
5. Add: `broadway-corp.com`
6. Add: `www.broadway-corp.com`
7. Click **Save**

## ✅ Verification Steps

1. Deploy to Vercel (should build successfully)
2. Visit `https://broadway-corp.com/en/admin/sign-in`
3. Test login with admin credentials
4. Check Vercel Function logs if issues persist

## 🚨 Troubleshooting

If you get 500 errors:
1. Check Vercel → Project → Functions → View logs
2. Verify all environment variables are set correctly
3. Confirm Firebase authorized domains include your domain
4. Test Firebase connection in browser dev tools
