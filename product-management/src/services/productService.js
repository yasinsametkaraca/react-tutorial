import Axios from "axios";

export default class ProductService{

    getProducts(){
        return Axios.get("http://localhost:8080/api/products/getall")
    }

}