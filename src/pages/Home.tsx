

export default function Home() {
  return (
    <div>
      <section className="bg-bannerImg bg-repeat bg-cover bg-bottom w-full h-screen"> 
        <div className="container mx-auto flex items-end">
          <img src={"./public/titlebanner.png"} className="w-64 h-auto" />
        </div>
      </section>

      <footer className="bg-darkpurple text-pewterblue">
        <div className="container mx-auto py-4 text-center">
          <p>&copy; 2025 Miri's Bday. All rights reserved. Te quiero mucho.</p>
        </div>
      </footer>
    </div>
  )
}