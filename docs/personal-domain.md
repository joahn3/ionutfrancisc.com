# Personal and family domain — francisc.pro

Decision recorded: 2026-11-07. Owner: Ionuț Francisc.

## Intended public identity

- Personal/professional website: `https://ionut.francisc.pro/`.
- Personal email: `ionut@francisc.pro`.
- Root domain `francisc.pro`: initially may redirect to the personal website;
  later it may host a simple family landing page. This redirect is proposed,
  not configured.
- Existing hosting stays on the Netlify site `ionut-francisc` in account
  `joahn3`; domain registration is at Vercel and DNS is being moved to Cloudflare.
- Canonical identity decisions are maintained in the private repository
  `joahn3/iif-identity-spine`, especially `identity/identity.json` and
  `docs/personal-domain.md`.

## Uses and priority

| Use | Intended address | State |
| --- | --- | --- |
| Personal portfolio | `ionut.francisc.pro` | Configured at Netlify; DNS/HTTPS acceptance pending |
| Personal email | `ionut@francisc.pro` | Forwarding destination verified; routing not active |
| Family email aliases | `prenume@francisc.pro` | Future option; destination chosen separately per person |
| RO/EN CV and professional profile | `ionut.francisc.pro/cv` | Proposed stable page; verify routes before using |
| Public demonstrations | `lab.francisc.pro` | Future option; only deliberately public examples |
| Permanent professional links | `ionut.francisc.pro/linkedin` | Proposed redirect; not configured |
| Private personal services | `home.francisc.pro` | Future option requiring authenticated access |

Priorities: finish website and incoming email; prepare the RO/EN CV/portfolio;
then align the website address in CV, LinkedIn, GitHub and email signatures.
These ideas do not authorize automatic provisioning, public exposure or spending.

## Verified state on 2026-11-07

- `francisc.pro` is registered in Vercel team `firacode--projects`; auto-renew
  was observed OFF. The user selected the free first-year Pro benefit. Renewal
  after that first year is not assumed free.
- Cloudflare Free zone exists; the `ionut` CNAME is DNS only and points to
  `ionut-francisc.netlify.app`. The assigned Cloudflare nameservers are
  `alaric.ns.cloudflare.com` and `betty.ns.cloudflare.com`.
- Vercel accepted the nameserver update, but the `.pro` parent still returned
  the original Vercel nameservers at the latest check. Cloudflare reports pending
  activation. Do not treat the accepted update as completed delegation.
- Netlify custom domain is configured on site
  `d8cbd19c-3f64-4c44-99f4-dca205623803`. No application deployment was performed.
- The owner-selected Gmail forwarding destination is verified in Cloudflare.
  The rule for `ionut@francisc.pro` and the service MX/SPF/DKIM setup remain
  pending zone activation. Real inbox delivery has not been verified.
- Email Routing provides the intended incoming forwarding flow. Sending as
  `ionut@francisc.pro` needs separate configuration and is not implemented.

## Website, SEO, CV and channel migration

The public site still uses `https://ionut-francisc.netlify.app/` in canonical,
hreflang, Open Graph, sitemap and robots.txt. Relevant sources are
`src/data/profile.ts`, `src/components/Page.tsx`, `next-sitemap.config.js`,
`public/llms.txt`, `public/_redirects`, `tests/site.spec.ts` and
`scripts/generate-public-cv.py`.

Before replacing public links:

1. Verify Cloudflare delegation and valid HTTPS on the new hostname.
2. Reconcile the local source with the currently published Netlify revision.
   At this audit, local HEAD was `0d7124985f44540a1c0e776cad6ba3eb1b4b213d`,
   while Production was `0059c5e88e8477b7a5c2c27f10c488ebd267306b`.
3. Update the affected SEO URLs, public links, host redirects and checks;
   retain RO/EN routes and the existing form behavior.
4. Update the CV generator and regenerate/review the downloadable PDF. Keep
   older application-specific CV revisions rather than overwriting history.
5. Verify Netlify form acceptance and the authorized notification destination;
   delivery requires an actual inbox receipt, not only a registered form.
6. Update the LinkedIn website contact field, identity contract active surface,
   GitHub profile and signature links after the new website is accepted.

Do not change the public contact email to the new alias until receiving works.
This document does not change runtime configuration or certify service health;
recheck the provider and live URL when resuming.

## Future domain option — francisc.net

Evaluate a future acquisition of `francisc.net`, as requested on 2026-11-07.
Availability, price and renewal cost are unverified. It is not purchased or
reserved; no purchase is authorized. Decide its role before changing any
canonical domain. Current migration target remains `ionut.francisc.pro`.

## Migration candidate — 2026-11-07

Authoritative baseline reconciled: GitHub main and Netlify Production both
pointed to `0059c5e88e8477b7a5c2c27f10c488ebd267306b`. Work is isolated in
`ionutfrancisc-domain-migration` because the older checkout has a corrupt remote
reference; existing local documentation remains preserved.

The candidate migrates canonical/hreflang/Open Graph/structured URLs, sitemap,
robots, llms.txt, host redirects and the public CV website string to the new
domain. Existing relative Netlify form actions, privacy consent and honeypots
are unchanged. Local export and RO/EN browser checks pass; hosted acceptance
is recorded separately in the task handoff rather than assumed here.

Cloudflare delegation and Email Routing alias are now configured. Netlify has
an issued certificate for the new hostname. DNS caches may still hold earlier
answers. Notification destination for the existing site forms is unchanged;
configured routing or form registration does not prove actual inbox delivery.
