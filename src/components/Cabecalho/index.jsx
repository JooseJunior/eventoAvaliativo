import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"

export default function Cabecalho({titulo}){

    return(
        <>
        <header className={styles.header}>
            <div className={styles.titulo}>
                <h2>{titulo}</h2>
            </div>

            <div className={styles.link}>
                <Link className={styles.itemLink} href="/">Home</Link>
                <Link className={styles.itemLink} href="/cadastrar">Cadastrar</Link>
            </div>
        </header>

        </>
    )
}