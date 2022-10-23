import React from 'react';
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import {Grid, GridColumn} from 'semantic-ui-react'
import {Route, Routes} from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard(){
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path='/' element={<ProductList/>} />
                            <Route exact path='/products' element={<ProductList/>} />
                            <Route path='/products/:id' element={<ProductDetail/>} />  {/*herhangi ürüne basınca onun detay sayfası gelicek. parametre almak için iki nokta kullandık. Kullanmak istediğimizde parametreleri useParams ile alabiliriz.*/}
                            <Route path='/cart' element={<CartDetail/>} />
                        </Routes>
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>

    )
}
