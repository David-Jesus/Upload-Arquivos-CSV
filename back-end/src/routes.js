const Router   = require("express");
const multer   = require("multer");
const { Readable } = require("stream");
const readLine = require("readline");
const router   = Router();

const client = require("./database/client");
const multerConfig = multer();

const product = {
    code_bar : String,
    description : String,
    price : Number,
    quantity : Number,
}

router.post("/products", multerConfig.single("file"), async function (req, res) {
    // const { file } = req;
    // console.log(file.originalname);
    // return res.json({});
    ///teste excluir o que está acim
    const { file } = req;
    const { buffer } = file;

    const readableFile = new Readable();

    //criar um Readable para fazer a leitura do arquivo onde o que importa do arquivo é o buffer
    readableFile.push(buffer);
    readableFile.push(null);

    //leitura linha a linha do arquivo
    const productsLine = readLine.createInterface({
        input: readableFile
    })

    const products = [];

    for await(let line of productsLine) {
        //para cada linha a quebra/divisão será por cada ',' encontrada
        const productsLineSplit = line.split(",")

        products.push({
            code_bar    : String(productsLineSplit[0]),
            description : String(productsLineSplit[1]),
            price       : Number(productsLineSplit[2]),
            quantity    : Number(productsLineSplit[3])
        });
    }

    // for await (let{code_bar, description, price, quantity} of products) {
    //     await client.products.create({
    //         data: {
    //             code_bar,
    //             description,
    //             price,
    //             quantity,
    //         },
    //     });
    // }
    // return res.json(products);

        // var result = "";
        for await (let{code_bar, description, price, quantity} of products) {
            await client.products.create({
                data: {
                    code_bar,
                    description,
                    price,
                    quantity,
                },
            });
        }
        if(products != "") {
            console.log("teste ok")
            return res.status(200).json(products);
        }
        return res.status(401).json(products);
});

router.get('/products', async (req, res) => {
    const products = await client.products.findMany();
    console.log(products)
    res.json(products);
})

module.exports = router;