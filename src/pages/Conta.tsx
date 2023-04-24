import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { Badge } from '@chakra-ui/react'

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    if(userData && id !== userData.id) {
        navigate('/')
    }
  
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16} m={10}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                           
                        </Center>
                    ) : 
                    (
                        <>
                                <Text
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    color="#fff"
                                    fontSize="6xl"
                                    fontWeight="extrabold"
                                >
                                    Soluções Financeiras para você!
                                </Text>
                           
                            <Badge color='#7928CA' >CONTA PACOTE ESSÊNCIAL </Badge>

                             

                            <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}

export default Conta
