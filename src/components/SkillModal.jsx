import { Button, CloseButton, Flex, Heading, Modal, Tag, Text, View } from '@instructure/ui'

const DEMAND_COLOR = {
  'Very High': '#1A6633',
  'High':      '#2563EB',
  'Medium':    '#92400E',
  'Low':       '#6B7280',
}

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null

  const demandColor = DEMAND_COLOR[skill.talentNeuron.marketDemand] || '#6B7280'

  return (
    <Modal open onDismiss={onClose} size="medium" label={skill.name}>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">{skill.name}</Heading>
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
        {/* Backed by */}
        <Text size="x-small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
          Backed by
        </Text>
        <View as="div" margin="x-small 0 medium 0">
          {skill.backedBy.map((item, i) => (
            <View key={i} as="div" borderWidth="0 0 0 medium" borderColor="info" padding="xx-small small" margin="0 0 x-small 0">
              <Text size="small">{item}</Text>
            </View>
          ))}
        </View>

        {/* Talent Neuron panel */}
        <View
          as="div"
          background="secondary"
          borderRadius="medium"
          padding="medium"
          borderWidth="0 0 0 large"
          borderColor="info"
        >
          <Tag
            text="Talent Neuron labor market data"
            size="small"
            themeOverride={{
              defaultBackground: '#E8F4FB',
              defaultBorderColor: '#0770A3',
              defaultColor: '#0770A3',
            }}
          />

          <View as="div" margin="small 0">
            <Text size="small" lineHeight="double">{skill.talentNeuron.description}</Text>
          </View>

          <Flex gap="large" margin="0 0 small 0">
            <View>
              <Text size="x-small" color="secondary">Market demand</Text>
              <View as="div">
                <Text weight="bold" size="small" style={{ color: demandColor }}>
                  {skill.talentNeuron.marketDemand}
                </Text>
              </View>
            </View>
            <Flex.Item shouldGrow>
              <Text size="x-small" color="secondary">Related job titles</Text>
              <Flex wrap="wrap" gap="xx-small" margin="xx-small 0 0 0">
                {skill.talentNeuron.relatedTitles.map(t => (
                  <Tag key={t} text={t} size="small" />
                ))}
              </Flex>
            </Flex.Item>
          </Flex>

          <Text size="x-small" color="secondary" fontStyle="italic">
            Data from Talent Neuron labor market database
          </Text>
        </View>
      </Modal.Body>

      <Modal.Footer>
        <Button color="primary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
