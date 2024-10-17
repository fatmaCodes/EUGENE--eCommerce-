import conf from "../conf/conf"
import { Client, Databases, Storage,ID } from "appwrite"

export class DataBase {
    client = new Client();
    database;
    bucket
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async addProduct({ product_name, price, product_image, product_desc,product_category }) {
        try {
            return await this.database.createDocument(
                conf.dbId,
                conf.collectionId,
                ID.unique(),
                {
                    product_name,
                    price,
                    product_image,
                    product_desc,
                    product_category
                }
            )
        } catch (error) {
            console.log("APPWRITE :: ERROR :: PRODUCT UPLOAD" + error);
        }
    }

    async deleteProducts(id) {
        try {
            await this.database.deleteDocument(
                conf.dbId,
                conf.collectionId,
                id
            )
            return true
        } catch (error) {
            console.log("APPWRITE DELETE PRODUCT ERROR" + error);
            return false;
        }
    }

    async updateProduct(id,{ product_name, price, product_image, product_desc,product_category }) {
        try {
            return await this.database.updateDocument(
                conf.dbId,
                conf.collectionId,
                id,
                {
                    product_name,
                    price,
                    product_image,
                    product_desc,
                    product_category
                }
            )
        } catch (error) {
            console.log("APPWRITE :: ERROR :: PRODUCT UPDATE" + error);
        }
    }


    async getProduct(id) {
        try {
            return await this.database.getDocument(
                conf.dbId,
                conf.collectionId,
                id
            )
        } catch (error) {
            console.log("APPWRITE DELETE PRODUCT ERROR" + error);
            return false;
        }
    }


    async getProducts(queries = []) {
        try {
            return await this.database.listDocuments(
                conf.dbId,
                conf.collectionId,
                queries
            )

        } catch (error) {
            console.log("APPWRITE :: ERROR :: GET PRODUCT" + error)
        }
    }

    async uploadFile(file){
        try {
            return this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("APPWRITE :: ERROR :: UPLOAD IMAGE"+error)
        }
    }

    async deleteFile(id){
        try {
            return await this.bucket.deleteFile(
                conf.bucketId,
                id
            )
        } catch (error) {
            console.log("APPWRITE:: ERROR :: DELETE FILE"+error);
            
        }
    }

    getFilePreview(id){
        try {
            return this.bucket.getFilePreview(
                conf.bucketId,
                id
            )
        } catch (error) {
            console.log("APPWRITE :: ERROR GET FILE"+error);
        }
    }

}

const database = new DataBase();

export default database;