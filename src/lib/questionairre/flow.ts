import { Choice, Question } from './constructors'

const referrer = new Question('Where did you hear about us?', [
  new Choice('Poster or Billboard'),
  new Choice('Friend or Family'),
  new Choice('Instagram'),
  new Choice('Direct Mail or Package Insert'),
  new Choice('Online TV or Streaming TV'),
  new Choice('TV'),
  new Choice('Radio'),
  new Choice('Search Engine (Google, Bing, etc.)'),
  new Choice('Newspaper or Magazine'),
  new Choice('Facebook'),
  new Choice('Blog Post or Website Review'),
  new Choice('Podcast'),
  new Choice('Influencer'),
  new Choice('Youtube'),
  new Choice('Pinterest'),
  new Choice('Other')
])

const relationshipGoalsFeelings = new Question(
  'When you think about your relationship goals, you feel...?',
  [
    new Choice(
      'Optimistic! They are totally doable, with some guidance.',
      referrer
    ),
    new Choice('Cautious. I’ve struggled before, but I’m hopeful.', referrer),
    new Choice('I’m feeling a little anxious, honestly.', referrer)
  ]
)

// TODO this must have 2 elements to render, quotes are in other font
const relationshipPartnerPriority = new Question(
  'Do you agree with the statement below? “My partner and I make sex a priority in our relationship”',
  [
    new Choice('Strongly agree', relationshipGoalsFeelings),
    new Choice('Agree', relationshipGoalsFeelings),
    new Choice('Neutral', relationshipGoalsFeelings),
    new Choice('Disagee', relationshipGoalsFeelings),
    new Choice('Strongly disagree', relationshipGoalsFeelings)
  ]
)

const relationshipPartnerGender = new Question(
  'What is your partner’s gender?',
  [
    new Choice('Male', relationshipPartnerPriority),
    new Choice('Female', relationshipPartnerPriority)
  ]
)

const relationshipPartnerPsychoType = new Question(
  'Is your partner an introvert or extrovert?',
  [
    new Choice('Introvert', relationshipPartnerGender),
    new Choice('Extrovert', relationshipPartnerGender),
    new Choice('A bit of both', relationshipPartnerGender)
  ]
)

const relationshipProblem = new Question(
  '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
  [
    new Choice(
      'I’m very unhappy with how things are going in my relationship',
      relationshipPartnerPsychoType
    ),
    new Choice(
      'I’m unhappy with parts of my relationship, but some things are working well',
      relationshipPartnerPsychoType
    ),
    new Choice(
      'I’m generally happy in my relationship',
      relationshipPartnerPsychoType
    )
  ]
)

const relationshipParent = new Question('Are you a parent?', [
  new Choice('Yes', relationshipProblem),
  new Choice('No', relationshipProblem)
])

const importantTraits = new Question('What is most important to you?', [
  new Choice('Success', referrer),
  new Choice('Romance', referrer),
  new Choice('Stability', referrer),
  new Choice('Freedom', referrer)
])

const emotionalControl = new Question('Is emotional control tricky for you?', [
  new Choice('Yes', referrer),
  new Choice('Sometimes', referrer),
  new Choice('Rarely', referrer),
  new Choice('Not at all', referrer)
])

const whatIsText =
  'So how does it work? We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.'
const whatIsButton = 'Next'

const singleWhatIsYes = new Question(whatIsText, [
  new Choice(whatIsButton, importantTraits)
])
const singleWhatIsNo = new Question(whatIsText, [
  new Choice(whatIsButton, emotionalControl)
])

const tendToOverthink = new Question('Do you tend to overthink?', [
  new Choice('Yes', singleWhatIsYes),
  new Choice('No', singleWhatIsNo)
])

const singleProblem = new Question(
  'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  [
    new Choice(
      'I was unhappy with low things were going in my relationship',
      tendToOverthink
    ),
    new Choice(
      'I was unhappy with parts of my relationship, but some thing were working',
      tendToOverthink
    ),
    new Choice('I was generally happy with my relationship', tendToOverthink),
    new Choice('I’ve never been in a relationship', tendToOverthink)
  ]
)

const singleParent = new Question('Are you a parent?', [
  new Choice('Yes', singleProblem),
  new Choice('No', singleProblem)
])

const flowChoice = new Question(
  'So we can get to know you better, tell us about your relationship status.',
  [
    new Choice('Single', singleParent),
    new Choice('In a relationship', relationshipParent)
  ]
)

const prelanding = new Question('Select your gender:', [
  new Choice('Female', flowChoice),
  new Choice('Male', flowChoice)
])

export const questionnaireChain = prelanding

////////////////////
type Gender = 'male' | 'female'
type PsychoType = 'introverted' | 'extraverted'

type Single = {
  isParent: boolean
  problem: string
  overthinking: boolean
  important: string
  control: string
}

type Relationship = {
  isParent: boolean
  problem: string
  partnerPsychoType: PsychoType
  partnerGernder: Gender
  partnerPriority: string
  relationshipGoals: string
  aboutUs: string
}

type Results = {
  gender: Gender
  relationship: Relationship
  single: Single
  aboutUs: string
}
