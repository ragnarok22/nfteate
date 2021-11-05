import { useRouter } from 'next/dist/client/router';
import TelegramLoginButton from 'react-telegram-login';

const TelegramLogin = () => {
  const router = useRouter();

  const onTelegramAuth = (user) => {
    console.log(user);
    router.push(`/mint?name=${user.name}&image=${user.image}`);
  };
  return (
    <TelegramLoginButton dataOnauth={onTelegramAuth} botName="nolodigasbot" />
  )
}

export default TelegramLogin;