import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { useState, useEffect } from "react";
import { UrlHost } from "../../BACKOFFICE/url/UrlHost";
const DetailsEnchere = () => {
  const { idauction } = useParams();
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState();

  const getImage_auction = (listAuction) => {
    console.log(listAuction);
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(new UrlHost().url+"/mongoauctions/" + listAuction.id, content)
      .then((response) => response.json())
      .then((json) => {
        const imgData=json.data?json.data.images:[]
        listAuction.img = imgData;
        console.log(listAuction);
        setProducts(listAuction);
      });
  };

  // details auction
  useEffect(() => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "",
      },
    };

    fetch(new UrlHost().url+"/auctions/fiche/" + idauction, content)
      .then((response) => {
        if (response.status === 400) {
          alert("Erreur");
        } else return response.json();
      })
      .then((json) => {
        if ("error" in json) alert(json);
        else {
          getImage_auction(json.data);
        }
      });
  }, []);

  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  return (
    <>
      <Grid container>
        <Grid>
          <br />

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2">Détails</Typography>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container>
          <Grid item={true} xs={3}></Grid>
          <Grid item={true} xs={4} width={20} height={350}>
            <div style={containerStyles}>
              <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}
              >
                {products?.img.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={"data:image/png;base64," + item}
                      srcSet={"data:image/png;base64," + item}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Grid>
          <Grid item={true} xs={1}></Grid>
          <Grid item={true} xs={3}>
            <div>
              <p>Nom : {products?.title}</p>
            </div>
            <div>
              <p>Description : {products?.description}</p>
            </div>
            <div>
              <p>Prix Minimum : {products?.min_price}</p>
            </div>
            <div>
              <p>Duration : {products?.duration} Heure</p>
            </div>
            <p></p>
            <div>
              <p>Categorie : {products?.category.category_name}</p>
            </div>
            {/* <div>
                            <p>Status : {product?.status}</p>
                        </div> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsEnchere;
