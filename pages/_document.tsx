//archivo generado para el funcionamiento correcto de Next UI ver video 41
//con este archivo podemos extender funcionalidades como por ejemplo en la lonea 15
//hemos puesto que el lang es en español, en la linea 26 en el Head hemos añadido el importado CssBaseline
//este codigo hara que se vea bien en todos los navegadores

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
//pegamos el cssBaseline de la pagina de NextUI video 41
import { CssBaseline } from "@nextui-org/react";


class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: <>{initialProps.styles}</>
        }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    {/* usamos el CssBaseline importado arriba  */}
                    {CssBaseline.flush()}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument