import { useState } from 'react'
import { InstUISettingsProvider, Tabs, Text, View } from '@instructure/ui'
import { theme as canvasTheme } from '@instructure/canvas-theme'
import Sidebar from './components/Sidebar'
import RecordHeader from './components/RecordHeader'
import RecordGlance from './components/RecordGlance'
import AiSummaryBlock from './components/AiSummaryBlock'
import CredentialSection from './components/CredentialSection'
import SkillsBlock from './components/SkillsBlock'
import RichTextBlock from './components/RichTextBlock'
import CompletionsBlock from './components/CompletionsBlock'
import EvidenceBlock from './components/EvidenceBlock'
import WorkHistoryBlock from './components/WorkHistoryBlock'
import PortfolioLinksBlock from './components/PortfolioLinksBlock'
import AppliedSection from './components/AppliedSection'
import OpportunitiesSection from './components/OpportunitiesSection'
import AddBlockFooter from './components/AddBlockFooter'
import {
  learner,
  recordDetail,
  recordGlance,
  aiSummary,
  credentialSections,
  skills,
  richTextBlock,
  completions,
  evidenceSection,
  workHistory,
  portfolioLinks,
  appliedOpportunities,
  matchingOpportunities,
} from './data/mariaReyes'

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <InstUISettingsProvider theme={canvasTheme}>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar learner={learner} />
        <div style={{ flex: 1, overflowY: 'auto', marginLeft: '276px', background: '#F5F5F5' }}>

          {/* Sticky white header area */}
          <div style={{
            background: 'white',
            padding: '20px 32px 0',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 1px 0 0 #E8EAED',
          }}>
            <RecordHeader
              recordDetail={recordDetail}
              recordGlance={recordGlance}
            />
          </div>

          {/* Tabs + content */}
          <Tabs onRequestTabChange={(e, { index }) => setActiveTabIndex(index)}>
            <Tabs.Panel renderTitle="Record" isSelected={activeTabIndex === 0} padding="none">
              <div style={{
                padding: '24px 32px 48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxWidth: '1164px',
                boxSizing: 'border-box',
              }}>
                <RecordGlance data={recordGlance} />
                <AiSummaryBlock summary={aiSummary} />
                {credentialSections.map(section => (
                  <CredentialSection key={section.id} section={section} />
                ))}
                <SkillsBlock skills={skills} />
                <RichTextBlock block={richTextBlock} />
                <CompletionsBlock data={completions} />
                <EvidenceBlock data={evidenceSection} />
                <WorkHistoryBlock data={workHistory} />
                <PortfolioLinksBlock data={portfolioLinks} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <AppliedSection opportunities={appliedOpportunities} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <OpportunitiesSection opportunities={matchingOpportunities} />
                  </div>
                </div>
                <AddBlockFooter />
              </div>
            </Tabs.Panel>
            <Tabs.Panel renderTitle="Access control" isSelected={activeTabIndex === 1} padding="none">
              <div style={{ padding: '48px 32px' }}>
                <Text color="secondary">Access control settings — coming soon.</Text>
              </div>
            </Tabs.Panel>
          </Tabs>

        </div>
      </div>
    </InstUISettingsProvider>
  )
}
