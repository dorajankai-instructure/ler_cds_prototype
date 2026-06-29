import { useState } from 'react'
import {
  Button,
  CloseButton,
  Flex,
  Heading,
  Modal,
  RadioInput,
  RadioInputGroup,
  Tabs,
  Tag,
  Text,
  TextInput,
  View,
} from '@instructure/ui'

const SYNC_MODES = [
  { value: 'Automatic', label: 'Automatic — sync verified skills from credentials as they are added' },
  { value: 'AI suggested', label: 'AI suggested — review AI-recommended skills before they appear' },
  { value: 'Manual', label: 'Manual — add and manage verified skills yourself' },
]

export default function SkillsEditModal({
  syncMode,
  selfReported,
  onChangeSyncMode,
  onAddSelfReported,
  onRemoveSelfReported,
  onClose,
}) {
  const [tabIndex, setTabIndex] = useState(0)
  const [newSkill, setNewSkill] = useState('')

  function addSkill() {
    const name = newSkill.trim()
    if (!name) return
    onAddSelfReported(name)
    setNewSkill('')
  }

  return (
    <Modal open size="medium" label="Edit skills" onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">Edit skills</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <Tabs onRequestTabChange={(e, { index }) => setTabIndex(index)}>
          <Tabs.Panel renderTitle="Verified skills" isSelected={tabIndex === 0} padding="medium none none">
            <Text size="small" color="secondary" as="div">
              Choose how verified skills are kept in sync with your credentials.
            </Text>
            <View as="div" margin="medium 0 0 0">
              <RadioInputGroup
                name="syncMode"
                description="Sync mode"
                value={syncMode}
                onChange={(e, value) => onChangeSyncMode(value)}
              >
                {SYNC_MODES.map(m => (
                  <RadioInput key={m.value} value={m.value} label={m.label} />
                ))}
              </RadioInputGroup>
            </View>
          </Tabs.Panel>

          <Tabs.Panel renderTitle="Self-reported skills" isSelected={tabIndex === 1} padding="medium none none">
            <Text size="small" color="secondary" as="div">
              Add or remove skills you have reported yourself.
            </Text>

            <Flex wrap="wrap" gap="x-small" margin="medium 0 medium 0">
              {selfReported.length === 0 && (
                <Text size="small" color="secondary">No self-reported skills yet.</Text>
              )}
              {selfReported.map(skill => (
                <Tag
                  key={skill.id}
                  text={skill.name}
                  dismissible
                  onClick={() => onRemoveSelfReported(skill.id)}
                  size="medium"
                  themeOverride={{ defaultBackground: '#FFFFFF', defaultBorderColor: '#9CA3AF', defaultColor: '#6B7280' }}
                />
              ))}
            </Flex>

            <Flex gap="small" alignItems="end">
              <Flex.Item shouldGrow>
                <TextInput
                  renderLabel="Add a skill"
                  placeholder="e.g. Project management"
                  value={newSkill}
                  onChange={(e, value) => setNewSkill(value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSkill() } }}
                />
              </Flex.Item>
              <Flex.Item>
                <Button color="primary" onClick={addSkill} interaction={newSkill.trim() ? 'enabled' : 'disabled'}>
                  Add
                </Button>
              </Flex.Item>
            </Flex>
          </Tabs.Panel>
        </Tabs>
      </Modal.Body>

      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Done</Button>
      </Modal.Footer>
    </Modal>
  )
}
