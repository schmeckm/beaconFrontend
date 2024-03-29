import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Masters',
    route: '/base',
    icon: 'cil-apps',
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
    _tag: 'CSidebarNavDropdown',
    name: 'Beacon Configuration',
    route: '/base',
    icon: 'cil-speedometer',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Get Position',
        to: '/get-beacon-position',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Calculate Power',
        to: '/calculate-tx-power',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Fingerprinting',
    route: '/base',
    icon: 'cil-fingerprint',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Start/Stop Fingerprinting',
        to: '/fingerprinting',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Get ML Data Environment',
        to: '/get-mldata-environment',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Get ML Data Beacon',
      //   to: '/fingerprinting',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Get ML Data Zone',
      //   to: '/fingerprinting',
      // },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Get Beacon Lookup',
    to: '/beacon-positions-lookup',
    icon: <CIcon name="cil-map" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'System Settings',
    to: '/systemSettings',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon"/>,
  }
]

export default _nav
