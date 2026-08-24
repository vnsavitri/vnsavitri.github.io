# Custom domain setup for the portfolio

This guide connects the Astro site in `vnsavitri/vnsavitri.github.io` to a Namecheap domain and keeps the three archive sites working under the same home domain.

The site deploys through GitHub Actions. This repo does not need a `CNAME` file for this setup.

## Pick the canonical domain first

Use one domain as the public home. Do not keep two live versions unless you are happy to pay for both and maintain redirects.

### `veryvivid.xyz`

This is the chosen domain for the site. `.xyz` is a generic top-level domain, not a country code. It has an internet-native, experimental feel that fits the mix of AI, product, design, and archived work here. ([XYZ Registry](https://xyz.xyz/))

Namecheap currently lists `.xyz` with a one-year minimum and free Whois privacy. Renewal prices can change, and premium names may cost more than the standard rate, so the Namecheap renewal price for this exact domain is the source of truth. ([Namecheap `.xyz` information and prices](https://www.namecheap.com/domains/registration/gtld/xyz/))

The steps below use `veryvivid.xyz`. If the domain changes later, replace every instance of `veryvivid.xyz` with the new canonical domain.

### `veryvivid.ai` and `viv.sydney`

These were considered but are not the active path. `.ai` matches the current work but has a costly two-year renewal. `.sydney` is a strong local signal and may feel wrong if the site owner relocates. Keep one public home domain unless there is a clear reason to pay for and maintain another.

## 1. Verify the domain with GitHub

GitHub recommends verifying a custom domain before pointing DNS at it. ([GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages))

1. Sign in to GitHub as `vnsavitri`.
2. Open your profile menu and choose **Settings**.
3. In the sidebar, open **Pages**.
4. Click **Add a domain**.
5. Enter `veryvivid.xyz`.
6. GitHub will display a TXT record. Leave that page open.

## 2. Add the verification TXT record at Namecheap

1. Sign in to Namecheap.
2. Open **Domain List**.
3. Click **Manage** next to `veryvivid.xyz`.
4. Open **Advanced DNS**.
5. Under **Host Records**, click **Add New Record**.
6. Choose **TXT Record**.
7. Copy the host and value shown by GitHub exactly.

The record will look similar to this, but the value must come from GitHub:

| Type | Host | Value |
|---|---|---|
| TXT Record | `_github-pages-challenge-vnsavitri` | The exact value shown by GitHub |

Set TTL to **Automatic**, save it, then check it from Terminal:

```bash
dig _github-pages-challenge-vnsavitri.veryvivid.xyz TXT +short
```

Return to GitHub and click **Verify** once the TXT value appears. Keep this TXT record in place.

## 3. Update the site's canonical URL

Change this line in `astro.config.mjs`:

```js
site: 'https://vnsavitri.github.io',
```

to:

```js
site: 'https://veryvivid.xyz',
```

Then search for old public URLs:

```bash
rg -n "vnsavitri\\.github\\.io" .
```

Update public-facing and canonical references in `astro.config.mjs`, `src/layouts/Layout.astro`, `src/pages/projects/[slug].astro`, `scripts/og-card.svg`, `scripts/generate-og.mjs`, `public/robots.txt`, `public/llms.txt`, `README.md`, `CLAUDE.md`, and the three archive landing pages.

Do not change the GitHub repository name or username. Those can remain `vnsavitri.github.io` where they describe the repository itself.

For archive home links, use:

```html
<a href="https://veryvivid.xyz/" onclick="window.close();">
```

## 4. Build and deploy the URL update

From the repo directory, run:

```bash
npm run build
git diff --check
git status
```

If the build passes:

```bash
git add astro.config.mjs src public scripts README.md CLAUDE.md
git commit -m "chore: move site to custom domain"
git push origin main
```

The existing `.github/workflows/deploy.yml` workflow will build and publish the site.

## 5. Add the custom domain in GitHub Pages

1. Open <https://github.com/vnsavitri/vnsavitri.github.io>.
2. Go to **Settings → Pages**.
3. Confirm the source is **GitHub Actions**.
4. Under **Custom domain**, enter `veryvivid.xyz`.
5. Click **Save**.

GitHub says a `CNAME` file is not required for a custom GitHub Actions deployment. ([GitHub custom domain troubleshooting](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages))

## 6. Replace the Namecheap DNS records

Open **Namecheap → Domain List → Manage → Advanced DNS → Host Records**.

Remove only conflicting records for the `@` and `www` hosts. Keep existing MX records, email-forwarding records, unrelated TXT records, and the GitHub verification TXT record.

### Add four A records for the root domain

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

### Add the `www` record

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME Record | `www` | `vnsavitri.github.io` | Automatic |

Do not create a CNAME record for the bare `@` host. Namecheap warns that a bare-domain CNAME can interfere with other services, including email. ([Namecheap CNAME instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/))

GitHub recommends these four A records for the root domain and a CNAME from `www` to the GitHub Pages hostname. ([GitHub custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))

If Namecheap does not show an editable **Advanced DNS** panel, the domain is using different nameservers. Make the same changes at the provider listed under **Nameservers** instead.

## 7. Wait for DNS propagation

DNS changes often appear within minutes, but GitHub says propagation can take up to 24 hours.

Check the root records:

```bash
dig +short veryvivid.xyz A
```

You should see all four GitHub IP addresses.

Check `www`:

```bash
dig +short www.veryvivid.xyz CNAME
```

You should see:

```text
vnsavitri.github.io.
```

Check verification:

```bash
dig _github-pages-challenge-vnsavitri.veryvivid.xyz TXT +short
```

## 8. Enable HTTPS

1. Return to the repository's **Settings → Pages** screen.
2. Wait for GitHub to issue the certificate.
3. Tick **Enforce HTTPS**.

Certificate creation can take up to 24 hours. If DNS is correct and GitHub remains stuck, remove and re-add the custom domain to restart provisioning. ([GitHub HTTPS documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https))

If the domain has CAA records, they must allow `letsencrypt.org` for GitHub's certificate process. Do not change CAA records unless you know what other services use them.

## 9. Test the new domain

```bash
curl -IL https://veryvivid.xyz/
curl -IL https://www.veryvivid.xyz/
curl -IL https://veryvivid.xyz/archive/designr/index.html
curl -IL https://veryvivid.xyz/archive/design-sans-frontieres/index.html
curl -IL https://veryvivid.xyz/archive/berlin-3/index.html
```

In a browser, check that:

- `https://veryvivid.xyz/` loads with the HTTPS padlock.
- `https://www.veryvivid.xyz/` redirects to `https://veryvivid.xyz/`.
- `https://vnsavitri.github.io/` still loads or redirects to the new domain.
- The three archive cards open in new tabs.
- Archive pages can return home using their **Current site** or **Back to home** link.
- Archive images, CSS, and internal links still load.
- The sitemap uses the new domain.

Check the generated references:

```bash
curl -s https://veryvivid.xyz/ | rg "canonical|veryvivid.xyz"
curl -s https://veryvivid.xyz/robots.txt
curl -s https://veryvivid.xyz/sitemap-index.xml | head
```

## 10. Keep the old domain safe

Do not remove the GitHub repository or disable GitHub Pages after the custom domain is live. GitHub warns that a configured custom domain can be at risk if the Pages site is disabled. ([GitHub custom domain security](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))

Keep `vnsavitri.github.io` working as the fallback address. Update the site's own canonical URLs and public links to the chosen custom domain, but leave GitHub repository links alone.

## Reference links

- [GitHub: verify a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub: manage a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: secure a custom domain with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Namecheap: create a CNAME record](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
- [Namecheap: `.xyz` domain information and prices](https://www.namecheap.com/domains/registration/gtld/xyz/)
- [XYZ Registry](https://xyz.xyz/)
