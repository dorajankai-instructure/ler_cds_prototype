import { useState } from 'react'
import {
  Button,
  Checkbox,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Modal,
  Pill,
  RadioInput,
  RadioInputGroup,
  Tag,
  Text,
  TextInput,
  View,
} from '@instructure/ui'
import { IconSearchLine, IconXLine } from '@instructure/ui-icons'

const MODES = [
  { value: 'automatic', label: 'Automatic sync' },
  { value: 'ai', label: 'AI suggested' },
  { value: 'manual', label: 'Manual selection' },
]

// AI-recommended skills shown when the learner clicks "Suggest skills".
const SUGGESTIONS = [
  { name: 'Health Systems Management', reason: 'Suggested based on your Health Information Systems badge' },
  { name: 'Patient Safety', reason: 'Suggested based on your Nursing Assistant Certificate' },
  { name: 'Quality Improvement', reason: 'Suggested based on your Data Analysis for Healthcare certification' },
  { name: 'Healthcare Compliance', reason: 'Suggested based on your Health Records Management skill' },
  { name: 'Clinical Workflow Optimisation', reason: 'Suggested based on your Patient Care Coordination skill' },
]

const SOLID_BLUE = { defaultBackground: '#0770A3', defaultBorderColor: '#0770A3', defaultColor: '#FFFFFF' }

