import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Egg() {
    return (
        <Box fontSize="lg" fontWeight="500" lineHeight="50px" >

            <Link>Classic Eggs</Link>
            <br />
            <Link>Speciality Eggs</Link>
            <br />
            <Link>Combos</Link>
            <br />
            <Link>Spreads</Link>
        </Box>
    )
}
