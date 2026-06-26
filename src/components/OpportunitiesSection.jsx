import { Button, Flex, Heading, Tag, Text, View } from '@instructure/ui'
import { IconExternalLinkLine } from '@instructure/ui-icons'

function MatchBadge({ signal }) {
  const isStrong = signal === 'Strong match'
  return (
    <Tag
      text={signal}
      size="small"
      themeOverride={{
        defaultBackground: isStrong ? '#E6F4EA' : '#FEF3C7',
        defaultBorderColor: isStrong ? '#27AE60' : '#D97706',
        defaultColor: isStrong ? '#1A6633' : '#92400E',
      }}
    />
  )
}

export default function OpportunitiesSection({ opportunities }) {
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
      <Heading level="h3" margin="0 0 xx-small 0">Matching opportunities</Heading>
      <Text size="x-small" color="secondary">
        Based on this record's skills — powered by Talent Neuron
      </Text>

      <View as="div" margin="medium 0 0 0">
        {opportunities.map((opp, i) => (
          <View key={opp.id} as="div">
            <View as="div" padding="x-small 0">
              <Text weight="bold" size="small" as="div">{opp.role}</Text>
              <Text size="small" color="secondary" as="div">{opp.organisation}</Text>
              <View as="div" margin="x-small 0 xx-small 0">
                <MatchBadge signal={opp.matchSignal} />
              </View>
              <Text size="x-small" color="secondary" fontStyle="italic">{opp.matchNote}</Text>
              <Flex alignItems="center" gap="xx-small" margin="x-small 0 0 0">
                <IconExternalLinkLine size="x-small" color="brand" />
                <Text size="x-small" color="brand">View in HUB →</Text>
              </Flex>
            </View>
            {i < opportunities.length - 1 && <View as="div" borderWidth="small 0 0 0" margin="x-small 0" />}
          </View>
        ))}
      </View>

      <View as="div" margin="medium 0 0 0">
        <Button color="secondary" size="small">See all opportunities in HUB →</Button>
      </View>
    </View>
  )
}
