import { Open_Sans } from 'next/font/google'
import Head from 'next/head'

import { Back } from '@/components/back'
import { Button } from '@/components/button'
import { NebulaLogo } from '@/components/nebula-logo'
import {
  questionnaireSelector,
  useAppDispatch,
  useAppSelector
} from '@/lib/store/hooks'
import { select } from '@/lib/store/questionnaire'

const openSans = Open_Sans({ subsets: ['latin'] })

function QuestionaireHeader() {
  const questionnaire = useAppSelector(questionnaireSelector)
  const dispatch = useAppDispatch()
  return (
    <header className="grid h-14 grid-cols-3 items-center py-1">
      {questionnaire.question.prev && (
        <Back
          onClick={() =>
            questionnaire.question.prev
              ? dispatch(select({ question: questionnaire.question.prev }))
              : alert('Ooups, unexpected error occured. Neo broke the Matrix')
          }
        />
      )}
      <NebulaLogo className="col-start-2 col-end-2 mx-auto" />
    </header>
  )
}

const specialStyle = `
body {
    background: linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%) !important;
}

* {
    color: white !important;
}

button {
    color: #6A3AA2 !important;
}

img {
    filter: brightness(0) invert(1);
}
`

// Yeah, this is bad, but I don't have any more time for better solution tbh.
// As Todd Howard said: "It just works!"
function QuestionaireModifier() {
  const questionnaire = useAppSelector(questionnaireSelector)
  if (!questionnaire.question.special) {
    return null
  }
  return (
    <Head>
      <style>{specialStyle}</style>
    </Head>
  )
}

function QuestionaireBody() {
  const questionnaire = useAppSelector(questionnaireSelector)
  const dispatch = useAppDispatch()

  const finish = () => {
    // this is just to finish, imagine API call in here
    alert('Finished questionnaire, check console for human readable answers')
    console.log(
      questionnaire.answers,
      '\n\n',
      questionnaire.answers.flatMap(([q, a]) => `Q:${q}\nA:${a}`).join('\n\n')
    )
  }

  return (
    <div className="questionaire--body mx-auto max-w-md px-4 pb-4">
      <div className="mb-8 mt-4">
        <h2 className="text-2xl font-bold">{questionnaire.question.text}</h2>
      </div>
      <ul className="mt-8 grid gap-5">
        {questionnaire.question.options.map((option, index) => (
          <li className="grid" key={index}>
            <Button
              withGradient={
                questionnaire.last?.[0] === questionnaire.question.text &&
                questionnaire.last?.[1] === option.text &&
                !questionnaire.question.special
              }
              onClick={() =>
                option.next
                  ? dispatch(
                      select({
                        question: option.next,
                        asnwer: [questionnaire.question.text, option.text]
                      })
                    )
                  : finish()
              }
            >
              {option.text}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Questionaire() {
  return (
    <section className="container mx-auto">
      <QuestionaireHeader />
      <QuestionaireBody />
      <QuestionaireModifier />
    </section>
  )
}

export default function Home() {
  return (
    <main
      className={`flex min-h-dvh min-h-screen flex-col ${openSans.className}`}
    >
      <Questionaire />
    </main>
  )
}
