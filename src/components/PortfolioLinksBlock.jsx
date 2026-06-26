import { useState } from 'react'
import { Flex, IconButton, Text, TruncateText, View } from '@instructure/ui'
import { IconEditLine, IconExternalLinkLine, IconTrashLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

function TypeBadge({ type }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 7px', borderRadius: '10px',
      background: '#F0F0F0', color: '#555',
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.02em', lineHeight: 1.5,
      marginBottom: '6px',
    }}>
      {type}
    </span>
  )
}

function LinkCard({ entry }) {
  const [hovered, setHovered] = useState(false)

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="small medium"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      position="relative"
    >
      {hovered && (
        <div style={{ position: 'absolute', top: '6px', right: '6px', display: 'flex', gap: '2px' }}>
          <IconButton renderIcon={IconEditLine} screenReaderLabel="Edit" size="small" withBackground={false} withBorder={false} />
          <IconButton renderIcon={IconTrashLine} screenReaderLabel="Delete" size="small" withBackground={false} withBorder={false} />
        </div>
      )}
      <TypeBadge type={entry.type} />
      <Text weight="bold" size="small" as="div" lineHeight="condensed">{entry.title}</Text>
      <div style={{ marginTop: '4px' }}>
        <TruncateText>
          <Text size="x-small" color="secondary">{entry.description}</Text>
        </TruncateText>
      </div>
      <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <IconExternalLinkLine size="x-small" color="brand" />
        <Text size="x-small" color="brand">View</Text>
      </div>
    </View>
  )
}

export default function PortfolioLinksBlock({ data }) {
  const [hovered, setHovered] = useState(false)

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
      <SectionHeader name={data.sectionName} hovered={hovered} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {data.entries.map(entry => (
          <LinkCard key={entry.id} entry={entry} />
        ))}
      </div>
    </View>
  )
}
