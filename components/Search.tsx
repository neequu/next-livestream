'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SearchIcon, X } from 'lucide-react'

const Search = () => {
  const [input, setInput] = useState('')

  return (
    <form className='flex w-[400px] sm:flex-none'>
      <div className='relative flex-1'>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search'
          className='h-9 focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-10'
        />
        <button
          onClick={() => setInput('')}
          type='button'
          aria-label='clear input'
          className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity hover:opacity-70'
        >
          {input && <X className='w-5 sm:w-6' />}
        </button>
      </div>
      <Button className='h-9 sm:h-10'>
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
