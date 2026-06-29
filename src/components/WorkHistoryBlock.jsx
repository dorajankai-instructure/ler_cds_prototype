import { useState } from 'react'
import { Button, Flex, Heading, IconButton, Link, Tag, Text, View } from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconExternalLinkLine,
  IconPlusLine,
  IconTrashLine,
} from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import AddWorkEntryModal from './AddWorkEntryModal'

const TYPE_COLORS = {
  'Employment':   { bg: '#DBEAFE', border: '#1E40AF', text: '#1E40AF' },
  'Internship':   { bg: '#FEF3C7', border: '#D97706', text: '#92400E' },
  'Volunteering': { bg: '#E6F4EA', border: '#27AE60', text: '#1A6633' },
  'Mentoring':    { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8' },
}

function TypeTag({ type }) {
  const c = TYPE_COLORS[type] || { bg: '#F0F0F0', border: '#999', text: '#555' }
  return (
    <Tag
      text={type}
      size="small"
      themeOverride={{ defaultBackground: c.bg, defaultBorderColor: c.border, defaultColor: c.text }}
    />
  )
}

function WorkEntry({ entry, isLast }) {
  return (
    <>
      <View as="div" padding="x-small 0">
        <View as="div" margin="0 0 x-small 0">
          <TypeTag type={entry.type} />
        </View>

        <Heading level="h4" margin="0 0 xx-small 0">{entry.role}</Heading>
        <Text size="small" color="secondary">{entry.organisation}</Text>

        <Flex alignItems="center" gap="xx-small" margin="xx-small 0 x-small 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="x-small" color="secondary">{entry.startDate} — {entry.endDate}</Text>
        </Flex>

        {entry.description && (
          <Text size="small" lineHeight="double" color="secondary">{entry.description}</Text>
        )}

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

// Compact editable row shown in edit mode: entry summary + delete control.
function EditRow({ entry, onRequestDelete }) {
  return (
    <View
      as="div"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="x-small small"
      margin="0 0 x-small 0"
    >
      <Flex alignItems="center" gap="small">
        <Flex.Item shouldGrow>
          <Flex alignItems="center" gap="small">
            <TypeTag type={entry.type} />
            <View>
              <Text weight="bold" size="small" as="div" lineHeight="condensed">{entry.role}</Text>
              <Text size="x-small" color="secondary" as="div">
                {entry.organisation} · {entry.startDate} — {entry.endDate}
              </Text>
            </View>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <IconButton
            renderIcon={IconTrashLine}
            screenReaderLabel={`Delete ${entry.role}`}
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

let workEntryCounter = 0

export default function WorkHistoryBlock({ data }) {
  const [hovered, setHovered] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [entries, setEntries] = useState(data.entries)
  const [addOpen, setAddOpen] = useState(false)
  const [pendingDelete, setPendingDelete] = useState(null)

  if (deleted) return null

  function addEntry(entry) {
    workEntryCounter += 1
    setEntries(list => [...list, { ...entry, id: `work-new-${workEntryCounter}` }])
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
            <Button renderIcon={IconPlusLine} onClick={() => setAddOpen(true)}>Add entry</Button>
            <Button color="secondary" onClick={() => setEditing(false)}>Done</Button>
          </Flex>
        </div>
      ) : (
        entries.map((entry, i) => (
          <WorkEntry key={entry.id} entry={entry} isLast={i === entries.length - 1} />
        ))
      )}

      {addOpen && (
        <AddWorkEntryModal onSave={addEntry} onClose={() => setAddOpen(false)} />
      )}

      <ConfirmDeleteModal
        open={!!pendingDelete}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </View>
  )
}
