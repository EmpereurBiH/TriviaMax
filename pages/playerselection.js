import Image from 'next/image'
import styles from  '../styles/css/styles.css'

const playerselection = () => {
return(
        <div>            
            <Image
                src="/Player1.png"
                alt="Player1"
            />

          <Image
                src="/Player2.png"
                alt="Player2"
          />

          <Image
                src="/Player3.png"
                alt="Player3"
          />
  
          <Image
                src="/Player4.png"
                alt="Player4"
          />
          </div>
    )
}

export default playerselection;