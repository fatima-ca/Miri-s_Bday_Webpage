export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fondo radial */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>
      
      <section className="flex-grow relative z-10">
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          
        
          {/* Reproductor Spotify - Centrado debajo del contenido */}
          <div className="mt-8 w-full max-w-2xl px-4">
            <iframe 
              style={{borderRadius:"12px"}} 
              src="https://open.spotify.com/embed/track/3gFcGnU4kTdMYLXDjH1TK8?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="mx-auto shadow-lg"
            ></iframe>
          </div>

          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-mono">© 2025 Miri's Birthday - Made with 💖</p>
        </div>
      </footer>
    </div>
  );
}