import { useState } from 'react'
import { Button, CloseButton, Flex, Heading, Modal, TextArea, TextInput, View } from '@instructure/ui'

export default function AddPortfolioLinkModal({ onSave, onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [showErrors, setShowErrors] = useState(false)

  const requiredMsg = value => (showErrors && !value.trim() ? [{ text: 'Required', type: 'error' }] : [])

  function save() {
    if (!name.trim() || !url.trim()) {
      setShowErrors(true)
      return
    }
    onSave({
      title: name.trim(),
      description: description.trim(),
      url: url.trim(),
    })
  }

  return (
    <Modal open size="medium" label="Add link" onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">Add link</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <TextInput
          renderLabel="Name"
          isRequired
          value={name}
          onChange={(e, value) => setName(value)}
          messages={requiredMsg(name)}
        />
        <View as="div" margin="medium 0 0 0">
          <TextArea
            label="Description (optional)"
            placeholder="Short description of this link"
            value={description}
            onChange={e => setDescription(e.target.value)}
            height="100px"
          />
        </View>
        <View as="div" margin="medium 0 0 0">
          <TextInput
            renderLabel="URL"
            isRequired
            placeholder="example.com/my-work"
            value={url}
            onChange={(e, value) => setUrl(value)}
            messages={requiredMsg(url)}
          />
        </View>
      </Modal.Body>

      <Modal.Footer>
        <Button color="secondary" onClick={onClose} margin="0 x-small 0 0">Cancel</Button>
        <Button color="primary" onClick={save}>Save link</Button>
      </Modal.Footer>
    </Modal>
  )
}
