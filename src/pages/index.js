import styles from '@/styles/styles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CardList from '@/components/CardList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [evento, setEvento] = useState({})
  const router = useRouter()

  useEffect(() => {
    const id = router.query.id
    if(id) {
      axios.get (`http://localhost:3001/eventos/${id}`)
        .then(resposta => setEvento(resposta.data))
    }
  }, [])

  return (
    <>
      <div className={styles.container}>

      <Head>
        <title>Portal</title>
        <link rel="icon" href="/mundo.png" />
      </Head>

      <Cabecalho>
        Portal Conflitos Históricos
      </Cabecalho>

      <CardList>

      </CardList>
      
      <Rodape>
      </Rodape>

      </div>
    </>
  )
}
