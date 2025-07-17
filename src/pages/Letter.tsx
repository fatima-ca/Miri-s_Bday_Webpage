const Letter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>
      
      <section className="flex-grow relative overflow-hidden py-8">
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
{/* Imagen "Cosas que pienso"*/}
          <img 
            src="cartas.svg" 
            className="w-[600px] h-auto mb-6 md:mb-10"
            alt="Cartas para Miri"
          />
        </div>
        {/* Contenedor principal para todas las cartas */}
        <div className="relative z-10 space-y-12 md:space-y-16 px-4 sm:px-8">
          
          
          {/* Carta 1 - Fátima */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Columna izquierda - Nombre del remitente */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                De: Fátima
              </h1>
              <div className="w-32 h-1 bg-pink-500 rounded-full mb-6"></div>
              <p className="text-xl text-gray-600">Para: Miri</p>
            </div>

            {/* Columna derecha - Carta en recuadro rosa */}
            <div className="flex items-center justify-center">
              <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-6 md:p-8 w-full max-w-2xl">
                <div className="text-gray-700 text-lg leading-relaxed text-left space-y-4">
                  <p>Querida, Miri. 
                    Te quiero desear un feliz cumpleaños, hoy el día de tu cumpleaños. 
                    ¿Sabías que el día en que tu naciste nacieron todas las flores?
                    Te quiero mucho miri. 
                    Eres una persona muy especial para mí. 
                    Me gusta mucho que me mandes mensajes de tu día, y me presentes nuevos personajes. 
                    Me gusta escuchar tus storytimes. 
                    Verdaderamente eres mi soulmate, tenemos muchas cosas en común y eso nos une UwU. 
                    Me gusta tu forma de pensar. Me gusta compartirte lo que sucede en mi día, y siempre sabes qué decir. Eres como un BL porque siempre eres MUY SOFT. Siempre te digo lo importante que eres en mi vida y te lo digo de nuevo para que no se te olvide. Ojalá pasemos más cumpleaños siendo amigas -o no, si no quieres-. Espero que descanses bien estas vacaciones y que tus ratas siempre te hagan caso.</p>
                </div>
                  {/* Imagen "Foto con Miri"*/}
                <img 
                  src="foto.svg" 
                  className="w-[200px] h-auto mb-6 md:mb-10"
                  alt="Miri"
                />
                <p className="text-right mt-6 text-gray-600 font-medium">
                  17-07-2025
                </p>
              </div>
            </div>
          </div>

          {/* Carta 2 - Carlos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Columna izquierda - Nombre del remitente */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                De: Xio
              </h1>
              <div className="w-32 h-1 bg-purple-500 rounded-full mb-6"></div>
              <p className="text-xl text-gray-600">Para: Miri</p>
            </div>

            {/* Columna derecha - Carta en recuadro morado */}
            <div className="flex items-center justify-center">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-6 md:p-8 w-full max-w-2xl">
                <div className="text-gray-700 text-lg leading-relaxed text-left space-y-4">
                  <p>Hola Miri,</p>
                </div>
                <p className="text-right mt-6 text-gray-600 font-medium">
                  17-07-2025
                </p>
              </div>
            </div>
          </div>

          {/* Carta 3 - Andrea */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Columna izquierda - Nombre del remitente */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                De: Att
              </h1>
              <div className="w-32 h-1 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-xl text-gray-600">Para: Miri</p>
            </div>

            {/* Columna derecha - Carta en recuadro azul */}
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-6 md:p-8 w-full max-w-2xl">
                <div className="text-gray-700 text-lg leading-relaxed text-left space-y-4">
                  <p>"Miri, come on" - By Att</p>
                  <iframe
  src="https://drive.google.com/file/d/147Afx2DKNmpLSg5uefk_FraQzn8krY27/preview"
  width="500" 
  height="360"
 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
                  
                </div>
                <p className="text-right mt-6 text-gray-600 font-medium">
                  17-07-2025
                </p>
              </div>
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
};

export default Letter;