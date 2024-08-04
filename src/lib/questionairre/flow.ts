import { Choice, Question } from './constructors'

const referrer = new Question({
  text: 'Where did you hear about us?',
  options: [
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
  ]
})

const relationshipGoalsFeelings = new Question({
  text: 'When you think about your relationship goals, you feel...?',
  options: [
    new Choice(
      'Optimistic! They are totally doable, with some guidance.',
      referrer
    ),
    new Choice('Cautious. I’ve struggled before, but I’m hopeful.', referrer),
    new Choice('I’m feeling a little anxious, honestly.', referrer)
  ]
})

const relationshipPartnerPriority = new Question({
  text: 'Do you agree with the statement below?',
  description: '“My partner and I make sex a priority in our relationship”',
  options: [
    new Choice('Strongly agree', relationshipGoalsFeelings),
    new Choice('Agree', relationshipGoalsFeelings),
    new Choice('Neutral', relationshipGoalsFeelings),
    new Choice('Disagee', relationshipGoalsFeelings),
    new Choice('Strongly disagree', relationshipGoalsFeelings)
  ]
})

const relationshipPartnerGender = new Question({
  text: 'What is your partner’s gender?',
  options: [
    new Choice('Male', relationshipPartnerPriority),
    new Choice('Female', relationshipPartnerPriority)
  ]
})

const relationshipPartnerPsychoType = new Question({
  text: 'Is your partner an introvert or extrovert?',
  options: [
    new Choice('Introvert', relationshipPartnerGender),
    new Choice('Extrovert', relationshipPartnerGender),
    new Choice('A bit of both', relationshipPartnerGender)
  ]
})

const relationshipProblem = new Question({
  text: '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
  options: [
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
})

const relationshipParent = new Question({
  text: 'Are you a parent?',
  options: [
    new Choice('Yes', relationshipProblem),
    new Choice('No', relationshipProblem)
  ]
})

const importantTraits = new Question({
  text: 'What is most important to you?',
  options: [
    new Choice('Success', referrer),
    new Choice('Romance', referrer),
    new Choice('Stability', referrer),
    new Choice('Freedom', referrer)
  ]
})

const emotionalControl = new Question({
  text: 'Is emotional control tricky for you?',
  options: [
    new Choice('Yes', referrer),
    new Choice('Sometimes', referrer),
    new Choice('Rarely', referrer),
    new Choice('Not at all', referrer)
  ]
})

const whatIsText = 'So how does it work?'
const whatIsDescription =
  'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.'
const next = 'Next'
const singleWhatIsYes = new Question({
  text: whatIsText,
  description: whatIsDescription,
  options: [new Choice(next, importantTraits)],
  special: true
})
const singleWhatIsNo = new Question({
  text: whatIsText,
  description: whatIsDescription,
  options: [new Choice(next, emotionalControl)],
  special: true
})

const tendToOverthink = new Question({
  text: 'Do you tend to overthink?',
  options: [
    new Choice('Yes', singleWhatIsYes),
    new Choice('No', singleWhatIsNo)
  ]
})

const singleProblem = new Question({
  text: 'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  options: [
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
})

const singleParent = new Question({
  text: 'Are you a parent?',
  options: [new Choice('Yes', singleProblem), new Choice('No', singleProblem)]
})

const flowChoice = new Question({
  text: 'So we can get to know you better, tell us about your relationship status.',
  options: [
    new Choice('Single', singleParent),
    new Choice('In a relationship', relationshipParent)
  ]
})

const prelanding = new Question({
  text: 'Select your gender:',
  options: [new Choice('Female', flowChoice), new Choice('Male', flowChoice)]
})

export const questionnaireChain = prelanding
