import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import { DeviseProvider } from "@/components/providers/DeviseProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { HeaderLayout } from "@/components/ui/HeaderLayout";
import { FooterLayout } from "@/components/ui/FooterLayout";
import { CartProvider } from "@/components/providers/CartProvider";
import { ModeToggle } from "@/components/ModeToggle";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS - Home",
  description: "List of products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " flex min-h-screen flex-col"}>
        <DeviseProvider>
          <TanstackProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
            >
              <ModeToggle />
              <Toaster />
              <CartProvider>
                <HeaderLayout />
                {children}
                <FooterLayout />
              </CartProvider>
            </ThemeProvider>
          </TanstackProvider>
        </DeviseProvider>
      </body>
    </html>
  );
}
