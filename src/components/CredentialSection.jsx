import { useState } from 'react'
import { Flex, Tag, Text, View } from '@instructure/ui'
import { IconCalendarMonthLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

const TYPE_COLORS = {
  Diploma:     { bg: '#E9F7EF', border: '#27AE60', text: '#1A7A40' },
  Certificate: { bg: '#E8F4FB', border: '#0770A3', text: '#0770A3' },
  Badge:       { bg: '#FFF8E6', border: '#D97706', text: '#92400E' },
}

const THUMB_COLORS = {
  Diploma:     '#27AE60',
  Certificate: '#0770A3',
  Badge:       '#D97706',
}

function CredentialCard({ credential }) {
  const c = TYPE_COLORS[credential.type] || { bg: '#F0F0F0', border: '#999', text: '#555' }

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="medium"
      height="100%"
    >
      <Flex alignItems="start" margin="0 0 small 0">
        <Flex.Item shouldGrow>
          <Tag
            text={credential.type}
            size="small"
            themeOverride={{
              defaultBackground: c.bg,
              defaultBorderColor: c.border,
              defaultColor: c.text,
            }}
          />
        </Flex.Item>
        {credential.verified && (
          <Tag
            text="✓ Verified"
            size="small"
            themeOverride={{
              defaultBackground: '#E9F7EF',
              defaultBorderColor: '#27AE60',
              defaultColor: '#1A7A40',
            }}
          />
        )}
      </Flex>

      {/* Thumbnail placeholder */}
      <div style={{
        height: '56px',
        borderRadius: '6px',
        background: THUMB_COLORS[credential.type] || '#E0E0E0',
        marginBottom: '8px',
        opacity: 0.18,
      }} />

      <Text weight="bold" size="small" lineHeight="condensed">{credential.title}</Text>
      <View as="div" margin="xx-small 0 0 0">
        <Text size="x-small" color="secondary">{credential.issuer}</Text>
      </View>
      <Flex alignItems="center" gap="xx-small" margin="x-small 0 0 0">
        <IconCalendarMonthLine size="x-small" color="secondary" />
        <Text size="x-small" color="secondary">{credential.issuedDate}</Text>
      </Flex>
    </View>
  )
}

export default function CredentialSection({ section }) {
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
        name={section.name}
        description={section.description}
        hovered={hovered}
        showPlus
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {section.credentials.map(cred => (
          <CredentialCard key={cred.id} credential={cred} />
        ))}
      </div>
    </View>
  )
}
