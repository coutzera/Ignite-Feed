import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/coutzera.png"
          />
          <div className={styles.authorInfo}>
            <strong>Hudson Coutinho</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de novemnbro às 11:18h" dateTime="2024-11-09 11:18:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da rocketseat
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            #novoprojeto
          </a>{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            #nlw
          </a>{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            #rocketseat
          </a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
