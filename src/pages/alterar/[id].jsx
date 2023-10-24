import styles from './styles.module.css'
import axios from "axios";
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import Label from '@/components/Label';
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';
import Button from '@/components/Button';
import { Router, useRouter } from 'next/router'
import { CLIENT_STATIC_FILES_PATH } from 'next/dist/shared/lib/constants';


export default function Alterar() {

    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        local: "",
        dataInicial: "",
        dataFinal: "",
        imagem: ''
    })

    const router = useRouter();
    const id = router.query.id


    useEffect(() =>{
        if(id){
            axios.get(`http://localhost:3001/eventos/${id}`)
                .then(resultado => {
                    setEvento({ ...evento, 
                        titulo: resultado.data.titulo,
                        descricao: resultado.data.descricao,
                        local: resultado.data.local,
                        dataInicio: resultado.data.dataInicial,
                        dataFinal: resultado.data.dataFinal,
                        imagem: resultado.data.imagem
                    });
                });
        }
    }, [])

    //Função alterarEvento
    const handleSubmit = (e) => {
        e.preventDefault();

        function limparFormulario() {
            setEvento({
                titulo: "",
                descricao: "",
                local: "",
                dataInicio: "",
                dataFinal: "",
                imagem:""
            });
        }

        axios.put(`http://localhost:3001/eventos/${id}`, evento)
            .then(resultado => {
                limparFormulario();
                toast.success('Alteração realizada com sucesso!');
            })
            .catch(error => {
                toast.error('Alteração de evento falhou!');
                console.log("Alteração de evento falhou!")
            });
    }

    return (
        <>
        <div className={styles.page}>

        <Cabecalho titulo={"Portal Conflitos Históricos"}/>

        <div className={styles.body}>
            <div className={styles.container}>

                <div className={styles.formImagem}>
                    <img className={styles.img} src='/addAnimacao.svg' alt='Animação de Cadastro'/>
                </div>

                <div className={styles.formInfo}>
                    
                    <form onSubmit={handleSubmit}>

                        <div className={styles.formInfoBody}>

                            <div className={styles.formInfoHead}>
                                <h1>Alterar</h1>
                                <div className={styles.forminfoBarra}/>
                            </div>

                            <div className={styles.formInfoDados}>

                                <div className={styles.formInfoBodyInput}>
                                    <Label htmlFor='titulo'>Título</Label>
                                    <Input id='titulo' name='titulo' type='text' value={evento.titulo} placeHolder=""
                                        onChange={e => setEvento({...evento, titulo: e.target.value})}
                                    />
                                </div>

                                <div className={styles.formInfoBodyInput}>
                                    <Label htmlFor='descricao'>Descrição</Label>
                                    <Textarea id='descricao' name='descricao' type='textarea' value={evento.descricao} placeHolder="" cols='50' rows='3'
                                        onChange={e => setEvento({...evento, descricao: e.target.value})}>
                                    </Textarea>
                                </div>

                                <div className={styles.formInfoBodyInput}>
                                    <Label htmlFor='local'>Local</Label>
                                    <Input id='local' name='local' type='text' value={evento.local} placeHolder=""
                                        onChange={e => setEvento({...evento, local: e.target.value})}
                                    />
                                </div>
                                
                                <div className={styles.formInfoBodyDatas}>

                                <div className={styles.formInfoBodyData}>
                                    <Label htmlFor='dataInicial'>Data Inicial</Label>
                                    <Input id='dataInicial' name='dataInicial' type='date' value={evento.dataInicio} placeHolder=""
                                        onChange={e => setEvento({...evento, dataInicial: e.target.value})}
                                    />
                                </div>

                                <div className={styles.formInfoBodyData}>
                                    <Label htmlFor='dataFinal'>Data Final</Label>
                                    <Input id='dataFinal' name='dataFinal' type='date' value={evento.dataFinal} placeHolder=""
                                        onChange={e => setEvento({...evento, dataFinal: e.target.value})}
                                    />
                                </div>

                                </div>

                                <div className={styles.formInfoBodyFile}>
                                    <Input id='imagem' name='imagem' type={'file'} placeHolder=""
                                        onChange={(e) => setEvento({...evento, imagem: e.target.value})}
                                    />
                                </div>

                                {/* <div className={styles.formInfoBodyFile}>
                                    <Input id='imagem' name='imagem' type={'file'} value={evento.imagem} placeHolder=""
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const filePath = `/${file.name}`;
                                                setEvento({...evento,imagem: CLIENT_STATIC_FILES_PATH});
                                            }}}
                                    />
                                </div> */}

                            </div>

                            <div className={styles.formInfoButton}>
                                <Button>Salvar</Button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>

        <Rodape/>

        </div>
        </>
    )
}