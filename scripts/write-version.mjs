import { writeFileSync } from 'fs'
import { join } from 'path'

// YYYYMMDDHHmmss
const version = new Date()
    .toISOString()
    .replace(/[-T:.Z]/g, '')
    .slice(0, 14)

const output = {
    version,
}

writeFileSync(join('public', 'version.json'), JSON.stringify(output, null, 2))
