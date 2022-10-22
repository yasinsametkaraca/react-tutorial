import React, {useState,useEffect} from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductList(){
//hook tekniği kullanılıcaktır.

    const [products,setProducts] = useState([])  //Products'ı değiştirmek için setProducts kullanılır. useState([]) başlangıcı boş bir array demektir. //Bu yapı Life Cycle da mount kısmına denk gelmektedir. (ComponentdidMount)
    //ComponentdidMountun anlamı sayfa yerleşmiştir state değiştirilir. Her product değiştiğinde sayfa yeniden render edilir.

    useEffect(()=>{                 //component yüklendiğinde yapılması istenen kodlar yazılır. Sayfa her yüklendiğinde useEffect fonksiyonu çalışır.
        let productService = new ProductService();
        productService.getProducts().then(response => setProducts(response.data.data)) //setProducts parametrede aldığı değeri products a eşitler
    })
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Stock</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.productName}</Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.category.categoryName}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}