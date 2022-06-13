import styles from '../../styles/HeroSection/megamenu.module.css'

const Megamenu = ({sidebar}) => {
    return (
        
<div style={{display:'flex'}}>  
  <div className={styles.navbar}>
  
  <div className={styles.dropdown}>
    <button className={styles.dropbtn}>
        {sidebar.title} 
   
    </button>
    <div className={styles.dropdown_content}>  
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Category 1</h3>
          <a href="s">Link 1</a>
          <a href="s">Link 2</a>
          <a href="s">Link 3</a>
        </div>
        <div className={styles.column}>
          <h3>Category 2</h3>
          <a href="s">Link 1</a>
          <a href="s">Link 2</a>
          <a href="s">Link 3</a>
        </div>
        <div className={styles.column}>
          <h3>Category 3</h3>
          <a href="s">Link 1</a>
          <a href="s">Link 2</a>
          <a href="s">Link 3</a>
        </div>
      </div>
    </div>
  </div> 


</div>

</div>
    );
};

export default Megamenu;