import { useRef, useState } from 'react'
import { Flex, Heading, IconButton, Text, TextArea, TextInput, View } from '@instructure/ui'
import { IconEditLine, IconTrashLine } from '@instructure/ui-icons'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function RichTextBlock({ block }) {
  const [hovered, setHovered] = useState(false)
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(block.title)
  const [text, setText] = useState(block.content)
  const [draftTitle, setDraftTitle] = useState(block.title)
  const [draftText, setDraftText] = useState(block.content)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const containerRef = useRef(null)

  const paragraphs = text.split('\n\n').filter(Boolean)

  function startEdit() {
    setDraftTitle(title)
    setDraftText(text)
    setEditing(true)
  }

  function commit() {
    setTitle(draftTitle.trim() || title)
    setText(draftText)
    setEditing(false)
  }

  // Clicking / tabbing outside the edit area saves both the title and the body.
  // Defer so focus settles, then commit unless focus stayed inside the editor.
  function handleBlur() {
    setTimeout(() => {
      if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
        commit()
      }
    }, 0)
  }

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
        {editing ? (
          <div ref={containerRef} onBlur={handleBlur}>
            <TextInput
              renderLabel="Section title"
              value={draftTitle}
              onChange={(e, value) => setDraftTitle(value)}
            />
            <View as="div" margin="small 0 0 0">
              <TextArea
                label="Content"
                value={draftText}
                onChange={e => setDraftText(e.target.value)}
                height="180px"
                resize="vertical"
              />
            </View>
          </div>
        ) : (
          <>
            <Flex alignItems="start" margin="0 0 medium 0">
              <Flex.Item shouldGrow>
                <Heading level="h3">{title}</Heading>
              </Flex.Item>
              {hovered && (
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
            {paragraphs.map((para, i) => (
              <Text key={i} as="p" lineHeight="double" style={{ marginBottom: i < paragraphs.length - 1 ? '12px' : 0 }}>
                {para}
              </Text>
            ))}
          </>
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
