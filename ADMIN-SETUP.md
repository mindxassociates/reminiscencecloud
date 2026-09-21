# Administrator setup

1. Create a GitHub repository owned by the website owner and upload this project to the `main` branch.
2. In repository Settings → Pages, select **GitHub Actions** as the source.
3. Confirm the deployment workflow succeeds and review the temporary GitHub Pages address.
4. Connect the repository in Pages CMS. Give the therapist editor access only if supported by the selected Pages CMS account plan.
5. Complete every item in `LAUNCH-CHECKLIST.md` and obtain owner approval before changing DNS.
6. Record all existing DNS entries, especially MX, SPF, DKIM, and DMARC email records. Add the GitHub Pages records required for the domain without deleting email records.
7. Add the custom domain in GitHub Pages, verify DNS and HTTPS, then place a `CNAME` file in `public/` if GitHub requires it for this setup.

## Preview path and final domain

The included workflow is ready for `https://projects.mindx.us/reminiscencecloud/`. It sets `SITE_URL` to `https://projects.mindx.us` and `BASE_PATH` to `/reminiscencecloud`, so navigation, images, styles, metadata, redirects, robots, and the sitemap all use the project folder correctly.

When the site moves to the root domain, edit only these two workflow values:

```yaml
SITE_URL: https://reminiscencecloud.com
BASE_PATH: /
```

No page or asset paths need to be rewritten.

## Recovery and offboarding

Keep the old website active until the replacement is approved and verified. Protect `main`, retain repository owner access, and review collaborators when roles change. Revert a content mistake through Git history; restore DNS from the recorded values if cutover fails.
