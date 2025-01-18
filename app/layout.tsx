import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./context/user";
import AllOverlays from "./components/AllPOverlays";


export const metadata: Metadata = {
  title: "TikTok Clone",
  description: "TikTok Clone",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <UserProvider>
      
        <body>
          <AllOverlays/>
          {children}
        </body>
        
      </UserProvider>

    </html>
  );
}
