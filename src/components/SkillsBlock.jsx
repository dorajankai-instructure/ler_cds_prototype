import { useState } from 'react'
import { Flex, Tag, Text, View } from '@instructure/ui'
import SectionHeader from './SectionHeader'
import SkillModal from './SkillModal'

export default function SkillsBlock({ skills }) {
  const [hovered, setHovered] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

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
          onDelete={() => setDeleted(true)}
        />

        {/* Verified skills */}
        <View as="div" margin="0 0 small 0">
          <Text size="x-small" weight="bold" transform="uppercase" color="secondary" letterSpacing="expanded">
            Verified skills
          </Text>
          <Flex wrap="wrap" gap="x-small" margin="x-small 0 0 0">
            {skills.verified.map(skill => (
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
            {skills.selfReported.map(skill => (
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
        <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}
    </>
  )
}
