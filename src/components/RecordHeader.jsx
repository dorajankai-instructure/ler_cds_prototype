import { useState } from 'react'
import {
  Breadcrumb,
  Button,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Menu,
  Tag,
  Text,
  View,
} from '@instructure/ui'
import {
  IconMoreLine,
  IconShareLine,
} from '@instructure/ui-icons'

export default function RecordHeader({ recordDetail }) {
  const [isPublic, setIsPublic] = useState(recordDetail.status === 'Public')

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb label="Navigation">
        <Breadcrumb.Link href="#">My records</Breadcrumb.Link>
        <Breadcrumb.Link>{recordDetail.name}</Breadcrumb.Link>
      </Breadcrumb>

      {/* Title */}
      <Heading level="h1" margin="small 0 x-small 0">{recordDetail.name}</Heading>

      {/* Meta row */}
      <Flex alignItems="center" gap="small" wrap="wrap" margin="0 0 small 0">
        <Flex.Item>
          <Flex alignItems="center" gap="xx-small">
            <Text size="small" color="secondary">Targeted for:</Text>
            <Tag text={recordDetail.target} size="small" />
          </Flex>
        </Flex.Item>

        <Flex.Item>
          <Text size="small" color="secondary" aria-hidden="true">·</Text>
        </Flex.Item>

        <Flex.Item>
          <Flex alignItems="center" gap="xx-small">
            <Text size="small" color="secondary">Last edited:</Text>
            <Text size="small">{recordDetail.lastEdited}</Text>
          </Flex>
        </Flex.Item>

        <Flex.Item>
          <Text size="small" color="secondary" aria-hidden="true">·</Text>
        </Flex.Item>

        <Flex.Item>
          <Text size="small">{recordDetail.views} views</Text>
        </Flex.Item>
      </Flex>

      {/* Public/Private toggle row */}
      <View as="div" margin="0 0 small 0">
        <Checkbox
          label="Public"
          variant="toggle"
          checked={isPublic}
          onChange={e => setIsPublic(e.target.checked)}
        />
      </View>

      {/* Actions row */}
      <Flex gap="small" margin="0 0 small 0">
        <Button color="primary" renderIcon={IconShareLine}>Share</Button>
        <Button color="secondary">Preview public view</Button>
        <Menu
          trigger={
            <IconButton
              renderIcon={IconMoreLine}
              screenReaderLabel="More options"
              withBackground={false}
              withBorder={false}
            />
          }
        >
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Item>Delete record</Menu.Item>
        </Menu>
      </Flex>
    </div>
  )
}
