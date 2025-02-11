import db from "@/db";
import { techstacksTable } from "@/db/schema";
import TechTabs from "./TechTabs";


const TechStack = async () => {
  const stacks = await db.select().from(techstacksTable)

  return (
    <section id="techstack">
      <h3 className="text-xl font-bold pb-4">Tech Stack</h3>
      <TechTabs stacks={stacks} />
    </section>
  )
}

export default TechStack