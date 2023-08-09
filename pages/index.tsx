import Image from 'next/image'
import Link from 'next/link'

import { MainLayout } from '../components/layout/MainLayout';


export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </div>

      <div className={'center'}>
        <Image
          className={'logo'}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </MainLayout>
  )
}
