import fs from "fs";
import path from "path";
import chalk from "chalk";

// Banner
function showBanner() {
  console.log(chalk.cyan(`
╔═════════════════════════════════════════════════════╗
║  ${chalk.magenta('█████')}  ${chalk.blue('██╗  ██╗')} ${chalk.cyan('██████')}  ${chalk.green('██████')}  ${chalk.red('█████████')}  ${chalk.yellow('█████')}   ║
║ ${chalk.magenta('██╔══██╗')}${chalk.blue('╚██╗██╔╝')}${chalk.cyan('██╔════╝')}${chalk.green('██╔═══██╗')}${chalk.red('██     ██')} ${chalk.yellow('██╔══██╗')} ║
║ ${chalk.magenta('███████║')} ${chalk.blue('╚███╔╝')} ${chalk.cyan('██║     ')}${chalk.green('██║   ██║')}${chalk.red('█████████')} ${chalk.yellow('███████║')} ║
║ ${chalk.magenta('██╔══██║')} ${chalk.blue('██╔██╗')} ${chalk.cyan('██║     ')}${chalk.green('██║   ██║')}${chalk.red('██ ██ ')}    ${chalk.yellow('██╔══██║')} ║
║ ${chalk.magenta('██║  ██║')}${chalk.blue('██╔╝ ██╗')}${chalk.cyan('╚██████╗')}${chalk.green('╚██████╔╝')}${chalk.red('██ ██████╗')}${chalk.yellow('██║  ██║')} ║
╚═════════════════════════════════════════════════════╝
`));
  console.log(chalk.bold.cyan("   Modern and Super Light Static Site Generator"));
  console.log(chalk.gray("   ════════════════════════════════════════════════"));
}

// Direktori
const nodeModules = path.resolve("node_modules");
const componentsDir = path.resolve("src/components");
const cssComponentsDir = path.resolve("static/css/components");
const jsComponentsDir = path.resolve("static/js/components");

// Tambahan untuk folder dist
const cssDistDir = path.resolve("static/css/dist");
const jsDistDir = path.resolve("static/js/dist");

// Buat folder yang diperlukan
[  "static",
  "static/css",
  "static/js",
  cssComponentsDir,
  jsComponentsDir,
  cssDistDir,
  jsDistDir
].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const copied = [];
const skipped = [];
let totalCopied = 0;

const baseCssSrc = path.join(nodeModules, "axcora-css", "axcora-base.css");
const baseCssDst = path.join("static/css", "axcora-base.css");
if (fs.existsSync(baseCssSrc)) {
  fs.mkdirSync(path.dirname(baseCssDst), { recursive: true });
  fs.copyFileSync(baseCssSrc, baseCssDst);
}

// Helper copy + counter
function copyFileCount(src: string, dst: string) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
    totalCopied++;
  }
}

// Patch khusus flat partial
function patchSpecialFlatPartial() {
  const special = "axcora-seo";
  const srcAxc = path.join(componentsDir, special, `${special}.axc`);
  const dstFlat = path.join(componentsDir, `${special}.axc`);
  if (fs.existsSync(srcAxc)) {
    fs.copyFileSync(srcAxc, dstFlat);
    totalCopied++;
  }
}

showBanner();

fs.readdirSync(nodeModules).forEach(pkg => {
  if (pkg.startsWith("axcora-")) {
    const fname = `${pkg}.axc`;
    const srcPath = path.join(nodeModules, pkg, fname);
    const dstPath = path.join(componentsDir, fname);
    if (fs.existsSync(srcPath)) {
      copyFileCount(srcPath, dstPath);
    }
    // Copy .css
    fs.readdirSync(path.join(nodeModules, pkg))
      .filter(f => f.endsWith(".css"))
      .forEach(css => {
        const src = path.join(nodeModules, pkg, css);
        const dst = path.join(cssComponentsDir, css);
        copyFileCount(src, dst);
      });
    // Copy .js
    fs.readdirSync(path.join(nodeModules, pkg))
      .filter(f => f.endsWith(".js"))
      .forEach(js => {
        const src = path.join(nodeModules, pkg, js);
        const dst = path.join(jsComponentsDir, js);
        copyFileCount(src, dst);
      });
  }
});


fs.readdirSync(nodeModules).forEach(pkg => {
  if (pkg.startsWith("axcora-theme-")) {
    const themeName = pkg.replace("axcora-theme-", "");
    const themeDir = path.join(nodeModules, pkg);
    const themeCss = path.join(themeDir, "theme.css");
    const dstDir = path.join("static/css/themes", themeName);
    const dstCss = path.join(dstDir, "theme.css");
    if (fs.existsSync(themeCss)) {
      fs.mkdirSync(dstDir, { recursive: true });
      fs.copyFileSync(themeCss, dstCss);
      totalCopied++;
//      console.log(chalk.green(`[THEME] Copied: ${themeCss} → ${dstCss}`));
    }
  }
});

patchSpecialFlatPartial();

console.log(chalk.green.bold(`[AXCORA] Copied (${totalCopied}) components themes css js and axc`));
