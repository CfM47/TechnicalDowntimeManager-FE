import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface TabListContainerProps {
  tabsDefinition: { value: string; label: string }[];
  tabsComponents: { [key: string]: React.ReactNode };
}

export const TabListContainer = ({ tabsDefinition, tabsComponents }: TabListContainerProps) => {
  if (!tabsDefinition.length) return <></>;

  return (
    <Tabs defaultValue={tabsDefinition[0].value} className="w-full">
      <TabsList className={cn(`grid w-full grid-cols-${tabsDefinition.length}`)}>
        {tabsDefinition.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
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
