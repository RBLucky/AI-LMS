import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Nina and the Neurons"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        
        <CompanionCard
          id="456"
          name="Count von Numerus"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="789"
          name="Lexi Lexicon"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page