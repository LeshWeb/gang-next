import styles from './Title.module.css'

interface ITitleProp {
  description: string
  title: string
  id?: string
}

export function Title({ description, title, id }: ITitleProp) {
  return (
    <div id={id} className='scroll-m-30'>
      <h2 className={styles.text_descr}>{title}</h2>
      <p className={styles.text_title}>{description}</p>
    </div>
  )
}
