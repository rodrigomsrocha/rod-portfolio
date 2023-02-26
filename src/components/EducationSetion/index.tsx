import { useState } from 'react';
import { Title } from '../Title';
import { Tab } from './Tab';

const tabs = ['Rocketseat', 'Origamid', 'Cod3r', 'CCAA'];

export function EducationSection() {
  const [activeTab, setActiveTab] = useState('Rocketseat');

  return (
    <div id="education" className="min-h-screen flex flex-col justify-center">
      <Title>Where i learned these things?</Title>
      <div className="flex gap-4">
        <ul>
          {tabs.map((tab) => {
            return <Tab key={tab} label={tab} active={tab === activeTab} />;
          })}
        </ul>
        <div className="p-2">
          <h3>React @Rocketseat</h3>
        </div>
      </div>
    </div>
  );
}