function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function SkillsEditModal({ initialMode, allVerified, current, onSave, onClose }) {
  const [mode, setMode] = useState(initialMode || 'automatic')

  // Manual selection — pre-check the skills currently shown in the block.
  const [checked, setChecked] = useState(() => new Set(current.map(s => s.id)))
  const [query, setQuery] = useState('')

  // AI suggested — status per suggestion: 'pending' | 'added' | 'dismissed'.
  const [revealed, setRevealed] = useState(false)
  const [suggestions, setSuggestions] = useState(() =>
    SUGGESTIONS.map(s => ({ ...s, status: 'pending' }))
  )

  function toggleChecked(id) {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function setSuggestionStatus(name, status) {
    setSuggestions(list => list.map(s => (s.name === name ? { ...s, status } : s)))
  }

  function handleSave() {
    if (mode === 'automatic') {
      // Synced from credentials — show every verified skill.
      onSave({ mode, skills: allVerified })
    } else if (mode === 'manual') {
      onSave({ mode, skills: allVerified.filter(s => checked.has(s.id)) })
    } else {
      // AI suggested — keep what's shown and append accepted suggestions.
      const existingNames = new Set(current.map(s => s.name))
      const added = suggestions
        .filter(s => s.status === 'added' && !existingNames.has(s.name))
        .map(s => ({ id: `skill-ai-${slug(s.name)}`, name: s.name, aiSuggested: true }))
      onSave({ mode, skills: [...current, ...added] })
    }
  }

  const filtered = allVerified.filter(s => s.name.toLowerCase().includes(query.trim().toLowerCase()))
  const visibleSuggestions = suggestions.filter(s => s.status !== 'dismissed')

  return (
    <Modal open size="medium" label="Edit skills" onDismiss={onClose} shouldCloseOnDocumentClick>
      <Modal.Header>
        <Flex justifyItems="space-between" alignItems="center">
          <Flex.Item shouldGrow>
            <Heading level="h2" margin="0">Edit skills</Heading>
          </Flex.Item>
          <CloseButton placement="end" offset="small" screenReaderLabel="Close" onClick={onClose} />
        </Flex>
      </Modal.Header>

      <Modal.Body>
        <RadioInputGroup
          name="skillsMode"
          description="How would you like to manage your skills?"
          value={mode}
          onChange={(e, value) => setMode(value)}
          variant="toggle"
          layout="columns"
        >
          {MODES.map(m => (
            <RadioInput key={m.value} value={m.value} label={m.label} />
          ))}
        </RadioInputGroup>

        <View as="div" margin="medium 0 0 0">
          {mode === 'automatic' && (
            <AutomaticPanel skills={allVerified} />
          )}

          {mode === 'ai' && (
            <AiPanel
              revealed={revealed}
              onSuggest={() => setRevealed(true)}
              suggestions={visibleSuggestions}
              onAdd={name => setSuggestionStatus(name, 'added')}
              onDismiss={name => setSuggestionStatus(name, 'dismissed')}
              onAcceptAll={() => setSuggestions(list => list.map(s => (s.status === 'dismissed' ? s : { ...s, status: 'added' })))}
              onDismissAll={() => setSuggestions(list => list.map(s => ({ ...s, status: 'dismissed' })))}
            />
          )}

          {mode === 'manual' && (
            <ManualPanel
              skills={filtered}
              query={query}
              onQuery={setQuery}
              checked={checked}
              onToggle={toggleChecked}
            />
          )}
        </View>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClose} margin="0 x-small 0 0">Cancel</Button>
        <Button color="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

function AutomaticPanel({ skills }) {
  return (
    <View as="div">
      <Flex gap="small" alignItems="center" margin="0 0 small 0">
        <Heading level="h3" margin="0">Verified skills</Heading>
        <Pill color="success">Synced</Pill>
      </Flex>
      <Text size="small" color="secondary" as="div">
        These skills are synced automatically from your credentials.
      </Text>
      <Flex wrap="wrap" gap="x-small" margin="medium 0 0 0">
        {skills.map(skill => (
          <Tag key={skill.id} text={skill.name} size="medium" themeOverride={SOLID_BLUE} />
        ))}
      </Flex>
      <View as="div" margin="medium 0 0 0">
        <Text size="small" color="secondary">
          Adding a credential to your record will update this list automatically.
        </Text>
      </View>
    </View>
  )
}

function AiPanel({ revealed, onSuggest, suggestions, onAdd, onDismiss, onAcceptAll, onDismissAll }) {
  if (!revealed) {
    return (
      <View as="div">
        <View as="div" margin="0 0 medium 0">
          <Text color="secondary">
            Click Suggest skills to see AI-recommended skills based on your credentials.
          </Text>
        </View>
        <Button color="primary" onClick={onSuggest}>Suggest skills</Button>
      </View>
    )
  }

  return (
    <View as="div">
      <Flex gap="small" margin="0 0 medium 0">
        <Button size="small" onClick={onAcceptAll}>Accept all</Button>
        <Button size="small" onClick={onDismissAll}>Dismiss all</Button>
      </Flex>

      {suggestions.length === 0 && (
        <Text color="secondary">No suggestions left.</Text>
      )}

      {suggestions.map(s => (
        <View
          key={s.name}
          as="div"
          borderWidth="0 0 small 0"
          borderColor="primary"
          padding="small 0"
        >
          <Flex alignItems="center" gap="small">
            <Flex.Item shouldGrow shouldShrink>
              <Text weight="bold" as="div">{s.name}</Text>
              <Text size="small" color="secondary" as="div">{s.reason}</Text>
            </Flex.Item>
            <Flex.Item>
              {s.status === 'added' ? (
                <Text size="small" weight="bold" themeOverride={{ primaryColor: '#1A6633' }} color="primary">
                  ✓ Added
                </Text>
              ) : (
                <Button size="small" onClick={() => onAdd(s.name)}>Add</Button>
              )}
            </Flex.Item>
            <Flex.Item>
              <IconButton
                size="small"
                withBackground={false}
                withBorder={false}
                screenReaderLabel={`Dismiss ${s.name}`}
                onClick={() => onDismiss(s.name)}
              >
                <IconXLine />
              </IconButton>
            </Flex.Item>
          </Flex>
        </View>
      ))}
    </View>
  )
}

function ManualPanel({ skills, query, onQuery, checked, onToggle }) {
  return (
    <View as="div">
      <Text size="small" color="secondary" as="div">
        Search your verified skills and choose which ones appear in this section.
      </Text>
      <View as="div" margin="small 0 medium 0">
        <TextInput
          renderLabel="Search skills"
          placeholder="Search skills"
          value={query}
          onChange={(e, value) => onQuery(value)}
          renderBeforeInput={<IconSearchLine inline={false} />}
        />
      </View>
      <View as="div" maxHeight="240px" overflowY="auto">
        {skills.length === 0 && (
          <Text size="small" color="secondary">No skills match your search.</Text>
        )}
        {skills.map(skill => (
          <View key={skill.id} as="div" margin="0 0 small 0">
            <Checkbox
              label={skill.name}
              checked={checked.has(skill.id)}
              onChange={() => onToggle(skill.id)}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
