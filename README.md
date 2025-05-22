# GPT Wrapper 🧠💬

A simple yet powerful example of how to integrate the [OpenAI API](https://platform.openai.com/docs) into a **Next.js + TypeScript** application. This project serves as a lightweight wrapper for building GPT-based chat interfaces with modern web technologies.

![Languages](https://img.shields.io/github/languages/top/seizeddev/gpt-wrapper?style=flat-square)  
![Last Commit](https://img.shields.io/github/last-commit/seizeddev/gpt-wrapper?style=flat-square)  
![License](https://img.shields.io/github/license/seizeddev/gpt-wrapper?style=flat-square)

## ✨ Features

- 🌐 Built with **Next.js** for server-side rendering  
- 🛠️ Fully typed using **TypeScript**  
- 🔌 Integrated with **OpenAI Chat API**  
- 🎨 Styled using **TailwindCSS** and [shadcn/ui](https://ui.shadcn.com/)  
- ⚙️ Clean project structure and best practices  
- 💬 Minimalistic chat UI to demonstrate GPT integration  

## 📂 Project Structure

```bash
├── app/                # Next.js app directory  
├── public/             # Static assets  
├── src/                # Source files including components and logic  
├── components.json     # UI component config  
├── tsconfig.json       # TypeScript config  
├── next.config.ts      # Next.js configuration  
├── package.json        # Project metadata and dependencies  
└── ...
``` 

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)  
- An OpenAI API key  

### Installation

```cmd
git clone https://github.com/seizeddev/gpt-wrapper.git  
cd gpt-wrapper  
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your-openai-api-key  
```

### Run the Dev Server

```cmd
npm run dev  
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🧠 How It Works

The app sends messages to the OpenAI API using the Chat Completion endpoint, displays the assistant's reply, and updates the conversation state dynamically using React components.

## 📸 Screenshots

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1145337074443108425/1375192398375817357/image.png?ex=6830cb39&is=682f79b9&hm=1a2fa14aa461525fa30935a7b4f7ea38d6f32252d9df1674c3bb58264f4dc217&" width="80%" alt="Chat UI Example" />
</div>

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [OpenAI API](https://platform.openai.com/docs/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  

## 🙌 Acknowledgments

- [OpenAI](https://openai.com/) for the powerful API  
- [shadcn/ui](https://ui.shadcn.com/) for modern React components  

## 📄 License

MIT License. See `LICENSE` for more information.


> Practice project by [@seizeddev](https://github.com/seizeddev) – Happy Hacking!
