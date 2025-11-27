import tutorials from './tutorialData' // or wherever your tutorials JSON is

interface TutorialStep {
  text: string
  image?: string
}

interface Tutorial {
  id: string
  title: string
  category: string
  description: string
  video?: string
  link?: string
  steps: TutorialStep[]
}

// Improved function to get tutorial by platform and topic
export function getTutorialAnswer(platform: string, topic?: string): string {
  // Filter tutorials by platform
  const filtered = tutorials.filter(
    t => t.category.toLowerCase() === platform.toLowerCase()
  )

  if (filtered.length === 0)
    return `Sorry, I couldn't find any tutorials for ${platform}.`

  let tutorial: Tutorial

  if (topic) {
    const topicLower = topic.toLowerCase()

    // Score tutorials based on matches in title and steps
    const scoredTutorials = filtered.map(t => {
      let score = 0
      if (t.title.toLowerCase().includes(topicLower)) score += 5
      t.steps.forEach(step => {
        if (step.text.toLowerCase().includes(topicLower)) score += 3
      })
      return { tutorial: t, score }
    })

    scoredTutorials.sort((a, b) => b.score - a.score)
    tutorial = scoredTutorials[0].tutorial
  } else {
    tutorial = filtered[0]
  }

  // Build response WITHOUT images, video, or links
  let response = `Tutorial: ${tutorial.title}\n`
  response += `Description: ${tutorial.description}\n`
  response += `Steps:\n`

  tutorial.steps.forEach((step, index) => {
    response += `${index + 1}. ${step.text}\n`
  })

  return response
}
