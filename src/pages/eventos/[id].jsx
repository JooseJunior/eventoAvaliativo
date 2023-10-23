import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'

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
        <div className={styles.menu}>
            <h1>Evento</h1>


        </div>

        <div className={styles.container}>
            <div className={styles.imagem}>
                <Image
                    src={evento.imagem}
                    alt={`Imagem de ${evento.titulo}`}
                    width={400}
                    height={400}
                />
            </div>

            <div className={styles.info}>
                <h2>{evento.titulo}</h2>
                <br/>
                <h3>{evento.descricao}</h3>
                <br/>
                <h4>{evento.local}</h4>
                <br/>
                <h4>De {formatarData(evento.dataInicial)} Até {formatarData(evento.dataFinal)}</h4>
            </div>

        </div>
        </>
    )
}