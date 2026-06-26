import { useState } from 'react'
import { Flex, Tag, Text, View } from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconClockLine,
  IconArrowOpenUpLine,
} from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

const TYPE_COLORS = {
  'Program completion': { bg: '#E6F4EA', border: '#27AE60', text: '#1A6633' },
  'Course completion':  { bg: '#FEF3C7', border: '#D97706', text: '#92400E' },
  'Outcome mastery':    { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8' },
}

function CompletionCard({ item }) {
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
      <Text weight="bold" size="small" as="div" lineHeight="condensed">{item.name}</Text>
      <View as="div" margin="xx-small 0 0 0">
        <Text size="x-small" color="secondary">{item.institution}</Text>
      </View>
      <View as="div" margin="x-small 0 0 0">
        <Flex alignItems="center" gap="xx-small" margin="0 0 xx-small 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="x-small" color="secondary">{item.completionDate}</Text>
        </Flex>
        {item.creditHours != null && (
          <Flex alignItems="center" gap="xx-small" margin="0 0 xx-small 0">
            <IconClockLine size="x-small" color="secondary" />
            <Text size="x-small" color="secondary">{item.creditHours} credit hours</Text>
          </Flex>
        )}
        {item.proficiencyLevel && (
          <Flex alignItems="center" gap="xx-small">
            <IconArrowOpenUpLine size="x-small" style={{ color: '#1A6633' }} />
            <Text size="x-small" style={{ color: '#1A6633' }}>{item.proficiencyLevel}</Text>
          </Flex>
        )}
      </View>
    </View>
  )
}

export default function CompletionsBlock({ data }) {
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
          <CompletionCard key={item.id} item={item} />
        ))}
      </div>
    </View>
  )
}
