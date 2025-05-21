import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'; // ✅ Import Script component

export default function Home() {
  return (
    <>
      <Head>
        <title>Vicky__Melophile | Musician Profile</title>
        <meta name="description" content="Official profile of musician Vicky__Melophile" />
  
      </Head>

      {/* ✅ Bootstrap JS using <Script> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="container-fluid bg-dark text-light min-vh-100">
        {/* Header Section */}
        <header className="py-5 text-center">
          <h1 className="display-3 fw-bold">Vicky__Melophile</h1>
          <p className="lead">Musician | Composer | Performer</p>
        </header>

        {/* Videos Section */}
        <section className="py-4">
          <h2 className="text-center mb-4">My Performances</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div style={{ width: '540px', maxWidth: '100%' }}>
              <video
                controls
                className="rounded w-100"
                style={{ backgroundColor: '#000' }}
                width="540"
                height="960"
              >
                <source src="/videos/performance1.mp4" type="video/mp4" />
              </video>
            </div>
            <div style={{ width: '540px', maxWidth: '100%' }}>
              <video
                controls
                className="rounded w-100"
                style={{ backgroundColor: '#000' }}
                width="540"
                height="960"
              >
                <source src="/videos/performance2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-4">
          <h2 className="text-center mb-4">Gallery</h2>
          <div className="row g-3">
            <div className="col-md-4 col-6">
              <Image
                src="/image2.jpg"
                alt="Performance photo 1"
                width={400}
                height={300}
                className="img-fluid rounded"
                layout="responsive"
              />
            </div>
            <div className="col-md-4 col-6">
              <Image
                src="/image1.jpg"
                alt="Performance photo 2"
                width={400}
                height={300}
                className="img-fluid rounded"
                layout="responsive"
              />
            </div>
            <div className="col-md-4 col-6">
              <Image
                src="/image3.jpg"
                alt="Performance photo 3"
                width={400}
                height={300}
                className="img-fluid rounded"
                layout="responsive"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">About Me</h2>
              <p className="text-center">
                Hello! I am Vicky, a passionate musician known as Vicky__Melophile. I specialize in [your music genre].
                Music is my life and I love sharing my creations with the world.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center">
          <p>Connect with me:</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-light">Instagram</a>
            <a href="#" className="text-light">YouTube</a>
            <a href="#" className="text-light">Spotify</a>
          </div>
          <p className="mt-3">&copy; {new Date().getFullYear()} Vicky__Melophile</p>
        </footer>
      </div>
    </>
  );
}
