import Card from 'react-bootstrap/Card';

export const CardApi = (props) => {
  return (
    <>
        <Card.Img variant='top' src={props.imag} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className='mb-3'>{props.status} - {props.species}</Card.Subtitle>
            <Card.Text className='mb-1'>Ultima ubicacion conocida:</Card.Text>
            <Card.Subtitle className='mb-3'>{props.location}</Card.Subtitle>
            <Card.Text className='mb-1'>Origen del personaje</Card.Text>
            <Card.Subtitle>{props.origin}</Card.Subtitle>
        </Card.Body>
    </>
  )
}
