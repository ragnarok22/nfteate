import TelegramLoginButton from 'react-telegram-login';

const TelegramLogin = () => {
  const onTelegramAuth = (user) => {
    console.log(user);
  };
  return (
    <TelegramLoginButton dataOnauth={onTelegramAuth} botName="nolodigasbot" />
  )
}

export default TelegramLogin;