import Container from '../layout/Container';
import styles from './Blog.module.css'
import blog_bbb from '../../img/bbb_blog.png'

const Blog = () => {
    return (
        <Container>
            <section className={styles.blog_container}>
                <div className={styles.blog_container}>
                    <div className={styles.body_blog}>
                        <div className={styles.title_blog}><h2>Competências</h2></div>
                    <div className={styles.info_competencia}>
                        <div className={styles.blog_bbb}><img src={blog_bbb} alt="blog_bbb"/></div>
                        <div className={styles.title_competencia}><h2>Título</h2></div>
                        <div className={styles.title_post}><h2>Javascript</h2></div>
                        <div className={styles.post_conteudo}><h2>Conteúdo</h2></div>
                        <div className={styles.li_conteudo}>
                        <li>Manipulação da DOM</li>
                        <li>Como utilizar funções</li>
                        <li>Escopo de variáveis</li>
                        <li>Laços de repetição</li>
                        <li>Manipulação de Arrays e Objetos</li></div>
                    </div>

                    <div className={styles.posts2}>
                        <div className={styles.title_post_criado}>
                            <h2>Postagens</h2>
                        </div>
                        <div className={styles.grid_conteudo_criado}>
                            <div className={styles.li_conteudo_criado}>
                                <li>Manipulação da DOM</li>
                                <li>Como utilizar funções</li>
                                <li>Escopo de variáveis</li>
                                <li>Laços de repetição</li>
                                <li>Manipulação de Arrays e Objetos</li>
                                </div>
                            <div className={styles.li_conteudo_criado}>
                                <li>Manipulação da DOM</li>
                                <li>Como utilizar funções</li>
                                <li>Escopo de variáveis</li>
                                <li>Laços de repetição</li>
                                <li>Manipulação de Arrays e Objetos</li>

                            </div>

                            <div className={styles.li_conteudo_criado}>
                                <li>Manipulação da DOM</li>
                                <li>Como utilizar funções</li>
                                <li>Escopo de variáveis</li>
                                <li>Laços de repetição</li>
                                <li>Manipulação de Arrays e Objetos</li>

                            </div>
                        </div>


                    </div>
                    </div>
                </div>
            </section>
        </Container>
     );
}

export default Blog;