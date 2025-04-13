'use client'

import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    window.addEventListener('resize', () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    })

    // Define a color palette for beams and explosions.
    const beamColors = ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF69B4']

    // Array to hold active explosion particles.
    let explosionParticles: Particle[] = []

    // Particle class for explosion effect.
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      color: string

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        // Limit the angular range to make the effect more coherent.
        const angle = (Math.random() - 0.5) * (Math.PI / 3)
        const speed = Math.random() * 1.5 + 0.5  // slower explosion speed
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.radius = Math.random() * 1.5 + 1 // smaller, more delicate particles
        this.alpha = 1
        this.color = color
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        // Fade away gradually.
        this.alpha -= 0.015
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    // Beam class that creates a gentle downward beam and spawns particles on explosion.
    class Beam {
      x: number
      y: number
      speed: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.speed = 2 + Math.random() * 3 // slower beam speed
        this.color = beamColors[Math.floor(Math.random() * beamColors.length)]
      }

      update() {
        this.y += this.speed
        if (this.y > height) {
          this.explode()
          // Reset the beam to the top with a new random x-coordinate and color.
          this.y = 0
          this.x = Math.random() * width
          this.color = beamColors[Math.floor(Math.random() * beamColors.length)]
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y + 15) // slightly longer beam trail
        ctx.strokeStyle = this.color
        ctx.lineWidth = 2
        ctx.stroke()
      }

      explode() {
        // Spawn a few particles (less than before for a subtler effect).
        for (let i = 0; i < 8; i++) {
          explosionParticles.push(new Particle(this.x, height, this.color))
        }
      }
    }

    // Create an array of beams.
    const beams: Beam[] = Array.from({ length: 50 }, () => new Beam())

    const animate = () => {
      if (!ctx) return

      // Clear the canvas.
      ctx.clearRect(0, 0, width, height)

      // Update and draw each beam.
      beams.forEach(beam => {
        beam.update()
        beam.draw()
      })

      // Update and draw each explosion particle.
      for (let i = explosionParticles.length - 1; i >= 0; i--) {
        const particle = explosionParticles[i]
        particle.update()
        particle.draw()
        // Remove the particle once it has fully faded.
        if (particle.alpha <= 0) {
          explosionParticles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}

export default Background
