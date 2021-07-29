import Head from 'next/head'
import Header from '../components/headers/Header'
import { getSession, useSession } from 'next-auth/client'
import NewDocsSection from '../components/newdocs/NewDocsSection'
import MyDocsSection from '../components/mydocs/MyDocsSection'
import Login from '../components/login/Login'
const Home = () => {

  const [session] = useSession();


  if (!session) {
    return (
      <Login />
    )
  }



  return (
    <div>
      <Head>
        <title>Google Docs Colne</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NewDocsSection />
      <MyDocsSection />

    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}