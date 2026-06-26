import { useState } from 'react'
import { Flex, Tag, Text, View } from '@instructure/ui'
import { IconCalendarMonthLine, IconLinkLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

const TYPE_COLORS = {
  'Assignment':     { bg: '#FEE2E2', border: '#DC2626', text: '#991B1B' },
  'Research':       { bg: '#CCFBF1', border: '#0F766E', text: '#0F766E' },
  'Portfolio item': { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8' },
  'Presentation':   { bg: '#DBEAFE', border: '#1E40AF', text: '#1E40AF' },
}

function EvidenceCard({ item }) {
  const c = TYPE_COLORS[item.type] || { bg: '#F0F0F0', border: '#999', text: '#555' }

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="medium"
    >
      <View as="div" margin="0 0 x-small 0">
        <Tag
          text={item.type}
          size="small"
          themeOverride={{
            defaultBackground: c.bg,
            defaultBorderColor: c.border,
            defaultColor: c.text,
          }}
        />
      </View>
      <Text weight="bold" size="small" as="div" lineHeight="condensed">{item.title}</Text>
      {item.courseName && (
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
  )
}

export default function EvidenceBlock({ data }) {
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
      <SectionHeader
        name={data.sectionName}
        description={data.description}
        hovered={hovered}
        showPlus
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {data.items.map(item => (
          <EvidenceCard key={item.id} item={item} />
        ))}
      </div>
    </View>
  )
}
