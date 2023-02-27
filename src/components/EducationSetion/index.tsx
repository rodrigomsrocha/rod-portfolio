import { useState } from 'react';
import { Title } from '../Title';
import { TabLabel } from './TabLabel';

const tabs = ['Rocketseat', 'Origamid', 'Cod3r', 'CCAA'];

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
        <div className="p-2">
          <h3>React @{activeTab}</h3>
        </div>
      </div>
    </div>
  );
}
