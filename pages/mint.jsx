import { useRouter } from "next/dist/client/router"
import Profile from "../components/Profile"

const MintProfile = () => {
  const router = useRouter()

  const { name, image } = router.query
  return (
    <div>
      <Profile image={image} name={name} />
    </div>
  )
}

export default MintProfile