import { Open_Sans } from 'next/font/google'

import { Back } from '@/components/back'
import { Button } from '@/components/button'
import { NebulaLogo } from '@/components/nebula-logo'
import { questionnaireChain } from '@/lib/questionairre'

const openSans = Open_Sans({ subsets: ['latin'] })

function QuestionaireHeader() {
  return (
    <header className="grid h-14 grid-cols-3 items-center py-1">
      <Back />
      <NebulaLogo className="col-start-2 col-end-2 mx-auto" />
    </header>
  )
}

function QuestionaireBody() {
  return (
    <div className="mx-auto max-w-md px-4">
      <div className="mb-8 mt-4">
        <h2 className="text-2xl font-bold">{questionnaireChain.text}</h2>
      </div>
      <ul className="mt-8 grid gap-5">
        {questionnaireChain.options.map((option, index) => (
          <li className="grid" key={index}>
            <Button>{option.text}</Button>
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
