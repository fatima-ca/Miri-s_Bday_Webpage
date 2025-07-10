export default function Playlist() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#ffff_25%,#6777B6_100%)]"></div>
      <section className="flex-grow relative overflow-hidden">
        
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Mi Playlist</h1>
          <p className="text-lg text-gray-700">¡Disfruta de la mejor música!</p>
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