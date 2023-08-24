import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useId, useState} from 'react';


export default function Home() {
  const [source, setSource] = useState('source.com')
  const [dest, setDest] = useState('destination.com')
  const [rewrite, setRewrite] = useState(true);
  const [help, setHelp] = useState(false);
  const id = useId();
  let showHelp = false;

  function toggleHelp(){

  }

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
          A hassle-free forwarding service so that you can avoid having to set up a webserver to handle your redirects. <br/>Just add <span className="hl">two records</span> to your domain's DNS zone.
        </h2>
      </div>
      <hr/>
      <div className={styles.directions}>
        <div>
          <h3>Setup</h3>
        </div>
        <div className={styles.wizard}>
          <div className={styles.inputs}>
            <input placeholder="source.com" type="text" onChange={e => setSource(e.target.value) }/><br/>
            <div className={styles.arrows}>
              <div>⇣</div>
              <div>⇣</div>
            </div>
            <input placeholder="destination.com" type="text" onChange={e => setDest(e.target.value) }/>
            <br/>
            <div className={styles.options}>
              <label>
                <input type="checkbox" id={id} checked={rewrite} onChange={() => setRewrite(!rewrite)}/>
                 Retain Location (<a onMouseEnter={()=> setHelp(true)} onMouseLeave={()=>setHelp(false)}>?</a>)
              </label>
              {
                help ?
                  <div className={styles.help}>
                    Retain the full url on redirect: <br/>
                    {source}/<span className="hl">foo?bar=baz</span> ⤏ {dest}/<span className="hl">foo?bar=baz</span><br/>
                    {source}/<span className="hl">foo?bar=baz</span> ⤏ {dest}
                  </div> : ''
              }
            </div>
          </div>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>
                    Record Name
                  </th>
                  <th>
                    Type
                  </th>
                  <th>
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{source}</td>
                  <td className="hl">CNAME</td>
                  <td>cname.avert.to</td>
                </tr>
                <tr>
                  <td>txt.{source}</td>
                  <td className="hl">TXT</td>
                  <td>"to=https://{dest}{rewrite ? ' ~rewrite':''}"</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.text}>Now add these two records to your domain's DNS zone configuration and that's it!</div>
          </div>
        </div>
      </div>
    </div>
  )
}
