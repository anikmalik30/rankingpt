import fs from 'fs';
import path from 'path';

const iconsDir = path.join(process.cwd(), 'src/assets/icons/svg');
const outputFilePath = path.join(process.cwd(), 'src/components/icons.js');

const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

const imports = iconFiles.map(file => {
    const iconName = file.replace('.svg', '');
    return `import ${iconName} from '../assets/icons/svg/${file}';`;
}).join('\n');

const exports = `export const icons = {\n${iconFiles.map(file => {
    const iconName = file.replace('.svg', '');
    return `  '${iconName}': ${iconName},`;
}).join('\n')}\n};`;

const content = `${imports}\n\n${exports}\n`;

fs.writeFileSync(outputFilePath, content);

console.log(`Generated ${outputFilePath}`);