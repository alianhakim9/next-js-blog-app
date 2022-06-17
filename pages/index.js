import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ullam
          quia, dolore impedit quo quam. Eum, minus consequatur ab doloremque
          cupiditate, ad asperiores repellat numquam quasi eaque optio facere
          eius.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nesciunt
          autem ipsa ipsam aperiam possimus optio libero id! Architecto qui
          dolorem quae quos libero suscipit deserunt. Reiciendis iure
          consectetur accusamus!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
