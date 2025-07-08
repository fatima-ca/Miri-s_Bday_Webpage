export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <section className="flex-grow relative overflow-hidden">
        
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Título principal */}
          <h1 className="text-8xl md:text-9xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            MIRI
          </h1>
          
          {/* Mensajes de cumpleaños */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-5xl font-bold text-pink-600">¡Feliz Cumple!</p>
            <p className="text-4xl font-semibold text-purple-500">Happy Birthday!</p>
            <p className="text-6xl font-medium text-rose-500">생일 축하해</p>
            <p className="text-3xl italic text-violet-600">Alles Gute zum Geburtstag!</p>
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