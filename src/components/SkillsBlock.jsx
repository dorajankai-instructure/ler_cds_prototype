import { useState } from 'react'
import { Flex, Tag, Text, View } from '@instructure/ui'
import SectionHeader from './SectionHeader'
import SkillTray from './SkillTray'
import SkillsEditModal from './SkillsEditModal'

// Map the stored sync mode onto the edit modal's internal mode values.
const MODE_FROM_SYNC = { Automatic: 'automatic', 'AI suggested': 'ai', Manual: 'manual' }

export default function SkillsBlock({ skills, autoEdit = false, onDelete }) {
  const [hovered, setHovered] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [editing, setEditing] = useState(autoEdit)
  const [mode, setMode] = useState(MODE_FROM_SYNC[skills.syncMode] || 'automatic')
  const [verified, setVerified] = useState(skills.verified)
  const selfReported = skills.selfReported || []

  if (deleted) return null

  function handleSave({ mode: nextMode, skills: nextSkills }) {
    setMode(nextMode)
    setVerified(nextSkills)
    setEditing(false)
  }

  return (
    <>
      <View
        as="div"
        background="primary"
        borderWidth="small"
        borderColor="primary"
        borderRadius="medium"
        shadow="resting"
        padding="medium large"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SectionHeader
          name="Skills"
          description="Skills verified by credentials and self-reported skills."
          hovered={hovered}
          onEdit={() => setEditing(true)}
          onDelete={onDelete || (() => setDeleted(true))}
        />

        {/* Verified skills */}
        <View as="div" margin="0 0 small 0">
          <Text size="x-small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
            Verified skills
          </Text>
          <Flex wrap="wrap" gap="x-small" margin="x-small 0 0 0">
            {verified.map(skill => (
              <Tag
                key={skill.id}
                text={`✓ ${skill.name}`}
                size="medium"
                onClick={() => setActiveSkill(skill)}
                themeOverride={{
                  defaultBackground: '#E8F4FB',
                  defaultBorderColor: '#0770A3',
                  defaultColor: '#003F5C',
                }}
              />
            ))}
          </Flex>
        </View>

        <View as="div" borderWidth="small 0 0 0" margin="small 0" />

        {/* Self-reported */}
        <View as="div">
          <Text size="x-small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
            Self-added skills
          </Text>
          <Flex wrap="wrap" gap="x-small" margin="x-small 0 0 0">
            {selfReported.map(skill => (
              <Tag
                key={skill.id}
                text={skill.name}
                size="medium"
                themeOverride={{
                  defaultBackground: '#FFFFFF',
                  defaultBorderColor: '#9CA3AF',
                  defaultColor: '#6B7280',
                }}
              />
            ))}
          </Flex>
        </View>
      </View>

      {activeSkill && (
        <SkillTray skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}

      {editing && (
        <SkillsEditModal
          initialMode={mode}
          allVerified={skills.verified}
          current={verified}
          onSave={handleSave}
          onClose={() => setEditing(false)}
        />
      )}
    </>
  )
}
