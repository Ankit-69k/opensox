---
title: "Critical Security Update & Best Practices Guide"
date: "2024-10-25"
excerpt: "Important security patches released this month, including fixes for authentication vulnerabilities. Learn about our new security features and best practices to keep your applications safe."
---

# Security Update: October 2024

**TL;DR:** We've released critical security patches. Please update to the latest version immediately.

## Critical Updates Released

### Patch v3.2.1 - High Priority ⚠️

Released: October 23, 2024

**What's Fixed:**

- 🔐 **CVE-2024-XXXX**: Authentication bypass vulnerability
- 🛡️ **CVE-2024-YYYY**: SQL injection in legacy endpoints
- 🔒 **CVE-2024-ZZZZ**: XSS vulnerability in markdown renderer

**Action Required:**

Update your dependencies immediately:

```bash
# For npm users
npm update @opensox/sdk

# For yarn users
yarn upgrade @opensox/sdk

# Verify your version
npm list @opensox/sdk
# Should show: @opensox/sdk@3.2.1 or higher
```

## Vulnerability Details

### 1. Authentication Bypass (CRITICAL)

**Severity:** 9.8/10 (Critical)

**Description:** An attacker could bypass authentication by manipulating JWT tokens.

**Affected Versions:** 3.0.0 - 3.2.0

**Fixed In:** 3.2.1

