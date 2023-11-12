import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { HeaderContainer } from "@/components/styledComponents/Header";
import { FooterContainer } from "@/components/styledComponents/Footer";
import { Span } from "@/components/styledComponents/Text";
import { Button } from "@/components/styledComponents/Button";
import { ShoppingCart } from "lucide-react";
import { DeviseProvider } from "@/components/providers/devise";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { ThemeProvider } from "@/components/providers/theme";

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
              defaultTheme="dark"
              disableTransitionOnChange
            >
              <HeaderContainer>
                <Span $fontWeight={600} $fontSize={32}>
                  MKS{" "}
                  <Span $fontSize={16} $fontWeight={300}>
                    Sistemas
                  </Span>
                </Span>
                <Button $variant="secondary" className="gap-[10px]">
                  <ShoppingCart size={12} />{" "}
                  <Span $textColor="#000" $fontSize={12} $fontWeight={700}>
                    0
                  </Span>
                </Button>
              </HeaderContainer>
              {children}
              <FooterContainer>
                <Span $textColor="#000" $fontSize={12}>
                  MKS sistemas © Todos os direitos reservados
                </Span>
              </FooterContainer>
            </ThemeProvider>
          </TanstackProvider>
        </DeviseProvider>
      </body>
    </html>
  );
}
