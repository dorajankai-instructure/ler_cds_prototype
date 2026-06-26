import { useState } from 'react'
import { Flex, Heading, IconButton, Text } from '@instructure/ui'
import { IconEditLine, IconPlusLine, IconTrashLine } from '@instructure/ui-icons'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function SectionHeader({ name, description, hovered, showPlus = false, onDelete }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  function handleDeleteClick(e) {
    e.stopPropagation()
    setConfirmOpen(true)
  }

  function handleConfirm() {
    setConfirmOpen(false)
    onDelete?.()
  }

  function handleCancel() {
    setConfirmOpen(false)
  }

  return (
    <>
      <Flex alignItems="start" margin="0 0 medium 0">
        <Flex.Item shouldGrow>
          <Heading level="h3" margin="0 0 xx-small 0">{name}</Heading>
          {description && (
            <Text size="small" color="secondary">{description}</Text>
          )}
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
              />
              {showPlus && (
                <IconButton
                  renderIcon={IconPlusLine}
                  screenReaderLabel="Add item"
                  size="small"
                  withBackground={false}
                  withBorder={false}
                />
              )}
              <IconButton
                renderIcon={IconTrashLine}
                screenReaderLabel="Delete section"
                size="small"
                withBackground={false}
                withBorder={false}
                onClick={handleDeleteClick}
              />
            </div>
          </Flex.Item>
        )}
      </Flex>

      <ConfirmDeleteModal
        open={confirmOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  )
}
