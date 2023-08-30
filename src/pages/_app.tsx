import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from 'next/app'
import "../../dist/output.css";
import {ThemeProvider as NextThemesProvider} from "next-themes";

function MyApp({ Component, pageProps } : AppProps) {
  return (
    // Use at the root of our app
    <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <Component {...pageProps} />
        </NextThemesProvider>
    </NextUIProvider>
  );
}
export default MyApp;