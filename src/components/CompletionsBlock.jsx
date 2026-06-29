import { useState } from 'react'
import { Button, CloseButton, Flex, Heading, Modal, Tag, Text, View } from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconClockLine,
  IconArrowOpenUpLine,
  IconCheckMarkLine,
  IconCheckLine,
  IconStarLine,
} from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'
import SectionItemsEditModal from './SectionItemsEditModal'

const TYPE_COLORS = {
  'Program completion': { bg: '#E6F4EA', border: '#27AE60', text: '#1A6633', icon: '#27AE60' },
  'Course completion':  { bg: '#FEF3C7', border: '#D97706', text: '#92400E', icon: '#D97706' },
  'Outcome mastery':    { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8', icon: '#7C3AED' },
}

const TYPE_ICONS = {
  'Program completion': IconCheckMarkLine,
  'Course completion':  IconCheckLine,
  'Outcome mastery':    IconStarLine,
}

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

function CompletionModal({ item, onClose }) {
  const showCredit = item.type === 'Program completion' || item.type === 'Course completion'
  const showProficiency = item.type === 'Outcome mastery'

  return (
    <Modal open size="small" label={item.name} onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">{item.name}</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>
      <Modal.Body>
        <View as="div" margin="0 0 small 0">
          <TypeTag item={item} />
        </View>
        <View as="div" margin="0 0 x-small 0">
          <Text size="medium">{item.institution}</Text>
        </View>
        <Flex alignItems="center" gap="xx-small" margin="0 0 x-small 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="small" color="secondary">Completion date: {item.completionDate}</Text>
        </Flex>
        {showCredit && item.creditHours != null && (
          <Flex alignItems="center" gap="xx-small" margin="0 0 x-small 0">
            <IconClockLine size="x-small" color="secondary" />
            <Text size="small" color="secondary">{item.creditHours} credit hours</Text>
          </Flex>
        )}
        {showProficiency && item.proficiencyLevel && (
          <Flex alignItems="center" gap="xx-small">
            <IconArrowOpenUpLine size="x-small" style={{ color: '#1A6633' }} />
            <Text size="small" style={{ color: '#1A6633' }}>{item.proficiencyLevel}</Text>
          </Flex>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function CompletionCard({ item }) {
  const [modalOpen, setModalOpen] = useState(false)
  const showCredit = item.type === 'Program completion' || item.type === 'Course completion'
  const showProficiency = item.type === 'Outcome mastery'

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
        <Text weight="bold" size="small" as="div" lineHeight="condensed">{item.name}</Text>
        <View as="div" margin="xx-small 0 0 0">
          <Text size="x-small" color="secondary">{item.institution}</Text>
        </View>
        <View as="div" margin="x-small 0 0 0">
          <Flex alignItems="center" gap="xx-small" margin="0 0 xx-small 0">
            <IconCalendarMonthLine size="x-small" color="secondary" />
            <Text size="x-small" color="secondary">Completion date: {item.completionDate}</Text>
          </Flex>
          {showCredit && item.creditHours != null && (
            <Flex alignItems="center" gap="xx-small" margin="0 0 xx-small 0">
              <IconClockLine size="x-small" color="secondary" />
              <Text size="x-small" color="secondary">{item.creditHours} credit hours</Text>
            </Flex>
          )}
          {showProficiency && item.proficiencyLevel && (
            <Flex alignItems="center" gap="xx-small">
              <IconArrowOpenUpLine size="x-small" style={{ color: '#1A6633' }} />
              <Text size="x-small" style={{ color: '#1A6633' }}>{item.proficiencyLevel}</Text>
            </Flex>
          )}
        </View>
      </View>

      {modalOpen && (
        <CompletionModal item={item} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default function CompletionsBlock({ data }) {
  const [hovered, setHovered] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(data.sectionName)
  const [description, setDescription] = useState(data.description || '')
  const [items, setItems] = useState(data.items)
  const [available, setAvailable] = useState(data.availableItems || [])

  if (deleted) return null

  function addItem(item) {
    setItems(list => [...list, item])
    setAvailable(list => list.filter(i => i.id !== item.id))
  }

  function removeItem(item) {
    setAvailable(list => [...list, item])
    setItems(list => list.filter(i => i.id !== item.id))
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
        name={name}
        description={description}
        hovered={hovered}
        showPlus
        onEdit={() => setEditing(true)}
        onDelete={() => setDeleted(true)}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {items.map(item => (
          <CompletionCard key={item.id} item={item} />
        ))}
      </div>

      {editing && (
        <SectionItemsEditModal
          heading="Edit learning achievements"
          name={name}
          description={description}
          inItems={items}
          availableItems={available}
          getLabel={item => item.name}
          getMeta={item => `${item.type} · ${item.institution}`}
          onChangeName={setName}
          onChangeDescription={setDescription}
          onAddItem={addItem}
          onRemoveItem={removeItem}
          onClose={() => setEditing(false)}
        />
      )}
    </View>
  )
}
