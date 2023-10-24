import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'
import Cabecalho from '@/components/Cabecalho'
import Button from '@/components/Button'
import Link from 'next/link'


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

            <div className={styles.formImagem}>
                <Image className={styles.imagem}
                    src={evento.imagem}
                    alt={`Imagem de ${evento.titulo}`}
                    width={400}
                    height={400}
                />
            </div>
            
            <div className={styles.formInfo}>

                <div className={styles.info}>
                    <div className={styles.infoTitulo}>
                        {/* <p>{"Título:"}</p> */}
                        {evento.titulo}
                    </div>

                    <div className={styles.infoBarra}/>

                    <div className={styles.infoDescricao}>
                        {/* <p>{"Descrição:"}</p> */}
                        {evento.descricao}
                    </div>

                    <div className={styles.infoLocal}>
                        <p>{"Local:"}</p>
                        {evento.local}
                    </div>

                    <div className={styles.infoPeriodo}>
                        <p>{"Período:"}</p>
                        De {formatarData(evento.dataInicial)} Até {formatarData(evento.dataFinal)}
                    </div>
                </div>

                <div className={styles.button}>

                    {/* <div className={styles.btCadastrar}>
                        <Link href={'#'}>
                            <Image 
                                src={"/add2.png"}
                                width={43}
                                height={43}
                                alt='Cadastrar'
                                title='Cadastrar evento'
                            />
                        </Link>
                    </div> */}

                    <div className={styles.btAlterar}>
                        <Link href={'#'}>
                            <Image 
                                src={"/edit2.png"}
                                width={40}
                                height={40}
                                alt='Alterar'
                                title='Alterar evento'
                            />
                        </Link>
                    </div>

                    <div className={styles.btDeletar}>
                        <Link href={'#'}>
                            <Image 
                                src={"/del2.png"}
                                width={40}
                                height={40}
                                alt='Deletar'
                                title='Deletar evento'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}