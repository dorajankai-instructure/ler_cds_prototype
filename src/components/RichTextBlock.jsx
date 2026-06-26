import { useState } from 'react'
import { Button, Flex, Heading, IconButton, Text, TextArea, View } from '@instructure/ui'
import { IconEditLine, IconTrashLine } from '@instructure/ui-icons'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function RichTextBlock({ block }) {
  const [hovered, setHovered] = useState(false)
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(block.content)
  const [draft, setDraft] = useState(block.content)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const paragraphs = text.split('\n\n').filter(Boolean)

  function startEdit() { setDraft(text); setEditing(true) }
  function save() { setText(draft); setEditing(false) }
  function cancel() { setDraft(text); setEditing(false) }

  if (deleted) return null

  return (
    <>
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
        <Flex alignItems="start" margin="0 0 medium 0">
          <Flex.Item shouldGrow>
            <Heading level="h3">{block.title}</Heading>
          </Flex.Item>
          {hovered && !editing && (
            <Flex.Item>
              <div style={{ display: 'flex', gap: '2px' }}>
                <IconButton
                  renderIcon={IconEditLine}
                  screenReaderLabel="Edit"
                  size="small"
                  withBackground={false}
                  withBorder={false}
                  onClick={startEdit}
                />
                <IconButton
                  renderIcon={IconTrashLine}
                  screenReaderLabel="Delete"
                  size="small"
                  withBackground={false}
                  withBorder={false}
                  onClick={e => { e.stopPropagation(); setConfirmOpen(true) }}
                />
              </div>
            </Flex.Item>
          )}
        </Flex>

        {editing ? (
          <div>
            <TextArea
              label="Content"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              height="180px"
              resize="vertical"
            />
            <Flex gap="small" margin="small 0 0 0">
              <Button color="primary" size="small" onClick={save}>Save</Button>
              <Button color="secondary" size="small" onClick={cancel}>Cancel</Button>
            </Flex>
          </div>
        ) : (
          paragraphs.map((para, i) => (
            <Text key={i} as="p" lineHeight="double" style={{ marginBottom: i < paragraphs.length - 1 ? '12px' : 0 }}>
              {para}
            </Text>
          ))
        )}
      </View>

      <ConfirmDeleteModal
        open={confirmOpen}
        onConfirm={() => { setConfirmOpen(false); setDeleted(true) }}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  )
}
