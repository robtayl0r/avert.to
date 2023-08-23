import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Avert - Simple domain redirection.</title>
        <link rel="icon" sizes="any" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.intro}>
        <h1>
          Easily forward your <span className="l">domain</span> in minutes with Avert.
        </h1>
        <h2>
          A hassle-free forwarding service. Just add two <span className="hl">DNS records</span> to your domain's zone.
        </h2>
      </div>
      <hr/>
      <div className={styles.directions}>
        <div>
          <input placeholder="source.com" type="text"/>
          <input placeholder="destination.com" type="text"/>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <th>
                Record Name
              </th>
              <th>
                Type
              </th>
              <th>
                Value
              </th>
            </thead>
            <tbody>
              <tr>
                <td>source.com</td>
                <td>CNAME</td>
                <td className="hl">cname.avert.to</td>
              </tr>
              <tr>
                <td>txt.source.com</td>
                <td>TXT</td>
                <td className="hl">"to=https://destination.com ~rewrite"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
