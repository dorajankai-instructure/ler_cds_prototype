import { useState } from 'react'
import { Flex, Heading, IconButton, Link, Tag, Text, View } from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconEditLine,
  IconExternalLinkLine,
  IconTrashLine,
} from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

const TYPE_COLORS = {
  'Employment':   { bg: '#DBEAFE', border: '#1E40AF', text: '#1E40AF' },
  'Internship':   { bg: '#FEF3C7', border: '#D97706', text: '#92400E' },
  'Volunteering': { bg: '#E6F4EA', border: '#27AE60', text: '#1A6633' },
}

function WorkEntry({ entry, isLast }) {
  const [hovered, setHovered] = useState(false)
  const c = TYPE_COLORS[entry.type] || { bg: '#F0F0F0', border: '#999', text: '#555' }

  return (
    <>
      <View
        as="div"
        position="relative"
        padding="x-small 0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div style={{ position: 'absolute', top: 4, right: 0, display: 'flex', gap: '2px', zIndex: 1 }}>
            <IconButton renderIcon={IconEditLine} screenReaderLabel="Edit entry" size="small" withBackground={false} withBorder={false} />
            <IconButton renderIcon={IconTrashLine} screenReaderLabel="Delete entry" size="small" withBackground={false} withBorder={false} />
          </div>
        )}

        <View as="div" margin="0 0 x-small 0">
          <Tag
            text={entry.type}
            size="small"
            themeOverride={{
              defaultBackground: c.bg,
              defaultBorderColor: c.border,
              defaultColor: c.text,
            }}
          />
        </View>

        <Heading level="h4" margin="0 0 xx-small 0">{entry.role}</Heading>
        <Text size="small" color="secondary">{entry.organisation}</Text>

        <Flex alignItems="center" gap="xx-small" margin="xx-small 0 x-small 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="x-small" color="secondary">{entry.startDate} — {entry.endDate}</Text>
        </Flex>

        <Text size="small" lineHeight="double" color="secondary">{entry.description}</Text>

        {entry.link && (
          <View as="div" margin="x-small 0 0 0">
            <Link href={entry.link} renderIcon={IconExternalLinkLine} iconPlacement="end" size="small">
              View
            </Link>
          </View>
        )}
      </View>
      {!isLast && <View as="div" borderWidth="small 0 0 0" margin="medium 0" />}
    </>
  )
}

export default function WorkHistoryBlock({ data }) {
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
      {data.entries.map((entry, i) => (
        <WorkEntry
          key={entry.id}
          entry={entry}
          isLast={i === data.entries.length - 1}
        />
      ))}
    </View>
  )
}
