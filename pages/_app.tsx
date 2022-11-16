import '../styles/globals.css';
import type { AppProps } from 'next/app';

//importamos para NextUi hemos instalado en la consola con yarn add @nextui-org/react@1.0.2-beta.2
//se podria poner yarn add @nextui-org/react 
//sin indicar la version que queremos instalar
import { NextUIProvider } from '@nextui-org/react';

//importamos el theme
import { darkTheme } from '../themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    // envolvemos con lo importado arriba NextUIProvider
    //establecemos el tema importando el archivo darkTheme de themes/darktheme
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
