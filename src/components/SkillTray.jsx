import { CloseButton, Flex, Heading, Tag, Text, Tray, View } from '@instructure/ui'

const GREEN = '#27AE60'
const BLUE = '#0770A3'

function SectionTitle({ children, hint }) {
  return (
    <View as="div" margin="0 0 small 0">
      <Heading level="h3" margin="0">{children}</Heading>
      {hint && <Text size="small" color="secondary">{hint}</Text>}
    </View>
  )
}

function Panel({ children }) {
  return (
    <View
      as="div"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      padding="medium"
      height="100%"
    >
      {children}
    </View>
  )
}

function SupplyDemandPanel({ data }) {
  const { supply, demand, status } = data
  const supplyPct = Math.round((supply / (supply + demand)) * 100)
  return (
    <Panel>
      <Text weight="bold" size="small" as="div">Supply-Demand ratio</Text>
      <Text size="x-small" color="secondary" as="div">How many candidates are available vs. open roles.</Text>
      <div style={{ display: 'flex', height: '14px', borderRadius: '7px', overflow: 'hidden', margin: '14px 0 8px' }}>
        <div style={{ width: `${supplyPct}%`, background: GREEN }} />
        <div style={{ width: `${100 - supplyPct}%`, background: BLUE }} />
      </div>
      <Flex justifyItems="space-between" margin="0 0 x-small 0">
        <Text size="x-small" color="secondary">Supply: {supply}k</Text>
        <Text size="x-small" color="secondary">Demand: {demand}k</Text>
      </Flex>
      <Text size="x-small" as="div">Status: <Text size="x-small" weight="bold">{status}</Text></Text>
    </Panel>
  )
}

function HiringDifficultyPanel({ data }) {
  const { score, max, label } = data
  return (
    <Panel>
      <Text weight="bold" size="small" as="div">Hiring difficulty</Text>
      <Text size="x-small" color="secondary" as="div">How challenging it is to fill roles requiring this skill.</Text>
      <div style={{ display: 'flex', gap: '3px', margin: '14px 0 8px' }}>
        {Array.from({ length: max }, (_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '10px',
              borderRadius: '2px',
              background: i < score ? BLUE : '#E0E5EB',
            }}
          />
        ))}
      </div>
      <Flex justifyItems="space-between" margin="0 0 x-small 0">
        <Text size="x-small" color="secondary">Easy</Text>
        <Text size="x-small" color="secondary">Hard</Text>
      </Flex>
      <Text size="x-small" as="div">Status: <Text size="x-small" weight="bold">{score}/{max} · {label}</Text></Text>
    </Panel>
  )
}

function PopularityPanel({ data }) {
  return (
    <Panel>
      <Text weight="bold" size="small" as="div">Track skill popularity</Text>
      <Text size="x-small" color="secondary" as="div">How in-demand this skill has been over time.</Text>
      <svg viewBox="0 0 240 70" width="100%" height="64" style={{ margin: '10px 0 4px' }} preserveAspectRatio="none">
        <polyline
          points="0,60 40,54 80,50 120,38 160,30 200,18 240,8"
          fill="none"
          stroke={GREEN}
          strokeWidth="2.5"
        />
        <polygon
          points="0,60 40,54 80,50 120,38 160,30 200,18 240,8 240,70 0,70"
          fill={GREEN}
          opacity="0.12"
        />
      </svg>
      <Text size="x-small" as="div" style={{ color: GREEN }}>▲ {data.change} vs last month</Text>
    </Panel>
  )
}

function SalaryPanel({ data }) {
  const { median, p25, p75 } = data
  return (
    <Panel>
      <Text weight="bold" size="small" as="div">Salary range</Text>
      <Text size="x-small" color="secondary" as="div">Estimated salary range based on labor data.</Text>
      <div style={{ margin: '14px 0 6px' }}>
        <Text size="xx-large" weight="bold">{median}</Text>{' '}
        <Text size="small" color="secondary">median</Text>
      </div>
      <Flex justifyItems="space-between">
        <Text size="x-small" color="secondary">25th: {p25}</Text>
        <Text size="x-small" color="secondary">75th: {p75}</Text>
      </Flex>
    </Panel>
  )
}

