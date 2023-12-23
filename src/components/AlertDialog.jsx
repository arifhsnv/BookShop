import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/addCardContext.js";
export default function AlertDialog() {
  const favCard = React.useContext(FavoriteContext);
  const [open, setOpen] = React.useState(false);
  const [cardList, setcardList] = React.useState([]);
  const [recommendCardList, setrecommendCardList] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setcardList(favCard.cardItems);
  }, [cardList]);
  React.useEffect(() => {
    setrecommendCardList(favCard.recommendationItemId);
  }, [recommendCardList]);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{
          width: "146px",
          height: "36px",
          borderRadius: "8px",
          backgroundColor: "#FFCE1A",
          "&:hover": { backgroundColor: "#FFCE1A" },
          color: "#fff",
          fontFamily: "Nunito Sans",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}
        onClick={handleClickOpen}
      >
        <ShoppingCartOutlinedIcon /> Basket
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Add favorite Card
            {cardList.map((product) => (
              <div key={product.id}>
                <img src={product.imageProduct} alt="" />
                <Typography variant="body1">{product.nameBook}</Typography>
                <Typography variant="body1">
                  {product.newPriceProduct}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textDecorationLine: "line-through" }}
                >
                  {product.oldPriceProduct}
                </Typography>
              </div>
            ))}
            {recommendCardList.map((card) => (
              <div key={card.id}>
                <img src={card.imageProduct} alt="" />
                <Typography variant="body1">{card.nameBook}</Typography>
                <Typography variant="body1">
                  {card.newPriceProduct}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textDecorationLine: "line-through" }}
                >
                  {card.oldPriceProduct}
                </Typography>
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
