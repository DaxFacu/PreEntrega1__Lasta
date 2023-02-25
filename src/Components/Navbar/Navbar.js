import CartWidget from "../CartWidget/CartWidget.js";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Box from "@mui/material/Box";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <a href="/#">
        <img
          className={styles.iconPropiedades}
          src="./todo3D.png"
          alt="Logo de Todo3D"
        ></img>
      </a>
      {
        //Lista
        <ul className={styles.containerList}>
          <a href="/#" className={styles.textNavbar}>
            <li> Modelos 3D </li>
          </a>
          <a href="/#" className={styles.textNavbar}>
            <li> Impresoras FDM</li>
          </a>
          <a href="/#" className={styles.textNavbar}>
            <li> Impresoras resina</li>
          </a>
          <a href="/#" className={styles.textNavbar}>
            <li> Insumos</li>
          </a>
        </ul>
        //Botones
        // <Box
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     "& > *": {
        //       m: 1,
        //     },
        //   }}
        // >
        //   <ButtonGroup
        //     className={styles.containerList}
        //     variant="text"
        //     aria-label="text button group"
        //     color="inherit"
        //     size="large"
        //   >
        //     <Button>Modelos 3D</Button>
        //     <Button>Impresoras FDM</Button>
        //     <Button>Impresoras resina</Button>
        //     <Button>Insumos</Button>
        //   </ButtonGroup>
        // </Box>
      }

      <CartWidget />
    </div>
  );
};

export default Navbar;
