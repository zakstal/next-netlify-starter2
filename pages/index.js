import { useState, useEffect } from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Person from '@components/Person'

const allPeople = {
  janet: `
  Hi Janet!

  You have an incredible sense of style. The way you wear those white jeans is fabulous.

  Would love to be friends. I'll be back through the area. strictly platonic!
  `
}

export default function Home() {
  const [state, setState] = useState(true)
  const [searchTerm, setSearch] = useState('')

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('main-input').focus();
    }, 2000)
  }, [])

  console.log('allPeople[searchTerm', allPeople[searchTerm])
  const tearm = (allPeople[searchTerm] || '').toLowerCase()
  return (
    <div className={`container ${state ? 'in' : ''}`}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />o
      </Head>

      <main>
        <Header className={state ? 'in' : ''} title="Did I like you?" />
        <p className={`description ${state ? 'in' : ''}`}>
          Here's why
        </p>
        <input value={searchTerm} onChange={(v) => setSearch(v.target.value)} id="main-input" className={`main-input`} placeholder=" What's your name" autoFocus></input>
      </main>
      <div className="person-container">
        {
        searchTerm && !tearm
        ? (<div class="circle-container">
            <div class="circle-1 circle-top"></div>
            <div class="circle-2 circle-top"></div>
            <div class="circle-3 circle-top"></div>
            <div class="circle-4 circle-top"></div>
            <div class="circle-5 circle-top"></div>
          </div>
        )
        :(<Person body={tearm}/>)
      }
      </div>


    </div>
  )
}
