import db from "@/db"
import { experiencesTable } from "@/db/schema"
import ExperienceCard from "./ExperienceCard"

const Experiences = async () => {
  const experiences = await db.select().from(experiencesTable)
  const experienceCards =  experiences.map((experience) => (
    <ExperienceCard key={experience.title} {...experience} />
  ))

  return (
    <section id="experiences">
      <h3 className="text-xl font-bold pb-4">Work Experience</h3>
      <div className="flex flex-col gap-4">
        {experienceCards}
      </div>
    </section>
  )
}

export default Experiences