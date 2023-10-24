import styles from './styles.module.css'
import axios from "axios";
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import Label from '@/components/Label';


export default function Cadastrar() {

    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        local: "",
        dataInicio: "",
        dataFim: "",
        imagem: ''
    })

    async function cadastrarEvento(e) {
        e.preventDefault()

        function limparEvento() {
            setEvento({
                titulo: "",
                descricao: "",
                dataInicio: "",
                dataFim: "",
                local: "",
                imagem: ''
            });
        }

        axios.post('http://localhost:3001/eventos', evento)
            .then(resultado => {
                limparEvento();
                toast.success('Cadastro de evento realizado!');
            })
            .catch(error => {
                toast.error('Cadastro de evento falhou!');
            });
    }

    return (
        <>
        <div className={styles.container}>

            <div className={styles.formImagem}>
                <img className={styles.img} src='/addAnimacao.svg' alt='Animação de Cadastro'/>
            </div>

            <div className={styles.formInfo}>
                <form onSubmit={cadastrarEvento}>

                    <div className={styles.formInfoHead}>
                        <h1>Cadastrar evento</h1>
                        <div className={styles.forminfoBarra}/>
                    </div>

                    <div className={styles.formInfoBody}>

                        <div className={styles.formInfoBodyInput}>
                            <Label htmlFor='titulo'>Título</Label>
                            <Input
                                id='titulo'
                                name='titulo'
                                type='text'
                                value={evento.titulo}
                                placeHolder="Ex: Independência dos EUA"
                                onChange={e => setEvento({
                                    ...evento,
                                    titulo: e.target.value
                                })}
                            />
                        </div>

                        <div className={styles.formInfoBodyInput}>
                            <Label htmlFor='descricao'>Descrição</Label>
                            <Textarea placeHolder="Ex: A Independência dos EUA teve seu inicio em..."
                                id='descricao'
                                name='descricao'
                                type='textarea'
                                cols='50'
                                rows='3'
                                value={evento.descricao}
                                onChange={e => setEvento({
                                    ...evento,
                                    descricao: e.target.value
                                })}>

                            </Textarea>
                        </div>

                        <div className={styles.formInfoBodyInput}>
                            <label htmlFor='dataInicio'>Data de Início:</label>
                            <Input  
                                id='dataInicio'                                 
                                type='date'
                                name='dataInicio'
                                value={evento.dataInicio}
                                onChange={e => setEvento({
                                    ...evento,
                                    dataInicio: e.target.value
                                })}
                            />
                        </div>

                        <div className={styles.formInfoBodyInput}>
                            <label htmlFor='dataFim'>Data de Fim:</label>
                            <Input
                                id='dataFim'                                  
                                type='date'
                                name='dataFim'
                                value={evento.dataFim}
                                onChange={e => setEvento({
                                    ...evento,
                                    dataFim: e.target.value
                                })}
                            />
                        </div>

                        <div className={styles.file}>
                            <p></p>
                            <Input                                   
                                className={styles.input}
                                type={'file'}
                                id='imagem'
                                value={evento.imagem}
                                onChange={(e) => setEvento({
                                    ...evento,
                                    imagem: e.target.value
                                })}
                            />
                        </div>

                        <label htmlFor='local'>Local:</label>
                        
                        <Input                               
                            placeHolder="Ex: Independência dos EUA"
                            id='local'
                            type='text'
                            name='local'
                            value={evento.local}
                            onChange={e => setEvento({
                                ...evento,
                                local: e.target.value
                                })}
                            />
                    </div>

                    <div className={styles.formInfoButton}>
                        <button
                        type='submit'> 
                            Cadastrar
                        </button>
                    </div>

                </form>
            </div>

        </div>
        </>
    )
}