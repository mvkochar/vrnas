import classes from './ServiceItem.module.css'

type ServiceItemProps = {
    id: number
    image: string
    title: string;
    description: string
} 

const ServiceItem = ({id, image, title, description}:ServiceItemProps) => {
  return (
    <div className={classes.service_item}>
        <div><img src={image} alt={`service${id}`} /></div>
        <h3 className={classes.service_item_title}>{title}</h3>
        <p className={classes.service_item_desc}>{description}</p>
        <a href="" className={classes.service_item_more}>Learn More</a>
    </div>
  )
}

export default ServiceItem