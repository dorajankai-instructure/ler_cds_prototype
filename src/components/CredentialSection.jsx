import { useRef, useState } from 'react'
import {
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Link,
  List,
  Modal,
  Tag,
  Text,
  TextInput,
  View,
} from '@instructure/ui'
import {
  IconCalendarMonthLine,
  IconCheckMarkLine,
  IconEditLine,
  IconPlusLine,
  IconTrashLine,
} from '@instructure/ui-icons'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import { learner } from '../data/mariaReyes'

const TYPE_COLORS = {
  Diploma:     { bg: '#E9F7EF', border: '#27AE60', text: '#1A7A40' },
  Certificate: { bg: '#E8F4FB', border: '#0770A3', text: '#0770A3' },
  Badge:       { bg: '#FFF8E6', border: '#D97706', text: '#92400E' },
}

function TypeTag({ type }) {
  const c = TYPE_COLORS[type] || { bg: '#F0F0F0', border: '#999', text: '#555' }
  return (
    <Tag
      text={type}
      size="small"
      themeOverride={{ defaultBackground: c.bg, defaultBorderColor: c.border, defaultColor: c.text }}
    />
  )
}

function MetaSeparator() {
  return <span style={{ borderLeft: '1px solid #C7CDD1', height: '14px', display: 'inline-block' }} />
}

function CredentialModal({ credential, onClose }) {
  const expires = credential.expiresDate || 'No expiry'

  return (
    <Modal open size="large" label={credential.title} onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="start">
          <Flex.Item shouldGrow>
            <Heading level="h1" margin="0 0 small 0">{credential.title}</Heading>
            <Flex alignItems="center" gap="small" wrap="wrap">
              <Text size="small" color="secondary">Date acquired: {credential.issuedDate}</Text>
              <MetaSeparator />
              <Text size="small" color="secondary">Expires: {expires}</Text>
              <MetaSeparator />
              <TypeTag type={credential.type} />
            </Flex>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
          {/* Left column ~55% */}
          <div style={{ flexBasis: '55%', minWidth: 0 }}>
            <Heading level="h3" margin="0 0 x-small 0">Program overview</Heading>
            <Text as="p" lineHeight="double">{credential.description}</Text>

            <Heading level="h3" margin="medium 0 x-small 0">Earning criteria</Heading>
            <List>
              {credential.criteria.map((c, i) => (
                <List.Item key={i}>{c}</List.Item>
              ))}
            </List>
          </div>

          {/* Right column ~45% */}
          <div style={{ flexBasis: '45%', minWidth: 0 }}>
            {/* Credential image placeholder */}
            <div style={{
              height: '280px',
              background: '#F2F4F6',
              borderRadius: '6px',
              border: '1px solid #E0E4E8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '24px',
              marginBottom: '16px',
            }}>
              <Text size="medium" color="secondary">{credential.title}</Text>
            </div>

            {/* Verified by Parchment */}
            <Flex alignItems="center" gap="x-small" margin="0 0 medium 0">
              <span style={{ display: 'flex', color: '#1A7A40' }}>
                <IconCheckMarkLine style={{ color: '#1A7A40' }} />
              </span>
              <Text weight="bold" style={{ color: '#1A7A40' }}>Verified by Parchment</Text>
            </Flex>

            <View as="div" margin="0 0 small 0">
              <Text size="x-small" color="secondary" as="div" transform="uppercase" letterSpacing="expanded">Issued from</Text>
              <Link href="#">{credential.issuer}</Link>
            </View>

            <View as="div" margin="0 0 small 0">
              <Text size="x-small" color="secondary" as="div" transform="uppercase" letterSpacing="expanded">Issued to</Text>
              <Text as="div">{learner.name}</Text>
              <Text size="small" color="secondary" as="div">{learner.email}</Text>
            </View>

            <View as="div" margin="0 0 small 0">
              <Text size="x-small" color="secondary" as="div" transform="uppercase" letterSpacing="expanded">Date acquired</Text>
              <Text as="div">{credential.issuedDate}</Text>
            </View>

            <View as="div" margin="0 0 small 0">
              <Text size="x-small" color="secondary" as="div" transform="uppercase" letterSpacing="expanded">Expires</Text>
              <Text as="div">{expires}</Text>
            </View>

            <TypeTag type={credential.type} />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button color="secondary" onClick={onClose}>Close</Button>
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

function EditableHeader({ section, hovered, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(section.name)
  const [description, setDescription] = useState(section.description || '')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const containerRef = useRef(null)

  // Click / tab outside the edit area commits the changes and exits edit mode.
  function handleBlur(e) {
    if (containerRef.current && !containerRef.current.contains(e.relatedTarget)) {
      setEditing(false)
    }
  }

  if (editing) {
    return (
      <div ref={containerRef} onBlur={handleBlur} style={{ marginBottom: '16px' }}>
        <TextInput
          renderLabel="Section title"
          value={name}
          onChange={(e, value) => setName(value)}
        />
        <View as="div" margin="small 0 0 0">
          <TextInput
            renderLabel="Description (optional)"
            placeholder="Add a description"
            value={description}
            onChange={(e, value) => setDescription(value)}
          />
        </View>
        {description && (
          <View as="div" margin="x-small 0 0 0">
            <Link onClick={() => setDescription('')}>Remove description</Link>
          </View>
        )}
      </div>
    )
  }

  return (
    <>
      <Flex alignItems="start" margin="0 0 medium 0">
        <Flex.Item shouldGrow>
          <Heading level="h3" margin="0 0 xx-small 0">{name}</Heading>
          {description && <Text size="small" color="secondary">{description}</Text>}
        </Flex.Item>
        {hovered && (
          <Flex.Item>
            <div style={{ display: 'flex', gap: '2px', paddingLeft: '8px' }}>
              <IconButton
                renderIcon={IconEditLine}
                screenReaderLabel="Edit section"
                size="small"
                withBackground={false}
                withBorder={false}
                onClick={() => setEditing(true)}
              />
              <IconButton
                renderIcon={IconPlusLine}
                screenReaderLabel="Add item"
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

      <ConfirmDeleteModal
        open={confirmOpen}
        onConfirm={() => { setConfirmOpen(false); onDelete() }}
        onCancel={() => setConfirmOpen(false)}
      />
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
      <EditableHeader
        section={section}
        hovered={hovered}
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
