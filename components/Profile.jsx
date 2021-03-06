import Image from 'next/image'

const Profile = ({ image, name }) => {
  return (
    <div>
      <Image src={image} width="300" height="300" alt="profile" />
      <h1>{name}</h1>
    </div>
  )
}

export default Profile;