import {
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Modal,
  Text,
  TextInput,
  View,
} from '@instructure/ui'
import { IconPlusLine, IconXLine } from '@instructure/ui-icons'

function ItemRow({ item, getLabel, getMeta, action }) {
  return (
    <View
      as="div"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="x-small small"
      margin="0 0 x-small 0"
    >
      <Flex alignItems="center" gap="small">
        <Flex.Item shouldGrow>
          <Text weight="bold" size="small" as="div" lineHeight="condensed">{getLabel(item)}</Text>
          {getMeta(item) && (
            <Text size="x-small" color="secondary" as="div">{getMeta(item)}</Text>
          )}
        </Flex.Item>
        <Flex.Item>{action}</Flex.Item>
      </Flex>
    </View>
  )
}

export default function SectionItemsEditModal({
  heading,
  name,
  description,
  inItems,
  availableItems,
  getLabel,
  getMeta,
  onChangeName,
  onChangeDescription,
  onAddItem,
  onRemoveItem,
  onClose,
  autoFocusName = false,
}) {
  return (
    <Modal open size="medium" label={heading} onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">{heading}</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <TextInput
          renderLabel="Section name"
          value={name}
          onChange={(e, value) => onChangeName(value)}
          inputRef={el => { if (el && autoFocusName) el.focus() }}
        />
        <View as="div" margin="small 0 0 0">
          <TextInput
            renderLabel="Description (optional)"
            placeholder="Add a description"
            value={description}
            onChange={(e, value) => onChangeDescription(value)}
          />
        </View>

        {/* In this section */}
        <View as="div" margin="large 0 0 0">
          <Text size="small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
            In this section
          </Text>
          <View as="div" margin="small 0 0 0">
            {inItems.length === 0 && (
              <Text size="small" color="secondary">No items in this section yet.</Text>
            )}
            {inItems.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                getLabel={getLabel}
                getMeta={getMeta}
                action={
                  <IconButton
                    renderIcon={IconXLine}
                    screenReaderLabel={`Remove ${getLabel(item)}`}
                    size="small"
                    withBackground={false}
                    withBorder={false}
                    onClick={() => onRemoveItem(item)}
                  />
                }
              />
            ))}
          </View>
        </View>

        {/* Available to add */}
        <View as="div" margin="large 0 0 0">
          <Text size="small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
            Available to add
          </Text>
          <View as="div" margin="small 0 0 0">
            {availableItems.length === 0 && (
              <Text size="small" color="secondary">No more items to add.</Text>
            )}
            {availableItems.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                getLabel={getLabel}
                getMeta={getMeta}
                action={
                  <Button
                    size="small"
                    renderIcon={IconPlusLine}
                    onClick={() => onAddItem(item)}
                  >
                    Add
                  </Button>
                }
              />
            ))}
          </View>
        </View>
      </Modal.Body>

      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
