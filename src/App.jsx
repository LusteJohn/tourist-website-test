function App() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">nature_people</span>
            <span className="font-bold text-xl tracking-tight">Dummy Tourist Project</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            <a className="text-primary" href="#">Home</a>
            <a className="hover:text-primary transition-colors" href="#">Explore</a>
            <a className="hover:text-primary transition-colors" href="#">Events</a>
            <a className="hover:text-primary transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined p-2 hover:bg-primary/10 rounded-full transition-colors">search</button>
            <button className="bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">Book Now</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark/80 z-10"></div>
            <img
              alt="Scenic mountain landscape at sunset"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqbrBqoVLxR9J6DiyMj3jaC9P2thcAHIXeiCa2rKCfR6iDEVNDMEXfu8OHsx1d6X-pgh7iRqL_E6moSeM9_a6HTjaayAaZTMbYQyNbWUQ6mAEKswNYOmN47dTsL39M0WGwkOkjEHh9JwMkADvStLzcIVyHRJImQK_Z8_Maa-ohYxIjOgaTBjQD_ZrlJef5pUxquEI-jyoSigpQFhy-L6DWhsUzW1KsOAKNhMt5JcCOrPlrof9-g-EOuU7bImYl0TIUVv-Ze76I64E"
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <span className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Welcome to Paradise
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Discover <span className="text-primary">Dummy Tourist Project</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the breathtaking beauty, vibrant culture, and hidden wonders of our local gem. Your adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                Plan Your Visit
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Watch Video
              </button>
            </div>
          </div>
        </section>

        {/* Key Attractions */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Attractions</h2>
              <p className="text-slate-600 max-w-xl">From historical landmarks to natural wonders, explore the must-see spots that make our valley unique.</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-1 group" href="#">
              View all attractions <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Attraction 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img
                  alt="The Historic Pier"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlqH0aJTiEBDylpZpSnrD3eTv7Iv3gZ2cLf9LEWo4v9_sNe65hU4wq899DtP984yP8Z3O1XVYCBS_RbLwFGMV_L0CejKupBIk4lhFdATyllzJJkVP24GHj0dxbYVZNNggqgCEoUtZstWO7lMpsIxn_m1BqibTPg6cKHPLqbm3OhtheK23zXlsTsXcjRySpjzvajSFjkUmWN2kb51fmSzA3JsC2m0WwegyFwk0fRJ2rD1SuBfrKr2Krkd2N5IZyLF-potX5mrNAmHg"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background-dark/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Historical</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">The Historic Pier</h3>
              <p className="text-slate-500 text-sm">A timeless walk through local history and coastal views.</p>
            </div>
            {/* Attraction 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img
                  alt="Botanical Gardens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIMtj5Yvbya4UODxatSBd7L1aWxNHWjX-IbFzPT_OiLQmTq3mvbFQVgMeyM0wHPgjXyRCwFH7jXI3-7_SbJqMTpzde7rS1dulkW0Qf4OSdjmssFmkGP6Aq-r6U_b_e0LESWfJzIxRN9judxv51PV9Zuylmt4PaNJOFosKCb3jy40JG-BRGVC549dWYVgfckGfqhrXSPP-gGcirLfLBa52ggDsvIOJPatFO2pjZ1ooAiYKo_vy3nPcstyeXfMhQ3fQJHVGAvxQeOas"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background-dark/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Nature</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Botanical Gardens</h3>
              <p className="text-slate-500 text-sm">Discover exotic flora and peaceful sanctuaries.</p>
            </div>
            {/* Attraction 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img
                  alt="Mountain Trail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgKUE5_a-IXcwk8SMbHYsmqm0WSxAryO-fJsz5L8DKJ4YsHz5GqugqXrzzDQj2cNlCSEsXyy29f6IfN2nqjdpz9XYrGvY_TYZvLHYXTAiYOokGxrp18XZFeIgacxFufpEVpdKRZSWvS0GRW328zU7lBVNiJcFMUZBHHds4MaqW9bEMGpzF1SyaL9PEM9AIAbM93-2CCBa9sJgYxlNVUQ3ucfTW7K64tqPEf4dOci8LV3_ZLkTMAxI6N5KGdrek3YrIvmaWjb1NdeI"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background-dark/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Adventure</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Mountain Trail</h3>
              <p className="text-slate-500 text-sm">Scenic hiking routes for all experience levels.</p>
            </div>
            {/* Attraction 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img
                  alt="Sunset Bay"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXv78BDzFpOD1zxU7ZWaBNmPJk-eRZGFPqLbQ1rcVTPuoOb1oCOfXKx6kxFLHWXsTS9rtwN3UCm4ZcZvnUPgody6vaCm66Euh4dMcdFhKqT3YN4WT1j9PVHtZ-gJWwnGlUaeVevmlc1V-9P4T4UbH4tpib6qJQAsoi9x1CjBboIeDgMfQz0H6uBPggPwCZQSWthFZ8RxZUAYOaqg5O4FQj1Uf2jMXFy4kAeeWnGtHcsY1KBChnmaU_DEysT6DK39v6XzFOI9d_U94"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background-dark/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Leisure</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Sunset Bay</h3>
              <p className="text-slate-500 text-sm">The perfect spot for evening relaxation and views.</p>
            </div>
          </div>
        </section>

        {/* What's On Section */}
        <section className="bg-primary/5 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's On</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">There's always something happening in Verdant Valley. Join us for upcoming events, festivals, and community gatherings.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <div className="bg-background-light rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center justify-center bg-primary text-background-dark w-14 h-14 rounded-xl font-bold">
                    <span className="text-lg">15</span>
                    <span className="text-[10px] uppercase">OCT</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Harvest Moon Festival</h4>
                    <p className="text-primary text-sm font-medium">6:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  A celebration of local produce, live music, and family activities under the full moon.
                </p>
                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors">
                  Get Tickets
                </button>
              </div>
              {/* Event 2 */}
              <div className="bg-background-light rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center justify-center bg-primary text-background-dark w-14 h-14 rounded-xl font-bold">
                    <span className="text-lg">22</span>
                    <span className="text-[10px] uppercase">OCT</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Artist in the Park</h4>
                    <p className="text-primary text-sm font-medium">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Watch local painters capture the beauty of Verdant Valley live in the botanical gardens.
                </p>
                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors">
                  Learn More
                </button>
              </div>
              {/* Event 3 */}
              <div className="bg-background-light rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center justify-center bg-primary text-background-dark w-14 h-14 rounded-xl font-bold">
                    <span className="text-lg">05</span>
                    <span className="text-[10px] uppercase">NOV</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Eco-Trail Marathon</h4>
                    <p className="text-primary text-sm font-medium">08:00 AM Start</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Our annual mountain trail run promoting sustainable tourism and outdoor fitness.
                </p>
                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Branding & Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">nature_people</span>
                <span className="font-bold text-xl tracking-tight">Verdant Valley</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Preserving the natural heritage and promoting the unique culture of our beautiful valley since 1985.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                  <span className="text-sm">123 Nature Way, Verdant Valley</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">call</span>
                  <span className="text-sm">+1 (555) 012-3456</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">mail</span>
                  <span className="text-sm">hello@verdantvalley.com</span>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">Plan Your Trip</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Visitor Guide</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Opening Hours</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Sustainability Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Media Kit</a></li>
              </ul>
            </div>
            {/* Map Widget */}
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Our Location</h4>
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                <img
                  alt="Location Map"
                  className="w-full h-full object-cover opacity-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDijzpFcf4YHJdct2xIRLqXlLcVoMbhoZIVYa-coUmhKqRxg-pROh5FM4MbI-g2uMUtZ3hFVza94brXIgumlf50YrV2i2wD_QNTVbeWACnlTvQlGSRTjWB3x4nWnQpoBn51cFy3ZzFBWuULtwUKjE8XCDtpuPo3wTbAf3x7bN8z-77pV4oyaBCvauOupgmc68P38worR0b4wGQKRE3EvrGLvkXep_orOD6WActvoticjL-tVTYG5LaBQrkQfdJkKUN8B-q4HJYUMEI"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary p-2 rounded-full shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-background-dark">location_on</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  Interactive Map
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary hover:text-background-dark transition-all" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary hover:text-background-dark transition-all" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary hover:text-background-dark transition-all" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">© 2023 Verdant Valley Tourism Board. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background-light border-t border-primary/10 px-4 py-2 z-50">
        <div className="flex justify-around items-center">
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold">Explore</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined">event</span>
            <span className="text-[10px] font-bold">Events</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined">favorite</span>
            <span className="text-[10px] font-bold">Saved</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App