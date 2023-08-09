import { MainLayout } from '@/components/layout/MainLayout';
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react';

export default function PricingPage() {
  return (
    <>
        <h1>Pricing Page</h1>
        <div className={'description'}>
            <p>
                Get started by editing&nbsp;
                <code className={'code'}>pages/pricing.tsx</code>
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
            Ir a <Link href="/about">About</Link>
        </div>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactElement) {
    return(
        <MainLayout>
            { page }
        </MainLayout>
    )
}
