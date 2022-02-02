import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Masters',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gateway',
        to: '/gatewayList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Beacon',
        to: '/beaconList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Environment',
        to: '/environmentList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Zone',
        to: '/zoneList',
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'System Settings',
    to: '/systemSettings',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  }
]

export default _nav