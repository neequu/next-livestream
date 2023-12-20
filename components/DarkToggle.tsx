'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import React from 'react'

const DarkToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Moon />
      </Button>
      {/* <Button onClick={() => setTheme("light")}>
        <Sun />
      </Button> */}
    </div>
  )
}

export default DarkToggle
