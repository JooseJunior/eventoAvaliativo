import Link from "next/link"
import styles from "./styles.module.css"

export default function Rodape({}){

    return(
        <>
        <footer className={styles.footer}>

            <div className={styles.info}>
                <h1>Sobre o portal</h1>
                <div className={styles.barra}/>
                <p>Nosso foco está em disseminar informações cruciais sobre eventos históricos e conflitos passados, promovendo uma compreensão mais profunda da história e de seu impacto na sociedade.</p>
            </div>

            <div className={styles.local}>
                <p>Av. Lauro Sodré, 6500 - Censipam - Aeroporto</p>
                <p>Porto Velho - RO, 76803-260</p>
                <p>Fone/Fax: (69) 2182-9600</p>
                <h3>Conflitos Copyright &copy; 2023</h3>
            </div>

        </footer>

        </>
    )
}