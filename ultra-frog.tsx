import Head from 'next/head';

const UltraFrogPage = () => {
  return (
    <>
      <Head>
        <title>Ultra Frog Project | Amal Alexander</title>
        <meta
          name="description"
          content="An embedded web application from Ultra Frog, showcased in Amal Alexander's portfolio."
        />
        <meta property="og:title" content="Ultra Frog Project | Amal Alexander" />
        <meta
          property="og:description"
          content="Explore the embedded Ultra Frog project, a web application featured in my portfolio."
        />
        {/* You can add an og:image meta tag here with a URL to a preview image */}
        {/* <meta property="og:image" content="url_to_your_image.jpg" /> */}
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <iframe
          src="https://ultra-frog.onrender.com/"
          title="Ultra Frog Project"
          style={{ flexGrow: 1, border: 'none', width: '100%', height: '100%' }}
          allow="fullscreen"
        />
      </div>
    </>
  );
};

export default UltraFrogPage;