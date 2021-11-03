import Head from 'next/head'
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NFTéate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default BaseLayout;