import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HabitCoach AI — Your Health Accountability Partner",
  description: "AI-powered accountability partner for health and fitness goals. Track habits, analyze streaks, and get personalized encouragement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6fab847-b2dc-473c-ad52-d43a814e7861"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
