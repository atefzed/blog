"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectTechStack } from "@/db/schema";
import useAppStore from "@/hooks/useAppStore";
import { CodeXml, Database, PencilRuler, ServerCog } from "lucide-react";
import { Button } from "./ui/button";


const tabsIcons = [
  <CodeXml key="frontend" />,
  <ServerCog key="backend" />,
  <Database key="databases" />,
  <PencilRuler key="tools" />,
]

const TechGrid = ({ items }: { items: string[] }) => {
  const { selectedTags, toggleTag } = useAppStore();
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map(item => (
        <Button
          className={"flex p-2 shadow-sm"}
          key={item}
          variant={selectedTags.includes(item.toLowerCase()) ? "default" : "outline"}
          onClick={() => toggleTag(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

const TechTabs =  ({ stacks }: { stacks: SelectTechStack[] }) => {
  return (
    <Tabs defaultValue="frontend">
      <TabsList className="grid w-full grid-cols-4">
        {stacks.map((item, index) => (
          <TabsTrigger value={item.label} key={item.label}>
            {tabsIcons[index]}
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {stacks.map(item => (
        <TabsContent value={item.label} key={item.label}>
          <TechGrid items={item.tags ?? []}/>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TechTabs