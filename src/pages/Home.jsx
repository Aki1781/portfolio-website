import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle button */}
        <ThemeToggle />


        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <NavBar />
        {/* Main Section */}
        <main>
          <HeroSection />
          <AboutSection />
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home