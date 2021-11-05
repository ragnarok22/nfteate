import { useRouter } from "next/dist/client/router"
import Profile from "../components/Profile"

const MintProfile = () => {
  const router = useRouter()

  const handleMint = (e) => {
    e.preventDefault()
  }

  const { name, image } = router.query
  return (
    <div>
      <Profile image={image} name={name} />
      <button onClick={handleMint}>Mintear</button>
    </div>
  )
}

export default MintProfile