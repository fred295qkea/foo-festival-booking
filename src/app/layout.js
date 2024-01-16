import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foo Festival",
  description: "Booking site for Foo Festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
