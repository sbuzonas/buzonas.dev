import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Competencies } from '@/components/sections/Competencies'
import { Veteran } from '@/components/sections/Veteran'
import { Land } from '@/components/sections/Land'
import { Contact } from '@/components/sections/Contact'
import { experience } from '@/data/experience'
import { competencies, certifications } from '@/data/competencies'
import { military, vso, nonprofit } from '@/data/vso'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience items={experience} />
      <Competencies domains={competencies} certifications={certifications} />
      <Veteran military={military} vsoAffiliations={vso} nonprofit={nonprofit} />
      <Land />
      <Contact />
    </>
  )
}
