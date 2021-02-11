import Image from 'next/image'
const Header = () => {
  return (
    <div>
      <h3>Minha Library NextJs</h3>
      <Image
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}

export default Header;