export default function Remains() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>
      <section className="flex-grow relative overflow-hidden">
        
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center p-8 text-center">
          
          {/* Imagen "Cosas que pienso"*/}
          <img 
            src="pienso.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Miri"
          />

          {/* Imagen "Cuando pienso en miri"*/}
          <img 
            src="cuando.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Miri"
          />

          {/* Contenedor para las imágenes adicionales*/}
          <div className="flex flex-col items-center gap-6 w-full max-w-[1500px] mx-auto">
            {/* Primera fila - 2 imágenes */}
            <div className="flex justify-center gap-6 w-full">
              <img 
                src="1.svg" 
                className="w-[300px] h-auto"
                alt="Imagen 1"
              />
              <img 
                src="2.svg" 
                className="w-[300px] h-auto"
                alt="Imagen 2"
              />
            </div>

            {/* Segunda fila - 3 imágenes */}
            <div className="flex justify-center gap-6 w-full">
              {[3, 4, 5].map((num) => (
                <img 
                  key={num}
                  src={`${num}.svg`} 
                  className="w-[300px] h-auto"
                  alt={`Imagen ${num}`}
                />
              ))}
            </div>

            {/* Tercera fila - 2 imágenes */}
            <div className="flex justify-center gap-6 w-full">
              {[6, 7].map((num) => (
                <img 
                  key={num}
                  src={`${num}.svg`} 
                  className="w-[300px] h-auto"
                  alt={`Imagen ${num}`}
                />
              ))}
            </div>

            {/* Cuarta fila - 3 imágenes (solo 1 en este caso para completar 10) */}
            <div className="flex justify-center gap-6 w-full">
              {[8, 9, 10].map((num) => (
                <img 
                  key={num}
                  src={`${num}.svg`} 
                  className="w-[300px] h-auto"
                  alt={`Imagen ${num}`}
                />
              ))}
            </div>
          </div>

          {/* Imagen "Todo me recuerda a ti"*/}
          <img 
            src="11.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Miri"
          />

          {/* Texto debajo de imagen */}
          <p className="text-xl md:text-2xl font-mono text-gray-800 mt-4 mb-10">
            Miri -hora México-, estás presente en cada momento de mi vida. Eres como un rayo de sol que ilumina mis mañanas. Eres mi recuerdo favorito. Espero siempre formemos nuevos momentos juntas.
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