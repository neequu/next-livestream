'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Search = () => {
  const router = useRouter()
  const [input, setInput] = useState('')
  const inputElement = useRef<null | HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input.trim()) return

    router.push(`/search?q=${input}`)
  }

  function clearInput() {
    setInput('')
    inputElement.current?.focus()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='border-[rgb(59 130_246/0.5)] flex w-[400px] overflow-hidden rounded-md border-2 border-transparent transition-colors has-[input]:focus-within:border-[#90a6f6] sm:flex-none'
    >
      <div className='relative flex-1'>
        <Input
          ref={inputElement}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search'
          className='rounded-r-none border-0 bg-[#222028] focus-visible:ring-0 focus-visible:ring-offset-0'
        />
        <button
          onClick={clearInput}
          type='button'
          aria-label='clear input'
          className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity hover:opacity-70'
        >
          {input && <X className='w-5' />}
        </button>
      </div>
      <button className='rounded-r-none bg-gray-700/20 px-4 py-2 transition-colors hover:bg-gray-700/40'>
        <SearchIcon className='h-5 w-5 text-muted-foreground' />
      </button>
    </form>
  )
}

export default Search
