import { useRouter } from 'next/dist/client/router';
import TelegramLoginButton from 'react-telegram-login';

const TelegramLogin = () => {
  const router = useRouter();

  const onTelegramAuth = (user) => {
    console.log(user);
    // auth_date, first_name, hash, id, last_name, photo:url, username
    router.push(`/mint?name=${user.first_name} ${user.last_name}&image=${user.photo_url}&username=${user.username}`);
  };
  return (
    <TelegramLoginButton dataOnauth={onTelegramAuth} botName="nolodigasbot" />
  )
}

export default TelegramLogin;