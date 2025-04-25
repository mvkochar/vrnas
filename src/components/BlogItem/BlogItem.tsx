import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    title: string
}

const BlogItem = ({id, image, category, title}:BlogItemProps) => {
  return (
    <div className={classes.blog_item}>
        <div><img src={image} alt={`blog${id}`} /></div>
        <p className={classes.blog_item_cat}>{category}</p>
        <h3 className={classes.blog_item_title}>{title}</h3>
        <a href="" className={classes.blog_item_more}>Read more</a>
    </div>
  )
}

export default BlogItem