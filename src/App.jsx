import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Hudson Coutinho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      nesciunt eveniet vero assumenda aliquid ratione molestias quod velit, sint
      soluta asperiores saepe. Officia, exercitationem repellendus. Unde ut
      neque facilis nihil!"
          />
          <Post
            author="Rebeca Coutinho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      nesciunt eveniet vero assumenda aliquid ratione molestias quod velit, sint
      soluta asperiores saepe. Officia, exercitationem repellendus. Unde ut
      neque facilis nihil!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
