import { useState } from 'react'
import {
  Button,
  Checkbox,
  CloseButton,
  Flex,
  Heading,
  Modal,
  RadioInput,
  RadioInputGroup,
  TextArea,
  TextInput,
  View,
} from '@instructure/ui'

const TYPES = ['Employment', 'Internship', 'Volunteering', 'Mentoring']

export default function AddWorkEntryModal({ onSave, onClose }) {
  const [type, setType] = useState('Employment')
  const [role, setRole] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [current, setCurrent] = useState(false)
  const [context, setContext] = useState('')
  const [showErrors, setShowErrors] = useState(false)

  const requiredMsg = label => (showErrors && !label.trim() ? [{ text: 'Required', type: 'error' }] : [])

  function save() {
    if (!role.trim() || !organisation.trim() || !startDate.trim()) {
      setShowErrors(true)
      return
    }
    onSave({
      type,
      role: role.trim(),
      organisation: organisation.trim(),
      startDate: startDate.trim(),
      endDate: current ? 'Present' : (endDate.trim() || 'Present'),
      description: context.trim(),
    })
  }

  return (
    <Modal open size="medium" label="Add entry" onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">Add entry</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <RadioInputGroup
          name="entryType"
          description="Type"
          value={type}
          onChange={(e, value) => setType(value)}
          layout="columns"
        >
          {TYPES.map(t => (
            <RadioInput key={t} value={t} label={t} />
          ))}
        </RadioInputGroup>

        <View as="div" margin="medium 0 0 0">
          <TextInput
            renderLabel="Position title"
            isRequired
            value={role}
            onChange={(e, value) => setRole(value)}
            messages={requiredMsg(role)}
          />
        </View>

        <View as="div" margin="small 0 0 0">
          <TextInput
            renderLabel="Organisation"
            isRequired
            value={organisation}
            onChange={(e, value) => setOrganisation(value)}
            messages={requiredMsg(organisation)}
          />
        </View>

        <Flex gap="small" alignItems="start" margin="small 0 0 0">
          <Flex.Item shouldGrow>
            <TextInput
              renderLabel="Start date"
              isRequired
              placeholder="January 2022"
              value={startDate}
              onChange={(e, value) => setStartDate(value)}
              messages={requiredMsg(startDate)}
            />
          </Flex.Item>
          <Flex.Item shouldGrow>
            <TextInput
              renderLabel="End date"
              placeholder="December 2023"
              value={current ? 'Present' : endDate}
              onChange={(e, value) => setEndDate(value)}
              interaction={current ? 'disabled' : 'enabled'}
            />
          </Flex.Item>
        </Flex>

        <View as="div" margin="x-small 0 0 0">
          <Checkbox
            label="Currently in this role"
            checked={current}
            onChange={e => setCurrent(e.target.checked)}
          />
        </View>

        <View as="div" margin="medium 0 0 0">
          <TextArea
            label="Context (optional)"
            placeholder="Short description of the role"
            value={context}
            onChange={e => setContext(e.target.value)}
            height="100px"
          />
        </View>
      </Modal.Body>

      <Modal.Footer>
        <Button color="secondary" onClick={onClose} margin="0 x-small 0 0">Cancel</Button>
        <Button color="primary" onClick={save}>Save entry</Button>
      </Modal.Footer>
    </Modal>
  )
}
