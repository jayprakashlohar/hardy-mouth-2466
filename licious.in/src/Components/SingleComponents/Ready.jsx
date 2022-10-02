import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Ready() {
    return (
        <Box fontSize="lg" fontWeight="500"  lineHeight="40px">

            <Link>Gourmet Marinadas</Link>
            <br />
            <Link>Kebabs & Tandoor</Link>
            <br />
            <Link>Wings</Link>
            <br />
            <Link>Crispy Snacks</Link>

            <br />
            <Link>Burger Patties</Link>
            <br />
            <Link>Biriyani</Link>
            <br />
            <Link>Combos</Link>
        </Box>
    )
}
