import React from 'react';
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import {Grid, GridColumn} from 'semantic-ui-react'

export default function Dashboard(){
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                        <ProductList></ProductList>
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>

    )
}
