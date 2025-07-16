export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fondo radial */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>

      <section className="flex-grow relative z-10">
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Imagen "Canciones que pienso"*/}
          <img 
            src="pienso2.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Miri"
          />

          {/* Imagen "Cuando pienso en miri"*/}
          <img 
            src="cuando2.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Miri"
          />

          {/* Texto debajo de imagen */}
          <p className="text-xl md:text-2xl font-mono text-gray-800 mt-4 mb-10">
            Hola, Miri, hora México. Esta es una selección especial de canciones que me recuerdan a tí.
            Espero a tí también te gusten. 

          </p>
          {/* Contenedor para los reproductores */}
          <div className="w-full max-w-2xl space-y-6">
            {/* Primer reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/ArmDp-zijuc?si=ebuc9yBSmWi79UJk" 
              title="Super Shy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Segundo reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/7HDeem-JaSY?si=EaA4r2mK9n_Ssp6B" 
              title="Queencard"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Tercer reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/leevExpA8ec?si=ou2HLX2MTIXj32JC" 
              title="2gether"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Cuarto reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/XKcfah5Q10I?si=I51fbPfbuKQrzOUF" 
              title="Too cute to handle" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
              </iframe>
            </div>

            {/* Quinto reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/fqBAzCH4-9g?si=NNv9GMTTQD113HL1" 
              title="Roller coaster" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
              </iframe>
            </div>

            {/* Sexto reproductor */}
            <div className="w-full">
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/BVVfMFS3mgc?si=GQnZvzcRnlLHvG04" 
              title="Heart Attack"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Séptimo reproductor */}
            <div className="w-full">
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/-sVB91NTa4A?si=GRt1-EAmwGahOMiz" 
              title="Dancing Queen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Octavo reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/kPa7bsKwL-c?si=RrLt4vFI9YPDCnP6" 
              title="Die with a smile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
              </iframe>
            </div>

            {/* Noveno reproductor */}
            <div className="w-full">
              <iframe 
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Wg92RrNhB8s?si=XDR3ggzuUlkfHY7V" title="One last time"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>

            {/* Decimo reproductor */}
            <div className="w-full">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/A0j06l8H1os?si=tMpf7gQH4rg0FNCg"
              title="Home"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>              
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-mono">© 17-07-2025 Miri's Birthday - Made with 💖</p>
        </div>
      </footer>
    </div>
  );
}