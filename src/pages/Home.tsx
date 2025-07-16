export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      
      {/* Fondo radial */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>
      
      <section className="flex-grow relative z-10">
        
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          
          {/* Imagen "Miri"*/}
          <img 
            src="mirititle.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"  // Más proporcional con h-auto
            alt="Miri"
          />

          {/* Contenedor texto */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 w-full max-w-5xl">
            {/* Textos - Contenedor alineado */}
            <div className="lg:space-y-7 text-left lg:w-1/2">  {/* Alineación izquierda */}
              <p className="lg:text-6xl font-bold italic leading-tight" style={{ color: '#bd1270' }}>¡Feliz Cumple!</p>
              <p className="lg:text-6xl font-bold italic leading-tight" style={{ color: '#bf0000' }}>Happy Birthday!</p>
              <p className="lg:text-7xl font-bold italic leading-tight" style={{ color: '#006375' }}>생일 축하해</p>
              <p className="lg:text-4xl font-bold italic leading-tight" style={{ color: '#82eb39' }}>Alles Gute zum Geburtstag!</p>
            </div>
            
            {/* Iamgen "pastel"*/}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="cake.svg" 
                className="w-[700px] h-auto mb-6 md:mb-10" 
                alt="Cake"
              />
            </div>

          </div>
          {/* Texto debajo de imagen */}
          <p className="text-xl md:text-2xl font-mono text-gray-800 mt-4 mb-10">
            Hola, Miri, hora México. Mi corazón de melón. 
            Hoy cumples 20 añitos -ya estás muy grande TnT-, y la distancia no me puede impedir darte un regalo, aunque nada puede superar el regalo que me diste: tu amistad. 
            Aún así intentaré competir con tu regalor y hacerte algo especial porque eres una persona especial UWU. Este es tu regalo, una página para tí, en colaboración de dos amistades más. 
            Espero que te guste, aún no soy papupro en hacer páginas web TnT. Visita cada sección en orden, es tu única instrucción ;D.
          </p>
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