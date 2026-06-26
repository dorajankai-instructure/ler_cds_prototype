import { Button, Heading, Text } from '@instructure/ui'

const BLOCK_TYPES = [
  'Credential block',
  'Skills',
  'Rich text',
  'Learning achievements',
  'Coursework & artifacts',
  'Work history',
  'Portfolio links',
]

export default function AddBlockFooter({ onAddBlock }) {
  return (
    <div style={{
      border: '2px dashed #C7CDD1',
      borderRadius: '8px',
      background: '#FAFAFA',
      padding: '24px',
      textAlign: 'center',
    }}>
      <Heading level="h3" margin="0 0 xx-small 0">Add new content block</Heading>
      <Text size="small" color="secondary">
        Improve your record with the following block types
      </Text>
      <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {BLOCK_TYPES.map(type => (
          <Button key={type} color="secondary" size="small" onClick={() => onAddBlock?.(type)}>
            {type}
          </Button>
        ))}
      </div>
    </div>
  )
}
