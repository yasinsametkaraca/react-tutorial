import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default function CartSummary(){
    return (
        <div>
            <Dropdown item text='Bag'>
                <Dropdown.Menu>
                    <Dropdown.Item>Phone</Dropdown.Item>
                    <Dropdown.Item>Pc</Dropdown.Item>
                    <Dropdown.Item>Tv</Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>  {/*çizgi bırakır.*/}
                    <Dropdown.Item as={NavLink} to="/cart">View bag</Dropdown.Item> {/* NavLink i semantic-ui içerisinde kullanmak için yazdık. Router kullanımında.*/}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}