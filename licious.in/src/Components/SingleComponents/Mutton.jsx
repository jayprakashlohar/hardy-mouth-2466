import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Mutton() {
    return (
        <Box fontSize="lg" fontWeight="500"  lineHeight="50px">

            <Link>Curry cuts</Link>
            <br />
            <Link>Boneless & Mince</Link>
            <br />
            <Link>Speciality Cuts</Link>
            <br />
            <Link>Offals</Link>
            <br />
            <Link>Combos</Link>
            <br />
            <Link>Ready to Cook</Link>
        </Box>
    )
}
