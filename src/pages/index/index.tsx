import React, { FC, useEffect, useState } from 'react'
import fp from 'lodash/fp'
import { em } from 'polished'
import { getAll } from '~services/goal'
import GoalInput from '~components/goal-input'
import { Goal } from '~models/goal'
import { styled } from '~styles'

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${em(10)} 0;
  padding: 0 15%;
`

const MAX_GOAL_INPUTS = 3

const Home: FC = () => {
  const [goals, setGoals] = useState<Goal[]>([])

  const emptyGoalsCount = fp.range(0, MAX_GOAL_INPUTS - goals.length)

  useEffect(() => {
    getAll()
      .then(goalData => setGoals(goalData.goals))
      .catch(error => console.error(error))
  }, [])

  return (
    <Root>
      {goals.map((goal) => <GoalInput goal={goal}/>)}
      {emptyGoalsCount.map(_ => <GoalInput />)}
    </Root>
  )
}

export default Home
