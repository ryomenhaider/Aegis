import "./globals.css";

export const metadata = {
  title: "Aegis — Risk Intelligence Platform",
  description:
    "AI-powered risk intelligence and decision-support platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
