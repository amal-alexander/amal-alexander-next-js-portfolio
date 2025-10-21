import React, { useEffect } from "react";

export default function UltraFrog() {
  // set page meta for indexing
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Ultra Frog | Amal Alexander Portfolio";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    const prevDesc = metaDescription?.content ?? null;

    if (metaDescription) {
      metaDescription.content =
        "Ultra Frog — next-generation web crawler and SEO analysis platform by Amal Alexander.";
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Ultra Frog — next-generation web crawler and SEO analysis platform by Amal Alexander.";
      document.head.appendChild(m);
    }

    // Open Graph tags (create or update)
    const setMeta = (attr: string, name: string, content: string) => {
      let el =
        document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("property", "og:title", "Ultra Frog | Amal Alexander Portfolio");
    setMeta(
      "property",
      "og:description",
      "Ultra Frog — next-generation web crawler and SEO analysis platform by Amal Alexander."
    );
    setMeta("property", "og:url", window.location.href);

    return () => {
      document.title = prevTitle;
      if (metaDescription && prevDesc !== null) {
        metaDescription.content = prevDesc;
      }
      // keep OG tags (optional cleanup skipped)
    };
  }, []);

  // Scroll to iframe section
  const scrollToEmbed = () => {
    const el = document.getElementById("ultra-frog-embed");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-10 mb-12 text-gray-900">
        <h1 className="text-4xl font-bold text-teal-600 mb-4 flex items-center gap-2">
          🐸 Ultra Frog – Website Content
        </h1>

        <h2 className="text-2xl font-semibold mb-3">Welcome to Ultra Frog</h2>
        <p className="mb-4 font-medium text-gray-800">
          Ultra Frog is a next-generation web crawler and SEO analysis platform
          built to simplify how websites are audited, analyzed, and optimized.
        </p>

        <p className="mb-4 font-medium text-gray-800">
          Founded by Amal Alexander, Ultra Frog combines powerful crawling
          technology with AI-driven insights, giving businesses, developers,
          and SEO professionals the clarity they need to stay ahead in search.
        </p>

        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4 font-medium text-gray-800">
          To make web crawling and SEO intelligence fast, transparent, and
          accessible to everyone. Ultra Frog is designed not just to collect
          data, but to make sense of it — so you can take smarter actions,
          faster.
        </p>

        <h3 className="text-xl font-semibold mb-2">What Ultra Frog Does</h3>
        <ul className="list-disc pl-6 mb-4 font-medium text-gray-800">
          <li>
            <strong>🚀 Lightning-Fast Crawling:</strong> Scan hundreds or
            thousands of pages in record time and uncover issues before they
            affect performance.
          </li>
          <li>
            <strong>🔎 In-Depth SEO Analysis:</strong> From broken links to
            duplicate content, Ultra Frog surfaces the problems that matter for
            rankings.
          </li>
          <li>
            <strong>📊 Competitor Insights:</strong> Benchmark your website
            against competitors to reveal keyword gaps, content opportunities,
            and technical weaknesses.
          </li>
          <li>
            <strong>🌐 Smart Visualization:</strong> Interactive diagrams and
            reports make even complex site structures easy to understand.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why Choose Ultra Frog?</h3>
        <ul className="list-disc pl-6 mb-4 font-medium text-gray-800">
          <li>Built for speed and scale.</li>
          <li>Powered by AI-driven analysis.</li>
          <li>Founded with passion for search technology by Amal Alexander.</li>
          <li>Designed to grow with your website.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          About the Founder – Amal Alexander
        </h3>
        <p className="font-medium text-gray-800">
          Amal Alexander is a technology enthusiast and innovator in SEO
          automation. With Ultra Frog, he set out to create a tool that bridges
          the gap between raw crawling power and actionable search insights.
        </p>

        <div className="mt-8">
          <button
            onClick={scrollToEmbed}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition"
          >
            Try Ultra Frog Live
          </button>
        </div>
      </div>

      <div id="ultra-frog-embed" className="w-full max-w-5xl mt-8">
        <iframe
          src="https://ultra-frog.onrender.com/"
          title="Ultra Frog"
          width="100%"
          height="700"
          className="rounded-lg shadow-lg border-2 border-teal-400"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}