import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'
import Cabecalho from '@/components/Cabecalho'
import Button from '@/components/Button'

export default function Visualizar(){

    const [evento, setEvento] = useState({});
    const router = useRouter();

    useEffect(() => {
      const id = router.query.id
      if(id) {
        axios.get (`http://localhost:3001/eventos/${id}`)
          .then(resposta => setEvento(resposta.data))
      }
    }, [])
    
    function formatarData(data) {
        if (typeof data === 'string') {
            const [ano, mes, dia] = data.split('-');
            return `${dia}/${mes}/${ano}`;
          } else {
            return data;
          }
    }

    return(
        <>
        <Cabecalho titulo={"Portal Conflitos Históricos"}/>

        <div className={styles.container}>
            <div >
                <Image
                    className={styles.imagem}
                    src={evento.imagem}
                    alt={`Imagem de ${evento.titulo}`}
                    width={400}
                    height={400}
                />
            </div>

            <div className={styles.info}>
                <h2 className={styles.infoTitulo}>{evento.titulo}</h2>
                <div className={styles.barra}/>
                <br/>
                <p>{"Descrição:"}</p>
                <h3>{evento.descricao}</h3>
                <br/>
                <p>{"Local:"}</p>
                <h4>{evento.local}</h4>
                <br/>
                <p>{"Período:"}</p>
                <h4>De {formatarData(evento.dataInicial)} Até {formatarData(evento.dataFinal)}</h4>

                <div className={styles.button}>
                    <Button>Alterar</Button>
                </div>
            </div>

        </div>
        </>
    )
}