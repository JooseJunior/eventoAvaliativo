import Link from "next/link"
import styles from "./styles.module.css"

export default function Cabecalho({children}){

    return(
        <>
        <header className={styles.header}>
            <div className={styles.titulo}>
                <h2>{children}</h2>
            </div>

            <div className={styles.link}>
                <Link className={styles.itemLink} href="/">Home</Link>
                <Link className={styles.itemLink} href="/">Cadastrar</Link>
                <Link className={styles.itemLink} href="/">Alterar</Link>
                <Link className={styles.itemLink} href="/">Deletar</Link>
            </div>
        </header>

        </>
    )
}