import React, { useState, useEffect } from 'react'
import './index.css'

function App() {
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Site settings
  const [siteSettings, setSiteSettings] = useState({
    siteTitle: 'HibridShopp',
    siteSubtitle: 'Premium Dog Breeding',
    phoneNumber: '+3670217885',
    email: 'shoppdogg583@gmail.com',
    address: 'Budapest, Hungary',
    openingHours: 'Monday-Friday: 8:00 - 22:00',
    whatsappNumber: '+3670217885',
    instagramHandle: '@hibridshopp',
    facebookPage: 'hibridshopp',
    footerText: '© 2024 HibridShopp. All rights reserved.'
  })

  // Dogs data with real information from reference site
  const [dogs, setDogs] = useState([
    {
      id: 1,
      name: 'Carlos',
      breed: 'Maltipoo',
      age: '8 weeks',
      gender: 'Male',
      price: '350,000 Ft',
      weight: '2-3 kg',
      image: '/src/assets/gallery/maltipoo_puppy_1.jpeg',
      parents: 'Mother: Maltese, Father: Toy Poodle',
      temperament: 'Friendly, playful and intelligent',
      available: true,
      description: 'Beautiful red-brown curly coat'
    },
    {
      id: 2,
      name: 'Joker',
      breed: 'Maltipoo',
      age: '10 weeks',
      gender: 'Male',
      price: '380,000 Ft',
      weight: '2.5-3.5 kg',
      image: '/src/assets/gallery/maltipoo_puppy_2.jpeg',
      parents: 'Mother: Maltese, Father: Toy Poodle',
      temperament: 'Energetic, loving and smart',
      available: true,
      description: 'White-brown long coat'
    },
    {
      id: 3,
      name: 'Charlie',
      breed: 'Maltipoo',
      age: '9 weeks',
      gender: 'Female',
      price: '370,000 Ft',
      weight: '2-3 kg',
      image: '/src/assets/gallery/maltipoo_puppy_3.jpeg',
      parents: 'Mother: Maltese, Father: Toy Poodle',
      temperament: 'Gentle, affectionate and calm',
      available: true,
      description: 'Cream-brown curly coat'
    },
    {
      id: 4,
      name: 'Fanto',
      breed: 'Cavapoo',
      age: '12 weeks',
      gender: 'Male',
      price: '400,000 Ft',
      weight: '3-4 kg',
      image: '/src/assets/gallery/cavapoo_adult_1.jpeg',
      parents: 'Mother: Cavalier King Charles, Father: Poodle',
      temperament: 'Social, gentle and playful',
      available: true,
      description: 'Brown curly coat'
    },
    {
      id: 5,
      name: 'Max',
      breed: 'Yorkipoo',
      age: '14 weeks',
      gender: 'Male',
      price: '320,000 Ft',
      weight: '4-5 kg',
      image: '/src/assets/gallery/maltipoo_adult_1.jpeg',
      parents: 'Mother: Yorkshire Terrier, Father: Poodle',
      temperament: 'Alert, confident and loyal',
      available: true,
      description: 'Black-brown silky coat'
    },
    {
      id: 6,
      name: 'Buddy',
      breed: 'Goldendoodle',
      age: '16 weeks',
      gender: 'Female',
      price: '450,000 Ft',
      weight: '5-6 kg',
      image: '/src/assets/gallery/poodle_adult_1.jpeg',
      parents: 'Mother: Golden Retriever, Father: Poodle',
      temperament: 'Friendly, intelligent and active',
      available: true,
      description: 'Golden curly coat'
    }
  ])

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/src/assets/gallery/maltipoo_puppy_1.jpeg',
      title: 'Carlos - Maltipoo',
      description: 'Beautiful red-brown curly coat'
    },
    {
      id: 2,
      src: '/src/assets/gallery/maltipoo_puppy_2.jpeg',
      title: 'Joker - Maltipoo',
      description: 'White-brown long coat'
    },
    {
      id: 3,
      src: '/src/assets/gallery/maltipoo_puppy_3.jpeg',
      title: 'Charlie - Maltipoo',
      description: 'Cream-brown curly coat'
    },
    {
      id: 4,
      src: '/src/assets/gallery/cavapoo_adult_1.jpeg',
      title: 'Fanto - Cavapoo',
      description: 'Brown curly coat'
    },
    {
      id: 5,
      src: '/src/assets/gallery/maltipoo_adult_1.jpeg',
      title: 'Max - Yorkipoo',
      description: 'Black-brown silky coat'
    }
  ]

  // Admin functions
  const handleAdminLogin = () => {
    if (adminCredentials.username === 'Hibridadmin8' && adminCredentials.password === 'Hibridadmin9988@') {
      setIsAdminLoggedIn(true)
      setShowAdminLogin(false)
      setShowAdminPanel(true)
    } else {
      alert('Invalid credentials!')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
    setShowAdminPanel(false)
    setAdminCredentials({ username: '', password: '' })
  }

  const handleSaveAndPublish = () => {
    setIsPublishing(true)
    setTimeout(() => {
      setIsPublishing(false)
      alert('Changes saved and published successfully!')
    }, 2000)
  }

  // Gallery carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <div className="App">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container flex items-center justify-between">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--gradient-primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              🐕
            </div>
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '800',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              {siteSettings.siteTitle}
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#home" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Home</a>
            <a href="#breeds" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Breeds</a>
            <a href="#dogs" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Available Dogs</a>
            <a href="#gallery" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Gallery</a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Contact</a>
            <a href={`tel:${siteSettings.phoneNumber}`} className="btn btn-primary">
              📞 Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-hero">
        <div className="container text-center">
          <div className="animate-fade-in-up">
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Find Your Perfect Companion
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem', 
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Professional dog breeding with love and care. We specialize in Maltipoo, Yorkipoo, Cavapoo and Goldendoodle breeds.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowBooking(true)}
                style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              >
                📅 Book Appointment
              </button>
              <a href="#dogs" className="btn btn-outline" style={{ 
                fontSize: '1.1rem', 
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
                color: 'white'
              }}>
                🐕 View Available Dogs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dogs Preview */}
      <section style={{ padding: '4rem 0', background: 'var(--background-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Featured Puppies</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Meet some of our adorable puppies looking for their forever homes
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {dogs.slice(0, 3).map((dog, index) => (
              <div key={dog.id} className="card animate-fade-in-up" style={{ 
                animationDelay: `${index * 0.2}s`,
                textAlign: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>
                    {dog.price}
                  </div>
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{dog.name}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {dog.breed} • {dog.age}
                </p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setSelectedDog(dog)}
                  style={{ width: '100%' }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dogs Section */}
      <section id="dogs" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Available Puppies</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              All our puppies are raised with love in a family environment, ensuring the best socialization.
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {dogs.map((dog, index) => (
              <div key={dog.id} className="card" style={{ 
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '1.5rem'
              }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {dog.available && (
                    <div style={{
                      position: 'absolute',
                      top: '0.5rem',
                      left: '0.5rem',
                      background: '#10b981',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      Available
                    </div>
                  )}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>{dog.name}</h3>
                    <span style={{
                      background: 'var(--gradient-primary)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 'bold'
                    }}>
                      {dog.price}
                    </span>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>{dog.breed}</strong> • {dog.age} • {dog.gender}
                  </p>
                  
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    {dog.description}
                  </p>
                  
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    <strong>Weight:</strong> {dog.weight}
                  </p>
                  
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedDog(dog)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section" style={{ background: 'var(--background-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Gallery</h2>
            <p style={{ fontSize: '1.1rem' }}>
              See our puppies in different moments and environments.
            </p>
          </div>
          
          {/* Animated Gallery Carousel */}
          <div style={{
            position: 'relative',
            height: '300px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'end',
                  padding: '2rem'
                }}
              >
                <div style={{
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: 'var(--radius-lg)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>{image.title}</h4>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>{image.description}</p>
                </div>
              </div>
            ))}
            
            {/* Gallery indicators */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              display: 'flex',
              gap: '0.5rem'
            }}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="btn btn-secondary"
              onClick={() => setShowFullGallery(true)}
            >
              🖼️ View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Contact Us</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Get in touch with us and find your dream puppy!
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ marginBottom: '2rem' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📞
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Phone & WhatsApp</p>
                    <a href={`tel:${siteSettings.phoneNumber}`} style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}>
                      {siteSettings.phoneNumber}
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Email</p>
                    <a href={`mailto:${siteSettings.email}`} style={{ 
                      color: 'var(--secondary-color)', 
                      textDecoration: 'none',
                      fontSize: '1.1rem'
                    }}>
                      {siteSettings.email}
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    🕒
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Opening Hours</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{siteSettings.openingHours}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Location</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{siteSettings.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Book an Appointment</h3>
              <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Schedule a visit to meet our adorable puppies
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href={`tel:${siteSettings.phoneNumber}`}
                  className="btn btn-primary"
                  style={{ textAlign: 'center', textDecoration: 'none', width: '100%' }}
                >
                  📞 Call Now!
                </a>
                
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowBooking(true)}
                  style={{ width: '100%' }}
                >
                  📅 Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--background-dark)',
        color: 'white',
        padding: '3rem 0 1rem',
        marginTop: '4rem'
      }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  🐕
                </div>
                <h3 style={{ color: 'white', margin: 0 }}>{siteSettings.siteTitle}</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>{siteSettings.siteSubtitle}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{siteSettings.footerText}</p>
            </div>
            
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>📞 {siteSettings.phoneNumber}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>✉️ {siteSettings.email}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>📍 {siteSettings.address}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>🕒 {siteSettings.openingHours}</p>
              </div>
            </div>
            
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Social Media</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>📱 WhatsApp: {siteSettings.whatsappNumber}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>📷 Instagram: {siteSettings.instagramHandle}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>📘 Facebook: {siteSettings.facebookPage}</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.9rem' }}>
              {siteSettings.footerText}
            </p>
            <button 
              onClick={() => setShowAdminLogin(true)}
              style={{
                background: 'rgba(255, 107, 53, 0.2)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                color: 'rgba(255, 107, 53, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 107, 53, 0.3)'
                e.target.style.color = 'var(--primary-color)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255, 107, 53, 0.2)'
                e.target.style.color = 'rgba(255, 107, 53, 0.8)'
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </footer>

      {/* Modals and overlays would go here */}
      {/* Dog Details Modal */}
      {selectedDog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '2rem'
        }} onClick={() => setSelectedDog(null)}>
          <div className="card" style={{
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              width: '100%',
              height: '300px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img 
                src={selectedDog.image} 
                alt={selectedDog.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0 }}>{selectedDog.name}</h2>
              <span style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                {selectedDog.price}
              </span>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p><strong>Breed:</strong> {selectedDog.breed}</p>
              <p><strong>Age:</strong> {selectedDog.age}</p>
              <p><strong>Gender:</strong> {selectedDog.gender}</p>
              <p><strong>Weight:</strong> {selectedDog.weight}</p>
              <p><strong>Parents:</strong> {selectedDog.parents}</p>
              <p><strong>Temperament:</strong> {selectedDog.temperament}</p>
              <p><strong>Description:</strong> {selectedDog.description}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSelectedDog(null)
                  setShowBooking(true)
                }}
                style={{ flex: 1 }}
              >
                Book Appointment
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setSelectedDog(null)}
                style={{ flex: 1 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div className="card" style={{ width: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Username:</label>
              <input
                type="text"
                value={adminCredentials.username}
                onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password:</label>
              <input
                type="password"
                value={adminCredentials.password}
                onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn btn-primary"
                onClick={handleAdminLogin}
                style={{ flex: 1 }}
              >
                Login
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowAdminLogin(false)}
                style={{ flex: 1 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

