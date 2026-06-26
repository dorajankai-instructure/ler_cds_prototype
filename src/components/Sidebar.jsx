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
const ITEM_ACTIVE_BG = 'rgba(255,255,255,0.13)'
const ITEM_HOVER_BG = 'rgba(255,255,255,0.07)'

function NavItem({ icon: Icon, label, active }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 12px',
        height: '44px',
        borderRadius: '8px',
        background: active ? ITEM_ACTIVE_BG : 'transparent',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '2px',
      }}
    >
      {active && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: '8px',
          bottom: '8px',
          width: '3px',
          background: 'white',
          borderRadius: '0 2px 2px 0',
        }} />
      )}
      <Icon color={active ? 'primary-inverse' : undefined} style={{ opacity: active ? 1 : 0.6, flexShrink: 0 }} />
      <Text
        size="small"
        weight={active ? 'bold' : 'normal'}
        style={{ color: active ? 'white' : 'rgba(255,255,255,0.65)', lineHeight: 1 }}
      >
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
        gap: '10px',
        padding: '16px 16px 12px',
        marginBottom: '4px',
      }}>
        <Avatar
          name={learner.name}
          size="small"
          color="shamrock"
        />
        <div style={{ overflow: 'hidden' }}>
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <Text size="small" weight="bold" style={{ color: 'white', lineHeight: 1.3 }}>
              {learner.name}
            </Text>
          </div>
          <div>
            <Text size="x-small" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.2, textTransform: 'capitalize' }}>
              {learner.role}
            </Text>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: '4px 8px' }}>
        {NAV_ITEMS.map(item => (
          <NavItem key={item.id} {...item} />
        ))}
      </nav>

      {/* Collapse button */}
      <div style={{ padding: '8px 8px 0' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 12px',
          height: '40px',
          borderRadius: '8px',
          cursor: 'pointer',
          opacity: 0.6,
        }}>
          <IconArrowOpenStartLine style={{ flexShrink: 0 }} />
          <Text size="small" style={{ color: 'rgba(255,255,255,0.6)' }}>Collapse sidebar</Text>
        </div>
      </div>

      {/* Parchment logo */}
      <div style={{ padding: '12px 16px 16px' }}>
        <img
          src="/assets/parchment-logo-white.png"
          alt="Parchment"
          style={{ height: '20px', display: 'block' }}
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>
    </div>
  )
}
