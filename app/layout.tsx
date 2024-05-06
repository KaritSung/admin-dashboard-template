"use client"
import type { Metadata } from "next";
import {
  Poppins
} from "next/font/google";
import "./globals.css";
import Sidebar from "./component/sidebar";
import { LayoutDashboard } from "lucide-react";
import { ThemeProvider, createTheme } from "@mui/material";

const poppins = Poppins({
  weight: ['300', '600'], style: ["normal"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
      fontWeight: "300",
      fontSize: 16,
    },
  },
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>IOT Dashboard</title>
      <meta name='description' content='IOT Dashboard' />
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <div className="flex h-screen w-full">
            <div className="menu">
              <Sidebar />
            </div>
            <div className="content">
              <div className="inner-content">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
