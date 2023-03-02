import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@project/styles/home.css";

// Wrappin app in recoil root so we can use recoil state
// in any component (global)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
