<div align="center">

# Online Diff Tool

The no-nonsense diff tool for developers. Instantly compare text and code snippets
in a clean, distraction-free environment. No ads, no bloat, just the diff.

[![CI](https://github.com/AdiRishi/online-diff-tool/actions/workflows/ci.yml/badge.svg)](https://github.com/AdiRishi/online-diff-tool/actions/workflows/ci.yml) ![GitHub License](https://img.shields.io/github/license/AdiRishi/online-diff-tool) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AdiRishi/online-diff-tool/pulls)

</div>

---

## ✨ Features

- 🔍 **Side-by-Side Diff** — Compare original and modified text with clear visual highlighting
- 📝 **Inline Diff** — View changes inline for a compact comparison
- 🎨 **Syntax Highlighting** — Code-aware diffing with language detection
- 🌙 **Dark & Light Themes** — Easy on the eyes, day or night
- ⚡ **Instant Results** — No waiting, no page reloads
- 🚫 **No Distractions** — Zero ads, zero tracking, zero bloat

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 22.x or later
- [pnpm](https://pnpm.io/) 10.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/AdiRishi/online-diff-tool.git
cd online-diff-tool

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at **http://localhost:3000**

---

## 🛠️ Tech Stack

| Category       | Technology                                                          |
| -------------- | ------------------------------------------------------------------- |
| **Framework**  | [TanStack Start](https://tanstack.com/start) (React meta-framework) |
| **UI Library** | [React 19](https://react.dev)                                       |
| **Build Tool** | [Vite 7](https://vite.dev)                                          |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com)                           |
| **Components** | [shadcn/ui](https://ui.shadcn.com) (base-vega style)                |
| **Icons**      | [Lucide React](https://lucide.dev)                                  |
| **Deployment** | [Cloudflare Workers](https://workers.cloudflare.com)                |

---

## 🔧 Development

### Available Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start development server on port 3000    |
| `pnpm build`   | Build for production                     |
| `pnpm preview` | Preview production build locally         |
| `pnpm test`    | Run tests with Vitest                    |
| `pnpm lint`    | Run ESLint                               |
| `pnpm format`  | Format code with Prettier                |
| `pnpm check`   | Run all checks (format, lint, typecheck) |
| `pnpm clean`   | Clean build artifacts                    |
| `pnpm deploy`  | Deploy to Cloudflare Workers             |

### Adding UI Components

This project uses [shadcn/ui](https://ui.shadcn.com). To add a new component:

```bash
npx shadcn@latest add <component-name>
```

---

## 🌐 Deployment

### Cloudflare Workers

The project is configured for deployment to Cloudflare Workers:

```bash
pnpm build
pnpm deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️</sub>
</div>
