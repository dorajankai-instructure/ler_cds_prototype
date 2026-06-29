import { Fragment, useState } from 'react'
import { Tabs, Text, View } from '@instructure/ui'
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
  availableCredentials,
  skills,
  richTextBlock,
  completions,
  evidenceSection,
  workHistory,
  portfolioLinks,
  appliedOpportunities,
  matchingOpportunities,
} from './data/mariaReyes'

let blockIdCounter = 0

// Builds the empty default data for a freshly-added block of the given type.
function defaultBlockData(type, id) {
  switch (type) {
    case 'Credential block':
      return { id: `${id}-data`, name: 'New credential section', description: '', credentials: [] }
    case 'Rich text':
      return { title: 'New rich text block', content: '' }
    case 'Skills':
      return { syncMode: 'Automatic', verified: [], selfReported: [] }
    case 'Learning achievements':
      return { id: `${id}-data`, sectionName: 'New learning achievements block', description: '', items: [], availableItems: [] }
    case 'Coursework & artifacts':
      return { id: `${id}-data`, sectionName: 'New coursework & artifacts block', description: '', items: [], availableItems: [] }
    case 'Work history':
      return { id: `${id}-data`, sectionName: 'New work history block', entries: [] }
    case 'Portfolio links':
      return { id: `${id}-data`, sectionName: 'New portfolio links block', entries: [] }
    default:
      return {}
  }
}

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [addedBlocks, setAddedBlocks] = useState([])
  // The default record always ships with a Skills block, so this starts true.
  const [hasSkills, setHasSkills] = useState(true)
  const [toast, setToast] = useState(null)

  function addBlock(type) {
    if (type === 'Skills') {
      if (hasSkills) {
        setToast('You already have a skills block')
        setTimeout(() => setToast(null), 3000)
        return
      }
      setHasSkills(true)
    }
    blockIdCounter += 1
    setAddedBlocks(blocks => [...blocks, { id: `added-${blockIdCounter}`, type }])
  }

  function removeBlock(id, type) {
    if (type === 'Skills') setHasSkills(false)
    setAddedBlocks(blocks => blocks.filter(b => b.id !== id))
  }

  function renderAddedBlock(block) {
    const data = defaultBlockData(block.type, block.id)
    const onDelete = () => removeBlock(block.id, block.type)
    switch (block.type) {
      case 'Credential block':
        return <CredentialSection key={block.id} section={data} autoEdit availablePool={availableCredentials} onDelete={onDelete} />
      case 'Rich text':
        return <RichTextBlock key={block.id} block={data} autoEdit onDelete={onDelete} />
      case 'Skills':
        return <SkillsBlock key={block.id} skills={data} autoEdit onDelete={onDelete} />
      case 'Learning achievements':
        return <CompletionsBlock key={block.id} data={data} autoEdit onDelete={onDelete} />
      case 'Coursework & artifacts':
        return <EvidenceBlock key={block.id} data={data} autoEdit onDelete={onDelete} />
      case 'Work history':
        return <WorkHistoryBlock key={block.id} data={data} autoEdit onDelete={onDelete} />
      case 'Portfolio links':
        return <PortfolioLinksBlock key={block.id} data={data} autoEdit onDelete={onDelete} />
      default:
        return null
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        {toast && (
          <div style={{
            position: 'fixed',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: '#0770A3',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}>
            {toast}
          </div>
        )}
        <Sidebar learner={learner} />
        <div style={{ flex: 1, overflowY: 'auto', marginLeft: '276px', background: '#F5F6F7' }}>

          {/* Sticky white header area */}
          <div style={{
            background: 'white',
            padding: '20px 32px 16px',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 1px 0 0 #E8EAED',
          }}>
            <RecordHeader recordDetail={recordDetail} />
          </div>

          {/* Tabs + content — constrained to the content width */}
          <div style={{ maxWidth: '1164px', padding: '0 32px', boxSizing: 'border-box' }}>
          <Tabs onRequestTabChange={(e, { index }) => setActiveTabIndex(index)}>
            <Tabs.Panel renderTitle="Record" isSelected={activeTabIndex === 0} padding="none">
              <div style={{
                padding: '24px 0 48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '36px',
                background: '#F5F6F7',
              }}>
                <RecordGlance data={recordGlance} />
                <AiSummaryBlock summary={aiSummary} />
                {credentialSections.map((section, i) => (
                  <Fragment key={section.id}>
                    <CredentialSection section={section} />
                    {/* Skills block sits right after the first credential section */}
                    {i === 0 && <SkillsBlock skills={skills} />}
                  </Fragment>
                ))}
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
                {addedBlocks.map(renderAddedBlock)}
                <AddBlockFooter onAddBlock={addBlock} />
              </div>
            </Tabs.Panel>
            <Tabs.Panel renderTitle="Access control" isSelected={activeTabIndex === 1} padding="none">
              <div style={{ padding: '48px 0' }}>
                <Text color="secondary">Access control settings — coming soon.</Text>
              </div>
            </Tabs.Panel>
          </Tabs>
          </div>

        </div>
      </div>
  )
}
