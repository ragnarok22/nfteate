import Image from 'next/image'

const Profile = ({ image, name }) => {
  return (
    <div>
      <Image src={image} />
      <h1>{name}</h1>
    </div>
  )
}

export default Profile;