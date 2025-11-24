import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "Spott",
  description: "Build by niha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-teal-900 to-stone-600 text-white antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >   
        {/*/-- Header ---*/}
        <Header/>
        <main className="min-h-screen container mx-auto pt-40 md:pt-32">
          {/*-- glow ---*/}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-700/50 rounded-full blur-3xl"/>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/50 rounded-full blur-3xl"/>
          </div>
          <div className="relative z-10 min-h-[60vh]">{children}</div>
          {/*/-- Footer ---*/}
          <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto">
            <div  className="mb-4 text-center text-sm text-gray-400">
              Made in 2025</div>
          </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
