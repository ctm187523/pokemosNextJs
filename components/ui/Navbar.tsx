import { useTheme, Text, Spacer } from "@nextui-org/react";
import  Image from 'next/image';

export const Navbar = () => {

    //usamos la libreria importada NextUi
    const { theme } = useTheme();
    
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            //usamos el theme importado arriba del NextUi para definir el color lleva un interrogante por si fuera null
            backgroundColor: theme?.colors.gray900.value
        }}>
    
            {/* usamos Image de Next para poder usar la imagen he tenido que ir al archivo next.congig.js
            y poner images y en el dominio desde donde permitomimos tomar las imagenes si no esta el dominio
            usado da error*/}
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la App"
                width={70}
                height={70}
            />
            {/* usamos Text de NextUI */}
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>

            {/* usamos Spacer de nextUI para usar los estilos en lugar de style nextUi usa css  de esta manera
            con flex 1 ubicamos el Text de abajo que contiene Favoritos a la derecha con flex 0.5 lo colocariamos en medio*/}
            <Spacer css={{ flex: 1}}/>
            <Text color="white">Favoritos</Text>
        </div>
    );
}