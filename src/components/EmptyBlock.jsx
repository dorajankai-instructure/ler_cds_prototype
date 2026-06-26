import { useState } from 'react'
import { Button, Flex, Heading, IconButton, TextInput, Text, View } from '@instructure/ui'
import { IconDragHandleLine, IconEditLine, IconTrashLine } from '@instructure/ui-icons'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function EmptyBlock({ defaultName, onDelete }) {
  const [hovered, setHovered] = useState(false)
  const [name, setName] = useState(defaultName)
  const [draft, setDraft] = useState(defaultName)
  const [editing, setEditing] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  function startEdit() { setDraft(name); setEditing(true) }
  function saveName() { setName(draft.trim() || defaultName); setEditing(false) }

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
      <Flex alignItems="center" margin="0 0 medium 0">
        <Flex.Item shouldGrow>
          {editing ? (
            <Flex gap="small" alignItems="end">
              <Flex.Item shouldGrow>
                <TextInput
                  renderLabel="Section name"
                  value={draft}
                  onChange={(e, value) => setDraft(value)}
                />
              </Flex.Item>
              <Flex.Item>
                <Button color="primary" size="small" onClick={saveName}>Done</Button>
              </Flex.Item>
            </Flex>
          ) : (
            <Heading level="h3" margin="0">{name}</Heading>
          )}
        </Flex.Item>
        {hovered && !editing && (
          <Flex.Item>
            <div style={{ display: 'flex', gap: '2px', paddingLeft: '8px' }}>
              <IconButton
                renderIcon={IconEditLine}
                screenReaderLabel="Edit section name"
                size="small"
                withBackground={false}
                withBorder={false}
                onClick={startEdit}
              />
              <IconButton
                renderIcon={IconDragHandleLine}
                screenReaderLabel="Reorder section"
                size="small"
                withBackground={false}
                withBorder={false}
              />
              <IconButton
                renderIcon={IconTrashLine}
                screenReaderLabel="Delete section"
                size="small"
                withBackground={false}
                withBorder={false}
                onClick={() => setConfirmOpen(true)}
              />
            </div>
          </Flex.Item>
        )}
      </Flex>

      {/* Empty placeholder */}
      <View
        as="div"
        textAlign="center"
        padding="large"
        borderRadius="medium"
        background="secondary"
        style={{ border: '1px dashed #C7CDD1' }}
      >
        <Text color="secondary">This section is empty. Click edit to add content.</Text>
      </View>

      <ConfirmDeleteModal
        open={confirmOpen}
        onConfirm={() => { setConfirmOpen(false); onDelete() }}
        onCancel={() => setConfirmOpen(false)}
      />
    </View>
  )
}
