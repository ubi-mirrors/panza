import React from 'react'
import { Platform } from 'react-native'

import { Icon } from '../index'

export const ArrowRightIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-add-outline',
      android: 'md-add',
      web: 'ios-add-outline'
    })}
    size={35}
    {...props}
  />
)

ArrowRightIcon.displayName = 'ArrowRightIcon'

export const PlusIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-add-outline',
      android: 'md-add',
      web: 'ios-add-outline'
    })}
    size={35}
    {...props}
  />
)

PlusIcon.displayName = 'PlusIcon'

// on android we use 'back', on ios we use 'close'
export const CloseIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-close',
      android: 'md-arrow-back',
      web: 'md-close'
    })}
    size={20}
    {...props}
  />
)

CloseIcon.displayName = 'CloseIcon'

export const BackIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-arrow-back',
      android: 'md-arrow-back',
      web: 'ios-arrow-back'
    })}
    size={30}
    {...props}
  />
)

BackIcon.displayName = 'BackIcon'

export const SearchIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-search',
      android: 'md-search',
      web: 'ios-search'
    })}
    size={25}
    {...props}
  />
)

SearchIcon.displayName = 'SearchIcon'

export const MoreIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-more',
      android: 'md-more',
      web: 'ios-more'
    })}
    size={25}
    {...props}
  />
)

MoreIcon.displayName = 'MoreIcon'
