import React from "react";
import { Helmet } from "react-helmet-async";

export default function UltraFrog() {
  // Scroll to iframe section
  const scrollToEmbed = () => {
    const el = document.getElementById("ultra-frog-embed");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black px-4 py-8">
      <Helmet>
        <title>Ultra Frog | Amal Alexander Portfolio</title>
        <meta
          name="description"
          content="Experience Ultra Frog, a creative web embed by Amal Alexander."
        />
        <meta property="og:title" content="Ultra Frog | Amal Alexander Portfolio" />
        <meta
          property="og:description"
          content="Experience Ultra Frog, a creative web embed by Amal Alexander."
        />
        <link rel="canonical" href="https://amal-alexander.online/ultra-frog" />
      </Helmet>
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 mb-8 text-gray-900">
        <h1 className="text-4xl font-bold text-teal-600 mb-4 flex items-center gap-2">
          🐸 Ultra Frog – Website Content
        </h1>
        <h2 className="text-2xl font-semibold mb-2">Welcome to Ultra Frog</h2>
        <p className="mb-4 font-medium">
          Ultra Frog is a next-generation web crawler and SEO analysis platform built to simplify how websites are audited, analyzed, and optimized.
        </p>
        <p className="mb-4 font-medium">
          Founded by Amal Alexander, Ultra Frog combines powerful crawling technology with AI-driven insights, giving businesses, developers, and SEO professionals the clarity they need to stay ahead in search.
        </p>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4 font-medium">
          To make web crawling and SEO intelligence fast, transparent, and accessible to everyone. Ultra Frog is designed not just to collect data, but to make sense of it — so you can take smarter actions, faster.
        </p>
        <h3 className="text-xl font-semibold mb-2">What Ultra Frog Does</h3>
        <ul className="list-disc pl-6 mb-4 font-medium">
          <li>
            <strong>🚀 Lightning-Fast Crawling:</strong> Scan hundreds or thousands of pages in record time and uncover issues before they affect performance.
          </li>
          <li>
            <strong>🔎 In-Depth SEO Analysis:</strong> From broken links to duplicate content, Ultra Frog surfaces the problems that matter for rankings.
          </li>
          <li>
            <strong>📊 Competitor Insights:</strong> Benchmark your website against competitors to reveal keyword gaps, content opportunities, and technical weaknesses.
          </li>
          <li>
            <strong>🌐 Smart Visualization:</strong> Interactive diagrams and reports make even complex site structures easy to understand.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Why Choose Ultra Frog?</h3>
        <ul className="list-disc pl-6 mb-4 font-medium">
          <li>Built for speed and scale.</li>
          <li>Powered by AI-driven analysis.</li>
          <li>Founded with passion for search technology by Amal Alexander.</li>
          <li>Designed to grow with your website.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">About the Founder – Amal Alexander</h3>
        <p className="font-medium">
          Amal Alexander is a technology enthusiast and innovator in SEO automation. With Ultra Frog, he set out to create a tool that bridges the gap between raw crawling power and actionable search insights. His vision is simple: give everyone — from small site owners to enterprise SEOs — the tools to compete in today’s evolving search landscape.
        </p>
        <button
          onClick={scrollToEmbed}
          className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold shadow hover:bg-teal-600 transition"
        >
          Try Ultra Frog Live
        </button>
      </div>
      <div id="ultra-frog-embed" className="w-full max-w-4xl mt-16">
        <iframe
          src="https://ultra-frog.onrender.com/"
          title="Ultra Frog"
          width="100%"
          height="600"
          className="rounded-lg shadow-lg border-2 border-teal-400"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}