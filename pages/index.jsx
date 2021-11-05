import BaseLayout from '../layouts/base'
import TelegramLogin from '../components/TelegramLogin'

export default function Home() {
  return (
    <BaseLayout>
        <h1 className="text-4xl font-bold">NFTéate</h1>
        <p className="text-xl">
          Crea un NFT en OpenSea a partir de tu perfil en Telegram
        </p>
        <TelegramLogin />
    </BaseLayout>
  )
}