**Workaround** (if you can't update immediately):

```javascript
// Add additional token validation
const jwt = require("jsonwebtoken");

function validateToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Additional validation
    if (!decoded.userId || !decoded.exp) {
      throw new Error("Invalid token structure");
    }

    // Check token expiration with buffer
    if (decoded.exp < Date.now() / 1000 - 300) {
      throw new Error("Token expired");
    }

    return decoded;
  } catch (error) {
    console.error("Token validation failed:", error);
    return null;
  }
}
```

### 2. SQL Injection in Legacy Endpoints (HIGH)

**Severity:** 8.5/10 (High)

**Description:** Improperly sanitized user input in deprecated API endpoints.

**Affected Versions:** 2.x and 3.0.0 - 3.2.0

**Fixed In:** 3.2.1

The vulnerable code pattern looked like this:

```javascript
// ❌ VULNERABLE - DO NOT USE
app.get("/api/users", (req, res) => {
  const query = `SELECT * FROM users WHERE name = '${req.query.name}'`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});
```

Our fixed implementation:

```javascript
// ✅ SECURE - Use parameterized queries
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM users WHERE name = ?";
  db.query(query, [req.query.name], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});
```

### 3. XSS in Markdown Renderer (MEDIUM)

**Severity:** 6.5/10 (Medium)

**Description:** User-supplied markdown could execute arbitrary JavaScript.

**Affected Versions:** 3.0.0 - 3.2.0

**Fixed In:** 3.2.1

We now sanitize all rendered markdown:

```javascript
import DOMPurify from "dompurify";
import { marked } from "marked";

// ✅ SECURE
function renderMarkdown(content) {
  const rawHtml = marked(content);
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "p", "br", "ul", "ol", "li"],
    ALLOWED_ATTR: ["href", "target", "rel"],
  });
  return cleanHtml;
}
```

## New Security Features

### 1. Two-Factor Authentication (2FA)

We've added built-in 2FA support:

```javascript
import { OpenSoxClient } from "@opensox/sdk";

const client = new OpenSoxClient({ apiKey: "your-key" });

// Enable 2FA for a user
await client.auth.enable2FA({
  userId: "user123",
  method: "totp", // or 'sms'
});

// Verify 2FA code
const isValid = await client.auth.verify2FA({
  userId: "user123",
  code: "123456",
});
```

### 2. Rate Limiting

Protect your API from abuse:

```javascript
import { RateLimiter } from "@opensox/security";

const limiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests, please try again later.",
});

app.use("/api/", limiter);
```

### 3. Security Headers

We now automatically set secure headers:

```javascript
// Automatically applied by SDK v3.2.1+
const securityHeaders = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Content-Security-Policy": "default-src 'self'",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};
```

## Security Best Practices

### Input Validation

Always validate and sanitize user input:

```javascript
import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  age: Joi.number().integer().min(13).max(120),
});

// Validate input
const { error, value } = userSchema.validate(req.body);
if (error) {
  return res.status(400).json({ error: error.details[0].message });
}
```

### Secure Password Storage

Never store passwords in plain text:

```javascript
import bcrypt from "bcrypt";

// Hash password before storing
async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Verify password on login
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
```

### API Key Management

Keep your API keys secure:

```bash
# ❌ NEVER do this
const apiKey = 'sk_live_abc123xyz';

# ✅ Use environment variables
const apiKey = process.env.OPENSOX_API_KEY;
```

Create a secure `.env` file:

```bash
# .env
OPENSOX_API_KEY=sk_live_your_secret_key_here
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
```

And add it to `.gitignore`:

```bash
# .gitignore
.env
.env.local
.env.*.local
```

### Session Management

Implement secure session handling:

```javascript
import session from "express-session";
import RedisStore from "connect-redis";

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // HTTPS only
      httpOnly: true, // No JavaScript access
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      sameSite: "strict", // CSRF protection
    },
  })
);
```

## Security Checklist

Use this checklist for your applications:

- [ ] Update to OpenSox SDK v3.2.1 or higher
- [ ] Enable 2FA for all admin accounts
- [ ] Implement rate limiting on all API endpoints
- [ ] Use HTTPS everywhere (no mixed content)
- [ ] Validate and sanitize all user input
- [ ] Use parameterized queries (prevent SQL injection)
- [ ] Store passwords with bcrypt (12+ rounds)
- [ ] Keep dependencies up to date
- [ ] Set secure HTTP headers
- [ ] Implement proper error handling (no stack traces in production)
- [ ] Use environment variables for secrets
- [ ] Regular security audits
- [ ] Enable logging and monitoring
- [ ] Implement CORS properly
- [ ] Add CSRF protection

## Reporting Security Issues

Found a security vulnerability? We take security seriously.

**Please DO NOT open a public GitHub issue.**

Instead, email us at: **security@opensox.com**

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We'll respond within 24 hours and work with you to resolve the issue.

### Bug Bounty Program

We offer rewards for valid security reports:

| Severity | Reward           |
| -------- | ---------------- |
| Critical | $5,000 - $10,000 |
| High     | $2,000 - $5,000  |
| Medium   | $500 - $2,000    |
| Low      | $100 - $500      |

Read our full [Bug Bounty Program details](https://opensox.com/security/bounty).

## Compliance Updates

### SOC 2 Type II Certification

We're proud to announce we've achieved **SOC 2 Type II certification**!

This means:

- Annual third-party security audits
- Continuous monitoring and testing
- Regular penetration testing
- 24/7 security operations center

### GDPR Compliance

New GDPR tools available:

```javascript
// Export user data
await client.gdpr.exportUserData("user123");

// Delete user data (right to be forgotten)
await client.gdpr.deleteUserData("user123");

// Get consent status
const consents = await client.gdpr.getConsents("user123");
```

## Additional Resources

### Documentation

- [Security Best Practices Guide](https://docs.opensox.com/security)
- [API Authentication Docs](https://docs.opensox.com/auth)
- [Compliance Documentation](https://docs.opensox.com/compliance)

### Tools

- [OpenSox Security Scanner](https://github.com/opensox/security-scanner)
- [Dependency Checker](https://opensox.com/tools/dependency-check)
- [API Key Rotation Tool](https://dashboard.opensox.com/keys)

### Training

- [Security Webinar Recording](https://opensox.com/webinars/security-2024)
- [OWASP Top 10 Guide](https://docs.opensox.com/owasp)
- [Secure Coding Course](https://learn.opensox.com/security)

## Questions?

If you have any questions about this security update:

- 📧 Email: security@opensox.com
- 💬 Discord: [#security channel](https://discord.gg/opensox)
- 📖 Docs: [docs.opensox.com/security](https://docs.opensox.com/security)

---

**Stay safe and secure!** 🔒

_Last updated: October 25, 2024_
