import Carousel from 'react-bootstrap/Carousel';

const Carrusel=()=> {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sportingio.vtexassets.com/assets/vtex.file-manager-graphql/images/9dca76ff-c1b9-4273-9ac0-3766768968da___7d5af86f70218db3f9091f336fffc215.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wokerio.vtexassets.com/assets/vtex.file-manager-graphql/images/c0308d86-19e5-4685-9b54-8efa33ec2f9a___6a2c52602d9d97fe7366a9f1afa41954.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wokerio.vtexassets.com/assets/vtex.file-manager-graphql/images/e4695bc9-9430-4924-bd33-0bed248a24d1___013dfa2c3486848413e538d7256b1e06.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sportingio.vtexassets.com/assets/vtex.file-manager-graphql/images/aa7e142f-28fc-43bb-a2a6-6ec773d98e91___c650f5d4f06f193103725de10ed5c938.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;