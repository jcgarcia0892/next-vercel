import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { MainLayout } from '@/components/layout/MainLayout'
import { DarkLayout } from '@/components/layout/DarkLayout'
import { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function AboutPage() {
    return(
        <>
            <h1>About Page</h1>
            <div className={'description'}>
                <p>
                    Get started by editing&nbsp;
                    <code className={'code'}>pages/about.tsx</code>
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
                Ir al <Link href="/">Home :)</Link>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}