import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing";
import Hotjar from "@hotjar/browser";

export default function App() {
  useEffect(() => {
    const paramKey = "ref";
    const urlParams = new URLSearchParams(window.location.search);
    const refValue = urlParams.get(paramKey);

    const toHex = (buffer) => {
      const bytes = new Uint8Array(buffer);
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        const current = bytes[i].toString(16).padStart(2, "0");
        hex += current;
      }
      return hex;
    };

    const hashSHA256 = async (text) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      return toHex(hashBuffer);
    };

    const processRef = async () => {
      if (!refValue || !window.gtag) return;

      if (refValue) {
        Hotjar.identify("visited", {
          email: refValue,
        });
      }

      const normalized = String(refValue).trim().toLowerCase();
      const pepper = import.meta.env.VITE_REF_PEPPER || "";
      const hashed = await hashSHA256(`${normalized}${pepper}`);

      window.gtag("set", "user_properties", {
        ref_code: hashed,
      });

      // Optional: Clean the URL (removes ?ref= from address bar)
      urlParams.delete(paramKey);
      const newUrl =
        window.location.pathname +
        (urlParams.toString() ? "?" + urlParams.toString() : "");
      window.history.replaceState({}, document.title, newUrl);
    };

    const initHotJar = () => {
      const siteId = 6520422;
      const hotjarVersion = 6;

      Hotjar.init(siteId, hotjarVersion);
    };

    initHotJar();
    processRef();
  }, []);
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Landing />
    </>
  );
}
