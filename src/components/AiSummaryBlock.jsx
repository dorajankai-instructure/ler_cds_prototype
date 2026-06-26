import { useState } from 'react'
import { Button, Flex, IconButton, Tag, Text, TextArea, View } from '@instructure/ui'
import { IconEditLine, IconResetLine } from '@instructure/ui-icons'
import { aiSummaryAlternatives } from '../data/mariaReyes'

export default function AiSummaryBlock({ summary }) {
  const [hovered, setHovered] = useState(false)
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(summary)
  const [draft, setDraft] = useState(summary)
  // The "AI-generated" tag shows only while the summary is unchanged from the
  // original — or after a regenerate, which produces fresh AI content.
  const [aiGenerated, setAiGenerated] = useState(true)

  function startEdit() {
    setDraft(text)
    setEditing(true)
  }

  function handleBlur() {
    // On leaving the textarea, drop the tag if the draft differs from the
    // original summary; restore it if the user reset it back to the original.
    setAiGenerated(draft === summary)
  }

  function saveEdit() {
    setText(draft)
    setAiGenerated(draft === summary)
    setEditing(false)
  }

  function cancelEdit() {
    setDraft(text)
    setAiGenerated(text === summary)
    setEditing(false)
  }

  function regenerate() {
    const index = Math.floor(Math.random() * aiSummaryAlternatives.length)
    const next = aiSummaryAlternatives[index]
    setText(next)
    setDraft(next)
    setAiGenerated(true)
  }

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      shadow="resting"
    >
      <div style={{ display: 'flex' }}>
        {/* Left accent bar */}
        <div style={{ width: '5px', background: '#6B3FA0', borderRadius: '4px 0 0 4px', flexShrink: 0 }} />

        {/* Content */}
        <div
          style={{ flex: 1, padding: '20px 20px 20px 16px', position: 'relative' }}
          onMouseEnter={() => !editing && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Header row */}
          <Flex alignItems="start" margin="0 0 small 0">
            <Flex.Item shouldGrow>
              {aiGenerated && <Tag text="AI-generated" size="small" />}
            </Flex.Item>
            {hovered && !editing && (
              <Flex.Item>
                <div style={{ display: 'flex', gap: '2px' }}>
                  <IconButton
                    renderIcon={IconEditLine}
                    screenReaderLabel="Edit summary"
                    size="small"
                    withBackground={false}
                    withBorder={false}
                    onClick={startEdit}
                  />
                  <IconButton
                    renderIcon={IconResetLine}
                    screenReaderLabel="Regenerate summary"
                    size="small"
                    withBackground={false}
                    withBorder={false}
                    onClick={regenerate}
                  />
                </div>
              </Flex.Item>
            )}
          </Flex>

          {/* Body */}
          {editing ? (
            <div>
              <TextArea
                label="Summary"
                value={draft}
                onChange={e => setDraft(e.target.value)}
                onBlur={handleBlur}
                height="120px"
                resize="vertical"
              />
              <Flex gap="small" margin="small 0 0 0">
                <Button color="primary" size="small" onClick={saveEdit}>Save</Button>
                <Button color="secondary" size="small" onClick={cancelEdit}>Cancel</Button>
              </Flex>
            </div>
          ) : (
            <Text lineHeight="double">{text}</Text>
          )}
        </div>
      </div>
    </View>
  )
}
