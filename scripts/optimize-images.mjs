import fg from 'fast-glob';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const SRC_DIR = path.resolve('src/assets');
const OUT_DIR = path.resolve('public/optimized');

async function ensureDir(dir){
  await fs.mkdir(dir, { recursive: true });
}

async function processImage(file){
  const rel = path.relative(SRC_DIR, file);
  const base = path.parse(rel).name;
  const outDir = path.join(OUT_DIR, path.dirname(rel));
  await ensureDir(outDir);

  const image = sharp(file);
  const baseOut = path.join(outDir, base);

  // Generate multiple widths
  const widths = [480, 768, 1024, 1440, 1920];

  const variants = await Promise.all(widths.map(async (w) => {
    const webp = `${baseOut}-${w}.webp`;
    const avif = `${baseOut}-${w}.avif`;
    await image.resize({ width: w }).webp({ quality: 78 }).toFile(webp);
    await image.resize({ width: w }).avif({ quality: 50 }).toFile(avif);
    return { w, webp, avif };
  }));

  return { rel, variants };
}

(async function main(){
  const patterns = ['**/*.{jpg,jpeg,png}'];
  const files = await fg(patterns, { cwd: SRC_DIR, absolute: true });
  if (!files.length){
    console.log('No images found');
    return;
  }
  console.log(`Processing ${files.length} images...`);

  const manifest = {};
  for (const file of files){
    try{
      const { rel, variants } = await processImage(file);
      manifest[rel.replace(/\\/g,'/')] = {
        webp: variants.map(v => ({ src: `/optimized/${rel.replace(/\\/g,'/').replace(/\.[^.]+$/, '')}-${v.w}.webp`, w: v.w })),
        avif: variants.map(v => ({ src: `/optimized/${rel.replace(/\\/g,'/').replace(/\.[^.]+$/, '')}-${v.w}.avif`, w: v.w })),
      };
      console.log('Done:', rel);
    } catch(e){
      console.warn('Failed for', file, e.message);
    }
  }
  await ensureDir(OUT_DIR);
  const manifestPath = path.join(OUT_DIR, 'images-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Manifest written:', manifestPath);
})();
