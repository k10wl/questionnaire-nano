import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-dvh min-h-screen flex-col ${openSans.className}`}
    >
      <p>orbio test task</p>
    </main>
  )
}
