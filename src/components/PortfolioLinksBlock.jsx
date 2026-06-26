import { useState } from 'react'
import { IconButton, Text, View } from '@instructure/ui'
import { IconEditLine, IconExternalLinkLine, IconTrashLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'
import ConfirmDeleteModal from './ConfirmDeleteModal'

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
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

  return (
    <>
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
        style={{ overflow: 'hidden', minWidth: 0 }}
      >
        {hovered && (
          <div style={{ position: 'absolute', top: '6px', right: '6px', display: 'flex', gap: '2px' }}>
            <IconButton renderIcon={IconEditLine} screenReaderLabel="Edit" size="small" withBackground={false} withBorder={false} />
            <IconButton
              renderIcon={IconTrashLine}
              screenReaderLabel="Delete"
              size="small"
              withBackground={false}
              withBorder={false}
              onClick={e => { e.stopPropagation(); setConfirmOpen(true) }}
            />
          </div>
        )}
        <TypeBadge type={entry.type} />
        <div style={{
          fontWeight: 700,
          fontSize: '0.875rem',
          lineHeight: 1.25,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}>
          {entry.title}
        </div>
        <div style={{
          marginTop: '4px',
          fontSize: '0.75rem',
          lineHeight: 1.4,
          color: '#586874',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {entry.description}
        </div>
        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <IconExternalLinkLine size="x-small" color="brand" />
          <Text size="x-small" color="brand">View</Text>
        </div>
      </View>

      <ConfirmDeleteModal
        open={confirmOpen}
        onConfirm={() => { setConfirmOpen(false); setDeleted(true) }}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  )
}

export default function PortfolioLinksBlock({ data }) {
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
      style={{ overflow: 'hidden' }}
    >
      <SectionHeader name={data.sectionName} hovered={hovered} onDelete={() => setDeleted(true)} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {data.entries.map(entry => (
          <LinkCard key={entry.id} entry={entry} />
        ))}
      </div>
    </View>
  )
}
