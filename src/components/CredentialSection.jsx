import { useState } from 'react'
import { Button, CloseButton, Flex, Heading, Modal, Text, View } from '@instructure/ui'
import { IconCalendarMonthLine } from '@instructure/ui-icons'
import SectionHeader from './SectionHeader'

function CredentialModal({ credential, onClose }) {
  return (
    <Modal
      open
      size="small"
      label={credential.title}
      onDismiss={onClose}
      shouldCloseOnDocumentClick
    >
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">{credential.title}</Heading>
          </Flex.Item>
          <CloseButton
            placement="end"
            offset="small"
            screenReaderLabel="Close"
            onClick={onClose}
          />
        </Flex>
      </Modal.Header>
      <Modal.Body>
        <View as="div" margin="0 0 x-small 0">
          <Text color="secondary" size="small">{credential.type}</Text>
        </View>
        <View as="div" margin="0 0 small 0">
          <Text size="medium">{credential.issuer}</Text>
        </View>
        <Flex alignItems="center" gap="xx-small">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="small" color="secondary">{credential.issuedDate}</Text>
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function CredentialCard({ credential }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <View
        as="div"
        background="primary"
        borderWidth="small"
        borderColor="primary"
        borderRadius="medium"
        padding="small medium"
        cursor="pointer"
        onClick={() => setModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <Text size="x-small" color="secondary" lineHeight="condensed" as="div">
          {credential.type}
        </Text>
        <View as="div" margin="xx-small 0 xx-small 0">
          <Text weight="bold" size="small" lineHeight="condensed">{credential.title}</Text>
        </View>
        <Text size="small" color="secondary" as="div">{credential.issuer}</Text>
        <Flex alignItems="center" gap="xx-small" margin="xx-small 0 0 0">
          <IconCalendarMonthLine size="x-small" color="secondary" />
          <Text size="x-small" color="secondary">{credential.issuedDate}</Text>
        </Flex>
      </View>

      {modalOpen && (
        <CredentialModal credential={credential} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default function CredentialSection({ section }) {
  const [hovered, setHovered] = useState(false)
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

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
        name={section.name}
        description={section.description}
        hovered={hovered}
        showPlus
        onDelete={() => setDeleted(true)}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {section.credentials.map(cred => (
          <CredentialCard key={cred.id} credential={cred} />
        ))}
      </div>
    </View>
  )
}
