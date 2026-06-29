import { Avatar, Text } from '@instructure/ui'
import {
  IconDashboardLine,
  IconBookmarkLine,
  IconClockLine,
  IconSettingsLine,
  IconArrowOpenStartLine,
} from '@instructure/ui-icons'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: IconDashboardLine },
  { id: 'records', label: 'My Records', icon: IconBookmarkLine, active: true },
  { id: 'orders', label: 'Orders', icon: IconClockLine },
  { id: 'settings', label: 'Settings', icon: IconSettingsLine },
]

const SIDEBAR_BG = '#1D354F'
const ACTIVE_BORDER = '#0770A3'
const ACTIVE_BG = 'rgba(255,255,255,0.10)'
const TEXT_ACTIVE = '#FFFFFF'
const TEXT_INACTIVE = 'rgba(255,255,255,0.78)'

function NavItem({ icon: Icon, label, active }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 16px',
        height: '44px',
        background: active ? ACTIVE_BG : 'transparent',
        borderLeft: `3px solid ${active ? ACTIVE_BORDER : 'transparent'}`,
        cursor: 'pointer',
        marginBottom: '2px',
        color: active ? TEXT_ACTIVE : TEXT_INACTIVE,
      }}
    >
      <span style={{ display: 'flex', flexShrink: 0, color: active ? TEXT_ACTIVE : TEXT_INACTIVE }}>
        <Icon size="x-small" color="primary-inverse" style={{ opacity: active ? 1 : 0.85 }} />
      </span>
      <Text size="medium" color={active ? 'primary-inverse' : 'secondary-inverse'}>
        {label}
      </Text>
    </div>
  )
}

export default function Sidebar({ learner }) {
  return (
    <div style={{
      width: '276px',
      height: '100vh',
      background: SIDEBAR_BG,
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      flexShrink: 0,
      zIndex: 20,
    }}>
      {/* Account row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '20px 16px 16px',
      }}>
        <Avatar name={learner.name} size="small" color="shamrock" />
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            <Text size="medium" weight="bold" color="primary-inverse">
              {learner.name}
            </Text>
          </div>
          <div style={{ textTransform: 'capitalize' }}>
            <Text size="small" color="secondary-inverse">
              {learner.role}
            </Text>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: '8px 0' }}>
        {NAV_ITEMS.map(item => (
          <NavItem key={item.id} {...item} />
        ))}
      </nav>

      {/* Collapse link */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '0 16px',
        height: '40px',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.6)',
      }}>
        <span style={{ display: 'flex', flexShrink: 0, color: 'rgba(255,255,255,0.6)' }}>
          <IconArrowOpenStartLine size="x-small" color="primary-inverse" style={{ opacity: 0.6 }} />
        </span>
        <Text size="small" color="secondary-inverse">Collapse sidebar</Text>
      </div>

      {/* Parchment logo */}
      <div style={{ padding: '12px 16px 20px' }}>
        <Text size="small" weight="bold" color="primary-inverse">Parchment</Text>
      </div>
    </div>
  )
}
