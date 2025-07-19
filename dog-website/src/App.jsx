import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Phone, Mail, Clock, Instagram, Eye, X, Save, LogOut, Plus, Edit, Trash2, Loader2 } from 'lucide-react'

function App() {
  // State management
  const [activeSection, setActiveSection] = useState('home')
  const [selectedDog, setSelectedDog] = useState(null)
  const [showBooking, setShowBooking] = useState(false)
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' })
  const [isPublishing, setIsPublishing] = useState(false)

  // Site settings
  const [siteSettings, setSiteSettings] = useState({
    siteTitle: 'Hibrid Shopp',
    siteSubtitle: 'Prémium Kutyatenyésztés',
    phoneNumber: '+3670217885',
    email: 'shoppdogg583@gmail.com',
    address: 'Budapest, Magyarország',
    openingHours: 'Hétfő-Péntek: 8:00 - 22:00',
    whatsappNumber: '+3670217885',
    instagramHandle: '@hibridshopp',
    facebookPage: 'hibridshopp',
    footerText: '© 2024 Hibrid Shopp. Minden jog fenntartva.'
  })

  // Dogs data
  const [dogs, setDogs] = useState([
    {
      id: 1,
      name: 'Carlos',
      breed: 'Maltipoo',
      age: '8 hét',
      gender: 'Kan',
      price: '350.000 Ft',
      weight: '2-3 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Maltese, Apa: Toy Poodle',
      temperament: 'Barátságos, játékos és intelligens',
      available: true,
      description: 'Gyönyörű vörös-barna göndör szőrzet'
    },
    {
      id: 2,
      name: 'Joker',
      breed: 'Maltipoo',
      age: '10 hét',
      gender: 'Kan',
      price: '380.000 Ft',
      weight: '2.5-3.5 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Maltese, Apa: Toy Poodle',
      temperament: 'Energikus és szerető',
      available: true,
      description: 'Fehér-barna hosszú szőrzet'
    },
    {
      id: 3,
      name: 'Charlie',
      breed: 'Maltipoo',
      age: '9 hét',
      gender: 'Szuka',
      price: '370.000 Ft',
      weight: '2-3 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Maltese, Apa: Toy Poodle',
      temperament: 'Nyugodt és kedves',
      available: true,
      description: 'Krém-barna göndör szőrzet'
    },
    {
      id: 4,
      name: 'Fanto',
      breed: 'Cavapoo',
      age: '12 hét',
      gender: 'Kan',
      price: '400.000 Ft',
      weight: '3-4 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Cavalier King Charles Spaniel, Apa: Poodle',
      temperament: 'Társaságkedvelő és okos',
      available: true,
      description: 'Barna göndör szőrzet'
    },
    {
      id: 5,
      name: 'Max',
      breed: 'Uszkár',
      age: '14 hét',
      gender: 'Kan',
      price: '320.000 Ft',
      weight: '4-5 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Uszkár, Apa: Uszkár',
      temperament: 'Védelmező és hűséges',
      available: true,
      description: 'Fekete-barna rövid szőrzet'
    },
    {
      id: 6,
      name: 'Buddy',
      breed: 'Goldendoodle',
      age: '16 hét',
      gender: 'Szuka',
      price: '450.000 Ft',
      weight: '5-6 kg',
      image: '/api/placeholder/400/300',
      parents: 'Anya: Golden Retriever, Apa: Poodle',
      temperament: 'Barátságos és aktív',
      available: true,
      description: 'Arany göndör szőrzet'
    }
  ])

  // Gallery images
  const [galleryImages] = useState([
    { id: 1, src: '/api/placeholder/400/300', title: 'Carlos - Maltipoo', description: 'Gyönyörű vörös-barna göndör szőrzet' },
    { id: 2, src: '/api/placeholder/400/300', title: 'Joker - Maltipoo', description: 'Fehér-barna hosszú szőrzet' },
    { id: 3, src: '/api/placeholder/400/300', title: 'Charlie - Maltipoo', description: 'Krém-barna göndör szőrzet' },
    { id: 4, src: '/api/placeholder/400/300', title: 'Fanto - Cavapoo', description: 'Barna göndör szőrzet' },
    { id: 5, src: '/api/placeholder/400/300', title: 'Max - Uszkár', description: 'Fekete-barna rövid szőrzet' }
  ])

  // Bookings
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Kovács János', email: 'kovacs@email.com', phone: '+36301234567', date: '2024-01-15', time: '10:00', message: 'Érdekel a Carlos' },
    { id: 2, name: 'Nagy Anna', email: 'anna@email.com', phone: '+36301234568', date: '2024-01-16', time: '14:00', message: 'Szeretném megnézni a Joker-t' }
  ])

  // Admin functions
  const handleAdminLogin = () => {
    if (adminCredentials.username === 'Hibridadmin8' && adminCredentials.password === 'Hibridadmin9988@') {
      setIsAdminLoggedIn(true)
      setShowAdminLogin(false)
      setShowAdminPanel(true)
      setAdminCredentials({ username: '', password: '' })
    } else {
      alert('Hibás felhasználónév vagy jelszó!')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
    setShowAdminPanel(false)
  }

  const handleSaveAndShare = async () => {
    setIsPublishing(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Módosítások sikeresen mentve és megosztva!')
    } catch (error) {
      alert('Hiba történt a mentés során!')
    } finally {
      setIsPublishing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐕</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{siteSettings.siteTitle}</h1>
                <p className="text-sm text-gray-600">{siteSettings.siteSubtitle}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Főoldal' },
                { id: 'breeds', label: 'Fajták' },
                { id: 'available', label: 'Eladó Kutyák' },
                { id: 'gallery', label: 'Galéria' },
                { id: 'contact', label: 'Kapcsolat' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-orange-600 ${
                    activeSection === item.id ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => window.open(`tel:${siteSettings.phoneNumber}`, '_self')}
                className="border-2 border-green-500 hover:bg-green-50 text-green-600 hover:text-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl px-4 py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hívás most
              </Button>
              <Button 
                onClick={() => window.open(`tel:${siteSettings.phoneNumber}`, '_self')}
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3"
              >
                Időpont Foglalás
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Találd meg a tökéletes társadat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up">
            Professzionális kutyatenyésztés szeretettel és gondossággal. Maltipoo, Uszkár, Cavapoo és Goldendoodle fajtákra specializálódtunk.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {dogs.slice(0, 3).map((dog, index) => (
              <div key={dog.id} className="group cursor-pointer" onClick={() => setSelectedDog(dog)}>
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {dog.price}
                  </div>
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-80 object-cover bg-gradient-to-br from-orange-50 to-amber-50 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{dog.name}</h3>
                    <p className="text-lg opacity-90">{dog.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dogs Section */}
      <section id="available" className="py-20 px-4 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">Eladó Kutyáink</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minden kiskutyánk szeretettel nevelkedik családi környezetben, biztosítva a legjobb szocializációt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog) => (
              <Card key={dog.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-md border border-orange-100 rounded-3xl overflow-hidden">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {dog.price}
                  </div>
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-64 object-cover bg-gradient-to-br from-orange-50 to-amber-50 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-1">{dog.name}</h4>
                      <p className="text-lg text-gray-600">{dog.breed} • {dog.age}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{dog.gender}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{dog.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Súly: {dog.weight}</span>
                    <Button 
                      onClick={() => setSelectedDog(dog)}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl"
                    >
                      Részletek
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white/50 backdrop-blur-md relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">Galéria</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tekintse meg kiskutyáinkat különböző pillanatokban és környezetekben.
            </p>
            <Button 
              onClick={() => setShowFullGallery(true)}
              className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 text-lg"
            >
              <Eye className="w-5 h-5 mr-3" />
              Teljes Galéria Megnyitása
            </Button>
          </div>
          
          {/* Animated image carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-6">
              {[...galleryImages, ...galleryImages].map((image, index) => (
                <div 
                  key={`${image.id}-${index}`} 
                  className="flex-shrink-0 w-80 h-64 group cursor-pointer"
                  onClick={() => setSelectedGalleryImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover bg-gradient-to-br from-orange-50 to-amber-50 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                      <p className="text-xs opacity-75">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">Kapcsolat</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vegye fel velünk a kapcsolatot, és találja meg álmai kutyusát!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold text-gray-800 mb-8">Elérhetőségek</h4>
              <div className="space-y-6">
                {[
                  { 
                    icon: Phone, 
                    text: `${siteSettings.phoneNumber} (WhatsApp és Viber)`, 
                    color: "from-green-500 to-emerald-500",
                    link: `https://wa.me/${siteSettings.whatsappNumber.replace('+', '')}`,
                    phone: `tel:${siteSettings.phoneNumber}`
                  },
                  { icon: Mail, text: siteSettings.email, color: "from-blue-500 to-cyan-500", link: `mailto:${siteSettings.email}` },
                  { icon: Clock, text: siteSettings.openingHours, color: "from-purple-500 to-pink-500" },
                  { icon: Instagram, text: siteSettings.instagramHandle, color: "from-pink-500 to-rose-500", link: `https://www.instagram.com/${siteSettings.instagramHandle.replace('@', '')}` }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    {item.link ? (
                      <a 
                        href={item.phone || item.link} 
                        className="text-gray-700 text-lg font-medium hover:text-orange-600 transition-colors duration-300"
                        target={item.phone ? '_self' : '_blank'}
                        rel={item.phone ? '' : 'noopener noreferrer'}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700 text-lg font-medium">{item.text}</span>
                    )}
                  </div>
                ))}

                {/* Call Now button */}
                <div className="mt-8">
                  <a 
                    href={`tel:${siteSettings.phoneNumber}`}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="text-lg font-semibold">Hívás Most!</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-gray-800">Időpont Foglalás</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Foglaljon időpontot, hogy megismerje imádnivaló kiskutyáinkat
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl py-4 text-lg"
                    onClick={() => setShowBooking(true)}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Időpont Foglalása
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{siteSettings.siteTitle}</h3>
              <p className="text-gray-300 mb-4">{siteSettings.siteSubtitle}</p>
              <p className="text-gray-400">{siteSettings.footerText}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Elérhetőség</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 {siteSettings.phoneNumber}</p>
                <p>✉️ {siteSettings.email}</p>
                <p>📍 {siteSettings.address}</p>
                <p>🕒 {siteSettings.openingHours}</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Közösségi média</h4>
              <div className="space-y-2 text-gray-300">
                <p>📱 WhatsApp: {siteSettings.whatsappNumber}</p>
                <p>📷 Instagram: {siteSettings.instagramHandle}</p>
                <p>👥 Facebook: {siteSettings.facebookPage}</p>
              </div>
              {/* Admin login button */}
              <div className="mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAdminLogin(true)}
                  className="text-gray-500 hover:text-gray-300 text-xs"
                >
                  Admin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800">Admin Bejelentkezés</CardTitle>
              <CardDescription className="text-gray-600">
                Adja meg az admin hozzáférési adatokat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Felhasználónév
                </label>
                <input
                  type="text"
                  value={adminCredentials.username}
                  onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Felhasználónév"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jelszó
                </label>
                <input
                  type="password"
                  value={adminCredentials.password}
                  onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Jelszó"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <Button
                  onClick={handleAdminLogin}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl py-3"
                >
                  Bejelentkezés
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowAdminLogin(false)}
                  className="flex-1 rounded-xl py-3"
                >
                  Mégse
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Admin Panel */}
      {showAdminPanel && isAdminLoggedIn && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl font-bold">Admin Panel</CardTitle>
                  <CardDescription className="text-orange-100">
                    Teljes oldal szerkesztése és kezelése
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSaveAndShare}
                    disabled={isPublishing}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
                  >
                    {isPublishing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Mentés...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Mentés és Megosztás
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleAdminLogout}
                    className="border-white/30 text-white hover:bg-white/20"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Kijelentkezés
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAdminPanel(false)}
                    className="border-white/30 text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Site Settings */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Oldal Beállítások</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Oldal címe</label>
                      <input
                        type="text"
                        value={siteSettings.siteTitle}
                        onChange={(e) => setSiteSettings({...siteSettings, siteTitle: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefonszám</label>
                      <input
                        type="text"
                        value={siteSettings.phoneNumber}
                        onChange={(e) => setSiteSettings({...siteSettings, phoneNumber: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={siteSettings.email}
                        onChange={(e) => setSiteSettings({...siteSettings, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Dogs Management */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kutyák Kezelése</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {dogs.map((dog, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{dog.name}</h4>
                            <p className="text-sm text-gray-600">{dog.breed} - {dog.price}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const newPrice = prompt('Új ár:', dog.price)
                                if (newPrice) {
                                  const updatedDogs = [...dogs]
                                  updatedDogs[index].price = newPrice
                                  setDogs(updatedDogs)
                                }
                              }}
                              className="text-xs"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (confirm('Biztosan törli ezt a kutyát?')) {
                                  const updatedDogs = dogs.filter((_, i) => i !== index)
                                  setDogs(updatedDogs)
                                }
                              }}
                              className="text-xs text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bookings Management */}
                <div className="space-y-4 md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Foglalások Kezelése</h3>
                  <div className="grid md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                    {bookings.map((booking, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-800">{booking.name}</h4>
                            <p className="text-sm text-gray-600">{booking.email}</p>
                            <p className="text-sm text-gray-600">{booking.phone}</p>
                            <p className="text-sm text-gray-500">{booking.date} - {booking.time}</p>
                            <p className="text-xs text-gray-500">{booking.message}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              if (confirm('Biztosan törli ezt a foglalást?')) {
                                const updatedBookings = bookings.filter((_, i) => i !== index)
                                setBookings(updatedBookings)
                              }
                            }}
                            className="text-xs text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-3xl font-bold">Teljes Galéria</CardTitle>
                  <CardDescription className="text-orange-100">
                    Minden képünk egy helyen
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFullGallery(false)}
                  className="border-white/30 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedGalleryImage(image)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover bg-gradient-to-br from-orange-50 to-amber-50 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                        <p className="text-sm opacity-75">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default App

