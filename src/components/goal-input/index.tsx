import React, { FC } from 'react'
import { em, lighten } from 'polished'
import { styled, theme } from '~styles'
import { Goal } from '~models/goal'

interface Props {
  goal?: Goal
}

const Root = styled.input`
 background: transparent;
 border: none;
 box-shadow: 0px 0px 20px -1px ${lighten(0.3, theme.color.black)};
 padding: ${em(8)} ${em(10)};
 margin: ${em(10)} 0;
 color: inherit;
 font-size: ${em(32)};

 &:focus {
  outline: none;
 }
`

const GoalInput: FC<Props> = () => {
  return (
    <Root type="text" placeholder="Placeholder.." />
  )
}

export default GoalInput
