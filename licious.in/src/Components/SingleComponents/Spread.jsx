import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Spread() {
    return (
        <Box fontSize="lg" fontWeight="500"  lineHeight="50px">

            <Link>Chicken</Link>
            <br />
            <Link>Prawn</Link>
            <br />
            <Link>Egg</Link>
            <br />

            <Link>Combos</Link>

        </Box>
    )
}
