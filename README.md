# Ayush Patidar — Portfolio

A dark, editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Lucide, and Framer Motion-ready architecture. The first implementation intentionally keeps the core UI dependency-light and uses server routes for public GitHub data and contact form delivery.

## 1. Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Required personalization before launch

1. `src/data/site.ts`: review email, GitHub username, LinkedIn URL, and resume path. The supplied profile details have been added.
2. `src/data/projects.ts`: verify every contribution, stack item, status, and outcome. Keep confidential details generalized and never publish unverified metrics.
3. `.env.local`: set `GITHUB_USERNAME`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY`.
4. The supplied resume PDF is included at `public/resume/ayush-patidar-resume.pdf`. Replace it when you update your resume.
5. Set `NEXT_PUBLIC_SITE_URL` to your purchased domain in the deployment environment.
6. Update the LinkedIn URL and add the actual GitHub username.

## 3. GitHub integration

The server endpoint `/api/github` fetches public profile metadata and up to six recently updated owned repositories. Configure `GITHUB_USERNAME`. `GITHUB_TOKEN` is optional and must remain server-side. A visual GitHub section can be added to the homepage once the correct username is confirmed; do not show placeholder data as real activity.

## 4. Contact form

The form validates input on the server with Zod and sends email via Resend. Configure a verified sender domain and the environment variables shown in `.env.example`. Until configured, the API returns a clear setup message and the email fallback remains visible.

## 5. Content architecture

Project case studies currently live in `src/data/projects.ts` and are statically generated. The writing page contains editorial ideas, not fabricated published articles. MDX publishing can be added when the first reviewed article is ready.

## 6. Before production

- Add the real resume PDF.
- Replace all placeholder URLs and email addresses.
- Verify the project descriptions and personal contribution wording.
- Configure domain metadata and canonical URL.
- Configure Resend, GitHub environment variables, and analytics consent/privacy notice as required.
- Test contact form, spam protection, mobile navigation, keyboard access, and 404 behavior.
- Run `npm run build` and resolve any warnings.

## Notes

This is an implementation scaffold, not a deployed website. No domain has been purchased and no external accounts or credentials have been connected.

## 7. GitHub showcase UI

The homepage includes a client-side repository showcase backed by `/api/github`. It intentionally renders a setup message rather than fake repository data until a real username is configured.
