import { Flex, Metric, View } from '@instructure/ui'

function DonutChart({ types }) {
  const total = types.reduce((sum, t) => sum + t.count, 0)
  const r = 40
  const cx = 60
  const cy = 60
  const C = 2 * Math.PI * r

  let accumulated = 0
  const segments = types.map(type => {
    const segLen = (type.count / total) * C
    const dashOffset = -accumulated
    accumulated += segLen
    return { ...type, segLen, dashOffset }
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Content type distribution">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F0F0F0" strokeWidth="18" />
        <g transform={`rotate(-90, ${cx}, ${cy})`}>
          {segments.map(seg => (
            <circle
              key={seg.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="18"
              strokeDasharray={`${seg.segLen} ${C}`}
              strokeDashoffset={seg.dashOffset}
            />
          ))}
        </g>
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="16" fontWeight="700" fill="#2D3748">{total}</text>
        <text x={cx} y={cy + 11} textAnchor="middle" fontSize="9" fill="#718096">total</text>
      </svg>
    </div>
  )
}

export default function RecordGlance({ data }) {
  const contentTypes = [
    { label: 'Credentials',  count: data.credentials,       color: '#0770A3' },
    { label: 'Skills',       count: data.skills,            color: '#27AE60' },
    { label: 'Achievements', count: data.achievements,      color: '#D97706' },
    { label: 'Employment',   count: data.employmentEntries, color: '#DC2626' },
  ]

  return (
    <View
      as="div"
      background="primary"
      borderWidth="small"
      borderColor="primary"
      borderRadius="medium"
      shadow="resting"
      padding="medium large"
    >
      <Flex alignItems="center" justifyItems="space-between" gap="large">
        <Flex.Item shouldGrow>
          <Flex gap="x-large" alignItems="center">
            <Metric renderLabel="Credentials" renderValue={data.credentials} />
            <Metric renderLabel="Skills" renderValue={data.skills} />
            <Metric renderLabel="Achievements" renderValue={data.achievements} />
            <Metric renderLabel="Employment" renderValue={data.employmentEntries} />
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <DonutChart types={contentTypes} />
        </Flex.Item>
      </Flex>
    </View>
  )
}
