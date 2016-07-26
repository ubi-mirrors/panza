/* eslint-env mocha */

import React from 'react'
import {
  Text
} from 'react-native'

import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Card } from '../Card'
import { createRenderer, applyWrapper, getProps } from '../../utils/testUtils'

const renderCard = createRenderer(
  <Card>
    <Text>Hi</Text>
  </Card>
)
const propGetter = applyWrapper(getProps)(renderCard)
const testProps = (props, expected) => expect(propGetter(props)).to.containSubset(expected)

describe('<Card />', () => {
  it('should render with props', () => {
    testProps({}, {
      mt: 1
    })
  })
})