function TopJobTitles({ titles }) {
  const max = Math.max(...titles.map(t => t.posts), 1)
  return (
    <View as="div" margin="large 0 0 0">
      <SectionTitle hint="The count of job postings that include this skill within these job titles.">
        Top job titles
      </SectionTitle>
      <View as="div" margin="small 0 0 0">
        {titles.map(t => (
          <View key={t.title} as="div" margin="0 0 small 0">
            <Flex justifyItems="space-between" margin="0 0 xx-small 0">
              <Text size="small" style={{ color: BLUE }}>{t.title}</Text>
              <Text size="small" color="secondary">{t.posts}</Text>
            </Flex>
            <div style={{ height: '8px', borderRadius: '4px', background: '#E0E5EB' }}>
              <div style={{ width: `${(t.posts / max) * 100}%`, height: '100%', borderRadius: '4px', background: BLUE }} />
            </div>
          </View>
        ))}
      </View>
    </View>
  )
}

export default function SkillTray({ skill, onClose }) {
  if (!skill) return null
  const m = skill.market

  if (!m) {
    return (
      <Tray open onDismiss={onClose} placement="end" size="large" label={skill.name} shouldCloseOnDocumentClick>
        <View as="div" padding="medium large">
          <Flex alignItems="start" margin="0 0 small 0">
            <Flex.Item shouldGrow>
              <Heading level="h1" margin="0">{skill.name}</Heading>
              <Text color="secondary">Explore market labor data related to this skill.</Text>
            </Flex.Item>
            <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
          </Flex>
          <View as="div" margin="large 0 0 0">
            <Text color="secondary">Market labor data isn't available for this skill yet.</Text>
          </View>
        </View>
      </Tray>
    )
  }

  return (
    <Tray
      open
      onDismiss={onClose}
      placement="end"
      size="large"
      label={skill.name}
      shouldCloseOnDocumentClick
    >
      <View as="div" padding="medium large">
        {/* Header */}
        <Flex alignItems="start" margin="0 0 small 0">
          <Flex.Item shouldGrow>
            <Heading level="h1" margin="0">{skill.name}</Heading>
            <Text color="secondary">Explore market labor data related to this skill.</Text>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>

        <Flex gap="small" alignItems="center" margin="0 0 large 0">
          <Tag
            text="✓ Talent Neuron Skill"
            size="small"
            themeOverride={{ defaultBackground: '#E6F4EA', defaultBorderColor: GREEN, defaultColor: '#1A6633' }}
          />
          <Text size="small" color="secondary">Current Country: United States</Text>
        </Flex>

        {/* Skill ecosystem */}
        <SectionTitle hint="Overview of this skill and its broader ecosystem.">Skill ecosystem</SectionTitle>
        <Flex alignItems="stretch" gap="medium" margin="0 0 large 0">
          <Flex.Item size="50%">
            <Panel>
              <Text weight="bold" size="small" as="div">Skill hierarchy</Text>
              <Text size="x-small" color="secondary" as="div">Where this skill sits within the taxonomy.</Text>
              <View as="div" margin="small 0 0 0">
                {m.hierarchy.map((node, i) => (
                  <div key={node} style={{ paddingLeft: `${i * 16}px`, marginBottom: '4px' }}>
                    <Text
                      size="small"
                      weight={i === m.hierarchy.length - 1 ? 'bold' : 'normal'}
                      color={i === m.hierarchy.length - 1 ? 'primary' : 'secondary'}
                    >
                      {i > 0 ? '└ ' : ''}{node}
                    </Text>
                  </div>
                ))}
              </View>
            </Panel>
          </Flex.Item>
          <Flex.Item size="50%">
            <Panel>
              <Text weight="bold" size="small" as="div">Related skills</Text>
              <Text size="x-small" color="secondary" as="div">Skills employers request alongside this one.</Text>
              <View as="div" margin="small 0 0 0">
                {m.relatedSkills.map(rs => (
                  <Flex key={rs.name} justifyItems="space-between" alignItems="center" margin="0 0 x-small 0">
                    <Tag
                      text={rs.name}
                      size="small"
                      themeOverride={{ defaultBackground: '#E6F4EA', defaultBorderColor: GREEN, defaultColor: '#1A6633' }}
                    />
                    <Text size="small" color="secondary">{rs.count.toLocaleString()}</Text>
                  </Flex>
                ))}
              </View>
            </Panel>
          </Flex.Item>
        </Flex>

        {/* Market insights */}
        <SectionTitle hint="Key metrics and trends for this skill.">Market insights</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <SupplyDemandPanel data={m.supplyDemand} />
          <HiringDifficultyPanel data={m.hiringDifficulty} />
          <PopularityPanel data={m.popularity} />
          <SalaryPanel data={m.salaryRange} />
        </div>

        {/* Top job titles */}
        <TopJobTitles titles={m.topJobTitles} />
      </View>
    </Tray>
  )
}
