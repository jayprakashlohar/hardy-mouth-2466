import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Biriyani() {
    return ( 
        <Box fontSize="lg" fontWeight="500"  lineHeight="50px">

            <Link>Biriyani</Link>
            <br />
            <Link>Kebab</Link>
            <br />
            <Link>Tandoor</Link>
            <br />
            <Link>Combos</Link>

        </Box>
    )
}
