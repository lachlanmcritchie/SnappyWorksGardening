# SnappyWorks Gardening

Website for **SnappyWorks Gardening** — Geelong, Victoria. Lawn mowing, weeding, pressure cleaning, hedge trimming and more.

## Tech stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- **shadcn/ui** components
- **React Hook Form** + **Zod** for forms
- **Resend** for contact/quote emails
- **Lucide** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command   | Description          |
|----------|----------------------|
| `npm run dev`   | Start dev server     |
| `npm run build` | Production build     |
| `npm run start` | Start production app |
| `npm run lint`  | Run ESLint           |

## Project structure (Phase 1 plan)

- `src/app/` — Pages (home, services, about, contact, quote)
- `src/components/` — layout, sections, forms, ui (shadcn)
- `src/lib/` — constants, services/locations data, schema, metadata, utils
- `src/actions/` — Server Actions (contact, quote)
- `src/content/` — Blog MDX (Phase 2)

See **CLAUDE.md** (or the improved architecture plan) for the full build order and phases.

---

## Troubleshooting

### Claude Code extension: "native binary not found"

If you see:

```text
ReferenceError: Claude Code native binary not found at .../resources/native-binary/claude.
```

This project is set up to work around that:

- **Workspace setting:** `.vscode/settings.json` sets `claudeCode.claudeProcessWrapper` to the path of the installed Claude Code native binary (2.1.71). That makes this workspace use that binary explicitly.
- **If the error persists:** Reload the window (`Cmd+Shift+P` → “Developer: Reload Window”) or fully quit Cursor and reopen this folder. If your extension installed to a different path, edit `.vscode/settings.json` and set `claudeCode.claudeProcessWrapper` to your binary path (e.g. `…/anthropic.claude-code-2.1.71-darwin-arm64/resources/native-binary/claude`).
- **Other options:** Update/reinstall the Claude Code extension, or use the extension’s **Troubleshooting** link. You can also use Cursor’s built-in AI (Composer/Chat) for this project; the site runs with `npm run dev` either way.
