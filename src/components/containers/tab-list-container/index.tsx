import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabListContainerProps {
  tabsDefinition: { value: string; label: string }[];
  tabsComponents: { [key: string]: React.ReactNode };
}

export const TabListContainer = ({ tabsDefinition, tabsComponents }: TabListContainerProps) => {
  if (!tabsDefinition.length) return <></>;

  return (
    <Tabs defaultValue={tabsDefinition[0].value} className="w-full">
      <TabsList className="flex flex-row w-full items-stretch justify-between">
        {tabsDefinition.map(({ value, label }) => (
          <TabsTrigger key={value} value={value} className="flex-1 text-center">
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsDefinition.map(({ value }) => (
        <TabsContent key={value} value={value}>
          {tabsComponents[value]}
        </TabsContent>
      ))}
    </Tabs>
  );
};
