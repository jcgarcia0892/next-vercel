import React, { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
    }}>
        <div>
            {children}
        </div>
    </div>
  )
}
