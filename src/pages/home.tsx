import { Header } from "../components/shared/header.tsx";
import { IHome } from "../utils/interfaces.tsx";
import {
    Badge,
    Button,
    Text, useDisclosure,
} from "@chakra-ui/react";
import React, {memo} from "react";

const _Home = ({title, handleOpen }: IHome) => {
    return (
        <>
            <Header title={title} />
            <Text textAlign="justify" mt="5" mb="5" fontSize="xl">
                Данный сервис - набор <Badge colorScheme='purple'>утилит</Badge> для помощи в <Badge colorScheme='green'>восстановлении</Badge> дропов. Нажмите на кнопку ниже, чтобы перейти к выбору нужной вам утилиты.
            </Text>
            <Button w="100%" colorScheme='teal' onClick={handleOpen}>
                Выбрать сервис
            </Button>
        </>
    );
}

export const Home = React.memo(_Home)