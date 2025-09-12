import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing";

export default function App() {
  useEffect(() => {
    const paramKey = 'ref';
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get(paramKey);

    if (email && window.gtag) {
      // Send email as user_property to GA4
      window.gtag('set', 'user_properties', {
        ref_email: email,
      });

      // Optional: Clean the URL (removes ?ref=email from address bar)
      urlParams.delete(paramKey);
      const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Landing />
    </>
  );
}
