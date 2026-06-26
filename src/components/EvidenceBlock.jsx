import { useState } from 'react'
import { Button, CloseButton, Flex, Heading, Modal, Tag, Text, View } from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconLinkLine,
  IconEditLine,
  IconSearchLine,
  IconImageLine,
  IconMediaLine,
} from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

const TYPE_COLORS = {
  'Assignment':     { bg: '#FEE2E2', border: '#DC2626', text: '#991B1B', icon: '#DC2626' },
  'Research':       { bg: '#CCFBF1', border: '#0F766E', text: '#0F766E', icon: '#0F766E' },
  'Portfolio item': { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8', icon: '#7C3AED' },
  'Presentation':   { bg: '#DBEAFE', border: '#1E40AF', text: '#1E40AF', icon: '#1E40AF' },
}

const TYPE_ICONS = {
  'Assignment':     IconEditLine,
  'Research':       IconSearchLine,
  'Portfolio item': IconImageLine,
  'Presentation':   IconMediaLine,
}

// Course name shows for everything except Portfolio items
const SHOWS_COURSE = type => type !== 'Portfolio item'

function TypeTag({ item }) {
  const c = TYPE_COLORS[item.type] || { bg: '#F0F0F0', border: '#999', text: '#555', icon: '#777' }
  const Icon = TYPE_ICONS[item.type]
  return (
    <Flex alignItems="center" gap="x-small">
      {Icon && (
        <Flex.Item>
          <Icon size="x-small" style={{ color: c.icon }} />
        </Flex.Item>
      )}
      <Flex.Item>
        <Tag
          text={item.type}
          size="small"
          themeOverride={{
            defaultBackground: c.bg,
            defaultBorderColor: c.border,
            defaultColor: c.text,
          }}
        />
      </Flex.Item>
    </Flex>
  )
}

function EvidenceModal({ item, onClose }) {
  return (
    <Modal open size="small" label={item.title} onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">{item.title}</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>
      <Modal.Body>
        <View as="div" margin="0 0 small 0">
          <TypeTag item={item} />
        </View>
        {SHOWS_COURSE(item.type) && item.courseName && (
          <View as="div" margin="0 0 x-small 0">
            <Text size="medium">{item.courseName}</Text>
          </View>
        )}
        <View as="div" margin="0 0 x-small 0">
          <Text size="small" color="secondary">{item.institution}</Text>
        </View>
        <Flex alignItems="center" gap="xx-small" margin="0 0 x-small 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="small" color="secondary">Submitted: {item.submissionDate}</Text>
        </Flex>
        <Flex alignItems="center" gap="xx-small">
          <IconLinkLine size="x-small" color="secondary" />
          <Text size="small" color="secondary">Source: {item.source}</Text>
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function EvidenceCard({ item }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <View
        as="div"
        background="primary"
        borderWidth="small"
        borderColor="primary"
        borderRadius="medium"
        padding="medium"
        onClick={() => setModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <View as="div" margin="0 0 x-small 0">
          <TypeTag item={item} />
        </View>
        <Text weight="bold" size="small" as="div" lineHeight="condensed">{item.title}</Text>
        {SHOWS_COURSE(item.type) && item.courseName && (
          <View as="div" margin="xx-small 0 0 0">
            <Text size="x-small" color="secondary">{item.courseName}</Text>
          </View>
        )}
        <View as="div" margin="xx-small 0 0 0">
          <Text size="x-small" color="secondary">{item.institution}</Text>
        </View>
        <View as="div" margin="x-small 0 0 0">
          <Flex alignItems="center" gap="xx-small" margin="0 0 xx-small 0">
            <IconCalendarMonthLine size="x-small" color="secondary" />
            <Text size="x-small" color="secondary">{item.submissionDate}</Text>
          </Flex>
          <Flex alignItems="center" gap="xx-small">
            <IconLinkLine size="x-small" color="secondary" />
            <Text size="x-small" color="secondary">Source: {item.source}</Text>
          </Flex>
        </View>
      </View>

      {modalOpen && (
        <EvidenceModal item={item} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default function EvidenceBlock({ data }) {
  const [hovered, setHovered] = useState(false)
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      shadow="resting"
      padding="medium large"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SectionHeader
        name={data.sectionName}
        description={data.description}
        hovered={hovered}
        showPlus
        onDelete={() => setDeleted(true)}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {data.items.map(item => (
          <EvidenceCard key={item.id} item={item} />
        ))}
      </div>
    </View>
  )
}
