import { Button, Flex, Heading, Text, View } from '@instructure/ui'
import { IconExternalLinkLine } from '@instructure/ui-icons'

export default function AppliedSection({ opportunities }) {
  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      shadow="resting"
      padding="medium large"
      height="100%"
    >
      <Heading level="h3" margin="0 0 medium 0">Applied with this record</Heading>

      {opportunities.map((opp, i) => (
        <View key={opp.id} as="div">
          <View as="div" padding="x-small 0">
            <Text weight="bold" size="small" as="div">{opp.role}</Text>
            <Text size="small" color="secondary" as="div">{opp.organisation}</Text>
            <Flex alignItems="center" gap="small" margin="xx-small 0 0 0">
              <Text size="x-small" color="secondary">Applied {opp.dateApplied}</Text>
              <Flex alignItems="center" gap="xx-small">
                <IconExternalLinkLine size="x-small" color="brand" />
                <Text size="x-small" color="brand">View</Text>
              </Flex>
            </Flex>
          </View>
          {i < opportunities.length - 1 && <View as="div" borderWidth="small 0 0 0" margin="x-small 0" />}
        </View>
      ))}

      <View as="div" margin="medium 0 0 0">
        <Button color="secondary" size="small">View all in HUB →</Button>
      </View>
    </View>
  )
}
