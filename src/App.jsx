import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
// Screens
import Landing from "./screens/Landing";

const analytics = Analytics({
  app: "abm-landing",
  plugins: [
    googleAnalytics({
      measurementIds: ["G-XXXXXXXXXX"], // <-- Replace with your GA4 Measurement ID
    }),
  ],
});

export default function App() {
  useEffect(() => {
    const paramKey = "ref";
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get(paramKey);

    if (email) {
      // Set user property (custom) in analytics
      analytics.identify(email, {
        ref_email: email,
      });

      // Optional: Clean the URL (removes ?ref=email from address bar)
      urlParams.delete(paramKey);
      const newUrl =
        window.location.pathname +
        (urlParams.toString() ? "?" + urlParams.toString() : "");
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Landing />
    </>
  );
}
