import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CartWidget = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Button color="warning">
          <ShoppingCartIcon />
        </Button>
      </Box>
    </div>
  );
};

export default CartWidget;
