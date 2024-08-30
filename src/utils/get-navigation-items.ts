import { Application } from '../types/application.type'
import { NavigationItem } from '../types/navigation.type'

/**
 * Function to parse application data reponse and create navigation
 * from current business availabilities. WIP.
 *
 * TODO
 * This function subject to refactor.
 * - create proper recursion
 * - allow more than 3 levels of nesting?
 * - better type safety
 */

export const getNavigationItems = (data: Application[]) => {
  const nodes: NavigationItem[] = []
  const grouped: Record<string, any> = {}

  data.forEach((application) => {
    const bcap1 = application.BCAP1
    const bcap2 = application.BCAP2
    const bcap3 = application.BCAP3

    if (!grouped[bcap1]) {
      grouped[bcap1] = {} = {}
    }

    if (!grouped[bcap1][bcap2]) {
      grouped[bcap1][bcap2] = {}
    }

    if (!grouped[bcap1][bcap2][bcap3]) {
      grouped[bcap1][bcap2][bcap3] = {}
    }
  })

  for (const [key, values] of Object.entries(grouped).sort()) {
    nodes.push({
      name: key,
      nodes: Object.entries(values)
        .sort()
        .map((obj) => ({
          name: obj[0],
          nodes: Object.entries(obj[1] as Record<string, any>)
            .sort()
            .map((obj) => ({
              name: obj[0],
            })),
        })),
    })
  }

  return nodes
}
