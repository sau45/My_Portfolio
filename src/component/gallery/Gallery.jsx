
import { Card } from 'react-bootstrap';
import IMAGES from '../data/images'
import './gallery.css'




function Gallery() {

  const styles = {
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '22rem',
      height: '29rem',
      marginTop: '6rem',
      justifyContent: 'space-around',
    },
    cards: {
      width: '24rem',
      color: 'red',
    },
  }

  
  return (
    <>

      <div className="card-collection">

        <h1>Collection</h1>
      </div>
      <div className="card-container">



        {IMAGES.map((data) => {


          return (


            <Card className="card-image" style={styles.cardContainer}>
              <Card.Img src={data.images} />


            </Card>



          );
        })
        }


      </div>


    </>


  )
}

export default Gallery
