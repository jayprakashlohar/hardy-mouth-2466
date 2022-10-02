import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Combo() {
    return (
        <Box fontSize="lg" fontWeight="500"  lineHeight="50px">

            <Link>Chicken Combos</Link>
            <br />
            <Link>Mutton Combos</Link>
            <br />
            <Link>Fish Combos</Link>
            <br />
            <Link>Prawans Combos</Link>

        </Box>
    )
}
