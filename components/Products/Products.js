import React from "react";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// our component
import Product from "./Product";

// css
import styles from "../../styles/Products/Products.module.css";

const Products = ({ products, title }) => {
  return (
    <Box className={styles.products_section}>
      <Container>
        <Box className={styles.products_section_title}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box className={styles.products_coantainer}>
          <Grid container rowSpacing={3} columnSpacing={5}>
            {products.map((product) => {
              return (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className={styles.products_responsive_coantainer}
                >
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
