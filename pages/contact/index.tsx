import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { MainLayout } from '@/components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <>
            <MainLayout>
            <h1>Contact Page</h1>
                <div className={'description'}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={'code'}>pages/contact.tsx</code>
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
                    <Link href="/contact">Contact</Link>
                </div>
            </MainLayout>
        </>
    )
}