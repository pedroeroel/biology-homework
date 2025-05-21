import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeciMen",
  description: "Biology Homework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className='flex flex-col items-center justify-between min-h-screen'
      >
        <Header pagetitle='this is just homework' />

        <main className="grow w-full p-24 bg-green-50 text-green-950 flex justify-center items-center">
        {children}
        </main>
          
        <Footer />
      </body>
    </html>
  );
}
