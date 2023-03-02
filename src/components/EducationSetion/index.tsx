import { useState } from 'react';
import { Title } from '../Title';
import { TabLabel } from './TabLabel';
import { CCAATab } from './Tabs/CCAATab';
import { OrigamidTab } from './Tabs/OrigamidTab';
import { RocketseatTab } from './Tabs/RocketseatTab';

const tabs = ['Rocketseat', 'Origamid', 'CCAA'];

export function EducationSection() {
  const [activeTab, setActiveTab] = useState('Rocketseat');

  const handleActiveTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div id="education" className="min-h-screen flex flex-col justify-center">
      <Title>Where i learned these things?</Title>
      <div className="flex gap-4">
        <ul>
          {tabs.map((tab) => {
            return (
              <TabLabel
                key={tab}
                label={tab}
                active={tab === activeTab}
                onActiveTabChange={() => {
                  handleActiveTabChange(tab);
                }}
              />
            );
          })}
        </ul>
        <div className="p-2 min-h-[300px]">
          {activeTab === 'Rocketseat' ? (
            <RocketseatTab />
          ) : activeTab === 'Origamid' ? (
            <OrigamidTab />
          ) : (
            activeTab === 'CCAA' && <CCAATab />
          )}
        </div>
      </div>
    </div>
  );
}
