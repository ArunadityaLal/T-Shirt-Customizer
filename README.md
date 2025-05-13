# POD T-Shirt Customizer 🎨👕

A fully responsive React + Vite + Tailwind CSS web app for customizing print-on-demand T-shirts.

## ✨ Features

- ⚙️ Customize Body Info: Height, Weight, and Build (lean, regular, athletic, big)
- 🖼️ Image Upload: Drag and drop or file upload with preview (small & regular size)
- 🧾 Custom Text: Add up to 3 lines of text for printing on T-shirt
- 🎨 Theme Switching: Use `Alt + Q` to switch between **Light**, **Dark**, and **Colorful** themes
- 📦 Form management powered by [`react-hook-form`](https://react-hook-form.com/)
- 💅 Styled using Tailwind CSS
- 📱 Fully responsive design

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd pod-tshirt-customizer
```
### 2. Install dependencies

```bash
npm install
```
### 3. Run the dev server

```bash
npm run dev
```
### 4. Build for production

```bash
npm run build
```
### 5. Deploy on Cloudflare Pages or Workers

If using **Cloudflare Pages**:
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

If using **Cloudflare Workers with Wrangler**, after building:

```bash
npx wrangler deploy --assets=./dist
```
