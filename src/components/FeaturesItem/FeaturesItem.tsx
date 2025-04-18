import React from "react"
import classes from "./FeaturesItem.module.css"

type FeaturesItemProps = {
    id: number
    title: string
    description: string
}

const FeaturesItem = ({/*id,*/ title, description}:FeaturesItemProps) => {
    const [descView, setDescView] = React.useState(false)
    const handleDescView = ()=> {
        setDescView((prevState) => {
            return (
                !prevState
            )
        })
    } 

  return (
    <div className={classes.features_item}>
        <div className={classes.features_item_caption}>
            <h3 className={classes.features_item_title}>{title}</h3>
            <button className={classes.features_item_view} onClick={handleDescView}>
                <img src={descView ? "/images/vector_up.png" : "/images/vector_down.png" } alt="vector_up/vector-down" />
            </button>
        </div>
        <p className={descView ? classes.features_item_desc : 'd-n'}>{description}</p>
    </div>
  )
}

export default FeaturesItem