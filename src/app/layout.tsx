import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { DeviseProvider } from "@/components/providers/devise";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { ThemeProvider } from "@/components/providers/theme";
import { HeaderLayout } from "@/components/ui/HeaderLayout";
import { FooterLayout } from "@/components/ui/FooterLayout";

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
      <body className={montserrat.className + " min-h-screen flex flex-col"}>
        <DeviseProvider>
          <TanstackProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
            >
              <HeaderLayout />
              {children}
              <FooterLayout />
            </ThemeProvider>
          </TanstackProvider>
        </DeviseProvider>
      </body>
    </html>
  );
}
