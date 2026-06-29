import { useState } from 'react'
import { Button, Flex, IconButton, Link, Text, View } from '@instructure/ui'
import { IconExternalLinkLine, IconPlusLine, IconTrashLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import AddPortfolioLinkModal from './AddPortfolioLinkModal'

function truncate(str, n) {
  if (!str) return ''
  return str.length > n ? `${str.slice(0, n)}…` : str
}

function LinkCard({ entry }) {
  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="small medium"
      style={{ overflow: 'hidden', minWidth: 0 }}
    >
      <div style={{
        fontWeight: 700,
        fontSize: '0.875rem',
        lineHeight: 1.25,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}>
        {truncate(entry.title, 60)}
      </div>
      {entry.description && (
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
      )}
      <div style={{ marginTop: '8px' }}>
        <Link
          href={entry.url ? `https://${entry.url.replace(/^https?:\/\//, '')}` : '#'}
          renderIcon={IconExternalLinkLine}
          iconPlacement="end"
          size="small"
        >
          View
        </Link>
      </div>
    </View>
  )
}

// Compact editable row shown in edit mode: link summary + delete control.
function EditRow({ entry, onRequestDelete }) {
  return (
    <View
      as="div"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="x-small small"
      margin="0 0 x-small 0"
      style={{ overflow: 'hidden' }}
    >
      <Flex alignItems="center" gap="small">
        <Flex.Item shouldGrow>
          <Text weight="bold" size="small" as="div" lineHeight="condensed">{truncate(entry.title, 60)}</Text>
          {entry.url && (
            <Text size="x-small" color="secondary" as="div">{entry.url}</Text>
          )}
        </Flex.Item>
        <Flex.Item>
          <IconButton
            renderIcon={IconTrashLine}
            screenReaderLabel={`Delete ${entry.title}`}
            size="small"
            withBackground={false}
            withBorder={false}
            onClick={() => onRequestDelete(entry)}
          />
        </Flex.Item>
      </Flex>
    </View>
  )
}

let linkCounter = 0

export default function PortfolioLinksBlock({ data }) {
  const [hovered, setHovered] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [entries, setEntries] = useState(data.entries)
  const [addOpen, setAddOpen] = useState(false)
  const [pendingDelete, setPendingDelete] = useState(null)

  if (deleted) return null

  function addLink(entry) {
    linkCounter += 1
    setEntries(list => [...list, { ...entry, id: `link-new-${linkCounter}` }])
    setAddOpen(false)
  }

  function confirmDelete() {
    setEntries(list => list.filter(e => e.id !== pendingDelete.id))
    setPendingDelete(null)
  }

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
      <SectionHeader
        name={data.sectionName}
        hovered={hovered}
        onEdit={() => setEditing(v => !v)}
        onDelete={() => setDeleted(true)}
      />

      {editing ? (
        <div>
          {entries.map(entry => (
            <EditRow key={entry.id} entry={entry} onRequestDelete={setPendingDelete} />
          ))}
          <Flex gap="small" margin="small 0 0 0">
            <Button renderIcon={IconPlusLine} onClick={() => setAddOpen(true)}>Add link</Button>
            <Button color="secondary" onClick={() => setEditing(false)}>Done</Button>
          </Flex>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {entries.map(entry => (
            <LinkCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}

      {addOpen && (
        <AddPortfolioLinkModal onSave={addLink} onClose={() => setAddOpen(false)} />
      )}

      <ConfirmDeleteModal
        open={!!pendingDelete}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </View>
  )
}
