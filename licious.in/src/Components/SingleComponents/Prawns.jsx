import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Prawns() {
    return (
        <Box fontSize="lg" fontWeight="500"  lineHeight="50px">

            <Link>Small Size</Link>
            <br />
            <Link>Medium Size</Link>
            <br />
            <Link>Large Size</Link>
            <br />

            <Link>Combos</Link>
            <br />
            <Link>Ready to Cook</Link>
        </Box>
    )
}
