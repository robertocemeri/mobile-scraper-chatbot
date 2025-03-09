import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ChatBox from '@/components/ChatBox';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8`}
    >
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">AI Chat Assistant</h1>
        <ChatBox />
      </main>
    </div>
  );
}
