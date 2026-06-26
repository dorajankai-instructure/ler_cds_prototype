import { Button, CloseButton, Flex, Heading, Modal, Text } from '@instructure/ui'

export default function ConfirmDeleteModal({ open, onConfirm, onCancel }) {
  if (!open) return null
  return (
    <Modal
      open
      size="small"
      label="Delete this section?"
      onDismiss={onCancel}
      shouldCloseOnDocumentClick
    >
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">Delete this section?</Heading>
          </Flex.Item>
          <CloseButton
            placement="end"
            offset="small"
            screenReaderLabel="Close"
            onClick={onCancel}
          />
        </Flex>
      </Modal.Header>
      <Modal.Body>
        <Text>This action cannot be undone.</Text>
      </Modal.Body>
      <Modal.Footer>
        <Flex gap="small" justifyItems="end">
          <Button color="secondary" onClick={onCancel}>Cancel</Button>
          <Button color="danger" onClick={onConfirm}>Delete</Button>
        </Flex>
      </Modal.Footer>
    </Modal>
  )
}
