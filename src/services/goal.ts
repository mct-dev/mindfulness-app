import { Goal } from '~models/goal'

interface GoalsCollection {
  modifiedDate: Date
  goals: Goal[]
}

const GOALS_STORAGE_KEY = 'goals'

const defaultGoalsObject: GoalsCollection = {
  modifiedDate: new Date(),
  goals: []
}

export const getAll = async (): Promise<GoalsCollection> => {
  return await new Promise((resolve) => {
    const goals =
      localStorage.getItem(GOALS_STORAGE_KEY) ??
      JSON.stringify(defaultGoalsObject)
    const parsedGoals = JSON.parse(goals) as GoalsCollection

    return resolve(parsedGoals)
  })
}

export const save = async (goal: Goal): Promise<void> => {
  const existingGoals = await getAll()
  const newGoalsObject = {
    ...existingGoals,
    goals: [...existingGoals.goals, goal]
  }

  localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(newGoalsObject))
}
