import { Choice, Question } from './constructors'

const referrer = new Question({
  text: 'Where did you hear about us?',
  options: [
    new Choice({ text: 'Poster or Billboard' }),
    new Choice({ text: 'Friend or Family' }),
    new Choice({ text: 'Instagram' }),
    new Choice({ text: 'Direct Mail or Package Insert' }),
    new Choice({ text: 'Online TV or Streaming TV' }),
    new Choice({ text: 'TV' }),
    new Choice({ text: 'Radio' }),
    new Choice({ text: 'Search Engine (Google, Bing, etc.)' }),
    new Choice({ text: 'Newspaper or Magazine' }),
    new Choice({ text: 'Facebook' }),
    new Choice({ text: 'Blog Post or Website Review' }),
    new Choice({ text: 'Podcast' }),
    new Choice({ text: 'Influencer' }),
    new Choice({ text: 'Youtube' }),
    new Choice({ text: 'Pinterest' }),
    new Choice({ text: 'Other' })
  ]
})

const relationshipGoalsFeelings = new Question({
  text: 'When you think about your relationship goals, you feel...?',
  options: [
    new Choice({
      text: 'Optimistic! They are totally doable, with some guidance.',
      next: referrer
    }),
    new Choice({
      text: 'Cautious. I’ve struggled before, but I’m hopeful.',
      next: referrer
    }),
    new Choice({
      text: 'I’m feeling a little anxious, honestly.',
      next: referrer
    })
  ]
})

const relationshipPartnerPriority = new Question({
  text: 'Do you agree with the statement below?',
  description: '“My partner and I make sex a priority in our relationship”',
  options: [
    new Choice({ text: 'Strongly agree', next: relationshipGoalsFeelings }),
    new Choice({ text: 'Agree', next: relationshipGoalsFeelings }),
    new Choice({ text: 'Neutral', next: relationshipGoalsFeelings }),
    new Choice({ text: 'Disagee', next: relationshipGoalsFeelings }),
    new Choice({ text: 'Strongly disagree', next: relationshipGoalsFeelings })
  ]
})

const relationshipPartnerGender = new Question({
  text: 'What is your partner’s gender?',
  options: [
    new Choice({ text: 'Male', next: relationshipPartnerPriority }),
    new Choice({ text: 'Female', next: relationshipPartnerPriority })
  ]
})

const relationshipPartnerPsychoType = new Question({
  text: 'Is your partner an introvert or extrovert?',
  options: [
    new Choice({ text: 'Introvert', next: relationshipPartnerGender }),
    new Choice({ text: 'Extrovert', next: relationshipPartnerGender }),
    new Choice({ text: 'A bit of both', next: relationshipPartnerGender })
  ]
})

const relationshipProblem = new Question({
  text: '{gender} {parent} need a slightly different approach to improve their relationship. Which statement best describes you?',
  options: [
    new Choice({
      text: 'I’m very unhappy with how things are going in my relationship',
      next: relationshipPartnerPsychoType
    }),
    new Choice({
      text: 'I’m unhappy with parts of my relationship, but some things are working well',
      next: relationshipPartnerPsychoType
    }),
    new Choice({
      text: 'I’m generally happy in my relationship',
      next: relationshipPartnerPsychoType
    })
  ]
})

const relationshipParent = new Question({
  text: 'Are you a parent?',
  options: [
    new Choice({
      text: 'Yes',
      next: relationshipProblem,
      meta: { parent: 'who have children' }
    }),
    new Choice({
      text: 'No',
      next: relationshipProblem
    })
  ]
})

const importantTraits = new Question({
  text: 'What is most important to you?',
  options: [
    new Choice({ text: 'Success', next: referrer }),
    new Choice({ text: 'Romance', next: referrer }),
    new Choice({ text: 'Stability', next: referrer }),
    new Choice({ text: 'Freedom', next: referrer })
  ]
})

const emotionalControl = new Question({
  text: 'Is emotional control tricky for you?',
  options: [
    new Choice({ text: 'Yes', next: referrer }),
    new Choice({ text: 'Sometimes', next: referrer }),
    new Choice({ text: 'Rarely', next: referrer }),
    new Choice({ text: 'Not at all', next: referrer })
  ]
})

const whatIsText = 'So how does it work?'
const whatIsDescription =
  'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.'
const next = 'Next'
const singleWhatIsYes = new Question({
  text: whatIsText,
  description: whatIsDescription,
  options: [new Choice({ text: next, next: importantTraits })],
  special: true
})
const singleWhatIsNo = new Question({
  text: whatIsText,
  description: whatIsDescription,
  options: [new Choice({ text: next, next: emotionalControl })],
  special: true
})

const tendToOverthink = new Question({
  text: 'Do you tend to overthink?',
  options: [
    new Choice({ text: 'Yes', next: singleWhatIsYes }),
    new Choice({ text: 'No', next: singleWhatIsNo })
  ]
})

const singleProblem = new Question({
  text: 'Single {gender} {parent} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  options: [
    new Choice({
      text: 'I was unhappy with low things were going in my relationship',
      next: tendToOverthink
    }),
    new Choice({
      text: 'I was unhappy with parts of my relationship, but some thing were working',
      next: tendToOverthink
    }),
    new Choice({
      text: 'I was generally happy with my relationship',
      next: tendToOverthink
    }),
    new Choice({
      text: 'I’ve never been in a relationship',
      next: tendToOverthink
    })
  ]
})

const singleParent = new Question({
  text: 'Are you a parent?',
  options: [
    new Choice({
      text: 'Yes',
      next: singleProblem,
      meta: { parent: 'who have children' }
    }),
    new Choice({ text: 'No', next: singleProblem })
  ]
})

const flowChoice = new Question({
  text: 'So we can get to know you better, tell us about your relationship status.',
  options: [
    new Choice({ text: 'Single', next: singleParent }),
    new Choice({ text: 'In a relationship', next: relationshipParent })
  ]
})

const prelanding = new Question({
  text: 'Select your gender:',
  options: [
    new Choice({
      text: 'Female',
      next: flowChoice,
      meta: { gender: 'Female' }
    }),
    new Choice({ text: 'Male', next: flowChoice, meta: { gender: 'Male' } })
  ]
})

export const questionnaireChain = prelanding
